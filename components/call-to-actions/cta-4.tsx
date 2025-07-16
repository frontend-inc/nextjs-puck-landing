"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";

interface CTA4Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle: string;
  placeholder?: string;
  buttonText?: string;
  hint?: string;
  onSubmit?: (email: string) => void;
  darkMode?: boolean;
}

const CTA4: React.FC<CTA4Props> = ({
  bgColor = "bg-gray-50",
  tagline,
  title,
  subtitle,
  placeholder = "Enter your email",
  buttonText = "Sign up",
  hint = "By clicking Sign Up you're confirming that you agree with our Terms and Conditions.",
  onSubmit,
  darkMode = false,
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && onSubmit) {
      onSubmit(email);
    }
  };

  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="max-w-2xl mx-auto text-center">
        <Heading
          label={tagline}
          title={title}
          subtitle={subtitle}
          textAlign="center"
          titleSize="xl"
          className="mb-8"
        />
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
            <Input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-6"
            />
            <Button type="submit" size="lg" className="sm:w-auto">
              {buttonText}
            </Button>
          </div>
          
          {hint && (
            <p className="text-sm text-muted-foreground mt-2">
              {hint}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
};

export default CTA4;