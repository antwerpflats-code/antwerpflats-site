import { getAllApartments } from '@/lib/apartments';

export const metadata = {
  title: 'Contact & check availability',
  description:
    'Tell us your dates, amount of people and duration and we\'ll check what\'s available.',
};

export default function ContactPage() {
  const apartments = getAllApartments();

  return (
    <div className="wrap" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
      <span className="eyebrow">Get in touch</span>
      <h1 style={{ fontSize: '2.4rem', color: 'var(--ink)', marginBottom: '14px' }}>
        Check availability
      </h1>
      <p style={{ maxWidth: '60ch', color: '#4A4640', marginBottom: '36px' }}>
        Tell us your dates, amount of people and duration and we&apos;ll check what&apos;s available.
        for and we&apos;ll reply directly by email — often with options
        beyond what&apos;s listed on the site. Remember: minimum stay is 1
        month, and registration under the Flemish Housing decree is
        required.
      </p>

      {/*
        FormSubmit (https://formsubmit.co) relays this POST straight to your
        inbox with no backend or account needed. The first submission from a
        new address triggers a one-time confirmation email you'll need to
        click — after that, submissions arrive normally. Swap the action URL
        to a different address any time by editing it below.
      */}
      <form
        className="contact-form"
        action="https://formsubmit.co/info.antwerpflats@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_subject" value="New inquiry from antwerpflats.biz" />
        <input type="hidden" name="_template" value="table" />
        {/* Honeypot field to cut down on spam bots */}
        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

        <div className="contact-form-row">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="Name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="Email" required />
          </div>
        </div>

        <div className="contact-form-row">
          <div>
            <label htmlFor="move_in">Move-in date</label>
            <input type="date" id="move_in" name="Move-in date" />
          </div>
          <div>
            <label htmlFor="duration">Expected duration</label>
            <select id="duration" name="Expected duration">
              <option>1–2 months</option>
              <option>3–5 months</option>
              <option>6–11 months</option>
              <option>1 year or more</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>

        <div className="contact-form-row">
          <div>
            <label htmlFor="group_size">Group size</label>
            <select id="group_size" name="Group size">
              <option>1 person</option>
              <option>2 people</option>
              <option>3–4 people</option>
              <option>5+ people</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget">Budget range (monthly)</label>
            <select id="budget" name="Budget range">
              <option>Under €1,000</option>
              <option>€1,000–€2,000</option>
              <option>€2,000–€3,500</option>
              <option>€3,500+</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="apartment">Apartment of interest (optional)</label>
          <select id="apartment" name="Apartment of interest">
            <option value="">No preference / not sure</option>
            {apartments.map((apt) => (
              <option value={apt.name} key={apt.slug}>
                {apt.name} — {apt.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message">Anything else we should know?</label>
          <textarea id="message" name="Message" rows="4"></textarea>
        </div>

        <p style={{ fontSize: '0.82rem', color: 'var(--mist)' }}>
          By submitting, you agree to your data being processed as
          described in our{' '}
          <a href="/privacy" style={{ textDecoration: 'underline' }}>
            privacy policy
          </a>
          .
        </p>

        <button type="submit" className="btn-primary" style={{ border: 'none', cursor: 'pointer', width: 'fit-content' }}>
          Send inquiry
        </button>
      </form>
    </div>
  );
}
