'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { OptimizedImage, imagePaths } from '@/components/ui/optimized-image';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const t = useTranslations();
  const headerRef = useRef<HTMLDivElement>(null);
  const portfolioGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.portfolio-header > *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );

      // Portfolio cards animation
      gsap.fromTo(
        '.portfolio-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: portfolioGridRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const portfolioItems = [
    {
      id: 'mamta-polyfilms',
      title: 'Mamta Polyfilms',
      category: 'E-commerce',
      image: imagePaths.portfolio.project1,
      link: '/portfolio/mamta-polyfilms', // Link to a dedicated case study page (to be created later)
      description: 'Developed a robust e-commerce platform for a leading packaging solutions provider, enhancing their online presence and streamlining sales processes.',
    },
    {
      id: 'tech-startup',
      title: 'Innovative Tech Startup App',
      category: 'Web Application',
      image: imagePaths.portfolio.project2, // Placeholder image
      link: '/portfolio/tech-startup',
      description: 'Designed and built a scalable web application for a nascent tech startup, focusing on intuitive UX/UI and efficient data management.',
    },
    {
      id: 'restaurant-website',
      title: 'Gourmet Restaurant Showcase',
      category: 'Restaurant & Hospitality',
      image: imagePaths.portfolio.project3, // Placeholder image
      link: '/portfolio/restaurant-website',
      description: 'Created an elegant and responsive website for a high-end restaurant, featuring online reservations, menu display, and gallery.',
    },
    {
      id: 'corporate-portal',
      title: 'Enterprise Corporate Portal',
      category: 'Corporate Solutions',
      image: imagePaths.portfolio.project4, // Placeholder image
      link: '/portfolio/corporate-portal',
      description: 'Developed a secure and comprehensive corporate portal for internal communications and resource management for a large enterprise.',
    },
    {
      id: 'real-estate-platform',
      title: 'Modern Real Estate Platform',
      category: 'Real Estate',
      image: imagePaths.portfolio.project5, // Placeholder image
      link: '/portfolio/real-estate-platform',
      description: 'Built an engaging and feature-rich real estate platform, connecting buyers and sellers with advanced search and listing functionalities.',
    },
    {
      id: 'healthcare-system',
      title: 'Healthcare Management System',
      category: 'Healthcare',
      image: imagePaths.portfolio.project6, // Placeholder image
      link: '/portfolio/healthcare-system',
      description: 'Designed a secure and user-friendly healthcare management system to streamline patient records and appointment scheduling for clinics.',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section ref={headerRef} className="section-padding hero-pattern">
        <div className="container-custom">
          <div className="portfolio-header text-center max-w-3xl mx-auto">
            <Badge variant="gradient" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              {t('navigation.portfolio')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('portfolio.title')}
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))]">
              {t('portfolio.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Categories/Filters could go here */}
          
          <div ref={portfolioGridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Link key={item.id} href={item.link} className="block group">
                <Card className="portfolio-card overflow-hidden">
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                    {item.image ? (
                      <OptimizedImage
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]">
                        <span className="text-sm">Image Coming Soon</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                    <CardTitle className="text-xl font-semibold mb-2 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-[hsl(var(--muted-foreground))] line-clamp-2">
                      {item.description}
                    </CardDescription>
                    <Button variant="link" className="px-0 mt-4">
                      {t('portfolio.viewProject')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s turn your ideas into stunning digital realities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="xl"
              className="bg-white text-[hsl(var(--primary))] hover:bg-white/90"
              asChild
            >
              <Link href="/contact">
                {t('cta.startProject')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">{t('contact.title')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}