"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  highlighted?: boolean;
}

interface FeatureCategory {
  categoryName: string;
  features: Array<{
    name: string;
    basic: string | boolean;
    business: string | boolean;
    enterprise: string | boolean;
  }>;
}

interface Pricing2Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  plans?: PricingPlan[];
  featureCategories?: FeatureCategory[];
  darkMode?: boolean;
}

const Pricing2: React.FC<Pricing2Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  plans = [],
  featureCategories = [],
  darkMode = false,
}) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ) : null;
    }
    return <span className="text-center">{value}</span>;
  };

  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Heading
            label={tagline}
            title={title}
            subtitle={subtitle}
            textAlign="center"
            className="mb-8"
          />

          {/* Billing Toggle */}
            <div className="flex justify-center mb-8">
              <div className="flex border border-border rounded-lg p-1 bg-muted">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    billingPeriod === 'monthly'
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    billingPeriod === 'yearly'
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            {/* Pricing Cards */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={cn(
                    "text-center p-6 rounded-lg border border-border bg-background",
                    plan.highlighted && "ring-2 ring-primary"
                  )}
                >
                  <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <Button
                    asChild
                    className={cn(
                      "w-full",
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-background text-foreground border border-border hover:bg-accent"
                    )}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    <a href={plan.buttonUrl}>{plan.buttonText}</a>
                  </Button>
                </div>
              ))}
            </div>

            {/* Feature Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold">Feature Category</th>
                    <th className="text-center p-4 font-semibold">Basic</th>
                    <th className="text-center p-4 font-semibold">Business</th>
                    <th className="text-center p-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureCategories.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      <tr className="border-b border-border bg-muted/50">
                        <td colSpan={4} className="p-4 font-semibold text-foreground">
                          {category.categoryName}
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={featureIndex} className="border-b border-border">
                          <td className="p-4 text-foreground">{feature.name}</td>
                          <td className="p-4 text-center">{renderFeatureValue(feature.basic)}</td>
                          <td className="p-4 text-center">{renderFeatureValue(feature.business)}</td>
                          <td className="p-4 text-center">{renderFeatureValue(feature.enterprise)}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            {/* Pricing Cards */}
            <div className="space-y-6 mb-12">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={cn(
                    "text-center p-6 rounded-lg border border-border bg-background",
                    plan.highlighted && "ring-2 ring-primary"
                  )}
                >
                  <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <Button
                    asChild
                    className={cn(
                      "w-full",
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-background text-foreground border border-border hover:bg-accent"
                    )}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    <a href={plan.buttonUrl}>{plan.buttonText}</a>
                  </Button>
                </div>
              ))}
            </div>

            {/* Mobile Feature Comparison */}
            <div className="space-y-6">
              {featureCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-muted/50 p-4">
                    <h3 className="font-semibold text-foreground">{category.categoryName}</h3>
                  </div>
                  <div className="divide-y divide-border">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="p-4">
                        <div className="font-medium text-foreground mb-3">{feature.name}</div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="text-center">
                            <div className="text-muted-foreground mb-1">Basic</div>
                            <div>{renderFeatureValue(feature.basic)}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-muted-foreground mb-1">Business</div>
                            <div>{renderFeatureValue(feature.business)}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-muted-foreground mb-1">Enterprise</div>
                            <div>{renderFeatureValue(feature.enterprise)}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing2;