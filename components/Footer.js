export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap footer-grid">
        <div>
          <h3>Antwerpflats</h3>
          <p>
            Furnished apartments, all-inclusive. Leading provider of temporary
            housing in Antwerp since 1996.
          </p>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:info.antwerpflats@gmail.com">info.antwerpflats@gmail.com</a>
          <a href="tel:+32472421327">+32 472 42 13 27</a>
          <a href="/contact">Check availability →</a>
        </div>
        <div className="footer-col">
          <h4>Address</h4>
          <p>
            Italiëlei
            <br />
            2000 Antwerpen, Belgium
          </p>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© 1996–{new Date().getFullYear()} ANTWERPFLATS</span>
      </div>
    </footer>
  );
}
