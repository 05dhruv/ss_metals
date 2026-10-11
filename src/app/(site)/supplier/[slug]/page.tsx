import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SUPPLIER_LINES, SupplierLine } from '@/lib/supplier-lines-data';

interface SupplierLinePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SUPPLIER_LINES.map((line) => ({
    slug: line.slug,
  }));
}

export function generateMetadata({ params }: SupplierLinePageProps): Metadata {
  const line = SUPPLIER_LINES.find((l) => l.slug === params.slug);
  if (!line) return { title: 'Supplier Line | SS Metals' };

  return {
    title: `${line.name} (Supply & Stock) | SS Metals Moradabad`,
    description: `${line.headline}. ${line.lead} Top stainless steel stockist and raw material supplier in Moradabad.`,
  };
}

export default function SupplierLinePage({ params }: SupplierLinePageProps) {
  const line = SUPPLIER_LINES.find((l) => l.slug === params.slug);
  if (!line) {
    notFound();
  }

  const otherLines = SUPPLIER_LINES.filter((l) => l.slug !== line.slug);

  const waEnquiryUrl = `https://wa.me/919412236335?text=${encodeURIComponent(
    `Hello SS Metals, I want to inquire about availability and pricing for: ${line.name}.`
  )}`;

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #061729 0%, #0a2540 60%, #123456 100%)',
          color: '#ffffff',
          padding: '70px 0 60px',
          position: 'relative',
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
            Supplier program &bull; SS Metals
          </span>

          <h1
            style={{
              fontSize: 'clamp(1.85rem, 5vw, 2.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.5px',
              marginBottom: '16px',
              textTransform: 'capitalize',
            }}
          >
            {line.headline}
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: '#cbd5e1',
              maxWidth: '680px',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}
          >
            {line.lead}
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link
              href={`/contact?product=${encodeURIComponent(line.name)}`}
              className="btn btn-accent"
              style={{ padding: '12px 26px', fontSize: '0.96rem' }}
            >
              Request quote
            </Link>
            <Link
              href="/ready-stock"
              className="btn btn-outline-white"
              style={{ padding: '12px 24px', fontSize: '0.96rem' }}
            >
              Check ready stock
            </Link>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section style={{ padding: '70px 0 90px', background: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.6fr 1fr',
              gap: '50px',
              alignItems: 'start',
            }}
            className="supplier-detail-grid"
          >
            {/* Left Column: Details & Specs */}
            <div data-aos="fade-right">
              <h2
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: '#0a2540',
                  marginBottom: '18px',
                  letterSpacing: '-0.5px',
                }}
              >
                {line.aboutTitle}
              </h2>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#475569',
                  lineHeight: 1.7,
                  marginBottom: '28px',
                }}
              >
                {line.aboutDesc}
              </p>

              {/* Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
                {line.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '0.98rem',
                      color: '#334155',
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        marginTop: '8px',
                        flexShrink: 0,
                      }}
                    ></span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Technical Specifications Table */}
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#0a2540',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <i className="fa-solid fa-sliders" style={{ color: 'var(--accent)', fontSize: '1.1rem' }}></i>
                Technical Supply Specifications
              </h3>

              <div
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <tbody>
                    {line.specs.map((s, idx) => (
                      <tr
                        key={idx}
                        style={{
                          background: idx % 2 === 0 ? '#f8fafc' : '#ffffff',
                          borderBottom: idx < line.specs.length - 1 ? '1px solid #e2e8f0' : 'none',
                        }}
                      >
                        <th
                          style={{
                            padding: '12px 18px',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            color: '#0a2540',
                            width: '38%',
                          }}
                        >
                          {s.label}
                        </th>
                        <td
                          style={{
                            padding: '12px 18px',
                            fontSize: '0.9rem',
                            color: '#334155',
                          }}
                        >
                          {s.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column: Inquiry Card */}
            <div data-aos="fade-left">
              <div
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '32px 28px',
                  background: '#ffffff',
                  boxShadow: '0 12px 30px -4px rgba(10, 37, 64, 0.08)',
                  position: 'sticky',
                  top: '110px',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#0a2540',
                    marginBottom: '10px',
                  }}
                >
                  Enquire on this line
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: '#64748b',
                    lineHeight: 1.5,
                    marginBottom: '26px',
                  }}
                >
                  Share grade, size, quantity, and delivery location for availability and pricing.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a
                    href={waEnquiryUrl}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-whatsapp"
                    style={{
                      width: '100%',
                      padding: '13px',
                      justifyContent: 'center',
                      fontSize: '0.96rem',
                    }}
                  >
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.2rem' }}></i> WhatsApp enquiry
                  </a>

                  <Link
                    href={`/contact?product=${encodeURIComponent(line.name)}`}
                    className="btn btn-outline"
                    style={{
                      width: '100%',
                      padding: '12px',
                      justifyContent: 'center',
                      fontSize: '0.94rem',
                      borderColor: '#cbd5e1',
                      color: '#0a2540',
                    }}
                  >
                    Contact form
                  </Link>
                </div>

                <div
                  style={{
                    marginTop: '28px',
                    paddingTop: '20px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '0.85rem',
                    color: '#64748b',
                    lineHeight: 1.5,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <i className="fa-solid fa-phone" style={{ color: 'var(--accent)' }}></i>
                    <span>Direct Call: <strong>+91 9412236335</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-truck-fast" style={{ color: 'var(--accent)' }}></i>
                    <span>Fast dispatch from Moradabad, Uttar Pradesh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Browse Other Supplier Lines */}
          <div style={{ marginTop: '90px' }} data-aos="fade-up">
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px', flexWrap: 'wrap', gap: '14px' }}>
                <div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Raw Materials &amp; Supply
                  </span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0a2540', marginTop: '4px' }}>
                    Explore Other Supplier Lines
                  </h3>
                </div>
                <Link href="/supplier" className="btn btn-outline btn-sm">
                  View All Supplier Lines <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
                  gap: '20px',
                }}
              >
                {otherLines.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/supplier/${other.slug}`}
                    style={{
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '20px',
                      textDecoration: 'none',
                      background: '#ffffff',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                    className="supplier-card-link"
                  >
                    <div>
                      <h4 style={{ color: '#0a2540', fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>
                        {other.name}
                      </h4>
                      <p style={{ color: '#64748b', fontSize: '0.86rem', lineHeight: 1.45, marginBottom: '14px' }}>
                        {other.lead}
                      </p>
                    </div>
                    <span style={{ color: 'var(--accent-dark)', fontWeight: 600, fontSize: '0.86rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      View specifications &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
