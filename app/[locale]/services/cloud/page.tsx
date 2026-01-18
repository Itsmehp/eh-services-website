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
  Cloud, // Using Cloud icon for this service
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

export default function CloudSolutionsPage() {
  const t = useTranslations();
  const headerRef = useRef<HTMLDivElement>(null);
  const serviceDetailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.cloud-header > *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );

      // Service detail animation
      gsap.fromTo(
        '.cloud-detail-content > *',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: serviceDetailRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const service = {
    id: 'cloud',
    icon: Cloud,
    color: 'from-purple-500 to-indigo-600', // Adjusted color for cloud
    image: imagePaths.services.hosting, // Placeholder image for now, can be changed later
    title: t(`services.cloud.title`),
    description: t(`services.cloud.description`),
    features: t.raw(`services.cloud.features`) as string[],
    benefits: t.raw(`services.cloud.benefits`) as { title: string; items: string[] } | undefined,
    process: t.raw(`services.cloud.process`) as { title: string; items: string[] } | undefined,
  };

  return (
    <>
      {/* Header Section */}
      <section ref={headerRef} className="section-padding hero-pattern">
        <div className="container-custom">
          <div className="cloud-header text-center max-w-3xl mx-auto">
            <Badge variant="gradient" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              {t('navigation.services')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))]">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Detail Section */}
      <section ref={serviceDetailRef} className="section-padding">
        <div className="container-custom">
          <div className="cloud-detail-content space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('services.featuresTitle')}
                </h2>
                <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8">
                  {t('services.cloud.description')}
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
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="benefits">
                        <AccordionTrigger>{service.benefits.title}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-3 mt-4">
                            {service.benefits.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                                  <Check className="w-4 h-4 text-green-500" />
                                </div>
                                <span className="text-[hsl(var(--muted-foreground))]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}

                  {service.process && Object.keys(service.process).length > 0 && (
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="process">
                        <AccordionTrigger>{service.process.title}</AccordionTrigger>
                        <AccordionContent>
                          <ol className="relative border-l border-dashed border-[hsl(var(--border))] space-y-6 ml-3 mt-4">
                            {service.process.items.map((item, i) => (
                              <li key={i} className="pl-8">
                                <div className="absolute -left-3 w-6 h-6 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold text-xs">
                                  {i + 1}
                                </div>
                                <p className="text-[hsl(var(--foreground))]">{item}</p>
                              </li>
                            ))}
                          </ol>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
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
              <div>
                <OptimizedImage
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={450}
                  className="w-full rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Cloud Infrastructure?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your cloud strategy and build a robust foundation for your business.
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
              <Link href="/services/cloud">{t('cta.learnMore')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
