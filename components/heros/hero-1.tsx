import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonCta: string;
  buttonUrl: string;
  secondaryButtonCta: string;
  secondaryButtonUrl: string;
  bgColor?: string;
  darkMode?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageUrl,
  buttonCta,
  buttonUrl,
  secondaryButtonCta,
  secondaryButtonUrl,
  bgColor,
  darkMode = false
}) => {
  return (
    <section 
      className={cn("relative flex items-center bg-background", darkMode && "dark")}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href={buttonUrl}
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary/90 transition-colors"
              >
                {buttonCta}
              </Link>
              <Link 
                href={secondaryButtonUrl}
                className="inline-block bg-background text-foreground border border-border px-6 py-3 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {secondaryButtonCta}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-muted">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;