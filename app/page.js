import Link from 'next/link';
import ManifestStrip from '@/components/ManifestStrip';
import { getAllApartments } from '@/lib/apartments';

export default function HomePage() {
  const featured = getAllApartments().slice(0, 3);

  return (
    <>
      <ManifestStrip />

      <div className="hero-photo">
        <img
          src="https://static.wixstatic.com/media/b93b13_de37bab6203f447a887e78b082097ab5~mv2.jpg"
          alt="Furnished apartment interior, Antwerp"
        />
        <div className="hero-photo-caption">
          <span className="eyebrow">Furnished housing, Antwerp</span>
          <h1>One monthly bill.
            <br />
            No surprises.
          </h1>
        </div>
      </div>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="lede">
              Fully furnished apartments for expats, relocating professionals
              and companies — every cost stated up front, nothing added
              later. Since 1996.
            </p>
            <div className="cta-row">
              <Link href="/apartments" className="btn-primary">
                See available apartments
              </Link>
              <Link href="/faq" className="btn-secondary">
                How it works
              </Link>
            </div>
          </div>
          <div className="lease-card">
            <div className="lease-head">
              <span>SAMPLE MANIFEST</span>
              <span>LS4 · 1BR</span>
            </div>
            <div className="lease-row">
              <span className="label">Water</span>
              <span className="val">included</span>
            </div>
            <div className="lease-row">
              <span className="label">Electricity &amp; heating</span>
              <span className="val">included</span>
            </div>
            <div className="lease-row">
              <span className="label">Furniture &amp; fresh sheets</span>
              <span className="val">included</span>
            </div>
            <div className="lease-row">
              <span className="label">Fire insurance</span>
              <span className="val">included</span>
            </div>
            <div className="lease-row">
              <span className="label">Hidden fees</span>
              <span className="val">none</span>
            </div>
            <div className="lease-row total">
              <span className="label">Total, monthly</span>
              <span className="val">€985</span>
            </div>
          </div>
        </div>
      </section>

      <div className="qualifiers">
        <div className="wrap qual-grid">
          <div className="qual-item">
            <h3>This is temporary housing, not a hotel</h3>
            <p>
              Minimum stay of 1 month. We don&apos;t offer daily or weekly
              contracts.
            </p>
          </div>
          <div className="qual-item">
            <h3>Registration required</h3>
            <p>
              Our contracts follow the Flemish Housing decree — a
              straightforward registration step we guide you through.
            </p>
          </div>
          <div className="qual-item">
            <h3>Flexible notice</h3>
            <p>Don&apos;t know your end date yet? We can offer a flexible notice period.</p>
          </div>
        </div>
      </div>

      <section className="pad" id="apartments">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Available now</span>
            <h2>Currently on the manifest</h2>
          </div>
          <div className="apt-grid">
            {featured.map((apt) => (
              <Link
                href={`/apartments/${apt.slug}`}
                className="apt-card"
                key={apt.slug}
              >
                <img
                  className="apt-photo"
                  src={apt.photos?.[0]}
                  alt={`${apt.name} apartment`}
                />
                <div className="apt-body">
                  <div className="apt-code">
                    {apt.name.toUpperCase()} · {apt.location.toUpperCase()}
                  </div>
                  <h3>{apt.title}</h3>
                  <div className="apt-specs">
                    <span>{apt.bedrooms} bed</span>
                    <span>{apt.size_m2} m²</span>
                    {apt.ideal_for?.[0] && <span>{apt.ideal_for[0]}</span>}
                  </div>
                  <div className="apt-price">
                    €{apt.price_monthly.toLocaleString('en-BE')}/mo
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pad" id="faq" style={{ background: 'var(--sand)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Before you write in</span>
            <h2>What people ask first</h2>
          </div>
          <div className="faq-item" style={{ paddingBottom: '20px' }}>
            <h3 style={{ fontSize: '1.02rem', marginBottom: '8px' }}>
              Can I book for a few nights or a week?
            </h3>
            <p style={{ color: '#4A4640', fontSize: '0.92rem' }}>
              No — our apartments are temporary housing, not short-stay
              accommodation. The minimum contract length is 1 month.
            </p>
          </div>
          <div style={{ marginTop: '24px' }}>
            <Link href="/faq" className="btn-secondary">
              See all questions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}