import Link from 'next/link';
import { notFound } from 'next/navigation';
import ManifestStrip from '@/components/ManifestStrip';
import { getAreaBySlug, getAllAreaSlugs, getAllAreas } from '@/lib/areas';
import { getApartmentsByArea } from '@/lib/apartments';

export function generateStaticParams() {
  return getAllAreaSlugs().map((area) => ({ area }));
}

export function generateMetadata({ params }) {
  const area = getAreaBySlug(params.area);
  if (!area) return {};
  return {
    title: area.title,
    description: area.intro,
  };
}

export default function AreaPage({ params }) {
  const area = getAreaBySlug(params.area);
  if (!area) notFound();

  const allAreas = getAllAreas();
  const apartments = getApartmentsByArea(area.slug);

  return (
    <>
      <ManifestStrip />

      <div className="wrap breadcrumb">
        <Link href="/">Home</Link> / <Link href="/apartments">Apartments</Link> /{' '}
        {area.name}
      </div>

      <div className="wrap area-hero">
        {area.hero_photos?.map((src) => (
          <img src={src} alt={`Apartment near ${area.name}`} key={src} />
        ))}
      </div>

      <div className="wrap area-intro">
        <span className="eyebrow">Area guide</span>
        <h1>{area.title}</h1>
        <p>{area.intro}</p>
      </div>

      <div className="wrap fact-strip">
        {area.facts?.map((fact) => (
          <div className="fact" key={fact.k}>
            <div className="k">{fact.k}</div>
            <div className="v">{fact.v}</div>
          </div>
        ))}
      </div>

      <section className="pad wrap">
        <div className="section-head">
          <span className="eyebrow">What&apos;s nearby</span>
          <h2>Living around {area.name}</h2>
        </div>
        <div className="nearby-cols">
          <ul className="nearby-list">
            {area.nearby_left?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="nearby-list">
            {area.nearby_right?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {apartments.length > 0 && (
        <div style={{ background: 'var(--sand)' }}>
          <section className="pad wrap">
            <div className="section-head">
              <span className="eyebrow">On the manifest</span>
              <h2>Apartments near {area.name}</h2>
            </div>
            {apartments.map((apt) => (
              <div className="apt-row" key={apt.slug}>
                <img src={apt.photos?.[0]} alt={`${apt.name} apartment`} />
                <div>
                  <div className="apt-code">{apt.name.toUpperCase()}</div>
                  <h3>{apt.title}</h3>
                  <div className="apt-meta">
                    {apt.size_m2} m² · {apt.nearby?.[0]}
                    {apt.ideal_for?.[0]
                      ? ` · Ideal for ${apt.ideal_for[0].toLowerCase()}`
                      : ''}
                  </div>
                </div>
                <div className="apt-right">
                  <div className="apt-price">
                    €{apt.price_monthly.toLocaleString('en-BE')}/mo
                  </div>
                  <Link href={`/apartments/${apt.slug}`} className="apt-link">
                    View details
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}

      <section className="pad wrap">
        <div className="section-head">
          <span className="eyebrow">Other areas</span>
          <h2>Browse by location</h2>
        </div>
        <div className="area-links">
          {allAreas.map((a) => (
            <Link
              href={`/areas/${a.slug}`}
              className={`area-chip${a.slug === area.slug ? ' current' : ''}`}
              key={a.slug}
            >
              {a.name}
            </Link>
          ))}
          <Link href="/apartments" className="area-chip">
            All apartments →
          </Link>
        </div>
      </section>
    </>
  );
}
