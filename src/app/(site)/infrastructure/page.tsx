import type { Metadata } from 'next';
import InfrastructureGallery from '@/components/InfrastructureGallery';

export const metadata: Metadata = {
  title: 'Infrastructure & Plant | SS Metals Moradabad',
  description:
    'A fully automatic manufacturing plant built for export-quality unfinished steelware. Tour SS Metals heavy deep draw presses, warehouse, and quality testing facility in Moradabad.',
};

export default function InfrastructurePage() {
  return (
    <>
      {/* Page Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #061729 0%, #0a2540 60%, #123456 100%)',
          color: '#ffffff',
          padding: 'clamp(40px, 8vw, 80px) 0 clamp(35px, 6vw, 65px)',
        }}
      >
        <div className="container" data-aos="fade-up">
          <h1
            style={{
              fontSize: 'clamp(1.85rem, 5vw, 3.1rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.8px',
              marginBottom: '16px',
            }}
          >
            Infrastructure and plant
          </h1>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)',
              color: '#cbd5e1',
              maxWidth: '720px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            A fully automatic manufacturing plant built for export-quality unfinished steelware.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: '60px 0 90px', background: '#ffffff' }}>
        <div className="container">
          <InfrastructureGallery />
        </div>
      </section>
    </>
  );
}
