import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid" data-aos="fade-up">
          <div className="footer-brand">
            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  background: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                <img
                  src="/img/logo/logo.png"
                  alt="SS Metals Logo"
                  style={{ height: '40px', width: 'auto' }}
                />
              </div>
            </div>
            <p>
              Manufacturers of Stainless Steel Unfinished (KALVAT) Utensils, Specialist in Barwares,
              Bathwares &amp; Kitchenware. Stockiest of Stainless Steel Patta, Patti, Coil, Circles, Sheets
              &amp; Farma.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '14px', flexWrap: 'wrap' }}>
              <span
                className="grade-badge"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fbbf24',
                  borderColor: 'rgba(255,255,255,0.2)',
                }}
              >
                ISO Certified
              </span>
              <span
                className="grade-badge"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: '#ffffff',
                  borderColor: 'rgba(255,255,255,0.2)',
                }}
              >
                Export Quality
              </span>
              <span
                className="grade-badge"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: '#ffffff',
                  borderColor: 'rgba(255,255,255,0.2)',
                }}
              >
                Est. 2000
              </span>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">
                  <i className="fa-solid fa-angle-right"></i> Home
                </Link>
              </li>
              <li>
                <Link href="/company-profile">
                  <i className="fa-solid fa-angle-right"></i> Company Profile
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <i className="fa-solid fa-angle-right"></i> Products Catalogue
                </Link>
              </li>
              <li>
                <Link href="/ready-stock">
                  <i className="fa-solid fa-angle-right"></i> Ready Stock Inventory
                </Link>
              </li>
              <li>
                <Link href="/supplier">
                  <i className="fa-solid fa-angle-right"></i> Supplier Program &amp; Materials
                </Link>
              </li>
              <li>
                <Link href="/infrastructure">
                  <i className="fa-solid fa-angle-right"></i> Infrastructure &amp; Plant
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <i className="fa-solid fa-angle-right"></i> Contact &amp; Enquiry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Product Ranges</h4>
            <ul className="footer-links">
              <li>
                <Link href="/products">
                  <i className="fa-solid fa-angle-right"></i> Ice Buckets &amp; Chillers
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <i className="fa-solid fa-angle-right"></i> Tapers &amp; Mugs
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <i className="fa-solid fa-angle-right"></i> Water Jugs &amp; Sets
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <i className="fa-solid fa-angle-right"></i> Cutlery Holders
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <i className="fa-solid fa-angle-right"></i> Kalvat Pots &amp; Utensils
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <i className="fa-solid fa-angle-right"></i> Barware &amp; Bathware
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Factory &amp; Contact</h4>
            <div className="footer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <strong>SS Metals</strong>
                <br />
                19, Chitraguptnagar, Near Park, Shivpuri, Katghar, Moradabad, Uttar Pradesh, 244001, India
              </div>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-phone"></i>
              <div>
                <a href="tel:+919412236335">+91 9412236335</a>
                <br />
                <a href="tel:+919458771652">+91 9458771652</a> /{' '}
                <a href="tel:+917454874050">+91 7454874050</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <a href="mailto:ssmetals2000@gmail.com">ssmetals2000@gmail.com</a>
              </div>
            </div>
            <div style={{ marginTop: '14px' }}>
              <a
                href="https://wa.me/919412236335?text=Hello%20SS%20Metals%2C%20I%20want%20to%20inquire%20about%20your%20products"
                target="_blank"
                rel="noopener"
                className="btn btn-whatsapp btn-sm"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SS Metals. All Rights Reserved. Moradabad, India.</p>
          <p>Stainless Steel Kalvat Utensils &amp; Raw Materials Stockiest.</p>
        </div>
      </div>
    </footer>
  );
}
