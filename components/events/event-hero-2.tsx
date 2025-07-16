"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

interface EventHero2Props {
  backLink?: {
    text: string;
    href: string;
  };
  title: string;
  description: string;
  eventDate: string;
  spotsLeft?: number;
  backgroundImage?: string;
  overlayOpacity?: number;
  emailPlaceholder?: string;
  ctaText?: string;
  termsText?: string;
  termsLink?: string;
}

const EventHero2: React.FC<EventHero2Props> = ({
  backLink = {
    text: "All events",
    href: "/events"
  },
  title,
  description,
  eventDate,
  spotsLeft = 10,
  backgroundImage = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop",
  overlayOpacity = 0.6,
  emailPlaceholder = "Enter your email",
  ctaText = "Save my spot",
  termsText = "By clicking Save my spot you're confirming that you agree with our",
  termsLink = "Terms and Conditions",
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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-700"></div>
        )}
      </div>

      {/* Black Overlay */}
      <div 
        className="absolute inset-0 bg-black z-10"
        style={{ opacity: overlayOpacity }}
      ></div>

      {/* Content */}
      <div className="relative z-20 w-full px-6 py-24">
        <div className="max-w-3xl mx-auto space-y-8 text-white">
          {/* Back Link */}
          <Link 
            href={backLink.href}
            className="inline-flex items-center text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backLink.text}
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg text-white/90 leading-relaxed">
            {description}
          </p>

          {/* Event Date & Spots Left */}
          <div className="flex items-center gap-6 text-white">
            <div className="font-semibold text-lg">
              {formatEventDate(eventDate)}
            </div>
            <div className="text-white/80">
              {spotsLeft} Spots left!
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="border-2 border-white/30 rounded-lg p-1 inline-block backdrop-blur-sm bg-white/10">
            <div className="flex">
              <div className="px-6 py-4 text-center border-r border-white/30">
                <div className="text-3xl font-bold text-white">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-white/80 mt-1">Days</div>
              </div>
              <div className="px-6 py-4 text-center border-r border-white/30">
                <div className="text-3xl font-bold text-white">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-white/80 mt-1">Hours</div>
              </div>
              <div className="px-6 py-4 text-center border-r border-white/30">
                <div className="text-3xl font-bold text-white">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-white/80 mt-1">Min</div>
              </div>
              <div className="px-6 py-4 text-center">
                <div className="text-3xl font-bold text-white">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-white/80 mt-1">Secs</div>
              </div>
            </div>
          </div>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder={emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm"
              />
              <Button 
                type="submit"
                className="bg-white text-black hover:bg-white/90"
              >
                {ctaText}
              </Button>
            </div>
            
            {/* Terms */}
            <p className="text-xs text-white/70">
              {termsText}{" "}
              <Link href="#" className="underline hover:text-white transition-colors">
                {termsLink}
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EventHero2;