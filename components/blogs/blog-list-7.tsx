"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";
import { BlogPost } from "./blog-card";

interface BlogList7Props {
  bgColor?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  posts?: BlogPost[];
  darkMode?: boolean;
}

const defaultPosts: BlogPost[] = [
  {
    id: "1",
    title: "Blog title heading will go here",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
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
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
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
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    category: "Category",
    author: {
      name: "Full name",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    publishedAt: "2024-01-11",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    slug: "blog-title-heading-will-go-here-3",
  },
];

const CompactVerticalBlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group cursor-pointer">
        <div className="space-y-4">
          {/* Featured Image */}
          <div className="relative aspect-[16/10] bg-gray-200 rounded-lg overflow-hidden">
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
                  className="w-12 h-9 text-gray-400"
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
          <div className="space-y-3">
            {/* Category */}
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {post.category}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author & Meta */}
            <div className="flex items-center space-x-2">
              {/* Author Avatar */}
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground"
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

              {/* Author Name & Meta */}
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">{post.author.name}</span>
                <span className="mx-1">•</span>
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}</span>
                <span className="mx-1">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

const BlogList7: React.FC<BlogList7Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  posts = defaultPosts,
  darkMode = false,
}) => {
  return (
    <Section bgColor={bgColor} darkMode={darkMode}>
      <div className="max-w-6xl mx-auto">
        <Heading
          label={tagline}
          title={title}
          subtitle={subtitle}
          textAlign="center"
          className="mb-12 lg:mb-16"
        />

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <CompactVerticalBlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BlogList7;