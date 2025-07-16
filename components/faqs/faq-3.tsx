"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";

interface FaqItem {
  question: string;
  answer: string;
}

interface Faq3Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  faqs?: FaqItem[];
  darkMode?: boolean;
}

const Faq3: React.FC<Faq3Props> = ({
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
          textAlign="center"
          className="mb-12"
        />

        {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
      </div>
    </Section>
  );
};

export default Faq3;