"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Hero2Props {
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonCta: string;
  buttonUrl: string;
  secondaryButtonCta: string;
  secondaryButtonUrl: string;
  bgColor?: string;
  darkMode?: boolean;
}

const Hero2: React.FC<Hero2Props> = ({
  title,
  subtitle,
  imageUrl,
  buttonCta,
  buttonUrl,
  secondaryButtonCta,
  secondaryButtonUrl,
  bgColor = "bg-gray-900",
  darkMode = false,
}) => {
  return (
    <section className="relative h-full py-24 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Black overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Optional color overlay */}
        {bgColor && bgColor !== "bg-black" && (
          <div className={`absolute inset-0 ${bgColor} opacity-30`}></div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttonCta && (
            <Button size="lg" variant="default" asChild className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href={buttonUrl || "#"}>{buttonCta}</Link>
            </Button>
          )}
          {secondaryButtonCta && (
            <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-gray-900">
              <Link href={secondaryButtonUrl || "#"}>{secondaryButtonCta}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero2;