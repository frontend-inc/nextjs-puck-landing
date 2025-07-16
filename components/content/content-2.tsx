"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContentItem {
  backgroundImage?: string;
  tagline?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonUrl?: string;
}

interface Content2Props {
  bgColor?: string;
  darkMode?: boolean;
  tagline?: string;
  title: string;
  subtitle?: string;
  items?: ContentItem[];
}

const Content2: React.FC<Content2Props> = ({
  bgColor = "bg-white",
  darkMode = false,
  tagline,
  title,
  subtitle,
  items = [],
}) => {
  return (
    <section className={cn("w-full py-16 md:py-24", bgColor, darkMode && "dark")}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Tagline */}
          {tagline && (
            <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">
              {tagline}
            </p>
          )}
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {title}
          </h2>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-800"
              style={{
                backgroundImage: item.backgroundImage ? `url(${item.backgroundImage})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                {/* Top Content */}
                <div className="space-y-4">
                  {/* Image placeholder when no background image */}
                  {!item.backgroundImage && (
                    <div className="w-12 h-8 bg-gray-600 rounded flex items-center justify-center">
                      <svg className="w-6 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 16">
                        <path d="M18 2H2a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM2 4h16v8H2V4z"/>
                        <path d="M5 8l2.5 2.5L12 6l6 6V4H2v8z"/>
                      </svg>
                    </div>
                  )}
                  
                  {/* Item Tagline */}
                  {item.tagline && (
                    <p className="text-sm font-medium text-white/80 tracking-wide uppercase">
                      {item.tagline}
                    </p>
                  )}
                </div>
                
                {/* Bottom Content */}
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Button */}
                  {item.buttonText && (
                    <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto text-white hover:text-white/80">
                      <Link href={item.buttonUrl || "#"} className="flex items-center text-sm font-medium">
                        {item.buttonText}
                        <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content2;