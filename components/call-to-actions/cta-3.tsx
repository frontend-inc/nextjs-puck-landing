"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";

interface CTA3Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle: string;
  buttonCta: string;
  buttonUrl: string;
  secondaryButtonCta?: string;
  secondaryButtonUrl?: string;
  darkMode?: boolean;
}

const CTA3: React.FC<CTA3Props> = ({
  bgColor = "bg-gray-50",
  tagline,
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
      <div className="max-w-3xl mx-auto text-center">
        <Heading
          label={tagline}
          title={title}
          subtitle={subtitle}
          textAlign="center"
          titleSize="xl"
          className="mb-8"
        />
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </Section>
  );
};

export default CTA3;