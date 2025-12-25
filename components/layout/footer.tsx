'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const serviceLinks = [
  { href: '/services#wordpress', key: 'wordpress' },
  { href: '/services#react', key: 'react' },
  { href: '/services#design', key: 'design' },
  { href: '/services#maintenance', key: 'maintenance' },
] as const;

const companyLinks = [
  { href: '/about', key: 'about' },
  { href: '/portfolio', key: 'portfolio' },
  { href: '/faq', key: 'faq' },
  { href: '/contact', key: 'contact' },
] as const;

const legalLinks = [
  { href: '/impressum', key: 'impressum' },
  { href: '/datenschutz', key: 'datenschutz' },
  { href: '/agb', key: 'agb' },
] as const;

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
];

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-[hsl(var(--card))] border-t border-[hsl(var(--border))]">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="gradient-text">EH</span>
                <span className="text-[hsl(var(--foreground))]"> Services</span>
              </span>
            </Link>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 max-w-sm">
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@ehservices.de"
                className="flex items-center gap-3 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@ehservices.de</span>
              </a>
              <a
                href="tel:+4912345678900"
                className="flex items-center gap-3 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+49 123 456 78900</span>
              </a>
              <div className="flex items-center gap-3 text-[hsl(var(--muted-foreground))]">
                <MapPin className="w-4 h-4" />
                <span>Berlin, Germany</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    {t(`services.${link.key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4">
              {t('footer.company')}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    {t(`navigation.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4">
              {t('footer.newsletter.title')}
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
              {t('footer.newsletter.description')}
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="bg-[hsl(var(--background))]"
              />
              <Button type="submit" variant="gradient" className="w-full">
                {t('footer.newsletter.subscribe')}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[hsl(var(--border))]">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              {t('footer.copyright')}
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  {t(`legal.${link.key}`)}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[hsl(var(--muted))] flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--primary))] hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
