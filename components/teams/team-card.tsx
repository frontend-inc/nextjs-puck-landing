import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiLinkedinFill, RiTwitterXFill } from "@remixicon/react";
import { cn } from "@/lib/utils";

export interface TeamMember {
  name: string;
  jobTitle: string;
  description: string;
  imageUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

interface TeamCardProps {
  member: TeamMember;
  variant?: "vertical" | "horizontal";
  imageSize?: "small" | "large";
  imageShape?: "circle" | "square";
  textAlign?: "left" | "center";
}

const TeamCard = ({ 
  member, 
  variant = "vertical", 
  imageSize = "small",
  imageShape = "circle",
  textAlign = "center"
}: TeamCardProps) => {
  const sizeClasses = {
    small: imageShape === "circle" ? "w-32 h-32" : "w-32 h-32",
    large: imageShape === "circle" ? "w-48 h-48" : "w-48 h-48"
  };

  const shapeClasses = imageShape === "circle" ? "rounded-full" : "rounded-lg";

  if (variant === "horizontal") {
    return (
      <div className="flex gap-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className={cn(
          "relative overflow-hidden bg-muted",
          sizeClasses[imageSize],
          shapeClasses
        )}>
            {member.imageUrl ? (
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover"
                sizes={imageSize === "large" ? "192px" : "128px"}
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
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-foreground mb-1">
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
            <div className="flex gap-4">
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
      </div>
    );
  }

  // Vertical layout
  return (
    <div className={cn(textAlign === "center" ? "text-center" : "text-left")}>
      {/* Profile Image */}
      <div className="mb-6">
        <div className={cn(
          "relative overflow-hidden bg-muted",
          sizeClasses[imageSize],
          shapeClasses,
          textAlign === "center" && "mx-auto"
        )}>
          {member.imageUrl ? (
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              className="object-cover"
              sizes={imageSize === "large" ? "192px" : "128px"}
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
        <div className={cn(
          "flex gap-4",
          textAlign === "center" && "justify-center"
        )}>
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
  );
};

export default TeamCard;