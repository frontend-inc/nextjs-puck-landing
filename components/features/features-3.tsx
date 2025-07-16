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
  buttonText?: string;
  buttonUrl?: string;
}

interface Features3Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle: string;
  features?: Feature[];
  darkMode?: boolean;
}

const Features3: React.FC<Features3Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  features = [],
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

      {/* Features List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
              {/* Icon */}
              <div className="w-12 h-12 bg-black rounded flex items-center justify-center flex-shrink-0">
                {feature.icon ? (
                  <i className={`${feature.icon} text-xl text-white`} />
                ) : (
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-3">
                <h3 className="font-semibold text-xl">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
                
                {/* Individual Button */}
                {feature.buttonText && (
                  <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto">
                    <Link href={feature.buttonUrl || "#"} className="flex items-center">
                      {feature.buttonText}
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
    </Section>
  );
};

export default Features3;