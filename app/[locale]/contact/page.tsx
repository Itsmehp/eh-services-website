'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  budget: string;
  message: string;
}

export default function ContactPage() {
  const t = useTranslations();
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.contact-header > *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );

      // Form animation
      gsap.fromTo(
        '.contact-form',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        }
      );

      // Info cards animation
      gsap.fromTo(
        '.info-card',
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'hj.ehservices@outlook.com',
      href: 'mailto:hj.ehservices@outlook.com',
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '+49 123 456 78900',
      href: 'tel:+4912345678900',
    },
    {
      icon: MapPin,
      label: t('contact.info.address'),
      value: 'Ohlsbach, Germany',
      href: '#',
    },
    {
      icon: Clock,
      label: t('contact.info.hours'),
      value: t('contact.info.hoursValue'),
      href: '#',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section ref={headerRef} className="section-padding hero-pattern">
        <div className="container-custom">
          <div className="contact-header text-center max-w-3xl mx-auto">
            <Badge variant="gradient" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              {t('navigation.contact')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))]">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section ref={formRef} className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card variant="default" className="contact-form">
                <CardContent className="p-8">
                  {submitStatus === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-[hsl(var(--success)/0.1)] flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-[hsl(var(--success))]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-[hsl(var(--muted-foreground))]">
                        {t('contact.form.success')}
                      </p>
                      <Button
                        variant="outline"
                        className="mt-6"
                        onClick={() => setSubmitStatus('idle')}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label={t('contact.form.name')}
                          placeholder="John Doe"
                          error={errors.name?.message}
                          {...register('name', { required: 'Name is required' })}
                        />
                        <Input
                          label={t('contact.form.email')}
                          type="email"
                          placeholder="john@example.com"
                          error={errors.email?.message}
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label={t('contact.form.company')}
                          placeholder="Company Name"
                          {...register('company')}
                        />
                        <Input
                          label={t('contact.form.phone')}
                          type="tel"
                          placeholder="+49 123 456 789"
                          {...register('phone')}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                          {t('contact.form.budget')}
                        </label>
                        <select
                          className="flex h-11 w-full rounded-lg border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-4 py-2 text-sm text-[hsl(var(--foreground))] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:ring-offset-2"
                          {...register('budget')}
                        >
                          <option value="">{t('contact.form.budgetOptions.select')}</option>
                          <option value="small">{t('contact.form.budgetOptions.small')}</option>
                          <option value="medium">{t('contact.form.budgetOptions.medium')}</option>
                          <option value="large">{t('contact.form.budgetOptions.large')}</option>
                          <option value="enterprise">{t('contact.form.budgetOptions.enterprise')}</option>
                        </select>
                      </div>

                      <Textarea
                        label={t('contact.form.message')}
                        placeholder="Tell us about your project..."
                        className="min-h-[150px]"
                        error={errors.message?.message}
                        {...register('message', { required: 'Message is required' })}
                      />

                      {submitStatus === 'error' && (
                        <div className="flex items-center gap-2 text-[hsl(var(--destructive))]">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-sm">{t('contact.form.error')}</span>
                        </div>
                      )}

                      <Button
                        type="submit"
                        variant="gradient"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            {t('contact.form.sending')}
                          </>
                        ) : (
                          <>
                            {t('contact.form.submit')}
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="info-card">
                <h3 className="text-xl font-bold mb-6">{t('contact.info.title')}</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-xl bg-[hsl(var(--muted)/0.5)] hover:bg-[hsl(var(--muted))] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary)/0.1)] flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <p className="text-sm text-[hsl(var(--muted-foreground))]">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card variant="default" className="info-card overflow-hidden">
                <div className="aspect-[4/3] bg-[hsl(var(--muted))] flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-[hsl(var(--primary))] mx-auto mb-3" />
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">
                      Interactive map placeholder
                      <br />
                      <span className="text-xs">Integrate Google Maps or Mapbox here</span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
