"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";
import EventCard, { Event } from "./event-card";

interface EventList1Props {
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

const EventList1: React.FC<EventList1Props> = ({
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
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default EventList1;