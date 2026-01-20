'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation'; // To get the slug
import { Link } from '@/i18n/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { OptimizedImage, imagePaths } from '@/components/ui/optimized-image';
import { ArrowLeft, Sparkles, ArrowRight } from 'lucide-react'; // Added ArrowRight for CTA

gsap.registerPlugin(ScrollTrigger);

// Placeholder for fetching case study data
// In a real application, this would fetch data from an API or markdown files
function fetchCaseStudyData(slug: string, t: (key: string) => string) {
  // Mock data for demonstration
  const allCaseStudies = [
    {
      id: 'mamta-polyfilms',
      title: t('portfolio.mamtaPolyfilms.title'),
      category: t('portfolio.mamtaPolyfilms.category'),
      description: t('portfolio.mamtaPolyfilms.description'),
      problem: t('portfolio.mamtaPolyfilms.problem'),
      solution: t('portfolio.mamtaPolyfilms.solution'),
      results: t('portfolio.mamtaPolyfilms.results'),
      testimonial: {
        quote: t('portfolio.mamtaPolyfilms.testimonial.quote'),
        author: t('portfolio.mamtaPolyfilms.testimonial.author'),
      },
      image: imagePaths.portfolio.project1,
    },
    {
      id: 'tech-startup',
      title: t('portfolio.techStartup.title'),
      category: t('portfolio.techStartup.category'),
      description: t('portfolio.techStartup.description'),
      problem: t('portfolio.techStartup.problem'),
      solution: t('portfolio.techStartup.solution'),
      results: t('portfolio.techStartup.results'),
      testimonial: {
        quote: t('portfolio.techStartup.testimonial.quote'),
        author: t('portfolio.techStartup.testimonial.author'),
      },
      image: imagePaths.portfolio.project2,
    },
    {
      id: 'restaurant-website',
      title: t('portfolio.restaurantWebsite.title'),
      category: t('portfolio.restaurantWebsite.category'),
      description: t('portfolio.restaurantWebsite.description'),
      problem: t('portfolio.restaurantWebsite.problem'),
      solution: t('portfolio.restaurantWebsite.solution'),
      results: t('portfolio.restaurantWebsite.results'),
      testimonial: {
        quote: t('portfolio.restaurantWebsite.testimonial.quote'),
        author: t('portfolio.restaurantWebsite.testimonial.author'),
      },
      image: imagePaths.portfolio.project3,
    },
    {
      id: 'corporate-portal',
      title: t('portfolio.corporatePortal.title'),
      category: t('portfolio.corporatePortal.category'),
      description: t('portfolio.corporatePortal.description'),
      problem: t('portfolio.corporatePortal.problem'),
      solution: t('portfolio.corporatePortal.solution'),
      results: t('portfolio.corporatePortal.results'),
      testimonial: {
        quote: t('portfolio.corporatePortal.testimonial.quote'),
        author: t('portfolio.corporatePortal.testimonial.author'),
      },
      image: imagePaths.portfolio.project4,
    },
    {
      id: 'real-estate-platform',
      title: t('portfolio.realEstatePlatform.title'),
      category: t('portfolio.realEstatePlatform.category'),
      description: t('portfolio.realEstatePlatform.description'),
      problem: t('portfolio.realEstatePlatform.problem'),
      solution: t('portfolio.realEstatePlatform.solution'),
      results: t('portfolio.realEstatePlatform.results'),
      testimonial: {
        quote: t('portfolio.realEstatePlatform.testimonial.quote'),
        author: t('portfolio.realEstatePlatform.testimonial.author'),
      },
      image: imagePaths.portfolio.project5,
    },
    {
      id: 'healthcare-system',
      title: t('portfolio.healthcareSystem.title'),
      category: t('portfolio.healthcareSystem.category'),
      description: t('portfolio.healthcareSystem.description'),
      problem: t('portfolio.healthcareSystem.problem'),
      solution: t('portfolio.healthcareSystem.solution'),
      results: t('portfolio.healthcareSystem.results'),
      testimonial: {
        quote: t('portfolio.healthcareSystem.testimonial.quote'),
        author: t('portfolio.healthcareSystem.testimonial.author'),
      },
      image: imagePaths.portfolio.project6,
    },
  ];

  return allCaseStudies.find(cs => cs.id === slug);
}

export default function CaseStudyPage() {
  const t = useTranslations();
  const params = useParams();
  const slug = params.slug as string;

  const caseStudy = fetchCaseStudyData(slug, t); // This would typically be async and awaited

  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.case-study-header > *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );

      // Content animation
      gsap.fromTo(
        '.case-study-content > *',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  if (!caseStudy) {
    return (
      <section className="section-padding text-center">
        <h1 className="text-3xl font-bold">{t('404.title')}</h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))] mt-4">{t('404.description')}</p>
        <Button asChild className="mt-8">
          <Link href="/portfolio">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('cta.backToPortfolio')} {/* Changed from backToHome */}
          </Link>
        </Button>
      </section>
    );
  }

  return (
    <>
      {/* Header Section */}
      <section ref={headerRef} className="section-padding hero-pattern">
        <div className="container-custom">
          <div className="case-study-header text-center max-w-4xl mx-auto">
            <Badge variant="gradient" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              {caseStudy.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))]">
              {caseStudy.description}
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Content Section */}
      <section ref={contentRef} className="section-padding">
        <div className="container-custom">
          <div className="case-study-content max-w-4xl mx-auto space-y-12">
            {caseStudy.image ? ( // Conditionally render image if available
              <OptimizedImage
                src={caseStudy.image}
                alt={caseStudy.title}
                width={800}
                height={600}
                className="w-full rounded-xl shadow-xl"
              />
            ) : (
              <div className="flex items-center justify-center w-full aspect-video rounded-xl bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]">
                <span className="text-lg">Image Coming Soon</span>
              </div>
            )}

            <div>
              <h2 className="text-3xl font-bold mb-4">Problem</h2>
              <p className="text-lg text-[hsl(var(--muted-foreground))]">{caseStudy.problem}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Solution</h2>
              <p className="text-lg text-[hsl(var(--muted-foreground))]">{caseStudy.solution}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Results</h2>
              <p className="text-lg text-[hsl(var(--muted-foreground))]">{caseStudy.results}</p>
            </div>

            {caseStudy.testimonial && (
              <Card className="p-6">
                <CardContent>
                  <blockquote className="text-lg italic text-[hsl(var(--foreground))]">
                    “{caseStudy.testimonial.quote}”
                  </blockquote>
                  <p className="text-right text-[hsl(var(--muted-foreground))] mt-4">
                    - {caseStudy.testimonial.author}
                  </p>
                </CardContent>
              </Card>
            )}

            <div className="text-center pt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('cta.backToPortfolio')} {/* Changed from viewAll */}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your requirements and create something amazing together.
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
              <Link href="/portfolio">{t('hero.ctaSecondary')}</Link> {/* Changed from hero.ctaSecondary */}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}