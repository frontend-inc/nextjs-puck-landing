"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";

interface ContactItem {
  icon: string;
  title: string;
  description: string;
  contactInfo: string;
}

interface Contact2Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  contacts?: ContactItem[];
  darkMode?: boolean;
}

const Contact2: React.FC<Contact2Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  contacts = [],
  darkMode = false,
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="max-w-4xl mx-auto">
        <Heading
          label={tagline}
          title={title}
          subtitle={subtitle}
          textAlign="left"
          className="mb-16 max-w-2xl"
        />

        {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {contacts.map((contact, index) => (
              <div key={index} className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center">
                  <i className={`${contact.icon} text-3xl text-gray-700`} />
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-bold text-xl">
                    {contact.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {contact.description}
                  </p>
                  <p className="text-sm font-medium">
                    {contact.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </Section>
  );
};

export default Contact2;