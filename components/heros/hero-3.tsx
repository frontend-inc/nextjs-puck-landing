"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RiPlayCircleFill } from "@remixicon/react";

interface Hero3Props {
  title: string;
  subtitle: string;
  videoUrl: string;
  buttonCta: string;
  buttonUrl: string;
  secondaryButtonCta: string;
  secondaryButtonUrl: string;
  bgColor?: string;
  darkMode?: boolean;
}

const Hero3: React.FC<Hero3Props> = ({
  title,
  subtitle,
  videoUrl,
  buttonCta,
  buttonUrl,
  secondaryButtonCta,
  secondaryButtonUrl,
  bgColor = "bg-gray-50",
  darkMode = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className={`w-full py-16 md:py-24 ${bgColor} ${darkMode ? "dark" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {buttonCta && (
                <Button size="lg" asChild>
                  <Link href={buttonUrl || "#"}>{buttonCta}</Link>
                </Button>
              )}
              {secondaryButtonCta && (
                <Button size="lg" variant="outline" asChild>
                  <Link href={secondaryButtonUrl || "#"}>{secondaryButtonCta}</Link>
                </Button>
              )}
            </div>
          </div>

          {/* Video Content */}
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
            {videoUrl && (
              <>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={videoUrl}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />
                {!isPlaying && (
                  <button
                    onClick={handlePlayPause}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40"
                    aria-label="Play video"
                  >
                    <RiPlayCircleFill className="w-20 h-20 text-white opacity-90 hover:opacity-100 transition-opacity" />
                  </button>
                )}
              </>
            )}
            {!videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <RiPlayCircleFill className="w-20 h-20 text-white/50" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;