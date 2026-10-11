'use client';

import Link from 'next/link';
import { useModals } from './ProductModals';

const INFRA_ITEMS = [
  {
    src: '/img/infrastructure/plant-overview.jpg',
    caption: 'Plant Overview – Moradabad Facility',
    fullCaption: 'Plant Overview — Katghar, Moradabad',
    icon: 'fa-solid fa-industry',
  },
  {
    src: '/img/infrastructure/warehouse-staging.jpg',
    caption: 'Factory Floor & Warehouse Staging',
    fullCaption: 'Warehouse Staging & Steel Storage Racks',
    icon: 'fa-solid fa-layer-group',
  },
  {
    src: '/img/infrastructure/deep-draw-lines.jpg',
    caption: 'Heavy Deep Draw & Production Lines',
    fullCaption: 'Heavy Deep Draw Presses & Steel Bars',
    icon: 'fa-solid fa-gears',
  },
];

export default function InfrastructurePreviewSection() {
  const { openLightbox } = useModals();

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-kicker">World-Class Facility</span>
          <h2 className="section-title">Manufacturing Infrastructure</h2>
          <div className="title-divider center"></div>
          <p style={{ color: 'var(--text-muted)' }}>
            Equipped with high-tonnage hydraulic deep draw presses, automatic beading &amp; trimming lines, and
            state-of-the-art dispatch warehouse located in Moradabad.
          </p>
        </div>

        <div className="infra-gallery-grid">
          {INFRA_ITEMS.map((item, idx) => (
            <div
              className="infra-card"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 120}
              onClick={() => openLightbox(item.src, item.fullCaption)}
            >
              <img src={item.src} alt={item.caption} loading="lazy" />
              <div className="infra-caption">
                <i className={item.icon}></i> {item.caption}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Link href="/infrastructure" className="btn btn-outline">
            <i className="fa-solid fa-images"></i> View Full Infrastructure Gallery (12 Photos)
          </Link>
        </div>
      </div>
    </section>
  );
}
