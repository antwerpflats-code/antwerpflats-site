const ITEMS = [
  'EST. 1996',
  '40+ APARTMENTS · ANTWERP CENTER',
  'ALL COSTS INCLUDED — WATER · ELECTRICITY · HEATING · FURNITURE',
  'MIN. STAY 1 MONTH',
  'DIRECT FROM OWNER',
];

export default function ManifestStrip() {
  // Render the list twice back-to-back so the CSS scroll animation loops seamlessly
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="manifest">
      <div className="manifest-track">
        {doubled.map((item, i) => (
          <span className="manifest-item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
