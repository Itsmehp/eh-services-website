'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check, ArrowRight, Sparkles, Zap, Crown, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PricingPage() {
  const t = useTranslations();
  const headerRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.pricing-header > *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );

      // Pricing cards animation
      gsap.fromTo(
        '.pricing-card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pricingRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const plans = [
    {
      id: 'basic',
      name: t('pricing.basic.name'),
      description: t('pricing.basic.description'),
      price: t('pricing.basic.price'),
      currency: t('pricing.basic.currency'),
      features: t.raw('pricing.basic.features') as string[],
      icon: Zap,
      popular: false,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'professional',
      name: t('pricing.professional.name'),
      description: t('pricing.professional.description'),
      price: t('pricing.professional.price'),
      currency: t('pricing.professional.currency'),
      features: t.raw('pricing.professional.features') as string[],
      icon: Crown,
      popular: true,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'enterprise',
      name: t('pricing.enterprise.name'),
      description: t('pricing.enterprise.description'),
      price: t('pricing.enterprise.price'),
      currency: t('pricing.enterprise.currency'),
      features: t.raw('pricing.enterprise.features') as string[],
      icon: Building2,
      popular: false,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section ref={headerRef} className="section-padding hero-pattern">
        <div className="container-custom">
          <div className="pricing-header text-center max-w-3xl mx-auto">
            <Badge variant="gradient" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              {t('navigation.pricing')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('pricing.title')}
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))]">
              {t('pricing.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section ref={pricingRef} className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                variant={plan.popular ? 'elevated' : 'default'}
                className={`pricing-card relative ${
                  plan.popular
                    ? 'border-2 border-[hsl(var(--primary))] shadow-xl shadow-[hsl(var(--primary)/0.15)]'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="gradient">{t('pricing.popular')}</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-2">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-5xl font-bold">{plan.currency}{plan.price}</span>
                    <span className="text-[hsl(var(--muted-foreground))] ml-1">
                      {t('pricing.oneTime')}
                    </span>
                  </div>

                  <div className="border-t border-[hsl(var(--border))] pt-6">
                    <p className="text-sm font-semibold text-[hsl(var(--foreground))] mb-4">
                      {t('pricing.features')}
                    </p>
                    <ul className="space-y-3 text-left">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[hsl(var(--primary)/0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[hsl(var(--primary))]" />
                          </div>
                          <span className="text-sm text-[hsl(var(--muted-foreground))]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button
                    variant={plan.popular ? 'gradient' : 'outline'}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <Link href="/contact">
                      {t('pricing.getStarted')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solution CTA */}
      <section className="section-padding bg-[hsl(var(--muted)/0.5)]">
        <div className="container-custom">
          <Card variant="gradient" className="max-w-4xl mx-auto overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t('pricing.custom.title')}
              </h2>
              <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8 max-w-xl mx-auto">
                {t('pricing.custom.description')}
              </p>
              <Button variant="gradient" size="xl" asChild>
                <Link href="/contact">
                  {t('pricing.custom.cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">
            Check out our FAQ page for answers to common questions about our pricing and services.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="/faq">
              Visit FAQ
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
