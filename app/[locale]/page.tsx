'use client';

import { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { OptimizedImage, imagePaths } from '@/components/ui/optimized-image';
import {
  ArrowRight,
  Code2,
  Palette,
  Rocket,
  Shield,
  Zap,
  Users,
  Star,
  CheckCircle2,
  Globe,
  Layers,
  Sparkles,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const t = useTranslations();
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      const heroTl = gsap.timeline();
      heroTl
        .fromTo(
          '.hero-badge',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
        )
        .fromTo(
          '.hero-title',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-description',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-buttons',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-image',
          { opacity: 0, scale: 0.95, x: 50 },
          { opacity: 1, scale: 1, x: 0, duration: 1, ease: 'power3.out' },
          '-=0.8'
        );

      // Stats animation
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Services animation
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // CTA animation
      gsap.fromTo(
        '.cta-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Floating animation for decorative elements
      gsap.to('.float-element', {
        y: -20,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Globe,
      title: t('services.wordpress.title'),
      description: t('services.wordpress.description'),
      color: 'from-blue-500 to-purple-600',
    },
    {
      icon: Code2,
      title: t('services.react.title'),
      description: t('services.react.description'),
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Palette,
      title: t('services.design.title'),
      description: t('services.design.description'),
      color: 'from-pink-500 to-purple-600',
    },
    {
      icon: Shield,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.description'),
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Rocket,
      title: t('services.seo.title'),
      description: t('services.seo.description'),
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Layers,
      title: t('services.hosting.title'),
      description: t('services.hosting.description'),
      color: 'from-violet-500 to-purple-600',
    },
  ];

  const stats = [
    { value: '150+', label: t('hero.stats.projects'), icon: CheckCircle2 },
    { value: '98%', label: t('hero.stats.clients'), icon: Users },
    { value: '8+', label: t('hero.stats.experience'), icon: Star },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center hero-pattern overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="float-element absolute top-20 left-10 w-20 h-20 rounded-full bg-[hsl(var(--primary)/0.1)] blur-xl" />
          <div className="float-element absolute top-40 right-20 w-32 h-32 rounded-full bg-[hsl(var(--accent)/0.1)] blur-xl" />
          <div className="float-element absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-[hsl(var(--primary)/0.15)] blur-xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <Badge variant="gradient" className="hero-badge mb-6">
                <Sparkles className="w-3 h-3 mr-1" />
                {t('hero.badge')}
              </Badge>

              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t('hero.title')}{' '}
                <span className="gradient-text">{t('hero.titleHighlight')}</span>{' '}
                {t('hero.titleEnd')}
              </h1>

              <p className="hero-description text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-8 max-w-xl mx-auto lg:mx-0">
                {t('hero.description')}
              </p>

              <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="gradient" size="xl" asChild>
                  <Link href="/contact">
                    {t('hero.cta')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href="/portfolio">{t('hero.ctaSecondary')}</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image relative">
              <div className="relative z-10">
                <OptimizedImage
                  src={imagePaths.hero.main}
                  alt="EH Services - Modern Web Development"
                  width={600}
                  height={500}
                  priority
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
              {/* Decorative gradient behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(var(--primary)/0.2)] to-[hsl(var(--accent)/0.2)] rounded-3xl blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-[hsl(var(--muted)/0.5)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item flex flex-col items-center text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--primary)/0.1)] flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-[hsl(var(--primary))]" />
                </div>
                <span className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </span>
                <span className="text-[hsl(var(--muted-foreground))] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-3 h-3 mr-1" />
              {t('navigation.services')}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                variant="default"
                hover="lift"
                className="service-card group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                {t('cta.viewAll')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="section-padding bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="cta-content text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('pricing.custom.title')}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              {t('pricing.custom.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="xl"
                className="bg-white text-[hsl(var(--primary))] hover:bg-white/90"
                asChild
              >
                <Link href="/contact">
                  {t('pricing.custom.cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/pricing">{t('navigation.pricing')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
