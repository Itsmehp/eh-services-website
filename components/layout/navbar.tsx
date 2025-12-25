'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/providers/theme-toggle';
import { LanguageSwitcher } from '@/components/providers/language-switcher';
import { Menu, X, Code2 } from 'lucide-react';
import { gsap } from 'gsap';

const navLinks = [
  { href: '/', key: 'home' },
  { href: '/services', key: 'services' },
  { href: '/pricing', key: 'pricing' },
  { href: '/portfolio', key: 'portfolio' },
  { href: '/about', key: 'about' },
  { href: '/faq', key: 'faq' },
  { href: '/contact', key: 'contact' },
] as const;

export function Navbar() {
  const t = useTranslations('navigation');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        '.mobile-nav-link',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.05, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[hsl(var(--background)/0.95)] backdrop-blur-lg shadow-lg border-b border-[hsl(var(--border))]'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-[hsl(var(--primary))/0.3] transition-all duration-300">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">
              <span className="gradient-text">EH</span>
              <span className="text-[hsl(var(--foreground))]"> Services</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] rounded-lg transition-all duration-200"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button variant="gradient" size="sm" asChild>
              <Link href="/contact">{t('contact')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[hsl(var(--muted))] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[hsl(var(--foreground))]" />
            ) : (
              <Menu className="w-6 h-6 text-[hsl(var(--foreground))]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="py-4 space-y-2 border-t border-[hsl(var(--border))]">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="mobile-nav-link block px-4 py-3 text-base font-medium text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] rounded-lg transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="flex items-center justify-between px-4 pt-4 border-t border-[hsl(var(--border))]">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
