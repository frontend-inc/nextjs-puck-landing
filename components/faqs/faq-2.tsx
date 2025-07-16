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

interface Faq2Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  faqs?: FaqItem[];
  darkMode?: boolean;
}

const Faq2: React.FC<Faq2Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  faqs = [],
  darkMode = false,
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side - Header */}
        <div className="space-y-6">
          <Heading
            label={tagline}
            title={title}
            subtitle={subtitle}
            textAlign="left"
          />
        </div>

        {/* Right Side - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
      </div>
    </Section>
  );
};

export default Faq2;