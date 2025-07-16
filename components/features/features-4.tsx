"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";

interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonUrl?: string;
}

interface Features4Props {
  bgColor?: string;
  imageUrl?: string;
  items?: FeatureItem[];
  darkMode?: boolean;
}

const Features4: React.FC<Features4Props> = ({
  bgColor = "bg-white",
  imageUrl,
  items = [],
  darkMode = false,
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="Feature illustration"
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-16 bg-gray-400 rounded flex items-center justify-center">
                  <svg className="w-8 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 16">
                    <path d="M18 2H2a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM2 4h16v8H2V4z"/>
                    <path d="M5 8l2.5 2.5L12 6l6 6V4H2v8z"/>
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <div key={index} className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-black rounded flex items-center justify-center">
                  {item.icon ? (
                    <i className={`${item.icon} text-xl text-white`} />
                  ) : (
                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                
                {/* Button */}
                {item.buttonText && (
                  <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto">
                    <Link href={item.buttonUrl || "#"} className="flex items-center text-sm">
                      {item.buttonText}
                      <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
      </div>
    </Section>
  );
};

export default Features4;