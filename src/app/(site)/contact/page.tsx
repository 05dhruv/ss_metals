import type { Metadata } from 'next';
import ContactInquiryForm from '@/components/ContactInquiryForm';

export const metadata: Metadata = {
  title: 'Contact Us & Quotation Request | SS Metals Moradabad',
  description:
    'Get in touch with SS Metals. Contact our sales desk for quotes on Stainless Steel Kalvat Utensils, Pipes and Raw Materials.',
};

export default function ContactPage({ searchParams }: { searchParams: { product?: string } }) {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container" data-aos="fade-up">
          <span className="hero-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-envelope"></i> Quick Quotations &amp; Enquiries
          </span>
          <h1 className="page-hero-title">Contact Us &amp; Request a Quote</h1>
          <p className="page-hero-lead">
            We are a premier manufacturer of Stainless Steel Kalvat Products providing the best quality unfinished
            utensils at factory-direct prices for your export business. Drop your query below.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '70px 0 90px', background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Contact Coordinates */}
            <div className="contact-info-card" data-aos="fade-right">
              <h3>Get In Touch</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginBottom: '30px' }}>
                Reach out directly to our management team for bulk pricing, ready inventory status, or custom OEM
                manufacturing.
              </p>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-text">
                  <h5>Factory &amp; Head Office</h5>
                  <p>
                    19, Chitraguptnagar, Near Park, Shivpuri,
                    <br />
                    Katghar, Moradabad, Uttar Pradesh &ndash; 244001, India
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h5>Direct Telephone</h5>
                  <p>
                    <a href="tel:+919412236335">+91 9412236335</a> (Sales &amp; Enquiries)
                    <br />
                    <a href="tel:+919458771652">+91 9458771652</a> (Customer Support)
                    <br />
                    <a href="tel:+917454874050">+91 7454874050</a> (Alternate)
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h5>Email Address</h5>
                  <p>
                    <a href="mailto:ssmetals2000@gmail.com">ssmetals2000@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div
                  className="contact-icon"
                  style={{
                    background: 'rgba(37, 211, 102, 0.2)',
                    borderColor: 'rgba(37, 211, 102, 0.4)',
                    color: '#25d366',
                  }}
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="contact-text">
                  <h5>Instant WhatsApp Support</h5>
                  <p>
                    <a href="https://wa.me/919412236335" target="_blank" rel="noopener" style={{ color: '#4ade80' }}>
                      +91 9412236335 (Click to Chat)
                    </a>
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '30px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                <h5 style={{ color: '#fbbf24', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Business Hours:
                </h5>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                  Monday &ndash; Saturday: 9:00 AM &ndash; 7:30 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Form Card */}
            <div data-aos="fade-left">
              <ContactInquiryForm defaultProduct={searchParams.product} />
            </div>
          </div>

          {/* Google Map */}
          <div className="map-wrap" data-aos="fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4271.75384780077!2d78.72494689999999!3d28.873655599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDUyJzI1LjIiTiA3OMKwNDMnMjkuOCJF!5e1!3m2!1sen!2sin!4v1791702575638!5m2!1sen!2sin"
              allowFullScreen={false}
              loading="lazy"
              title="SS Metals Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
