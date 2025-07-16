"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";
import BlogCard, { BlogPost } from "./blog-card";

interface BlogList2Props {
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
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
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
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
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
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
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
  {
    id: "4",
    title: "Blog title heading will go here",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    category: "Category",
    author: {
      name: "Full name",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    publishedAt: "2024-01-11",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    slug: "blog-title-heading-will-go-here-4",
  }
];

const BlogList2: React.FC<BlogList2Props> = ({
  bgColor = "bg-white",
  tagline,
  title,
  subtitle,
  posts = defaultPosts,
  darkMode = false,
}) => {
  const [featuredPost, ...otherPosts] = posts;

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

        {/* Featured Post + Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Featured Post - Takes up 2 columns */}
          {featuredPost && (
            <div className="lg:col-span-2">
              <BlogCard post={featuredPost} className="h-full" />
            </div>
          )}

          {/* Sidebar Posts - Takes up 1 column */}
          <div className="space-y-8">
            {otherPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="space-y-3">
                  {/* Category */}
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* Author & Meta */}
                  <div className="flex items-center space-x-3">
                    {/* Author Avatar */}
                    <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      {post.author.avatar ? (
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      ) : (
                        <svg
                          className="w-3 h-3 text-muted-foreground"
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

                {/* Divider for all but last item */}
                {post.id !== otherPosts.slice(0, 3)[otherPosts.slice(0, 3).length - 1]?.id && (
                  <div className="border-b border-border mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BlogList2;