'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { gsap } from 'gsap';
import { Badge } from '@/components/ui/badge';
import { Shield } from 'lucide-react';

export default function DatenschutzPage() {
  const locale = useLocale();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.datenschutz-content > *',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  const content = locale === 'de' ? {
    title: 'Datenschutzerklärung',
    subtitle: 'Informationen zur Verarbeitung Ihrer personenbezogenen Daten',
    lastUpdated: 'Stand: Dezember 2025',
  } : {
    title: 'Privacy Policy',
    subtitle: 'Information about the processing of your personal data',
    lastUpdated: 'Last updated: December 2025',
  };

  return (
    <section ref={headerRef} className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="datenschutz-content">
          <Badge variant="outline" className="mb-4">
            <Shield className="w-3 h-3 mr-1" />
            {content.title}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-2">{content.subtitle}</p>
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-12">{content.lastUpdated}</p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '1. Datenschutz auf einen Blick' : '1. Privacy at a Glance'}
              </h2>
              <h3 className="text-xl font-semibold mb-3">
                {locale === 'de' ? 'Allgemeine Hinweise' : 'General Information'}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.'
                  : 'The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you can be personally identified.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '2. Verantwortliche Stelle' : '2. Responsible Party'}
              </h2>
              <div className="p-6 rounded-xl bg-[hsl(var(--muted)/0.5)] space-y-2">
                <p className="font-semibold">EH Services</p>
                <p>Max Mustermann</p>
                <p>Musterstraße 123</p>
                <p>10115 Berlin, Deutschland</p>
                <p className="mt-4"><strong>E-Mail:</strong> datenschutz@ehservices.de</p>
                <p><strong>Telefon:</strong> +49 123 456 78900</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '3. Datenerfassung auf dieser Website' : '3. Data Collection on This Website'}
              </h2>
              
              <h3 className="text-xl font-semibold mb-3">
                {locale === 'de' ? 'Cookies' : 'Cookies'}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">
                {locale === 'de' 
                  ? 'Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.'
                  : 'Our website uses so-called "cookies". Cookies are small text files and do not cause any damage to your device. They are either stored temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your device.'}
              </p>

              <h3 className="text-xl font-semibold mb-3">
                {locale === 'de' ? 'Kontaktformular' : 'Contact Form'}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.'
                  : 'If you send us inquiries via the contact form, your information from the inquiry form, including the contact data you provide there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not share this data without your consent.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '4. Ihre Rechte' : '4. Your Rights'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">
                {locale === 'de' 
                  ? 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.'
                  : 'You have the right at any time to obtain information free of charge about the origin, recipient, and purpose of your stored personal data. You also have the right to request the correction or deletion of this data.'}
              </p>
              <ul className="list-disc list-inside text-[hsl(var(--muted-foreground))] space-y-2">
                <li>{locale === 'de' ? 'Recht auf Auskunft (Art. 15 DSGVO)' : 'Right to Information (Art. 15 GDPR)'}</li>
                <li>{locale === 'de' ? 'Recht auf Berichtigung (Art. 16 DSGVO)' : 'Right to Rectification (Art. 16 GDPR)'}</li>
                <li>{locale === 'de' ? 'Recht auf Löschung (Art. 17 DSGVO)' : 'Right to Erasure (Art. 17 GDPR)'}</li>
                <li>{locale === 'de' ? 'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)' : 'Right to Restriction of Processing (Art. 18 GDPR)'}</li>
                <li>{locale === 'de' ? 'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)' : 'Right to Data Portability (Art. 20 GDPR)'}</li>
                <li>{locale === 'de' ? 'Widerspruchsrecht (Art. 21 DSGVO)' : 'Right to Object (Art. 21 GDPR)'}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '5. Analyse-Tools und Werbung' : '5. Analytics Tools and Advertising'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Diese Website nutzt keine Analyse-Tools oder Werbetracking. Wir respektieren Ihre Privatsphäre und erfassen nur die notwendigsten Daten für den Betrieb der Website.'
                  : 'This website does not use analytics tools or advertising tracking. We respect your privacy and only collect the most necessary data for the operation of the website.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '6. SSL-/TLS-Verschlüsselung' : '6. SSL/TLS Encryption'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.'
                  : 'This site uses SSL/TLS encryption for security reasons and to protect the transmission of confidential content, such as inquiries you send to us as the site operator. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '7. Hosting' : '7. Hosting'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Wir hosten die Inhalte unserer Website bei einem professionellen Hosting-Anbieter innerhalb der EU. Diese Server befinden sich in Deutschland und unterliegen den strengen deutschen und europäischen Datenschutzgesetzen.'
                  : 'We host the contents of our website with a professional hosting provider within the EU. These servers are located in Germany and are subject to strict German and European data protection laws.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'de' ? '8. Änderungen dieser Datenschutzerklärung' : '8. Changes to This Privacy Policy'}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                {locale === 'de' 
                  ? 'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.'
                  : 'We reserve the right to adapt this privacy policy so that it always complies with current legal requirements or to implement changes to our services in the privacy policy. The new privacy policy will then apply for your next visit.'}
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
