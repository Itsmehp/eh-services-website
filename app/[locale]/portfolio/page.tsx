'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceholderImage, imageDescriptions } from '@/components/ui/placeholder-image';
import { OptimizedImage, imagePaths } from '@/components/ui/optimized-image';
import { cn } from '@/lib/utils';
import { ExternalLink, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const categories = ['all', 'wordpress', 'react', 'ecommerce', 'corporate'] as const;

const projects = [
  {
    id: 1,
    title: 'Fashion E-Commerce Store',
    category: 'ecommerce',
    description: 'Modern online fashion store with advanced filtering and seamless checkout experience.',
    image: imagePaths.portfolio.project1,
    placeholderDesc: imageDescriptions.portfolio.project1,
    technologies: ['WordPress', 'WooCommerce', 'Custom Theme'],
    link: '#',
  },
  {
    id: 2,
    title: 'Tech Startup Landing',
    category: 'react',
    description: 'High-converting landing page for a SaaS startup with interactive demos.',
    image: imagePaths.portfolio.project2,
    placeholderDesc: imageDescriptions.portfolio.project2,
    technologies: ['React', 'Next.js', 'Framer Motion'],
    link: '#',
  },
  {
    id: 3,
    title: 'Restaurant Website',
    category: 'wordpress',
    description: 'Elegant restaurant website with online reservations and menu management.',
    image: imagePaths.portfolio.project3,
    placeholderDesc: imageDescriptions.portfolio.project3,
    technologies: ['WordPress', 'Custom Plugin', 'Booking System'],
    link: '#',
  },
  {
    id: 4,
    title: 'Corporate Portal',
    category: 'corporate',
    description: 'Enterprise-level corporate website with multi-department structure.',
    image: imagePaths.portfolio.project4,
    placeholderDesc: imageDescriptions.portfolio.project4,
    technologies: ['React', 'TypeScript', 'Headless CMS'],
    link: '#',
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    category: 'react',
    description: 'Property listing platform with map integration and advanced search.',
    image: imagePaths.portfolio.project5,
    placeholderDesc: imageDescriptions.portfolio.project5,
    technologies: ['Next.js', 'PostgreSQL', 'Mapbox'],
    link: '#',
  },
  {
    id: 6,
    title: 'Healthcare Clinic',
    category: 'wordpress',
    description: 'Medical clinic website with patient portal and appointment scheduling.',
    image: imagePaths.portfolio.project6,
    placeholderDesc: imageDescriptions.portfolio.project6,
    technologies: ['WordPress', 'Custom Theme', 'Booking Plugin'],
    link: '#',
  },
];

export default function PortfolioPage() {
  const t = useTranslations();
  const headerRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.portfolio-header > *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const filtered = activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);
    
    setFilteredProjects(filtered);

    // Animate filtered projects
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power3.out',
      }
    );
  }, [activeCategory]);

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

      {/* Filter & Portfolio Grid */}
      <section ref={portfolioRef} className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  activeCategory === category
                    ? 'bg-[hsl(var(--primary))] text-white shadow-lg'
                    : 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted-foreground)/0.1)]'
                )}
              >
                {t(`portfolio.categories.${category}`)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                variant="default"
                hover="lift"
                className="project-card overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  {project.image ? (
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <PlaceholderImage
                      width={400}
                      height={300}
                      description={project.placeholderDesc}
                      category="portfolio"
                      className="w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-white text-black hover:bg-white/90"
                    >
                      {t('portfolio.viewProject')}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 capitalize">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))] mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Your Project?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <Button
            variant="default"
            size="xl"
            className="bg-white text-[hsl(var(--primary))] hover:bg-white/90"
            asChild
          >
            <a href="/contact">{t('cta.startProject')}</a>
          </Button>
        </div>
      </section>
    </>
  );
}
