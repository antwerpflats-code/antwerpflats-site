import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-row">
          <a href="mailto:info.antwerpflats@gmail.com">info.antwerpflats@gmail.com</a>
          <a href="tel:+32472421327">+32 (0) 472 42 13 27</a>
        </div>
      </div>

      <header>
        <div className="header-row wrap">
          <Link href="/" className="logo">
            Antwerp<span>flats</span>
          </Link>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/apartments">Apartments</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <Link href="/contact" className="nav-cta">
            Check availability
          </Link>
        </div>
      </header>
    </>
  );
}
