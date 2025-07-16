import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  darkMode?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  paddingY?: "sm" | "md" | "lg" | "xl";
}

const Section = ({
  children,
  className,
  bgColor = "bg-white",
  darkMode = false,
  maxWidth = "xl",
  paddingY = "lg",
}: SectionProps) => {
  const maxWidthClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    "2xl": "max-w-8xl",
    full: "max-w-none",
  };

  const paddingClasses = {
    sm: "py-8 lg:py-12",
    md: "py-12 lg:py-16",
    lg: "py-16 lg:py-24",
    xl: "py-20 lg:py-32",
  };

  return (
    <section className={cn("w-full", bgColor, darkMode && "dark", paddingClasses[paddingY], className)}>
      <div className={cn("mx-auto px-4", maxWidthClasses[maxWidth])}>
        {children}
      </div>
    </section>
  );
};

export default Section;