"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";
import { Event } from "./event-card";
import { ArrowRight } from "lucide-react";

interface EventList3Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  events?: Event[];
  darkMode?: boolean;
}

const defaultEvents: Event[] = [
  {
    id: "1",
    title: "Event title heading",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    category: "Category",
    date: "2024-02-09",
    location: "Location",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    slug: "event-title-heading-1",
  },
  {
    id: "2",
    title: "Event title heading",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    category: "Category",
    date: "2024-02-10",
    location: "Location",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
    slug: "event-title-heading-2",
  },
  {
    id: "3",
    title: "Event title heading",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    category: "Category",
    date: "2024-02-11",
    location: "Location",
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    slug: "event-title-heading-3",
  },
];

const EventCard3: React.FC<{ event: Event }> = ({ event }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear();
    
    return `${dayName} ${day} ${month} ${year}`;
  };

  return (
    <Link href={`/events/${event.slug}`}>
      <article className="group cursor-pointer">
        <div className="space-y-6">
          {/* Featured Image */}
          <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
            {event.imageUrl ? (
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-16 h-12 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M18 2H2a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM2 4h16v8H2V4z"/>
                  <path d="M5 8l2.5 2.5L12 6l6 6V4H2v8z"/>
                </svg>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-4">
            {/* Date */}
            <div className="text-sm font-medium text-muted-foreground">
              {formatDate(event.date)}
            </div>

            {/* Category */}
            <div className="text-sm font-medium text-muted-foreground">
              {event.category}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
              {event.title}
            </h3>

            {/* Location */}
            <div className="text-sm font-medium text-foreground">
              {event.location}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {event.description}
            </p>

            {/* View Event Link */}
            <div className="flex items-center text-foreground group-hover:text-primary transition-colors">
              <span className="font-medium">View event</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

const EventList3: React.FC<EventList3Props> = ({
  bgColor = "bg-white",
  tagline = "Tagline",
  title,
  subtitle,
  events = defaultEvents,
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
          className="mb-12 lg:mb-16"
        />

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {events.map((event) => (
            <EventCard3 key={event.id} event={event} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default EventList3;