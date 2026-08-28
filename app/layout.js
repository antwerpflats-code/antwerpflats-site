import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Antwerpflats — Furnished apartments, all-inclusive',
    template: '%s — Antwerpflats',
  },
  description:
    'Fully furnished apartments for expats, relocating professionals and companies in Antwerp. Every cost included, no hidden fees. Since 1996.',
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Antwerpflats',
  description:
    'Furnished, all-inclusive temporary housing in Antwerp for expats, relocating professionals and companies. Minimum stay 1 month.',
  url: 'https://www.antwerpflats.biz',
  telephone: '+32472421327',
  email: 'info.antwerpflats@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Italiëlei',
    addressLocality: 'Antwerpen',
    postalCode: '2000',
    addressCountry: 'BE',
  },
  foundingDate: '1996',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
