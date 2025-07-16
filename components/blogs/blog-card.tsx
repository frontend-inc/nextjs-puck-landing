"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  imageUrl?: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "horizontal";
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  post,
  variant = "default",
  className,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className={cn("group cursor-pointer", className)}>
        {/* Featured Image */}
        <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-6">
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
                className="w-16 h-12 text-gray-400"
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
        <div className="space-y-4">
          {/* Category */}
          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {post.category}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author & Meta */}
          <div className="flex items-center space-x-3 pt-2">
            {/* Author Avatar */}
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={32}
                  height={32}
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
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">{post.author.name}</span>
              <span className="mx-2">•</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;