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

interface Faq1Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  faqs?: FaqItem[];
  darkMode?: boolean;
}

const Faq1: React.FC<Faq1Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  faqs = [],
  darkMode = false,
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="max-w-3xl mx-auto">
        <Heading
          label={tagline}
          title={title}
          subtitle={subtitle}
          textAlign="center"
          className="mb-12"
        />

        {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
      </div>
    </Section>
  );
};

export default Faq1;