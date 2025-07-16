"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";

interface Feature {
  icon?: string;
  title: string;
  description: string;
}

interface Features2Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle: string;
  features?: Feature[];
  buttonCta?: string;
  buttonUrl?: string;
  secondaryButtonCta?: string;
  secondaryButtonUrl?: string;
  darkMode?: boolean;
}

const Features2: React.FC<Features2Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  features = [],
  buttonCta,
  buttonUrl,
  secondaryButtonCta,
  secondaryButtonUrl,
  darkMode = false,
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <Heading
          label={tagline}
          title={title}
          subtitle={subtitle}
          textAlign="center"
        />
      </div>

      {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Icon */}
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                {feature.icon ? (
                  <i className={`${feature.icon} text-2xl text-gray-700`} />
                ) : (
                  <div className="w-8 h-8 bg-gray-400 rounded"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-semibold text-xl">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        {(buttonCta || secondaryButtonCta) && (
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
        )}
    </Section>
  );
};

export default Features2;