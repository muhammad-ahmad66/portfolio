// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Footer } from "@/components/layout/footer";
import { ContactWindowProvider } from "./contexts/contact-window-context";
import { ContactWindowButton } from "@/components/contact/contact-window-button";
import { ClientLayout } from "@/components/layout/client-layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "M. Ahmad - Full Stack Developer",
  description:
    "Building modern web applications with cutting-edge technologies",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      // { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ContactWindowProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ClientLayout>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
              {/* <ScrollToTop /> */}
              <ContactWindowButton />
            </ClientLayout>
          </ThemeProvider>
        </ContactWindowProvider>
      </body>
    </html>
  );
}
