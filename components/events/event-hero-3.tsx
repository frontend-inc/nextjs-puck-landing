"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Clock } from "lucide-react";

interface EventHero3Props {
  bgColor?: string;
  title: string;
  description: string;
  eventDate: string;
  eventTime?: string;
  location?: string;
  emailPlaceholder?: string;
  ctaText?: string;
  termsText?: string;
  termsLink?: string;
  darkMode?: boolean;
}

const EventHero3: React.FC<EventHero3Props> = ({
  bgColor = "bg-white",
  title,
  description,
  eventDate,
  eventTime = "10:00 AM",
  location = "Online Event",
  emailPlaceholder = "Enter your email",
  ctaText = "Register now",
  termsText = "By registering you agree to our",
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
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };


  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 text-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <span>{formatEventDate(eventDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <span>{eventTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span>{location}</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="inline-block">
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-muted rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-foreground">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-muted-foreground mt-1">Days</div>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-foreground">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-muted-foreground mt-1">Hours</div>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-foreground">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-muted-foreground mt-1">Minutes</div>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-foreground">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-muted-foreground mt-1">Seconds</div>
              </div>
            </div>
          </div>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
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
                size="lg"
              >
                {ctaText}
              </Button>
            </div>
            
            {/* Terms */}
            <p className="text-xs text-muted-foreground">
              {termsText}{" "}
              <a href="#" className="underline hover:text-foreground transition-colors">
                {termsLink}
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default EventHero3;