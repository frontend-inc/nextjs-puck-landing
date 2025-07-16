"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import { Share, Linkedin, Twitter, Facebook } from "lucide-react";

interface BlogHeading1Props {
  bgColor?: string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  title: string;
  author?: {
    name: string;
    avatar?: string;
  };
  publishedAt?: string;
  readTime?: string;
  featuredImage?: string;
  showSocialShare?: boolean;
  darkMode?: boolean;
}

const BlogHeading1: React.FC<BlogHeading1Props> = ({
  bgColor = "bg-white",
  breadcrumbs = [
    { label: "Blog", href: "/blog" },
    { label: "Category" }
  ],
  title,
  author = {
    name: "Full name",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  },
  publishedAt = "11 Jan 2022",
  readTime = "5 min read",
  featuredImage = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop",
  showSocialShare = true,
  darkMode = false,
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              {breadcrumb.href ? (
                <Link 
                  href={breadcrumb.href}
                  className="hover:text-foreground transition-colors"
                >
                  {breadcrumb.label}
                </Link>
              ) : (
                <span>{breadcrumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className="text-muted-foreground">›</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
          {title}
        </h1>

        {/* Author Info & Social Share */}
        <div className="flex items-center justify-between mb-12">
          {/* Author Info */}
          <div className="flex items-center space-x-4">
            {/* Author Avatar */}
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
              {author.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <svg
                  className="w-6 h-6 text-muted-foreground"
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
            <div>
              <div className="font-semibold text-foreground">{author.name}</div>
              <div className="text-sm text-muted-foreground">
                {publishedAt} • {readTime}
              </div>
            </div>
          </div>

          {/* Social Share Icons */}
          {showSocialShare && (
            <div className="flex items-center space-x-3">
              <button
                className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center transition-colors"
                title="Share"
              >
                <Share className="w-4 h-4 text-muted-foreground" />
              </button>
              <button
                className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </button>
              <button
                className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center transition-colors"
                title="Share on Twitter"
              >
                <Twitter className="w-4 h-4 text-muted-foreground" />
              </button>
              <button
                className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center transition-colors"
                title="Share on Facebook"
              >
                <Facebook className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          )}
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] bg-muted rounded-lg overflow-hidden">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-muted-foreground"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M18 2H2a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM2 4h16v8H2V4z"/>
                <path d="M5 8l2.5 2.5L12 6l6 6V4H2v8z"/>
              </svg>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default BlogHeading1;