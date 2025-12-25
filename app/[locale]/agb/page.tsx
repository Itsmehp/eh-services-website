'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { gsap } from 'gsap';
import { Badge } from '@/components/ui/badge';
import { ScrollText } from 'lucide-react';

export default function AGBPage() {
  const locale = useLocale();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.agb-content > *',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  const content = locale === 'de' ? {
    title: 'Allgemeine Geschäftsbedingungen',
    subtitle: 'AGB der EH Services',
    lastUpdated: 'Stand: Dezember 2025',
  } : {
    title: 'Terms and Conditions',
    subtitle: 'General Terms of Service for EH Services',
    lastUpdated: 'Last updated: December 2025',
  };

  return (
    <section ref={headerRef} className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="agb-content">
          <Badge variant="outline" className="mb-4">
            <ScrollText className="w-3 h-3 mr-1" />
            {locale === 'de' ? 'AGB' : 'Terms'}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-2">{content.subtitle}</p>
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-12">{content.lastUpdated}</p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '§ 1 Geltungsbereich' : '§ 1 Scope'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen EH Services (nachfolgend „Anbieter") und dem Kunden über die Erstellung von Websites, Webanwendungen und damit verbundene Dienstleistungen. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.'
                  : 'These General Terms and Conditions (GTC) apply to all contracts between EH Services (hereinafter "Provider") and the customer for the creation of websites, web applications, and related services. Deviating conditions of the customer are not recognized unless the provider expressly agrees to their validity in writing.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '§ 2 Vertragsschluss' : '§ 2 Contract Conclusion'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">
                {locale === 'de' 
                  ? 'Die Darstellung der Dienstleistungen auf der Website stellt kein rechtlich bindendes Angebot dar. Durch die Kontaktaufnahme oder Anfrage gibt der Kunde eine unverbindliche Angebotsanfrage ab. Der Vertrag kommt erst durch die schriftliche Auftragsbestätigung des Anbieters zustande.'
                  : 'The presentation of services on the website does not constitute a legally binding offer. By contacting or inquiring, the customer submits a non-binding request for a quote. The contract is only concluded upon written order confirmation from the provider.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '§ 3 Leistungsumfang' : '§ 3 Scope of Services'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">
                {locale === 'de' 
                  ? 'Der genaue Leistungsumfang ergibt sich aus dem individuellen Angebot bzw. der Auftragsbestätigung. Änderungen oder Erweiterungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung und können zu einer Anpassung der vereinbarten Vergütung führen.'
                  : 'The exact scope of services results from the individual offer or order confirmation. Changes or extensions to the scope of services require a written agreement and may lead to an adjustment of the agreed remuneration.'}
              </p>
              <ul className="list-disc list-inside text-[hsl(var(--muted-foreground))] space-y-2">
                <li>{locale === 'de' ? 'Webdesign und Entwicklung' : 'Web design and development'}</li>
                <li>{locale === 'de' ? 'Content Management System Einrichtung' : 'Content Management System setup'}</li>
                <li>{locale === 'de' ? 'Wartung und Support' : 'Maintenance and support'}</li>
                <li>{locale === 'de' ? 'SEO-Optimierung' : 'SEO optimization'}</li>
                <li>{locale === 'de' ? 'Hosting-Dienste' : 'Hosting services'}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '§ 4 Preise und Zahlungsbedingungen' : '§ 4 Prices and Payment Terms'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">
                {locale === 'de' 
                  ? 'Alle Preise verstehen sich in Euro und zuzüglich der gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben. Die Zahlung erfolgt nach folgenden Modalitäten:'
                  : 'All prices are in Euros and exclude statutory VAT unless otherwise stated. Payment is made according to the following terms:'}
              </p>
              <div className="p-6 rounded-xl bg-[hsl(var(--muted)/0.5)] space-y-2">
                <p><strong>{locale === 'de' ? 'Anzahlung:' : 'Deposit:'}</strong> 50% {locale === 'de' ? 'bei Auftragserteilung' : 'upon order placement'}</p>
                <p><strong>{locale === 'de' ? 'Restzahlung:' : 'Final Payment:'}</strong> 50% {locale === 'de' ? 'bei Projektabnahme' : 'upon project completion'}</p>
                <p><strong>{locale === 'de' ? 'Zahlungsziel:' : 'Payment Term:'}</strong> 14 {locale === 'de' ? 'Tage nach Rechnungsstellung' : 'days after invoicing'}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '§ 5 Mitwirkungspflichten des Kunden' : '§ 5 Customer Cooperation Obligations'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Der Kunde ist verpflichtet, alle für die Durchführung des Projekts erforderlichen Unterlagen, Informationen und Materialien rechtzeitig und vollständig zur Verfügung zu stellen. Verzögerungen, die durch verspätete oder unvollständige Zulieferungen des Kunden entstehen, gehen nicht zu Lasten des Anbieters.'
                  : 'The customer is obligated to provide all documents, information, and materials necessary for the execution of the project in a timely and complete manner. Delays caused by late or incomplete deliveries from the customer are not at the expense of the provider.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '§ 6 Urheberrecht und Nutzungsrechte' : '§ 6 Copyright and Usage Rights'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">
                {locale === 'de' 
                  ? 'Der Anbieter räumt dem Kunden nach vollständiger Bezahlung das ausschließliche, zeitlich unbegrenzte Nutzungsrecht an den erstellten Werken ein. Das Urheberrecht verbleibt beim Anbieter. Der Anbieter ist berechtigt, die erstellten Werke zu Referenzzwecken zu verwenden.'
                  : 'After full payment, the provider grants the customer the exclusive, unlimited right to use the created works. The copyright remains with the provider. The provider is entitled to use the created works for reference purposes.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '§ 7 Gewährleistung und Haftung' : '§ 7 Warranty and Liability'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">
                {locale === 'de' 
                  ? 'Der Anbieter gewährleistet, dass die Leistungen frei von Mängeln erbracht werden. Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme. Die Haftung des Anbieters ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit keine wesentlichen Vertragspflichten verletzt werden.'
                  : 'The provider warrants that the services are provided free of defects. The warranty period is 12 months from acceptance. The liability of the provider is limited to intent and gross negligence. Liability for slight negligence is excluded unless essential contractual obligations are violated.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '§ 8 Kündigung' : '§ 8 Termination'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Bei laufenden Verträgen (z.B. Wartungsverträge) beträgt die Kündigungsfrist 3 Monate zum Ende des Vertragsjahres. Bei Projektverträgen kann der Kunde den Vertrag jederzeit kündigen, ist aber zur Zahlung der bis dahin erbrachten Leistungen verpflichtet.'
                  : 'For ongoing contracts (e.g., maintenance contracts), the notice period is 3 months to the end of the contract year. For project contracts, the customer can terminate the contract at any time but is obligated to pay for services rendered up to that point.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '§ 9 Datenschutz' : '§ 9 Data Protection'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Der Anbieter verpflichtet sich, die datenschutzrechtlichen Bestimmungen, insbesondere die DSGVO, einzuhalten. Einzelheiten zur Datenverarbeitung finden Sie in unserer Datenschutzerklärung.'
                  : 'The provider undertakes to comply with data protection regulations, in particular the GDPR. Details on data processing can be found in our privacy policy.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '§ 10 Schlussbestimmungen' : '§ 10 Final Provisions'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">
                {locale === 'de' 
                  ? 'Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Berlin. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.'
                  : 'The law of the Federal Republic of Germany applies. The place of jurisdiction is Berlin. If individual provisions of these GTC are invalid, the validity of the remaining provisions remains unaffected.'}
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
