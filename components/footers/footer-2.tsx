"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface MenuItem {
  label: string;
  href: string;
}

interface Footer2Props {
  imageUrl?: string;
  footerLinks?: MenuItem[];
  privacyPolicyUrl?: string;
  darkMode?: boolean;
  bgColor?: string;
  copyrightText?: string;
  legalLinks?: MenuItem[];
  onSubmit?: (email: string) => void;
}

const defaultFooterLinks: MenuItem[] = [
  { label: "Link One", href: "#" },
  { label: "Link Two", href: "#" },
  { label: "Link Three", href: "#" },
  { label: "Link Four", href: "#" },
  { label: "Link Five", href: "#" },
];

const defaultLegalLinks: MenuItem[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];

const Footer2 = ({
  imageUrl = "/logo.png",
  footerLinks = defaultFooterLinks,
  privacyPolicyUrl = "#",
  darkMode = false,
  bgColor = "bg-background",
  copyrightText = "© 2025 Frontend AI, Inc. All rights reserved.",
  legalLinks = defaultLegalLinks,
  onSubmit,
}: Footer2Props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    }
    setEmail("");
  };

  return (
    <section className={cn("w-full border-t", bgColor, darkMode && "dark")}>
      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          {/* Left Side - Logo and Navigation */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Logo */}
            <div className="flex items-center">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              ) : (
                <span className="text-2xl font-bold">Logo</span>
              )}
            </div>

            {/* Footer Links */}
            <nav className="flex flex-wrap gap-6 lg:gap-8">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side - Newsletter */}
          <div className="lg:min-w-[400px]">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Subscribe</h3>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" variant="outline">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing you agree to with our{" "}
                <Link href={privacyPolicyUrl} className="underline hover:text-foreground">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal Links and Copyright */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 lg:gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-foreground hover:text-muted-foreground transition-colors underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-foreground">{copyrightText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer2;