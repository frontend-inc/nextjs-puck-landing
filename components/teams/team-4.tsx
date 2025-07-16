"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";
import TeamCard, { TeamMember } from "./team-card";

interface Team4Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  teamMembers?: TeamMember[];
  darkMode?: boolean;
  buttonText?: string;
  buttonUrl?: string;
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
  }
];

const Team4 = ({
  bgColor = "bg-white",
  tagline = "Tagline",
  title = "Our team",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  teamMembers = defaultTeamMembers,
  darkMode = false,
  buttonText = "Open positions",
  buttonUrl = "#",
}: Team4Props) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Sidebar */}
        <div className="lg:col-span-4">
          <Heading
            label={tagline}
            title={title}
            subtitle={subtitle}
            textAlign="left"
            titleSize="md"
            className="mb-0"
          />
        </div>

        {/* Team Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                member={member}
                variant="vertical"
                imageSize="large"
                imageShape="square"
                textAlign="left"
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Team4;