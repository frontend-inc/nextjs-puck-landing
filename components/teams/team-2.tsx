"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiLinkedinFill, RiTwitterXFill } from "@remixicon/react";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";

interface TeamMember {
  name: string;
  jobTitle: string;
  description: string;
  imageUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

interface Team2Props {
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

const Team2 = ({
  bgColor = "bg-white",
  tagline = "Tagline",
  title = "Our team",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  teamMembers = defaultTeamMembers,
  darkMode = false,
}: Team2Props) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <Heading
        label={tagline}
        title={title}
        subtitle={subtitle}
        textAlign="center"
        className="mb-12 lg:mb-16"
      />

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* Profile Image */}
              <div className="mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted mx-auto">
                  {member.imageUrl ? (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <svg
                        className="w-12 h-12 text-muted-foreground"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Member Info */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {member.jobTitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Social Links */}
              {(member.linkedinUrl || member.twitterUrl) && (
                <div className="flex justify-center gap-4">
                  {member.linkedinUrl && (
                    <Link
                      href={member.linkedinUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <RiLinkedinFill className="w-5 h-5" />
                    </Link>
                  )}
                  {member.twitterUrl && (
                    <Link
                      href={member.twitterUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <RiTwitterXFill className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
    </Section>
  );
};

export default Team2;