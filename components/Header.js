'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

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
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            Antwerp<span>flats</span>
          </Link>

          <nav className="nav-desktop">
            <Link href="/">Home</Link>
            <Link href="/apartments">Apartments</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <Link href="/contact" className="nav-cta nav-cta-desktop">
            Check availability
          </Link>

          <button
            className="hamburger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`hamburger-line${open ? ' open' : ''}`} />
            <span className={`hamburger-line${open ? ' open' : ''}`} />
            <span className={`hamburger-line${open ? ' open' : ''}`} />
          </button>
        </div>

        <div className={`mobile-nav${open ? ' open' : ''}`}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/apartments" onClick={() => setOpen(false)}>Apartments</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Check availability
          </Link>
        </div>
      </header>
    </>
  );
}
