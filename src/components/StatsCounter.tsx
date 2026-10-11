'use client';

import { useEffect, useRef, useState } from 'react';

const STATS_DATA = [
  { target: 50, suffix: '+', label: 'Exporters Clients' },
  { target: 100, suffix: '+', label: 'Satisfied OEM Brands' },
  { target: 35000, suffix: '+', label: 'Products Per Day' },
  { target: 200, suffix: '+', label: 'Skilled Worker Team' },
];

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(STATS_DATA.map(() => 0));

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / totalSteps, 1);
      // Ease out quartic
      const ease = 1 - Math.pow(1 - progress, 4);

      setCounts(
        STATS_DATA.map((item) => {
          if (progress >= 1) return item.target;
          return Math.floor(item.target * ease);
        })
      );

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started]);

  return (
    <section className="section-stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {STATS_DATA.map((item, idx) => {
            const icons = ['fa-solid fa-earth-americas', 'fa-solid fa-handshake', 'fa-solid fa-gears', 'fa-solid fa-users'];
            return (
              <div
                className="stat-item"
                key={item.label}
                data-aos="fade-up"
                data-aos-delay={(idx + 1) * 100}
              >
                <div style={{ fontSize: '1.8rem', color: '#f59e0b', marginBottom: '12px' }}>
                  <i className={icons[idx]}></i>
                </div>
                <div className="stat-num">
                  {counts[idx].toLocaleString('en-IN')}
                  {item.suffix}
                </div>
                <div className="stat-divider"></div>
                <div className="stat-label">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
