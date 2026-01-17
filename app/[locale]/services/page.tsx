'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { OptimizedImage, imagePaths } from '@/components/ui/optimized-image';
import {
  Globe,
  Code2,
  Palette,
  Shield,
  Rocket,
  Layers,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const t = useTranslations();
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.services-header > *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );

      // Service cards animation
      gsap.fromTo(
        '.service-detail-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
          },
        }
      );

      // Process steps animation
      gsap.fromTo(
        '.process-step',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const serviceIds = ['wordpress', 'react', 'design', 'maintenance', 'seo', 'hosting'];
  const services = [
    { id: 'wordpress', icon: Globe, color: 'from-blue-500 to-purple-600', image: imagePaths.services.wordpress },
    { id: 'react', icon: Code2, color: 'from-cyan-500 to-blue-600', image: imagePaths.services.react },
    { id: 'design', icon: Palette, color: 'from-pink-500 to-purple-600', image: imagePaths.services.design },
    { id: 'maintenance', icon: Shield, color: 'from-green-500 to-emerald-600', image: imagePaths.services.maintenance },
    { id: 'seo', icon: Rocket, color: 'from-orange-500 to-red-600', image: imagePaths.services.seo },
    { id: 'hosting', icon: Layers, color: 'from-violet-500 to-purple-600', image: imagePaths.services.hosting },
  ].map(service => ({
    ...service,
    title: t(`services.${service.id}.title`),
    description: t(`services.${service.id}.description`),
    features: t.raw(`services.${service.id}.features`) as string[],
    benefits: t.raw(`services.${service.id}.benefits`) as { title: string; items: string[] } | undefined,
    process: t.raw(`services.${service.id}.process`) as { title: string; items: string[] } | undefined,
  }));

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience to create a tailored strategy.',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Detailed project planning including wireframes, timeline, and technical specifications.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Creating stunning visual designs that align with your brand and engage your users.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Building your website with clean, efficient code and modern best practices.',
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Rigorous testing across devices and browsers to ensure everything works perfectly.',
    },
    {
      number: '06',
      title: 'Launch',
      description: 'Deploying your website and providing training and documentation for your team.',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section ref={headerRef} className="section-padding hero-pattern">
        <div className="container-custom">
          <div className="services-header text-center max-w-3xl mx-auto">
            <Badge variant="gradient" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              {t('navigation.services')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('services.title')}
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))]">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section ref={servicesRef} className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`service-detail-card grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8">
                    {service.description}
                  </p>
                  
                  <div className="space-y-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">{t('services.featuresTitle')}</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[hsl(var(--primary)/0.1)] flex items-center justify-center flex-shrink-0 mt-1">
                              <Check className="w-4 h-4 text-[hsl(var(--primary))]" />
                            </div>
                            <span className="text-[hsl(var(--foreground))]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.benefits && Object.keys(service.benefits).length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-4">{service.benefits.title}</h3>
                        <ul className="space-y-3">
                          {service.benefits.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <Check className="w-4 h-4 text-green-500" />
                              </div>
                              <span className="text-[hsl(var(--muted-foreground))]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.process && Object.keys(service.process).length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-4">{service.process.title}</h3>
                        <ol className="relative border-l border-dashed border-[hsl(var(--border))] space-y-6 ml-3">
                          {service.process.items.map((item, i) => (
                            <li key={i} className="pl-8">
                              <div className="absolute -left-3 w-6 h-6 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold text-xs">
                                {i + 1}
                              </div>
                              <p className="text-[hsl(var(--foreground))]">{item}</p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>

                  <Button variant="gradient" asChild>
                    <Link href="/contact">
                      {t('cta.getQuote')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={450}
                    className="w-full rounded-xl shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="section-padding bg-[hsl(var(--muted)/0.5)]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              How We Work
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              A streamlined process designed to deliver exceptional results efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} variant="default" hover="lift" className="process-step">
                <CardHeader>
                  <span className="text-5xl font-bold gradient-text opacity-50">
                    {step.number}
                  </span>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
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
              <Link href="/pricing">{t('navigation.pricing')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
