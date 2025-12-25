'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseGsapAnimationOptions {
  animation: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'stagger';
  trigger?: boolean;
  delay?: number;
  duration?: number;
  staggerAmount?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export function useGsapAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapAnimationOptions
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const {
      animation,
      trigger = true,
      delay = 0,
      duration = 0.8,
      staggerAmount = 0.1,
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
    } = options;

    let tl: gsap.core.Timeline;
    let ctx: gsap.Context;

    ctx = gsap.context(() => {
      const getAnimation = () => {
        switch (animation) {
          case 'fadeIn':
            return {
              from: { opacity: 0 },
              to: { opacity: 1 },
            };
          case 'slideUp':
            return {
              from: { opacity: 0, y: 50 },
              to: { opacity: 1, y: 0 },
            };
          case 'slideLeft':
            return {
              from: { opacity: 0, x: 50 },
              to: { opacity: 1, x: 0 },
            };
          case 'slideRight':
            return {
              from: { opacity: 0, x: -50 },
              to: { opacity: 1, x: 0 },
            };
          case 'scaleIn':
            return {
              from: { opacity: 0, scale: 0.9 },
              to: { opacity: 1, scale: 1 },
            };
          case 'stagger':
            return {
              from: { opacity: 0, y: 30 },
              to: { opacity: 1, y: 0, stagger: staggerAmount },
            };
          default:
            return {
              from: { opacity: 0 },
              to: { opacity: 1 },
            };
        }
      };

      const { from, to } = getAnimation();

      if (trigger) {
        gsap.set(element, from);
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub,
            toggleActions: 'play none none reverse',
          },
        });
        tl.to(element, { ...to, duration, delay, ease: 'power3.out' });
      } else {
        gsap.set(element, from);
        tl = gsap.timeline();
        tl.to(element, { ...to, duration, delay, ease: 'power3.out' });
      }
    }, ref);

    return () => ctx.revert();
  }, [options]);

  return ref;
}

// Hook for staggered children animations
export function useGsapStagger<T extends HTMLElement = HTMLDivElement>(
  selector: string,
  options?: Partial<UseGsapAnimationOptions>
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const {
      delay = 0,
      duration = 0.6,
      staggerAmount = 0.1,
      start = 'top 80%',
    } = options || {};

    const ctx = gsap.context(() => {
      const children = gsap.utils.toArray(selector);
      
      gsap.set(children, { opacity: 0, y: 30 });
      
      gsap.to(children, {
        opacity: 1,
        y: 0,
        duration,
        stagger: staggerAmount,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: 'play none none reverse',
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [selector, options]);

  return ref;
}

// Hook for parallax effect
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed: number = 0.5) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: -100 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [speed]);

  return ref;
}

// Hook for magnetic button effect
export function useMagneticButton<T extends HTMLElement = HTMLButtonElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
}
