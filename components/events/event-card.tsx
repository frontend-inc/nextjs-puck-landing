"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  location: string;
  imageUrl?: string;
  slug: string;
}

interface EventCardProps {
  event: Event;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ event, className }) => {
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
      <article className={cn("group cursor-pointer", className)}>
        <div className="space-y-6">
          {/* Featured Image */}
          <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
            {/* Category Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-white/90 backdrop-blur-sm text-foreground text-sm font-medium px-3 py-1 rounded-full">
                {event.category}
              </span>
            </div>

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

          {/* Event Meta Info */}
          <div className="flex items-start justify-between gap-4">
            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span>{formatDate(event.date)}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>{event.location}</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {/* Title */}
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
              {event.title}
            </h3>

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

export default EventCard;