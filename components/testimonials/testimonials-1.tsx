"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar?: string;
  logo?: string;
}

interface Testimonials1Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  darkMode?: boolean;
}

const Testimonials1: React.FC<Testimonials1Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  testimonials = [],
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-lg p-6 border border-border">
              {/* Company Logo */}
              {testimonial.logo && (
                <div className="mb-6">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.company}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              )}

              {/* Quote */}
              <blockquote className="text-foreground mb-6 text-base leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  {testimonial.avatar ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <svg
                      className="w-6 h-6 text-muted-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>

                {/* Name and Position */}
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials1;