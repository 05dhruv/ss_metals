'use client';

import Link from 'next/link';
import { useModals, ProductModalInfo } from './ProductModals';
import ProductImagePlaceholder from './ProductImagePlaceholder';

const POPULAR_ITEMS: (ProductModalInfo & { displayCategory: string; shortDesc: string })[] = [
  {
    code: 'SMI 16',
    name: 'TAPER MUG',
    category: 'Mugs & Tapers',
    displayCategory: 'Tapers & Mugs',
    stock: '4100 pcs',
    image: '',
    shortDesc: 'High-grade stainless steel with precision unfinished Kalvat beading.',
    specs: {
      Weight: '156 gm',
      Height: '104 mm',
      'Base Die': '60 mm',
      'Upper Die': '88 mm',
      Material: 'Stainless steel (JSLU / J4 / 304 / 316 / 410 / 430)',
      Finish: 'Unfinished (Kalvat) – ready for polish, plating or branding',
    },
  },
  {
    code: 'SMI 1',
    name: 'TAPERS',
    category: 'Ice Buckets & Tapers',
    displayCategory: 'Tapers & Mugs',
    stock: 'Inquire',
    image: '',
    shortDesc: 'High-grade stainless steel with precision unfinished Kalvat beading.',
    specs: {
      Weight: '850 gm',
      Height: '162 mm',
      'Base Die': '115 mm',
      'Upper Die': '163 mm',
      Material: 'Stainless steel (JSLU / J4 / 304 / 316 / 410 / 430)',
      Finish: 'Unfinished (Kalvat) – ready for polish, plating or branding',
    },
  },
  {
    code: 'SMI 20',
    name: 'MUG SETS',
    category: 'Tapers & Mugs',
    displayCategory: 'Tapers & Mugs',
    stock: 'Inquire',
    image: '',
    shortDesc: 'High-grade stainless steel with precision unfinished Kalvat beading.',
    specs: {
      Weight: '144 gm',
      Height: '91 mm',
      'Base Die': '100 mm',
      'Upper Die': '107 mm',
      Material: 'Stainless steel (JSLU / J4 / 304 / 316 / 410 / 430)',
      Finish: 'Unfinished (Kalvat) – ready for polish, plating or branding',
    },
  },
  {
    code: 'SMI 33',
    name: 'JUG SET',
    category: 'Water Jugs',
    displayCategory: 'Water Jugs',
    stock: 'Inquire',
    image: '',
    shortDesc: 'High-grade stainless steel with precision unfinished Kalvat beading.',
    specs: {
      Weight: '78 gm',
      Height: '32 mm',
      'Base Die': '72 mm',
      'Upper Die': '72 mm',
      Material: 'Stainless steel (JSLU / J4 / 304 / 316 / 410 / 430)',
      Finish: 'Unfinished (Kalvat) – ready for polish, plating or branding',
    },
  },
  {
    code: 'SMI 40',
    name: 'INNER BIDDING SMALL POT',
    category: 'Kalvat Pots',
    displayCategory: 'Kalvat Pots',
    stock: '900 pcs',
    image: '',
    shortDesc: 'High-grade stainless steel with precision unfinished Kalvat beading.',
    specs: {
      Weight: '795 gm',
      Height: '205 mm',
      'Base Die': '194 mm',
      'Upper Die': '202 mm',
      Material: 'Stainless steel (JSLU / J4 / 304 / 316 / 410 / 430)',
      Finish: 'Unfinished (Kalvat) – ready for polish, plating or branding',
    },
  },
  {
    code: 'SMI 50',
    name: 'BIG CUTLERY HOLDER',
    category: 'Cutlery Holders',
    displayCategory: 'Cutlery Holders',
    stock: '1200 pcs',
    image: '',
    shortDesc: 'High-grade stainless steel with precision unfinished Kalvat beading.',
    specs: {
      Weight: '159 gm',
      Height: '120 mm',
      'Base Die': '78 mm',
      'Upper Die': '95 mm',
      Material: 'Stainless steel (JSLU / J4 / 304 / 316 / 410 / 430)',
      Finish: 'Unfinished (Kalvat) – ready for polish, plating or branding',
    },
  },
  {
    code: 'SMI 60',
    name: 'L.B INNER BIDDING',
    category: 'Kalvat Pots',
    displayCategory: 'Kalvat Pots',
    stock: 'Inquire',
    image: '',
    shortDesc: 'High-grade stainless steel with precision unfinished Kalvat beading.',
    specs: {
      Detail: 'SINGLE WALL',
      Weight: '400 gm',
      Height: '216 mm',
      'Base Die': '153 mm',
      'Upper Die': '196 mm',
      Material: 'Stainless steel (JSLU / J4 / 304 / 316 / 410 / 430)',
      Finish: 'Unfinished (Kalvat) – ready for polish, plating or branding',
    },
  },
  {
    code: 'SMI 70',
    name: 'BIG CATLARI HOLDER',
    category: 'Cutlery Holders',
    displayCategory: 'Cutlery Holders',
    stock: 'Inquire',
    image: '',
    shortDesc: 'High-grade stainless steel with precision unfinished Kalvat beading.',
    specs: {
      Weight: '653 gm',
      Height: '164 mm',
      'Base Die': '156 mm',
      'Upper Die': '182 mm',
      Material: 'Stainless steel (JSLU / J4 / 304 / 316 / 410 / 430)',
      Finish: 'Unfinished (Kalvat) – ready for polish, plating or branding',
    },
  },
];

export default function PopularProductsSection() {
  const { openProduct } = useModals();

  return (
    <section className="section-popular">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-kicker">Signature Product Highlights</span>
          <h2 className="section-title">Our popular unfinished Kalvat products</h2>
          <div className="title-divider center"></div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Raw craftsmanship from 26 years of manufacturing, ready for polishing, plating or branding.
          </p>
        </div>

        <div className="popular-grid">
          {POPULAR_ITEMS.map((item, idx) => (
            <div
              className="popular-card"
              key={item.code}
              data-aos="fade-up"
              data-aos-delay={(idx % 4) * 80}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Product Placeholder Box (Supports future images seamlessly) */}
              <ProductImagePlaceholder
                src={item.image}
                alt={item.name}
                height={220}
              />

              <div className="popular-body" style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span
                  style={{
                    fontSize: '0.82rem',
                    color: '#64748b',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    marginBottom: '4px',
                    display: 'block',
                  }}
                >
                  {item.displayCategory}
                </span>

                <h3
                  className="popular-title"
                  style={{
                    fontSize: '1.18rem',
                    fontWeight: 800,
                    color: '#0a2540',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3px',
                    marginBottom: '14px',
                  }}
                >
                  {item.name}
                </h3>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                  <a
                    href={`https://wa.me/919412236335?text=${encodeURIComponent(
                      `Hello SS Metals, I am inquiring about product ${item.name} (${item.code})`
                    )}`}
                    target="_blank"
                    rel="noopener"
                    style={{
                      color: '#0284c7',
                      fontWeight: 600,
                      fontSize: '0.92rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none',
                    }}
                  >
                    <i className="fa-brands fa-whatsapp" style={{ color: '#25d366', fontSize: '1.1rem' }}></i>
                    Inquire on WhatsApp
                  </a>

                  <button
                    onClick={() => openProduct(item)}
                    className="btn btn-outline btn-sm"
                    style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                    title="View Technical Specs"
                  >
                    <i className="fa-solid fa-sliders"></i> Specs
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link href="/products" className="btn btn-primary btn-lg">
            <i className="fa-solid fa-border-all"></i> View All 103 Products in Catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}
