"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";

interface FaqItem {
  question: string;
  answer: string;
}

interface Faq4Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  faqs?: FaqItem[];
  darkMode?: boolean;
}

const Faq4: React.FC<Faq4Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  faqs = [],
  darkMode = false,
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="max-w-6xl mx-auto">
        <Heading
          label={tagline}
          title={title}
          subtitle={subtitle}
          textAlign="left"
          className="mb-12 max-w-3xl"
        />

        {/* FAQ Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
      </div>
    </Section>
  );
};

export default Faq4;