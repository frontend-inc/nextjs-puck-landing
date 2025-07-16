"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  yearlyPrice?: string;
  features: Array<{ feature: string }>;
  buttonText: string;
  buttonUrl: string;
  highlighted?: boolean;
}

interface Pricing1Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  plans?: PricingPlan[];
  darkMode?: boolean;
}

const Pricing1: React.FC<Pricing1Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  plans = [],
  darkMode = false,
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="max-w-6xl mx-auto">
        <Heading
          label={tagline}
          title={title}
          subtitle={subtitle}
          textAlign="center"
          className="mb-12"
        />

        {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={cn(
                  "relative rounded-lg border border-border p-8 bg-background",
                  plan.highlighted && "ring-2 ring-primary"
                )}
              >
                {/* Plan Name */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  {plan.yearlyPrice && (
                    <p className="text-sm text-muted-foreground">
                      or {plan.yearlyPrice} yearly
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((featureObj, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-foreground">{featureObj.feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  asChild
                  className={cn(
                    "w-full",
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-background text-foreground border border-border hover:bg-accent hover:text-accent-foreground"
                  )}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <a href={plan.buttonUrl}>{plan.buttonText}</a>
                </Button>
              </div>
            ))}
          </div>
      </div>
    </Section>
  );
};

export default Pricing1;