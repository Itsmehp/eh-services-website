'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
      <div className="flex items-center gap-1 p-1 rounded-full bg-[hsl(var(--muted))]">
        {routing.locales.map((loc) => (
          <button
            key={loc}
            onClick={() => switchLocale(loc)}
            className={cn(
              'px-3 py-1 text-sm font-medium rounded-full transition-all duration-200',
              locale === loc
                ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-lg'
                : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
            )}
          >
            {loc.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
