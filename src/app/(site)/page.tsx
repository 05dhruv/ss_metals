import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import PopularProductsSection from '@/components/PopularProductsSection';
import StatsCounter from '@/components/StatsCounter';
import InfrastructurePreviewSection from '@/components/InfrastructurePreviewSection';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <>
      {/* Hero Slider with 8k Photorealistic Banners */}
      <HeroSlider />

      {/* Trust Strip Bar */}
      <section className="trust-strip">
        <div className="container trust-strip-inner" data-aos="fade-up">
          <div className="trust-item" data-aos="fade-up" data-aos-delay="50">
            <i className="fa-solid fa-industry"></i>
            <span>Integrated Manufacturing Facility</span>
          </div>
          <div className="trust-item" data-aos="fade-up" data-aos-delay="100">
            <i className="fa-solid fa-certificate"></i>
            <span>ISO Standard Compliance</span>
          </div>
          <div className="trust-item" data-aos="fade-up" data-aos-delay="150">
            <i className="fa-solid fa-chart-line"></i>
            <span>35,000+ Units Daily Output</span>
          </div>
          <div className="trust-item" data-aos="fade-up" data-aos-delay="200">
            <i className="fa-solid fa-globe"></i>
            <span>Export &amp; Domestic Supply</span>
          </div>
          <div className="trust-item" data-aos="fade-up" data-aos-delay="250">
            <i className="fa-solid fa-bolt"></i>
            <span>Ready Stock Fast Dispatch</span>
          </div>
        </div>
      </section>

      {/* Ready Stock Callout Bar */}
      <section className="ready-stock-strip" data-aos="fade-up">
        <div className="container ready-stock-strip-inner">
          <div className="rss-left">
            <div className="rss-icon">
              <i className="fa-solid fa-cubes-stacked"></i>
            </div>
            <div className="rss-text">
              <h4>Looking for Immediate Delivery? Check Ready Stock Inventory</h4>
              <p>We maintain active warehouse stock of Ice Buckets, Taper Mugs, and Jug Sets ready for immediate loading.</p>
            </div>
          </div>
          <div>
            <Link href="/ready-stock" className="btn btn-accent">
              <i className="fa-solid fa-arrow-right"></i> Browse Ready Stock Table
            </Link>
          </div>
        </div>
      </section>

      {/* Key Credentials / Badges Section */}
      <section className="section-credentials">
        <div className="container">
          <div className="credentials-grid">
            <div className="credential-card" data-aos="fade-up" data-aos-delay="100">
              <div className="credential-img">
                <img src="/img/badges/since2000.png" alt="Since 2000 Badge" />
              </div>
              <div className="credential-info">
                <h3>Since 2000</h3>
                <p>Over 24 years of continuous excellence in stainless steelware and kitchenware manufacturing.</p>
              </div>
            </div>

            <div className="credential-card" data-aos="fade-up" data-aos-delay="200">
              <div className="credential-img">
                <img src="/img/badges/iso.png" alt="ISO Certified" />
              </div>
              <div className="credential-info">
                <h3>ISO Certified</h3>
                <p>Adherence to rigorous international quality management systems and precise manufacturing standards.</p>
              </div>
            </div>

            <div className="credential-card" data-aos="fade-up" data-aos-delay="300">
              <div className="credential-img">
                <img src="/img/badges/exportquality.png" alt="Export Quality" />
              </div>
              <div className="credential-info">
                <h3>Export Quality</h3>
                <p>Supplying world-class unfinished KALVAT products customized for top global export businesses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="section-about">
        <div className="container">
          <div className="about-grid">
            <div data-aos="fade-right">
              <span className="section-kicker">Welcome to SS Metals</span>
              <h2 className="section-title">Pioneering Branded &amp; Unfinished Steelware in India</h2>
              <div className="title-divider"></div>
              <p className="about-lead">
                SS Metals is a well-known steelware manufacturing company providing premium branded
                stainless steel kitchenware in India and global export markets.
              </p>

              <div className="about-body">
                <p>
                  Established in 2000, the relentless quality of our products has earned profound goodwill and made SS
                  Metals a benchmark name in the kitchenware and raw steel supply industry today.
                </p>
                <p>
                  We operate a fully automatic plant incorporating heavy hydraulic deep draw presses, high-speed beading lines,
                  and shearing machines to manufacture the best quality steelware meeting international standards.
                </p>
                <p>
                  Every product from the house of SS Metals is a result of enduring master craftsmanship, with complete
                  in-house clinical metallurgical and dimensional quality checks prior to dispatch.
                </p>
              </div>

              <h4 style={{ fontSize: '1rem', color: 'var(--primary)', marginTop: '14px' }}>
                Steel Grades Manufactured &amp; Stocked:
              </h4>
              <div className="grades-pill-group">
                <span className="grade-badge">Grade JSLU</span>
                <span className="grade-badge">Grade J4</span>
                <span className="grade-badge">Grade 304</span>
                <span className="grade-badge">Grade 316</span>
                <span className="grade-badge">Grade 410</span>
                <span className="grade-badge">Grade 430</span>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                <Link href="/company-profile" className="btn btn-primary">
                  <i className="fa-solid fa-circle-info"></i> Full Company Profile
                </Link>
                <Link href="/infrastructure" className="btn btn-outline">
                  <i className="fa-solid fa-industry"></i> Factory &amp; Plant Tour
                </Link>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="about-media-card">
                <img src="/img/infrastructure/infra-plant-1.jpg" alt="SS Metals Factory Floor" />
                <div className="about-floating-badge">
                  <div className="num">35K+</div>
                  <div className="lbl">Pieces Produced Daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Kalvat Products Showcase */}
      <PopularProductsSection />

      {/* Live Stats Counter */}
      <StatsCounter />

      {/* Infrastructure Preview Gallery */}
      <InfrastructurePreviewSection />

      {/* Modern CTA Banner */}
      <section
        data-aos="zoom-in"
        style={{
          padding: 'clamp(45px, 7vw, 80px) 0',
          background: 'linear-gradient(135deg, #061729 0%, #0a2540 50%, #163e69 100%)',
          color: '#ffffff',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ maxWidth: '820px', position: 'relative', zIndex: 2 }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(217, 119, 6, 0.2)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: '#fcd34d',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              padding: '6px 16px',
              borderRadius: '30px',
              marginBottom: '16px',
            }}
          >
            Direct Factory Partnership
          </span>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.5px' }}>
            Partner with India&apos;s Leading Kalvat Manufacturer
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: 'clamp(0.92rem, 2vw, 1.1rem)', marginBottom: '32px', lineHeight: 1.7 }}>
            Whether you need custom-dimension unfinished utensils, ready stock fast dispatch, or raw steel coils,
            seamless pipes and circles, our sales desk is ready to assist your business.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-accent btn-lg">
              <i className="fa-solid fa-paper-plane"></i> Send Business Enquiry
            </Link>
            <a
              href="https://wa.me/919412236335"
              target="_blank"
              rel="noopener"
              className="btn btn-whatsapp btn-lg"
            >
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
