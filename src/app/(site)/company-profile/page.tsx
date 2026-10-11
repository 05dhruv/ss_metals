import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Profile | SS Metals Moradabad',
  description:
    'Learn about SS Metals history since 2000, manufacturing capabilities, stainless steel grades (304, 316, JSLU), and master craftsmanship.',
};

export default function CompanyProfilePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-shield-halved"></i> 24+ Years Manufacturing Heritage
          </span>
          <h1 className="page-hero-title">Company Profile &amp; History</h1>
          <p className="page-hero-lead">
            Established in 2000, SS Metals is a premier pioneer in stainless steelware, specializing in
            Unfinished (KALVAT) products and prime raw materials.
          </p>
        </div>
      </section>

      {/* Detailed Story */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="about-grid">
            <div data-aos="fade-right">
              <span className="section-kicker">Our Heritage &amp; Journey</span>
              <h2 className="section-title">Exceeding Expectations with Every Piece</h2>
              <div className="title-divider"></div>
              <p className="about-lead">
                SS Metals was established in 2000 in Moradabad, Uttar Pradesh &ndash; globally known as
                the brass and metal hub of India.
              </p>
              <div className="about-body">
                <p>
                  Over the past two decades, our relentless adherence to product quality, dimensional accuracy, and
                  timely bulk deliveries has earned immense goodwill, making SS Metals a reputable brand
                  among kitchenware manufacturers, exporters, and dealers across the country.
                </p>
                <p>
                  Pioneering the concept of high-precision unfinished (KALVAT) products, we empower exporters and
                  finishing houses by providing pristine, defect-free shapes that significantly reduce their polishing
                  costs and cycle times.
                </p>
                <p>
                  Our expansive fully automatic plant incorporates advanced deep drawing hydraulic presses,
                  high-speed beading machines, circle shearing lines, and specialized tooling designed for mass
                  production without compromising structural integrity.
                </p>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="about-media-card">
                <img
                  src="/img/infrastructure/infra-plant-2.jpg"
                  alt="SS Metals Plant"
                  loading="lazy"
                  decoding="async"
                />
                <div className="about-floating-badge">
                  <div className="num">2000</div>
                  <div className="lbl">Year of Establishment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section
        style={{
          padding: '80px 0',
          background: 'var(--bg-light)',
          borderTop: '1px solid var(--steel-border)',
          borderBottom: '1px solid var(--steel-border)',
        }}
      >
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-kicker">Core Strengths</span>
            <h2 className="section-title">Why Exporters &amp; Brands Choose Us</h2>
            <div className="title-divider center"></div>
          </div>

          <div className="credentials-grid">
            <div
              className="credential-card"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ flexDirection: 'column', textAlign: 'center', padding: '36px 24px' }}
            >
              <div className="credential-img" style={{ width: '80px', height: '80px', marginBottom: '12px' }}>
                <img src="/img/badges/since2000.png" alt="Since 2000" loading="lazy" decoding="async" />
              </div>
              <h3>Since 2000 Heritage</h3>
              <p>
                Over 24 years of proprietary tooling, deep metallurgical understanding, and longstanding
                relationships across India&apos;s metal craft clusters.
              </p>
            </div>

            <div
              className="credential-card"
              data-aos="fade-up"
              data-aos-delay="200"
              style={{ flexDirection: 'column', textAlign: 'center', padding: '36px 24px' }}
            >
              <div className="credential-img" style={{ width: '80px', height: '80px', marginBottom: '12px' }}>
                <img src="/img/badges/iso.png" alt="ISO Quality" loading="lazy" decoding="async" />
              </div>
              <h3>ISO Quality Standards</h3>
              <p>
                Standardized raw material testing, uniform wall thickness, seamless beadings, and clinical quality
                checks on every single production run.
              </p>
            </div>

            <div
              className="credential-card"
              data-aos="fade-up"
              data-aos-delay="300"
              style={{ flexDirection: 'column', textAlign: 'center', padding: '36px 24px' }}
            >
              <div className="credential-img" style={{ width: '80px', height: '80px', marginBottom: '12px' }}>
                <img src="/img/badges/exportquality.png" alt="Export Focus" loading="lazy" decoding="async" />
              </div>
              <h3>Export Customization</h3>
              <p>
                Specialist in barwares, bathwares, and drinkware created precisely to customer drawings, CAD specs, and
                international food-grade standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Raw Material Stockiest Details */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="about-grid">
            <div data-aos="fade-right">
              <span className="section-kicker">Direct Stockiest &amp; Supplier</span>
              <h2 className="section-title">Raw Material Supply &amp; Steel Grades</h2>
              <div className="title-divider"></div>
              <p className="about-lead">
                In addition to finished and unfinished utensils, SS Metals is a major direct stockiest of
                raw stainless steel materials.
              </p>
              <div className="about-body">
                <p>We stock and supply prime stainless steel:</p>
                <ul style={{ listStyle: 'none', marginBottom: '18px' }}>
                  <li style={{ marginBottom: '8px' }}>
                    <i className="fa-solid fa-check" style={{ color: 'var(--accent)', marginRight: '8px' }}></i>{' '}
                    <strong>Stainless Steel Circles &amp; Farma:</strong> Pre-cut deep-drawing quality circles in all
                    diameters and gauges (including Jindal products).
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <i className="fa-solid fa-check" style={{ color: 'var(--accent)', marginRight: '8px' }}></i>{' '}
                    <strong>Pipes &amp; Tubes:</strong> Seamless steel pipes, mild steel (MS) pipes, MS square pipes, and
                    welded pipes.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <i className="fa-solid fa-check" style={{ color: 'var(--accent)', marginRight: '8px' }}></i>{' '}
                    <strong>Plates, Coils &amp; Sheets:</strong> Stainless steel plates, cold-rolled and hot-rolled coils in
                    standard and custom widths.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <i className="fa-solid fa-check" style={{ color: 'var(--accent)', marginRight: '8px' }}></i>{' '}
                    <strong>Stainless Steel Patta &amp; Patti:</strong> Slit coils and strips for precision stamping,
                    forming, and fabrication.
                  </li>
                </ul>
                <h4 style={{ fontSize: '1rem', color: 'var(--primary)' }}>Available Grades:</h4>
                <div className="grades-pill-group">
                  <span className="grade-badge">AISI 304</span>
                  <span className="grade-badge">AISI 316</span>
                  <span className="grade-badge">AISI 410</span>
                  <span className="grade-badge">AISI 430</span>
                  <span className="grade-badge">J4 Quality</span>
                  <span className="grade-badge">JSLU Grade</span>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="about-media-card">
                <img
                  src="/img/infrastructure/infra-stacking.jpg"
                  alt="Stainless Steel Storage"
                  loading="lazy"
                  decoding="async"
                />
                <div className="about-floating-badge" style={{ background: 'rgba(217, 119, 6, 0.95)' }}>
                  <div className="num" style={{ color: '#ffffff' }}>
                    100%
                  </div>
                  <div className="lbl" style={{ color: '#ffffff' }}>
                    Prime Certified Raw Material
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
