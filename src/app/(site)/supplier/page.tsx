import type { Metadata } from 'next';
import Link from 'next/link';
import { SUPPLIER_LINES } from '@/lib/supplier-lines-data';

export const metadata: Metadata = {
  title: 'Supplier Program & Raw Materials | SS Metals Moradabad',
  description:
    'Complete supplier lines by SS Metals: Stainless Steel Coils, Sheets, Circles, Blanks, Wires, Rods, and Pipes. High quality raw material supply with express dispatch.',
};

export default function SupplierPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #061729 0%, #0a2540 60%, #123456 100%)',
          color: '#ffffff',
          padding: '70px 0 60px',
        }}
      >
        <div className="container" data-aos="fade-up">
          <span
            style={{
              display: 'inline-block',
              color: '#f59e0b',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '14px',
            }}
          >
            Direct Factory Supply Program
          </span>
          <h1
            style={{
              fontSize: 'clamp(1.85rem, 5vw, 2.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.5px',
              marginBottom: '16px',
            }}
          >
            All Supplier Lines &amp; Raw Materials
          </h1>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
              color: '#cbd5e1',
              maxWidth: '680px',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}
          >
            SS Metals is a trusted stockist and primary processor of stainless steel coils, sheets, circles, blanks,
            wires, rods, and pipes for industrial fabrication and utensil manufacturers across India.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-accent">
              <i className="fa-solid fa-paper-plane"></i> Request Raw Material Quote
            </Link>
            <a
              href="https://wa.me/919412236335?text=Hello%20SS%20Metals%2C%20I%20want%20to%20inquire%20about%20your%20Supplier%20Program"
              target="_blank"
              rel="noopener"
              className="btn btn-whatsapp"
            >
              <i className="fa-brands fa-whatsapp"></i> Chat with Supply Desk
            </a>
          </div>
        </div>
      </section>

      {/* Grid of All 7 Supplier Lines */}
      <section style={{ padding: '70px 0 90px', background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-kicker">Catalog of Raw Materials</span>
            <h2 className="section-title">7 Specialized Industrial Supply Lines</h2>
            <div className="title-divider center"></div>
            <p style={{ color: 'var(--text-muted)' }}>
              Select any supplier line below to inspect detailed gauge tolerances, steel grades, custom slit widths, and
              instant WhatsApp pricing.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
              gap: '24px',
            }}
          >
            {SUPPLIER_LINES.map((line, idx) => (
              <div
                key={line.slug}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
                style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                }}
                className="supplier-card-link"
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span
                      style={{
                        background: 'rgba(10, 37, 64, 0.08)',
                        color: 'var(--primary)',
                        padding: '4px 12px',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Line #{idx + 1}
                    </span>
                    <span
                      style={{
                        color: '#16a34a',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <i className="fa-solid fa-circle-check"></i> Ready Stock Available
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: '#0a2540',
                      marginBottom: '8px',
                    }}
                  >
                    {line.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#64748b',
                      lineHeight: 1.5,
                      marginBottom: '20px',
                    }}
                  >
                    {line.lead}
                  </p>

                  <div style={{ marginBottom: '24px' }}>
                    <h5
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#94a3b8',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '8px',
                      }}
                    >
                      Key Highlights:
                    </h5>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {line.bullets.slice(0, 3).map((b, bIdx) => (
                        <li
                          key={bIdx}
                          style={{
                            fontSize: '0.85rem',
                            color: '#334155',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                          }}
                        >
                          <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>&bull;</span>
                          <span style={{ lineHeight: 1.4 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '18px', display: 'flex', gap: '10px' }}>
                  <Link
                    href={`/supplier/${line.slug}`}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    View Specifications &rarr;
                  </Link>
                  <a
                    href={`https://wa.me/919412236335?text=${encodeURIComponent(
                      `Hello SS Metals, I want to inquire about availability and pricing for ${line.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-whatsapp btn-sm"
                    title={`Inquire about ${line.name} on WhatsApp`}
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
