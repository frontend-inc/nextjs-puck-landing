"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar?: string;
  logo?: string;
  ctaText?: string;
  ctaUrl?: string;
}

interface Testimonials4Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  darkMode?: boolean;
}

const Testimonials4: React.FC<Testimonials4Props> = ({
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

        {/* Testimonials Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-background rounded-lg p-6 border border-border h-full flex flex-col">
                    {/* Company Logo */}
                    {testimonial.logo && (
                      <div className="mb-4">
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
                    <blockquote className="text-foreground mb-6 text-base leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center space-x-3 mb-4">
                      {/* Avatar */}
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        {testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <svg
                            className="w-5 h-5 text-muted-foreground"
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
                        <div className="font-semibold text-foreground text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.position}, {testimonial.company}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    {testimonial.ctaText && testimonial.ctaUrl && (
                      <div className="mt-auto">
                        <Button
                          asChild
                          variant="link"
                          className="p-0 h-auto text-primary hover:underline"
                        >
                          <a href={testimonial.ctaUrl} className="flex items-center">
                            {testimonial.ctaText}
                            <svg
                              className="w-4 h-4 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation */}
            <CarouselPrevious className="left-4 md:left-8" />
            <CarouselNext className="right-4 md:right-8" />
          </Carousel>
      </div>
    </Section>
  );
};

export default Testimonials4;