"use client";

import React from "react";
import Image from "next/image";
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
  rating?: number;
}

interface Testimonials3Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  darkMode?: boolean;
}

const Testimonials3: React.FC<Testimonials3Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  testimonials = [],
  darkMode = false,
}) => {
  const renderStars = (rating: number = 5) => {
    return (
      <div className="flex items-center justify-center space-x-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={cn(
              "w-5 h-5",
              i < rating ? "text-yellow-400" : "text-gray-300"
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

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
        <div className="max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="text-center px-4">
                      {/* Star Rating */}
                      {renderStars(testimonial.rating)}

                      {/* Quote */}
                      <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center justify-center space-x-4 mb-6">
                        {/* Avatar */}
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                          {testimonial.avatar ? (
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                          ) : (
                            <svg
                              className="w-6 h-6 text-muted-foreground"
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
                          <div className="font-semibold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </div>
                        </div>

                        {/* Company Logo */}
                        {testimonial.logo && (
                          <div className="ml-4">
                            <Image
                              src={testimonial.logo}
                              alt={testimonial.company}
                              width={80}
                              height={30}
                              className="h-6 w-auto object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation */}
              <CarouselPrevious className="left-4 md:left-8" />
              <CarouselNext className="right-4 md:right-8" />
            </Carousel>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials3;