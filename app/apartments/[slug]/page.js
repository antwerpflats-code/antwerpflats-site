import Link from 'next/link';
import { notFound } from 'next/navigation';
import LeaseCard from '@/components/LeaseCard';
import { getApartmentBySlug, getAllApartmentSlugs } from '@/lib/apartments';

export function generateStaticParams() {
  return getAllApartmentSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const apt = getApartmentBySlug(params.slug);
  if (!apt) return {};
  return {
    title: `${apt.name} — ${apt.title}`,
    description: apt.description,
  };
}

export default function ApartmentDetailPage({ params }) {
  const apt = getApartmentBySlug(params.slug);
  if (!apt) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Apartment',
    name: `${apt.name} — ${apt.title}`,
    description: apt.description,
    numberOfBedrooms: apt.bedrooms,
    numberOfBathroomsTotal: apt.bathrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: apt.size_m2,
      unitCode: 'MTK',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: apt.location,
      addressRegion: 'Antwerpen',
      addressCountry: 'BE',
    },
    offers: {
      '@type': 'Offer',
      price: apt.price_monthly,
      priceCurrency: 'EUR',
      availability:
        apt.status === 'available'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/PreOrder',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="wrap breadcrumb">
        <Link href="/">Home</Link> / <Link href="/apartments">Apartments</Link> /{' '}
        {apt.name}
      </div>

      <div className="wrap gallery">
        <img src={apt.photos?.[0]} alt={`${apt.name} main view`} />
        {(apt.photos?.length > 1) && (
          <div className="side">
            {apt.photos.slice(1, 3).map((src, i) => (
              <img src={src} alt={`${apt.name} view ${i + 2}`} key={src} />
            ))}
          </div>
        )}
      </div>

      <div className="wrap detail-grid">
        <div className="detail-main">
          <span className="eyebrow">
            {apt.name} · {apt.location}
          </span>
          <h1>{apt.title}</h1>
          {apt.nearby?.[0] && <p className="sub">{apt.nearby[0]}.</p>}

          <div className="spec-strip">
            <div className="spec">
              <div className="k">Bedrooms</div>
              <div className="v">{apt.bedrooms}</div>
            </div>
            <div className="spec">
              <div className="k">Size</div>
              <div className="v">{apt.size_m2} m²</div>
            </div>
            <div className="spec">
              <div className="k">Parking</div>
              <div className="v">{apt.parking ? 'Yes' : 'No'}</div>
            </div>
          </div>

          <h2>About this apartment</h2>
          <p className="desc">{apt.description}</p>

          <div className="tag-list">
            <span className="tag">WiFi</span>
            <span className="tag">Washing machine &amp; dryer</span>
            <span className="tag">Satellite TV</span>
            <span className="tag">24h assistance</span>
            <span className="tag">Fresh sheets provided</span>
          </div>

          <h2>Location</h2>
          <ul className="nearby-list">
            {apt.nearby?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <LeaseCard apartment={apt} sticky />
        </div>
      </div>
    </>
  );
}
