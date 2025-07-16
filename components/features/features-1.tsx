"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";

interface Feature {
  title: string;
  description: string;
}

interface Features1Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  features?: Feature[];
  buttonCta?: string;
  buttonUrl?: string;
  secondaryButtonCta?: string;
  secondaryButtonUrl?: string;
  darkMode?: boolean;
}

const Features1: React.FC<Features1Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  imageUrl,
  features = [],
  buttonCta,
  buttonUrl,
  secondaryButtonCta,
  secondaryButtonUrl,
  darkMode = false,
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Content */}
        <div className="max-w-xl">
          <Heading
            label={tagline}
            title={title}
            subtitle={subtitle}
            textAlign="left"
            className="mb-8"
          />
            
            {/* Features Grid */}
            {features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {buttonCta && (
                <Button size="lg" asChild>
                  <Link href={buttonUrl || "#"}>{buttonCta}</Link>
                </Button>
              )}
              {secondaryButtonCta && (
                <Button size="lg" variant="ghost" asChild className="justify-start p-0 h-auto">
                  <Link href={secondaryButtonUrl || "#"} className="flex items-center">
                    {secondaryButtonCta}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
              )}
            </div>
          </div>

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
      </div>
    </Section>
  );
};

export default Features1;