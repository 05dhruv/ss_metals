'use client';

import Link from 'next/link';
import { useEffect, useState, useRef, useCallback } from 'react';

const SLIDES = [
  {
    bg: '/img/slider/slide1.jpg',
    tagIcon: 'fa-solid fa-award',
    tag: 'Established 2000 • 24+ Years of Trust',
    title: (
      <>
        Premier <span>Stainless Steel</span> Utensils &amp; Kalvat Products
      </>
    ),
    subtitle:
      'Specialized in high-precision Unfinished (KALVAT) Utensils, Barwares, Bathwares, and complete Kitchenware solutions for exporters and domestic markets across India.',
    btn1: {
      href: '/products',
      cls: 'btn btn-accent btn-lg',
      icon: 'fa-solid fa-utensils',
      label: 'Explore 100+ Products',
      isExternal: false,
    },
    btn2: {
      href: '/ready-stock',
      cls: 'btn btn-outline-white btn-lg',
      icon: 'fa-solid fa-bolt',
      label: 'Check Ready Stock',
      isExternal: false,
    },
  },
  {
    bg: '/img/slider/slide2.jpg',
    tagIcon: 'fa-solid fa-industry',
    tag: 'Direct Raw Material Stockiest',
    title: (
      <>
        Direct Stockiest of Stainless Steel <span>Pipes, Circles, Coils &amp; Sheets</span>
      </>
    ),
    subtitle:
      'Ready inventory of Seamless Steel Pipes, MS Pipes, Stainless Steel Circles, Farma, Patta & Patti in 304, 316, JSLU, J4 & 410 prime grades.',
    btn1: {
      href: '/ready-stock',
      cls: 'btn btn-accent btn-lg',
      icon: 'fa-solid fa-boxes-stacked',
      label: 'View Inventory',
      isExternal: false,
    },
    btn2: {
      href: '/contact',
      cls: 'btn btn-outline-white btn-lg',
      icon: 'fa-solid fa-file-invoice',
      label: 'Request Grade Quote',
      isExternal: false,
    },
  },
  {
    bg: '/img/slider/slide3.jpg',
    tagIcon: 'fa-solid fa-globe',
    tag: 'Global Export Standards',
    title: (
      <>
        Endearing <span>Master Craftsmanship</span> &amp; Modern Plant
      </>
    ),
    subtitle:
      'State-of-the-art automatic manufacturing plant with in-house clinical quality testing before delivery, trusted by over 50+ leading export trading houses.',
    btn1: {
      href: '/infrastructure',
      cls: 'btn btn-accent btn-lg',
      icon: 'fa-solid fa-warehouse',
      label: 'Plant & Infrastructure',
      isExternal: false,
    },
    btn2: {
      href: '/products',
      cls: 'btn btn-outline-white btn-lg',
      icon: 'fa-solid fa-border-all',
      label: 'View Products Catalogue',
      isExternal: false,
    },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
  }, []);

  const goToSlide = (idx: number) => {
    setCurrent(idx);
    resetAutoplay();
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
    resetAutoplay();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    resetAutoplay();
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoplay]);

  return (
    <section className="hero-slider-wrap">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
        >
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url('${slide.bg}')` }}
          />
          <div className="hero-overlay"></div>
          <div className="container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
            <div className="hero-content" style={{ textAlign: 'left', marginLeft: 0, marginRight: 'auto' }}>
              <span className="hero-tag">
                <i className={slide.tagIcon}></i> {slide.tag}
              </span>
              <h1 className="hero-title" style={{ textAlign: 'left' }}>{slide.title}</h1>
              <p className="hero-subtitle" style={{ textAlign: 'left' }}>{slide.subtitle}</p>
              <div className="hero-cta-btns" style={{ justifyContent: 'flex-start' }}>
                {slide.btn1.isExternal ? (
                  <a href={slide.btn1.href} target="_blank" rel="noopener" className={slide.btn1.cls}>
                    <i className={slide.btn1.icon}></i> {slide.btn1.label}
                  </a>
                ) : (
                  <Link href={slide.btn1.href} className={slide.btn1.cls}>
                    <i className={slide.btn1.icon}></i> {slide.btn1.label}
                  </Link>
                )}

                {slide.btn2.isExternal ? (
                  <a href={slide.btn2.href} target="_blank" rel="noopener" className={slide.btn2.cls}>
                    <i className={slide.btn2.icon}></i> {slide.btn2.label}
                  </a>
                ) : (
                  <Link href={slide.btn2.href} className={slide.btn2.cls}>
                    <i className={slide.btn2.icon}></i> {slide.btn2.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="slider-controls">
        <button className="slider-btn" id="sliderPrev" aria-label="Previous Slide" onClick={prevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="slider-dots">
          {SLIDES.map((_, i) => (
            <span
              key={i}
              className={`slider-dot ${i === current ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
            ></span>
          ))}
        </div>
        <button className="slider-btn" id="sliderNext" aria-label="Next Slide" onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}
