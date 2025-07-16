"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

interface EventHero1Props {
  bgColor?: string;
  backLink?: {
    text: string;
    href: string;
  };
  title: string;
  description: string;
  eventDate: string;
  spotsLeft?: number;
  featuredImage?: string;
  emailPlaceholder?: string;
  ctaText?: string;
  termsText?: string;
  termsLink?: string;
  darkMode?: boolean;
}

const EventHero1: React.FC<EventHero1Props> = ({
  bgColor = "bg-white",
  backLink = {
    text: "All events",
    href: "/events"
  },
  title,
  description,
  eventDate,
  spotsLeft = 10,
  featuredImage = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
  emailPlaceholder = "Enter your email",
  ctaText = "Save my spot",
  termsText = "By clicking Save my spot you're confirming that you agree with our",
  termsLink = "Terms and Conditions",
  darkMode = false,
}) => {
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDateTime = new Date(eventDate).getTime();
      const now = new Date().getTime();
      const difference = eventDateTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    
    return `${dayName} ${day} ${month}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Back Link */}
            <Link 
              href={backLink.href}
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {backLink.text}
            </Link>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            {/* Event Date & Spots Left */}
            <div className="flex items-center gap-6 text-foreground">
              <div className="font-semibold text-lg">
                {formatEventDate(eventDate)}
              </div>
              <div className="text-muted-foreground">
                {spotsLeft} Spots left!
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="border-2 border-border rounded-lg p-1 inline-block">
              <div className="flex">
                <div className="px-6 py-4 text-center border-r border-border">
                  <div className="text-3xl font-bold text-foreground">
                    {timeLeft.days.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Days</div>
                </div>
                <div className="px-6 py-4 text-center border-r border-border">
                  <div className="text-3xl font-bold text-foreground">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Hours</div>
                </div>
                <div className="px-6 py-4 text-center border-r border-border">
                  <div className="text-3xl font-bold text-foreground">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Min</div>
                </div>
                <div className="px-6 py-4 text-center">
                  <div className="text-3xl font-bold text-foreground">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Secs</div>
                </div>
              </div>
            </div>

            {/* Email Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder={emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button 
                  type="submit"
                  className="bg-foreground text-background hover:bg-foreground/90"
                >
                  {ctaText}
                </Button>
              </div>
              
              {/* Terms */}
              <p className="text-xs text-muted-foreground">
                {termsText}{" "}
                <Link href="#" className="underline hover:text-foreground transition-colors">
                  {termsLink}
                </Link>
                .
              </p>
            </form>
          </div>

          {/* Right Column - Featured Image */}
          <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
            {featuredImage ? (
              <Image
                src={featuredImage}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-24 h-18 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M18 2H2a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM2 4h16v8H2V4z"/>
                  <path d="M5 8l2.5 2.5L12 6l6 6V4H2v8z"/>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EventHero1;