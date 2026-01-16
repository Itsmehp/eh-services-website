'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { gsap } from 'gsap';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';

export default function ImpressumPage() {
  const locale = useLocale();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.impressum-content > *',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  const content = locale === 'de' ? {
    title: 'Impressum',
    subtitle: 'Angaben gemäß § 5 TMG',
  } : {
    title: 'Legal Notice',
    subtitle: 'Information according to § 5 TMG',
  };

  return (
    <section ref={headerRef} className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="impressum-content">
          <Badge variant="outline" className="mb-4">
            <FileText className="w-3 h-3 mr-1" />
            {content.title}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-12">{content.subtitle}</p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? 'Angaben zum Unternehmen' : 'Company Information'}
              </h2>
              <div className="p-6 rounded-xl bg-[hsl(var(--muted)/0.5)] space-y-2">
                <p className="font-semibold text-lg">EH Services</p>
                <p>Im Hubfeld 28</p>
                <p>77797 Ohlsbach</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? 'Kontakt' : 'Contact'}
              </h2>
              <div className="p-6 rounded-xl bg-[hsl(var(--muted)/0.5)] space-y-2">
                <p><strong>E-Mail:</strong> hj.ehservices@outlook.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? 'Umsatzsteuer-ID' : 'VAT ID'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:'
                  : 'VAT identification number according to § 27 a of the German VAT Act:'}
              </p>
              <p className="font-medium mt-2">DE123456789</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? 'Verantwortlich für den Inhalt' : 'Responsible for Content'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:'
                  : 'Responsible for content according to § 55 Abs. 2 RStV:'}
              </p>
              <p className="font-medium mt-2">Max Mustermann</p>
              <p className="text-[hsl(var(--muted-foreground))]">Musterstraße 123, 10115 Berlin</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? 'EU-Streitschlichtung' : 'EU Dispute Resolution'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:'
                  : 'The European Commission provides a platform for online dispute resolution (OS):'}
              </p>
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[hsl(var(--primary))] hover:underline mt-2 block"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <p className="text-[hsl(var(--muted-foreground))] mt-4">
                {locale === 'de' 
                  ? 'Unsere E-Mail-Adresse finden Sie oben im Impressum.'
                  : 'You can find our email address above in the legal notice.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? 'Verbraucherstreitbeilegung' : 'Consumer Dispute Resolution'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                  : 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? 'Haftung für Inhalte' : 'Liability for Content'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.'
                  : 'As a service provider, we are responsible for our own content on these pages in accordance with § 7 Abs.1 TMG under the general laws. According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? 'Haftung für Links' : 'Liability for Links'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.'
                  : 'Our website contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? 'Urheberrecht' : 'Copyright'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.'
                  : 'The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.'}
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
