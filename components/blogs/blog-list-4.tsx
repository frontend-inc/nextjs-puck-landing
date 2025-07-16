"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";
import { BlogPost } from "./blog-card";

interface BlogList4Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  posts?: BlogPost[];
  viewAllText?: string;
  viewAllUrl?: string;
  darkMode?: boolean;
}

const defaultPosts: BlogPost[] = [
  {
    id: "1",
    title: "Blog title heading will go here",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
    category: "Category",
    author: {
      name: "Full name",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    publishedAt: "2024-01-11",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    slug: "blog-title-heading-will-go-here-1",
  },
  {
    id: "2",
    title: "Blog title heading will go here",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
    category: "Category",
    author: {
      name: "Full name",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    publishedAt: "2024-01-11",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    slug: "blog-title-heading-will-go-here-2",
  },
  {
    id: "3",
    title: "Blog title heading will go here",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
    category: "Category",
    author: {
      name: "Full name",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    publishedAt: "2024-01-11",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    slug: "blog-title-heading-will-go-here-3",
  }
];

const CompactBlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group cursor-pointer flex gap-4 items-start">
        {/* Featured Image */}
        <div className="relative w-32 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
          {post.imageUrl ? (
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-8 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M18 2H2a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM2 4h16v8H2V4z"/>
                <path d="M5 8l2.5 2.5L12 6l6 6V4H2v8z"/>
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-2">
          {/* Category & Read Time */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="font-medium">{post.category}</span>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          {/* Read More Link */}
          <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors pt-1">
            <span>Read more</span>
            <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
};

const BlogList4: React.FC<BlogList4Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  posts = defaultPosts,
  viewAllText = "View all",
  viewAllUrl = "/blog",
  darkMode = false,
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Sidebar - Header & View All Button */}
          <div className="lg:col-span-2 space-y-8">
            <Heading
              label={tagline}
              title={title}
              subtitle={subtitle}
              textAlign="left"
              className="mb-0"
            />
            
            {/* View All Button */}
            <div>
              <Button variant="outline" asChild>
                <Link href={viewAllUrl}>{viewAllText}</Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Blog List */}
          <div className="lg:col-span-3 space-y-8">
            {posts.slice(0, 3).map((post) => (
              <div key={post.id}>
                <CompactBlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BlogList4;