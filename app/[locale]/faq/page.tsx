'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FAQPage() {
  const t = useTranslations();
  const headerRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.faq-header > *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );

      // FAQ items animation
      gsap.fromTo(
        '.faq-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: faqRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'] as const;

  return (
    <>
      {/* Header Section */}
      <section ref={headerRef} className="section-padding hero-pattern">
        <div className="container-custom">
          <div className="faq-header text-center max-w-3xl mx-auto">
            <Badge variant="gradient" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              {t('navigation.faq')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('faq.title')}
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))]">
              {t('faq.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="section-padding">
        <div className="container-custom max-w-3xl">
          <Accordion type="single" defaultValue="q1">
            {faqKeys.map((key) => (
              <div key={key} className="faq-item">
                <AccordionItem value={key} className="mb-4">
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>{t(`faq.questions.${key}.question`)}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {t(`faq.questions.${key}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-[hsl(var(--muted)/0.5)]">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('faq.contact.title')}
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8">
            {t('faq.contact.description')}
          </p>
          <Button variant="gradient" size="xl" asChild>
            <Link href="/contact">
              {t('faq.contact.cta')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
