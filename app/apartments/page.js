import Link from 'next/link';
import ManifestStrip from '@/components/ManifestStrip';
import { getAllApartments } from '@/lib/apartments';

export const metadata = {
  title: 'Available apartments',
  description:
    'Every furnished apartment currently on the manifest — full monthly price, no hidden fees.',
};

function formatAvailability(apt) {
  if (apt.status === 'available') {
    return { label: '● Available now', className: 'available' };
  }
  if (apt.status === 'available_from' && apt.available_from) {
    const d = new Date(apt.available_from);
    const formatted = d.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
    });
    return { label: `● Available from ${formatted}`, className: 'soon' };
  }
  return { label: '● Occupied', className: 'soon' };
}

export default function ApartmentsPage() {
  const apartments = getAllApartments();

  return (
    <>
      <ManifestStrip />

      <div className="wrap" style={{ paddingTop: '56px', paddingBottom: '32px', borderBottom: '1px solid rgba(17,17,17,0.12)' }}>
        <span className="eyebrow">Available now &amp; near future</span>
        <h1 style={{ fontSize: '2.6rem', color: 'var(--ink)', marginBottom: '14px' }}>
          Every apartment on the manifest
        </h1>
        <p style={{ maxWidth: '60ch', color: '#4A4640' }}>
          All prices are the full monthly total — water, electricity,
          heating, furniture and fresh sheets included. No hidden fees, ever.
          Contact us with your number of people and arrival date; we often have
          more available than what&apos;s listed here.
        </p>
      </div>

      <div className="wrap" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        {apartments.map((apt) => {
          const availability = formatAvailability(apt);
          return (
            <div className="apt-row" key={apt.slug}>
              <img src={apt.photos?.[0]} alt={`${apt.name} apartment`} />
              <div>
                <div className="apt-code">
                  {apt.name.toUpperCase()} · {apt.location.toUpperCase()}
                </div>
                <h3>{apt.title}</h3>
                <div className="apt-meta">
                  {apt.size_m2} m² · {apt.nearby?.[0]}
                  {apt.ideal_for?.[0] ? ` · Ideal for ${apt.ideal_for[0].toLowerCase()}` : ''}
                </div>
                <span className={`apt-status ${availability.className}`}>
                  {availability.label}
                </span>
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
          );
        })}

        <div className="listing-note">
          <strong>Don&apos;t see the right fit?</strong> We often have more
          apartments available than what&apos;s listed here — contact us
          with the number of people and your arrival date and we&apos;ll
          check what&apos;s open.
        </div>
      </div>
    </>
  );
}
