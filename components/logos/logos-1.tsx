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

interface Logos1Props {
  bgColor?: string;
  darkMode?: boolean;
  tagline?: string;
  title?: string;
  subtitle?: string;
  logos?: Logo[];
  speed?: "slow" | "normal" | "fast";
}

const Logos1: React.FC<Logos1Props> = ({
  bgColor = "bg-white",
  darkMode = false,
  tagline,
  title,
  subtitle,
  logos = [],
  speed = "normal",
}) => {
  const getAnimationDuration = () => {
    switch (speed) {
      case "slow":
        return "30s";
      case "fast":
        return "15s";
      default:
        return "20s";
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

          {/* Logos Marquee */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            {/* Marquee container */}
            <div className="flex overflow-hidden">
              <div 
                className="flex animate-marquee whitespace-nowrap"
                style={{
                  animationDuration: getAnimationDuration(),
                }}
              >
                {/* First set of logos */}
                {logos.filter(logo => logo.src && logo.src.trim() !== '').map((logo, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex items-center justify-center mx-8 md:mx-12 flex-shrink-0"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width || 120}
                      height={logo.height || 60}
                      className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {logos.filter(logo => logo.src && logo.src.trim() !== '').map((logo, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex items-center justify-center mx-8 md:mx-12 flex-shrink-0"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width || 120}
                      height={logo.height || 60}
                      className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Logos1;