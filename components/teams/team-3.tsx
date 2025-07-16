"use client";

import React from "react";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";
import TeamCard from "./team-card";

interface TeamMember {
  name: string;
  jobTitle: string;
  description: string;
  imageUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

interface Team3Props {
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
  }
];

const Team3 = ({
  bgColor = "bg-white",
  tagline = "Tagline",
  title = "Our team",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  teamMembers = defaultTeamMembers,
  darkMode = false,
}: Team3Props) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <Heading
        label={tagline}
        title={title}
        subtitle={subtitle}
        textAlign="left"
        className="mb-12 lg:mb-16"
      />

      {/* Team Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            member={member}
            variant="horizontal"
            imageSize="large"
            imageShape="square"
            textAlign="left"
          />
        ))}
      </div>
    </Section>
  );
};

export default Team3;