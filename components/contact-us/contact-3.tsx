"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";

interface ContactInfo {
  icon: string;
  value: string;
}

interface Contact3Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  contactInfo?: ContactInfo[];
  nameLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  checkboxLabel?: string;
  buttonText?: string;
  darkMode?: boolean;
  onSubmit?: (data: {
    name: string;
    email: string;
    message: string;
    acceptTerms: boolean;
  }) => void;
}

const Contact3: React.FC<Contact3Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  contactInfo = [],
  nameLabel = "Name",
  emailLabel = "Email",
  messageLabel = "Message",
  messagePlaceholder = "Type your message...",
  checkboxLabel = "I accept the Terms",
  buttonText = "Submit",
  darkMode = false,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Side - Contact Information */}
        <div className="space-y-8">
          <Heading
            label={tagline}
            title={title}
            subtitle={subtitle}
            textAlign="left"
          />

          {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <i className={`${info.icon} text-xl text-gray-700`} />
                  <span className="text-gray-700">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  {nameLabel}
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  {emailLabel}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  {messageLabel}
                </Label>
                <Textarea
                  id="message"
                  placeholder={messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  className="w-full min-h-[150px] resize-none"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground">
                  {checkboxLabel}
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                disabled={!formData.acceptTerms}
              >
                {buttonText}
              </Button>
            </form>
          </div>
      </div>
    </Section>
  );
};

export default Contact3;