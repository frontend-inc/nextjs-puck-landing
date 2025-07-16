"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";

interface Quote1Props {
  bgColor?: string;
  logo?: string;
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar?: string;
  darkMode?: boolean;
}

const Quote1: React.FC<Quote1Props> = ({
  bgColor = "bg-white",
  logo,
  quote,
  name,
  position,
  company,
  avatar,
  darkMode = false,
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="max-w-4xl mx-auto text-center">
          {/* Company Logo */}
          {logo && (
            <div className="mb-12">
              <Image
                src={logo}
                alt="Company Logo"
                width={120}
                height={40}
                className="h-8 w-auto mx-auto object-contain"
              />
            </div>
          )}

          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-12 leading-relaxed">
            "{quote}"
          </blockquote>

          {/* Author Info */}
          <div className="flex flex-col items-center space-y-4">
            {/* Avatar */}
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
              {avatar ? (
                <Image
                  src={avatar}
                  alt={name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <svg
                  className="w-8 h-8 text-muted-foreground"
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
            <div className="text-center">
              <div className="font-semibold text-foreground text-lg">
                {name}
              </div>
              <div className="text-muted-foreground">
                {position}, {company}
              </div>
            </div>
          </div>
      </div>
    </Section>
  );
};

export default Quote1;