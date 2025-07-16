"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogHeading3Props {
  category?: string;
  title: string;
  author?: {
    name: string;
    avatar?: string;
  };
  publishedAt?: string;
  readTime?: string;
  backgroundImage?: string;
  overlayOpacity?: number;
  darkMode?: boolean;
  bgColor?: string;
}

const BlogHeading3: React.FC<BlogHeading3Props> = ({
  category = "Category",
  title,
  author = {
    name: "Full name",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  },
  publishedAt = "11 Jan 2022",
  readTime = "5 min read",
  backgroundImage = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop",
  overlayOpacity = 0.6,
  darkMode = false,
  bgColor = "bg-gray-900",
}) => {
  return (
    <section className={cn("relative w-full h-screen flex items-center justify-center overflow-hidden", bgColor, darkMode && "dark")}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-500"></div>
        )}
      </div>

      {/* Black Overlay */}
      <div 
        className="absolute inset-0 bg-black z-10"
        style={{ opacity: overlayOpacity }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
        {/* Category */}
        <div className="text-sm md:text-base font-medium text-white/80 mb-6 uppercase tracking-wide">
          {category}
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-12 leading-tight">
          {title}
        </h1>

        {/* Author Info */}
        <div className="flex items-center justify-center space-x-4">
          {/* Author Avatar */}
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
            {author.avatar ? (
              <img
                src={author.avatar}
                alt={author.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <svg
                className="w-8 h-8 text-white/60"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>

          {/* Author Details */}
          <div className="text-left">
            <div className="font-semibold text-white text-lg">{author.name}</div>
            <div className="text-white/80 text-sm">
              {publishedAt} • {readTime}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeading3;