'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { OptimizedImage, imagePaths } from '@/components/ui/optimized-image';
import { PlaceholderImage, imageDescriptions } from '@/components/ui/placeholder-image';
import {
  ArrowRight,
  Sparkles,
  Target,
  Heart,
  Lightbulb,
  Award,
  Users,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const t = useTranslations();
  const headerRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.about-header > *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );

      // Story section animation
      gsap.fromTo(
        '.story-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
          },
        }
      );

      // Values animation
      gsap.fromTo(
        '.value-card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 80%',
          },
        }
      );

      // Team animation
      gsap.fromTo(
        '.team-member',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: teamRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Award,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description'),
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.description'),
      color: 'from-pink-500 to-red-500',
    },
    {
      icon: Target,
      title: t('about.values.results.title'),
      description: t('about.values.results.description'),
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const team = [
    {
      name: 'Max Mustermann',
      role: 'Founder & Lead Developer',
      image: imageDescriptions.team.member1,
    },
    {
      name: 'Anna Schmidt',
      role: 'UI/UX Designer',
      image: imageDescriptions.team.member2,
    },
    {
      name: 'Thomas Weber',
      role: 'Senior Developer',
      image: imageDescriptions.team.member3,
    },
    {
      name: 'Lisa Müller',
      role: 'Project Manager',
      image: imageDescriptions.team.member4,
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section ref={headerRef} className="section-padding hero-pattern">
        <div className="container-custom">
          <div className="about-header text-center max-w-3xl mx-auto">
            <Badge variant="gradient" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              {t('navigation.about')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))]">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="section-padding">
        <div className="container-custom">
          <div className="story-content grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                {t('about.story.title')}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Digital Excellence Since Day One
              </h2>
              <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed">
                {t('about.story.description')}
              </p>
              <div className="p-6 rounded-xl bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border))]">
                <h3 className="text-xl font-semibold mb-3">{t('about.mission.title')}</h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  {t('about.mission.description')}
                </p>
              </div>
            </div>
            <div>
              <OptimizedImage
                src={imagePaths.about.office}
                alt="EH Services - Office"
                width={600}
                height={500}
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section-padding bg-[hsl(var(--muted)/0.5)]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {t('about.values.title')}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              Our core values guide every decision we make and every project we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} variant="default" hover="lift" className="value-card">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Users className="w-3 h-3 mr-1" />
              {t('about.team.title')}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              {t('about.team.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="team-member text-center">
                <div className="mb-4 relative group">
                  <PlaceholderImage
                    width={300}
                    height={300}
                    description={member.image}
                    category="team"
                    className="w-full aspect-square rounded-2xl group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-[hsl(var(--muted-foreground))]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? We&apos;d love to hear from you.
          </p>
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
        </div>
      </section>
    </>
  );
}
