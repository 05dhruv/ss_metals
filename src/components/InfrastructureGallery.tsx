'use client';

import Link from 'next/link';
import { useModals } from './ProductModals';

const INFRA_FEATURES = [
  {
    title: 'Deep draw press lines',
    desc: 'High-tonnage hydraulic presses for consistent forming.',
  },
  {
    title: 'Beading and trimming',
    desc: 'Automatic lines for uniform Kalvat beading and edges.',
  },
  {
    title: 'Quality testing',
    desc: 'In-house metallurgical and dimensional checks on every batch.',
  },
  {
    title: 'Dispatch warehouse',
    desc: 'Staging and packing in Moradabad for fast dispatch.',
  },
];

const SHOWCASE_GALLERY = [
  {
    src: '/img/infrastructure/plant-overview.jpg',
    title: 'Plant overview — Moradabad',
    subtitle: 'High-capacity integrated plant in Katghar, Moradabad',
  },
  {
    src: '/img/infrastructure/warehouse-staging.jpg',
    title: 'Factory floor and warehouse staging',
    subtitle: 'Systematic vertical storage of steel pipes, tubes, and raw inventory',
  },
  {
    src: '/img/infrastructure/deep-draw-lines.jpg',
    title: 'Heavy deep draw and production lines',
    subtitle: 'High-tonnage hydraulic deep draw press lines & raw steel bar stock',
  },
  {
    src: '/img/infrastructure/kalvat-storage.jpg',
    title: 'Unfinished Kalvat storage and quality staging',
    subtitle: 'Precision machined unfinished kalvat containers, flanges & components',
  },
  {
    src: '/img/infrastructure/dispatch-fasteners.jpg',
    title: 'Dispatch warehouse',
    subtitle: 'Organized hardware staging, bulk fasteners & export carton loading',
  },
  {
    src: '/img/infrastructure/metallurgical-testing.jpg',
    title: 'In-house metallurgical and dimensional testing',
    subtitle: 'Perforated sheets, micron thickness and clinical metallurgical validation',
  },
];

export default function InfrastructureGallery() {
  const { openLightbox } = useModals();

  return (
    <div>
      {/* 4 Feature Highlight Cards */}
      <div className="infra-features-grid" data-aos="fade-up">
        {INFRA_FEATURES.map((item, idx) => (
          <div
            className="infra-feature-card"
            key={idx}
            data-aos="fade-up"
            data-aos-delay={(idx + 1) * 70}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 6-Photo Industrial Showcase Grid */}
      <div className="infra-gallery-grid-v2">
        {SHOWCASE_GALLERY.map((item, idx) => (
          <div
            className="infra-item-card"
            key={idx}
            data-aos="fade-up"
            data-aos-delay={(idx % 3) * 100}
            onClick={() => openLightbox(item.src, item.title)}
          >
            <div className="infra-img-box">
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="infra-zoom-hint">
                <i className="fa-solid fa-expand"></i>
              </div>
            </div>
            <div className="infra-item-title">{item.title}</div>
          </div>
        ))}
      </div>

      {/* Action Buttons Below Grid */}
      <div
        data-aos="fade-up"
        style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginTop: '20px',
        }}
      >
        <Link
          href="/contact?subject=factory-visit"
          className="btn btn-primary btn-lg"
          style={{ padding: '12px 28px', fontSize: '0.98rem' }}
        >
          Plan a factory visit
        </Link>
        <a
          href="https://wa.me/919412236335?text=Hello%20SS%20Metals%2C%20I%20would%20like%20to%20plan%20a%20factory%20visit%20to%20your%20Moradabad%20plant"
          target="_blank"
          rel="noopener"
          className="btn btn-whatsapp btn-lg"
          style={{ padding: '12px 24px', fontSize: '0.98rem' }}
        >
          <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
