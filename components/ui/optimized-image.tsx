'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
}

/**
 * OptimizedImage Component
 * 
 * A wrapper around Next.js Image component with loading states and error handling.
 * Automatically handles optimization, lazy loading, and responsive images.
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  objectFit = 'contain',
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          'relative overflow-hidden rounded-xl bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border))] flex items-center justify-center',
          className
        )}
        style={!fill ? { width, height } : undefined}
      >
        <div className="text-center p-4">
          <svg
            className="w-8 h-8 text-[hsl(var(--muted-foreground))] mx-auto mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">Image not found</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        isLoading && 'animate-pulse bg-[hsl(var(--muted))]',
        className
      )}
      style={!fill && width && height ? { aspectRatio: `${width}/${height}` } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes || (fill ? '100vw' : undefined)}
        priority={priority}
        className={cn(
          'transition-opacity duration-300 h-full w-full',
          isLoading ? 'opacity-0' : 'opacity-100',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
          objectFit === 'none' && 'object-none'
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
}

/**
 * Image paths mapping for the website
 * Maps semantic names to actual image paths
 */
export const imagePaths = {
  hero: {
    main: '/images/hero.jpg',
  },
  services: {
    wordpress: '/images/wordpress-dev.svg',
    react: '/images/react-dev.svg',
    design: '/images/ui-ux.png',
    maintenance: '/images/maintenance.svg',
    seo: '/images/seo.svg',
    hosting: '/images/hosting.svg',
  },
  about: {
    office: '/images/aboutus.jpg',
  },
  // Portfolio projects - using placeholders for now
  portfolio: {
    project1: null, // Fashion E-Commerce
    project2: null, // Tech Startup
    project3: null, // Restaurant
    project4: null, // Corporate Portal
    project5: null, // Real Estate
    project6: null, // Healthcare
  },
  // Team members - using placeholders for now
  team: {
    member1: null,
    member2: null,
    member3: null,
    member4: null,
  },
} as const;
