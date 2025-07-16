"use client";

import React from "react";
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
import TeamCard, { TeamMember } from "./team-card";

interface Team5Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  teamMembers?: TeamMember[];
  darkMode?: boolean;
}

const defaultTeamMembers: TeamMember[] = [
  {
    name: "Full name",
    jobTitle: "Job title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    linkedinUrl: "#",
    twitterUrl: "#"
  },
  {
    name: "Full name",
    jobTitle: "Job title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    linkedinUrl: "#",
    twitterUrl: "#"
  },
  {
    name: "Full name",
    jobTitle: "Job title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    linkedinUrl: "#",
    twitterUrl: "#"
  },
  {
    name: "Full name",
    jobTitle: "Job title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedinUrl: "#",
    twitterUrl: "#"
  },
  {
    name: "Full name",
    jobTitle: "Job title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    linkedinUrl: "#",
    twitterUrl: "#"
  }
];

const Team5 = ({
  bgColor = "bg-white",
  tagline = "Tagline",
  title = "Our team",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  teamMembers = defaultTeamMembers,
  darkMode = false,
}: Team5Props) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <Heading
        label={tagline}
        title={title}
        subtitle={subtitle}
        textAlign="left"
        className="mb-12 lg:mb-16"
      />

      {/* Team Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {teamMembers.map((member, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <TeamCard
                  member={member}
                  variant="vertical"
                  imageSize="large"
                  imageShape="square"
                  textAlign="left"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </Section>
  );
};

export default Team5;