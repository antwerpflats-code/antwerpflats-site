import { FAQ_CATEGORIES } from '@/content/faq';

export const metadata = {
  title: 'Frequently asked questions',
  description:
    'Plain answers about stay length, costs, registration and who Antwerpflats is for.',
};

export default function FaqPage() {
  const allItems = FAQ_CATEGORIES.flatMap((c) => c.items);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="wrap" style={{ maxWidth: '900px', padding: '56px 28px 40px' }}>
        <span className="eyebrow">Before you write in</span>
        <h1 style={{ fontSize: '2.6rem', color: 'var(--ink)', marginBottom: '14px' }}>
          Frequently asked questions
        </h1>
        <p style={{ maxWidth: '60ch', color: '#4A4640' }}>
          Everything on this page is a plain, direct answer — no fine print.
          If your question isn&apos;t here, email us at
          info.antwerpflats@gmail.com and we&apos;ll get back to you
          directly.
        </p>
      </div>

      <div className="wrap" style={{ maxWidth: '900px' }}>
        {FAQ_CATEGORIES.map((cat) => (
          <div key={cat.category}>
            <div className="faq-category">{cat.category}</div>
            {cat.items.map((item, i) => (
              <details key={item.q} open={i === 0 && cat === FAQ_CATEGORIES[0]}>
                <summary>{item.q}</summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        ))}

        <div className="faq-bottom">
          <p>Still have a question we haven&apos;t covered?</p>
          <a href="mailto:info.antwerpflats@gmail.com" className="btn-primary">
            Email us directly
          </a>
        </div>
      </div>
    </>
  );
}
