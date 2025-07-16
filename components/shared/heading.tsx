import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  textAlign?: "left" | "center";
  titleSize?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

const Heading = ({
  label,
  title,
  subtitle,
  textAlign = "center",
  titleSize = "lg",
  className,
}: HeadingProps) => {
  const titleSizeClasses = {
    sm: "text-2xl lg:text-3xl",
    md: "text-3xl lg:text-4xl",
    lg: "text-4xl lg:text-5xl",
    xl: "text-5xl lg:text-6xl",
    "2xl": "text-6xl lg:text-7xl",
  };

  const alignmentClasses = textAlign === "center" ? "text-center" : "text-left";
  const subtitleMaxWidth = textAlign === "center" ? "max-w-2xl mx-auto" : "max-w-2xl";

  return (
    <div className={cn(alignmentClasses, className)}>
      {label && (
        <p className="text-sm font-medium text-primary mb-4">{label}</p>
      )}
      <h2 className={cn("font-bold text-foreground mb-4", titleSizeClasses[titleSize])}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg text-muted-foreground", subtitleMaxWidth)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;