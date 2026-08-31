export const metadata = {
  title: 'Privacy policy',
  description: 'How Antwerpflats collects, uses and protects your personal data.',
};

export default function PrivacyPage() {
  return (
    <div className="wrap" style={{ maxWidth: '800px', paddingTop: '56px', paddingBottom: '80px' }}>
      <span className="eyebrow">Legal</span>
      <h1 style={{ fontSize: '2.4rem', color: 'var(--ink)', marginBottom: '8px' }}>
        Privacy policy
      </h1>
      <p style={{ color: 'var(--mist)', fontSize: '0.85rem', marginBottom: '32px' }}>
        Last updated: [DATE — fill in when published]
      </p>

      <div style={{ color: '#4A4640', fontSize: '0.98rem', lineHeight: 1.7 }}>
        <p style={{ marginBottom: '16px' }}>
          This policy explains what personal data Antwerpflats collects
          through this website, why, and what rights you have over it. It
          applies to visitors of antwerpflats.biz.
        </p>

        <h2 style={{ fontSize: '1.2rem', color: 'var(--ink)', margin: '28px 0 10px' }}>
          Who we are
        </h2>
        <p style={{ marginBottom: '16px' }}>
          Antwerpflats, Italiëlei, 2000 Antwerpen, Belgium.
          <br />
          Email: info.antwerpflats@gmail.com
          <br />
          Phone: +32 (0) 472 42 13 27
          <br />
          [Fill in: legal business/company registration number if applicable]
        </p>

        <h2 style={{ fontSize: '1.2rem', color: 'var(--ink)', margin: '28px 0 10px' }}>
          What we collect
        </h2>
        <p style={{ marginBottom: '10px' }}>
          When you use the contact form on this site, we collect:
        </p>
        <ul style={{ marginLeft: '20px', marginBottom: '16px' }}>
          <li>Name and email address</li>
          <li>Move-in date, expected duration, group size, and budget range</li>
          <li>Which apartment you&apos;re interested in (if provided)</li>
          <li>Any message you write to us</li>
        </ul>
        <p style={{ marginBottom: '16px' }}>
          We only collect what&apos;s needed to respond to your inquiry and
          check availability — nothing beyond that.
        </p>

        <h2 style={{ fontSize: '1.2rem', color: 'var(--ink)', margin: '28px 0 10px' }}>
          Why we collect it
        </h2>
        <p style={{ marginBottom: '16px' }}>
          To respond to your housing inquiry and, where relevant, to take
          steps toward entering into a rental agreement with you. This is
          our legal basis under GDPR Article 6(1)(b) (necessary for
          pre-contractual steps taken at your request).
        </p>

        <h2 style={{ fontSize: '1.2rem', color: 'var(--ink)', margin: '28px 0 10px' }}>
          Who else sees it
        </h2>
        <p style={{ marginBottom: '16px' }}>
          Contact form submissions are relayed to our inbox using{' '}
          <a href="https://formsubmit.co" style={{ textDecoration: 'underline' }}>
            FormSubmit
          </a>
          , a third-party form-processing service. FormSubmit processes this
          data on our behalf solely to deliver your message to us. We do
          not sell or share your data with anyone else, and we do not use
          it for marketing unless you separately agree to that.
        </p>

        <h2 style={{ fontSize: '1.2rem', color: 'var(--ink)', margin: '28px 0 10px' }}>
          How long we keep it
        </h2>
        <p style={{ marginBottom: '16px' }}>
          [Fill in: e.g. "We keep inquiry data for up to X months after our
          last contact with you, unless you become a tenant, in which case
          it's retained as part of your rental file per standard tenancy
          record-keeping requirements."]
        </p>

        <h2 style={{ fontSize: '1.2rem', color: 'var(--ink)', margin: '28px 0 10px' }}>
          Your rights
        </h2>
        <p style={{ marginBottom: '10px' }}>Under GDPR, you have the right to:</p>
        <ul style={{ marginLeft: '20px', marginBottom: '16px' }}>
          <li>Ask what personal data we hold about you</li>
          <li>Ask us to correct inaccurate data</li>
          <li>Ask us to delete your data</li>
          <li>Object to how we process your data</li>
          <li>
            Lodge a complaint with the Belgian Data Protection Authority
            (Gegevensbeschermingsautoriteit / Autorité de protection des
            données) if you believe your rights have been violated
          </li>
        </ul>
        <p style={{ marginBottom: '16px' }}>
          To exercise any of these, email us at info.antwerpflats@gmail.com.
        </p>

        <h2 style={{ fontSize: '1.2rem', color: 'var(--ink)', margin: '28px 0 10px' }}>
          Cookies
        </h2>
        <p style={{ marginBottom: '16px' }}>
          This site does not currently use tracking or analytics cookies.
          If that changes, this policy will be updated and a cookie consent
          notice will be added.
        </p>
      </div>
    </div>
  );
}
