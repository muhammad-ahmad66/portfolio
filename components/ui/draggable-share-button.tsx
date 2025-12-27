"use client";

import { useState, useRef, useEffect } from "react";
import { Share2 } from "lucide-react";

interface DraggableShareButtonProps {
  onToggle: () => void;
}

export function DraggableShareButton({ onToggle }: DraggableShareButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Initialize position to bottom-right corner
  useEffect(() => {
    const updatePosition = () => {
      setPosition({
        x: window.innerWidth - 80,
        y: window.innerHeight - 80,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  const snapToCorner = (x: number, y: number) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const threshold = 60;

    // Determine which corner is closest
    const corners = [
      { x: threshold, y: threshold, name: "top-left" },
      { x: viewportWidth - threshold, y: threshold, name: "top-right" },
      { x: threshold, y: viewportHeight - threshold, name: "bottom-left" },
      {
        x: viewportWidth - threshold,
        y: viewportHeight - threshold,
        name: "bottom-right",
      },
    ];

    let closestCorner = corners[0];
    let minDistance = Infinity;

    corners.forEach((corner) => {
      const distance = Math.sqrt(
        Math.pow(x - corner.x, 2) + Math.pow(y - corner.y, 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestCorner = corner;
      }
    });

    return { x: closestCorner.x, y: closestCorner.y };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setHasDragged(false);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setHasDragged(false);
    const touch = e.touches[0];
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      // Check if actually moved
      const moved =
        Math.abs(newX - position.x) > 5 || Math.abs(newY - position.y) > 5;
      if (moved) {
        setHasDragged(true);
      }

      setPosition({ x: newX, y: newY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;

      const touch = e.touches[0];
      const newX = touch.clientX - dragStart.x;
      const newY = touch.clientY - dragStart.y;

      // Check if actually moved
      const moved =
        Math.abs(newX - position.x) > 5 || Math.abs(newY - position.y) > 5;
      if (moved) {
        setHasDragged(true);
      }

      setPosition({ x: newX, y: newY });
    };

    const handleDragEnd = () => {
      if (!isDragging) return;

      setIsDragging(false);

      if (hasDragged) {
        const snapped = snapToCorner(position.x, position.y);
        setPosition(snapped);
      }
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleDragEnd);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleDragEnd);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleDragEnd);
      };
    }
  }, [isDragging, position, dragStart, hasDragged]);

  const handleClick = (e: React.MouseEvent) => {
    // Only trigger toggle if we didn't drag
    if (!hasDragged) {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      className={`fixed z-50 w-14 h-14 rounded-full bg-primary-500 hover:bg-primary-600 shadow-lg hover:shadow-xl flex items-center justify-center transition-all ${
        isDragging
          ? "scale-110 shadow-2xl cursor-grabbing"
          : "scale-100 cursor-grab"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        transition: isDragging
          ? "none"
          : "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      aria-label="Share"
    >
      <Share2 className="w-6 h-6 text-white" />
    </button>
  );
}
