"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";

interface CTA2Props {
  bgColor?: string;
  title: string;
  subtitle: string;
  placeholder?: string;
  buttonText?: string;
  hint?: string;
  onSubmit?: (email: string) => void;
  darkMode?: boolean;
}

const CTA2: React.FC<CTA2Props> = ({
  bgColor = "bg-gray-50",
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Title Only */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h2>
        </div>

        {/* Subtitle and Form */}
        <div className="flex flex-col gap-6">
          <p className="text-lg text-muted-foreground max-w-xl">
            {subtitle}
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 px-6"
              />
              <Button type="submit" size="lg">
                {buttonText}
              </Button>
            </div>
            
            {hint && (
              <p className="text-sm text-muted-foreground">
                {hint}
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default CTA2;