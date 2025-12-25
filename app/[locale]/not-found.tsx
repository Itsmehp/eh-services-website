'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations();

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="container-custom text-center">
        <div className="max-w-md mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <span className="text-[150px] md:text-[200px] font-bold leading-none gradient-text opacity-80">
              404
            </span>
          </div>

          {/* Content */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t('404.title')}
          </h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8">
            {t('404.description')}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                {t('404.cta')}
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
