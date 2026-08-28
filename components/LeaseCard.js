export default function LeaseCard({ apartment, sticky = false }) {
  const {
    name,
    price_monthly,
    deposit,
    reservation_fee,
    notice_period,
    costs_included = [],
  } = apartment;

  return (
    <div className={`lease-card${sticky ? ' detail-lease-card' : ''}`}>
      <div className="lease-head">
        <span>MANIFEST</span>
        <span>{name}</span>
      </div>

      {costs_included.map((item) => (
        <div className="lease-row" key={item}>
          <span className="label">{item}</span>
          <span className="val">included</span>
        </div>
      ))}

      {deposit && (
        <div className="lease-row">
          <span className="label">Deposit</span>
          <span className="val">€{deposit.toLocaleString('en-BE')}</span>
        </div>
      )}
      {reservation_fee && (
        <div className="lease-row">
          <span className="label">Reservation fee</span>
          <span className="val">€{reservation_fee.toLocaleString('en-BE')}</span>
        </div>
      )}
      {notice_period && (
        <div className="lease-row">
          <span className="label">Notice period</span>
          <span className="val">{notice_period}</span>
        </div>
      )}

      <div className="lease-row total">
        <span className="label">Total, monthly</span>
        <span className="val">€{price_monthly.toLocaleString('en-BE')}</span>
      </div>

      <div className="lease-card-cta">
        <a href="/contact" className="btn-primary">
          Check availability
        </a>
        <a
          href={`mailto:info.antwerpflats@gmail.com?subject=${encodeURIComponent(
            `Inquiry about ${name}`
          )}`}
          className="btn-secondary"
        >
          Email us about {name}
        </a>
      </div>
      <div className="lease-note">
        Minimum stay 1 month · registration required under the Flemish
        Housing decree.
      </div>
    </div>
  );
}
