import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Generates a PDF from an HTML element
 * @param elementId - The ID of the HTML element to convert to PDF
 * @param options - Optional configuration for PDF generation
 * @returns Promise<jsPDF> - The generated PDF document
 */
export async function generatePDF(
  elementId: string,
  options?: {
    format?: [number, number];
    orientation?: 'portrait' | 'landscape';
    quality?: number;
    scale?: number;
  }
): Promise<jsPDF> {
  const element = document.getElementById(elementId);

  if (!element) {
    throw new Error(`Element with ID "${elementId}" not found`);
  }

  const {
    format = [210, 297], // A4 size in mm
    orientation = 'portrait',
    quality = 1,
    scale = 2,
  } = options || {};

  // Capture the element as canvas
  const canvas = await html2canvas(element, {
    scale,
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff',
    onclone: (clonedDoc) => {
      // Ensure all images are loaded in the cloned document
      const clonedElement = clonedDoc.getElementById(elementId);
      if (clonedElement) {
        const images = clonedElement.getElementsByTagName('img');
        Array.from(images).forEach((img) => {
          img.style.display = 'block';
        });
      }
    },
  });

  const imgData = canvas.toDataURL('image/png', quality);
  const imgWidth = format[0];
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  // Create PDF
  const pdf = new jsPDF({
    orientation,
    unit: 'mm',
    format: format as [number, number],
  });

  let heightLeft = imgHeight;
  let position = 0;

  // Add first page
  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= format[1];

  // Add additional pages if content is longer than one page
  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= format[1];
  }

  return pdf;
}

/**
 * Downloads a PDF document
 * @param pdf - The jsPDF document to download
 * @param filename - The filename for the downloaded PDF (without .pdf extension)
 */
export function downloadPDF(pdf: jsPDF, filename: string = 'document'): void {
  const fullFilename = filename.endsWith('.pdf') ? filename : `${filename}.pdf`;
  pdf.save(fullFilename);
}

/**
 * Generates and downloads a PDF from an HTML element in one step
 * @param elementId - The ID of the HTML element to convert to PDF
 * @param filename - The name of the PDF file (without .pdf extension)
 * @param options - Optional configuration for PDF generation
 */
export async function generateAndDownloadPDF(
  elementId: string,
  filename: string = 'document',
  options?: {
    format?: [number, number];
    orientation?: 'portrait' | 'landscape';
    quality?: number;
    scale?: number;
  }
): Promise<void> {
  try {
    const pdf = await generatePDF(elementId, options);
    downloadPDF(pdf, filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}
