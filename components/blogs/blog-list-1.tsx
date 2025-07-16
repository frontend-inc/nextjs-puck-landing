"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/section";
import Heading from "@/components/shared/heading";
import BlogCard, { BlogPost } from "./blog-card";

interface BlogList1Props {
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

const BlogList1: React.FC<BlogList1Props> = ({
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

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BlogList1;