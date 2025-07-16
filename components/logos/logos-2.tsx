"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface Logos2Props {
  bgColor?: string;
  darkMode?: boolean;
  tagline?: string;
  title?: string;
  subtitle?: string;
  logos?: Logo[];
  columns?: number;
}

const Logos2: React.FC<Logos2Props> = ({
  bgColor = "bg-white",
  darkMode = false,
  tagline,
  title,
  subtitle,
  logos = [],
  columns = 4,
}) => {
  const getGridColumns = () => {
    switch (columns) {
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-2 md:grid-cols-3";
      case 4:
        return "grid-cols-2 md:grid-cols-4";
      case 5:
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-5";
      case 6:
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-6";
      default:
        return "grid-cols-2 md:grid-cols-4";
    }
  };

  return (
    <section className={cn("w-full py-16 md:py-24", bgColor, darkMode && "dark")}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          {(tagline || title || subtitle) && (
            <div className="text-center mb-12">
              {tagline && (
                <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">
                  {tagline}
                </p>
              )}
              
              {title && (
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                  {title}
                </h2>
              )}
              
              {subtitle && (
                <p className="text-lg text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Logos Grid */}
          <div className={cn(
            "grid gap-8 md:gap-12 place-items-center",
            getGridColumns()
          )}>
            {logos.filter(logo => logo.src && logo.src.trim() !== '').map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 transition-opacity duration-300 hover:opacity-100 opacity-60"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width || 120}
                  height={logo.height || 60}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos2;