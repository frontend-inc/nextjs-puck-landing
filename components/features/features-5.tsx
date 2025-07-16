"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";

interface Feature {
  icon?: string;
  title: string;
  description: string;
}

interface Features5Props {
  bgColor?: string;
  title: string;
  features?: Feature[];
  darkMode?: boolean;
}

const Features5: React.FC<Features5Props> = ({
  bgColor = "bg-white",
  title,
  features = [],
  darkMode = false,
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <Heading
        title={title}
        textAlign="left"
        titleSize="lg"
        className="mb-16 max-w-md"
      />

      {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              {/* Icon */}
              <div className="w-12 h-12 bg-black rounded flex items-center justify-center">
                {feature.icon ? (
                  <i className={`${feature.icon} text-xl text-white`} />
                ) : (
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg leading-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
    </Section>
  );
};

export default Features5;