"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";

interface CTA1Props {
  bgColor?: string;
  title: string;
  subtitle: string;
  buttonCta: string;
  buttonUrl: string;
  secondaryButtonCta?: string;
  secondaryButtonUrl?: string;
  darkMode?: boolean;
}

const CTA1: React.FC<CTA1Props> = ({
  bgColor = "bg-gray-50",
  title,
  subtitle,
  buttonCta,
  buttonUrl,
  secondaryButtonCta,
  secondaryButtonUrl,
  darkMode = false,
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Title Only */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h2>
        </div>

        {/* Subtitle and Buttons */}
        <div className="flex flex-col gap-6">
          <p className="text-lg text-muted-foreground max-w-xl">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {buttonCta && (
              <Button size="lg" asChild>
                <Link href={buttonUrl || "#"}>{buttonCta}</Link>
              </Button>
            )}
            {secondaryButtonCta && (
              <Button size="lg" variant="outline" asChild>
                <Link href={secondaryButtonUrl || "#"}>{secondaryButtonCta}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTA1;