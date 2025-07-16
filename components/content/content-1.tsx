"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContentItem {
  imageUrl?: string;
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
}

interface Content1Props {
  bgColor?: string;
  darkMode?: boolean;
  title: string;
  items?: ContentItem[];
}

const Content1: React.FC<Content1Props> = ({
  bgColor = "bg-white",
  darkMode = false,
  title,
  items = [],
}) => {
  return (
    <section className={cn("w-full py-16 md:py-24", bgColor, darkMode && "dark")}>
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight max-w-md">
            {title}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="space-y-4">
              {/* Image */}
              <div className="relative aspect-video bg-gray-200 rounded overflow-hidden">
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-8 bg-gray-400 rounded flex items-center justify-center">
                      <svg className="w-6 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 16">
                        <path d="M18 2H2a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM2 4h16v8H2V4z"/>
                        <path d="M5 8l2.5 2.5L12 6l6 6V4H2v8z"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Link */}
                {item.linkText && (
                  <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto">
                    <Link href={item.linkUrl || "#"} className="flex items-center text-sm font-medium">
                      {item.linkText}
                      <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content1;