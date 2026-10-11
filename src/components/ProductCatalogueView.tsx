'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useModals } from './ProductModals';
import ProductImagePlaceholder from './ProductImagePlaceholder';
import { PRODUCTS_CATALOG, CatalogProduct } from '@/lib/products-catalog-data';

const CATEGORIES = [
  { key: 'all', label: 'All Products (103)' },
  { key: 'Ice Buckets', label: 'Ice Buckets & Chillers' },
  { key: 'Mugs & Tapers', label: 'Tapers & Mugs' },
  { key: 'Water Jugs', label: 'Water Jugs' },
  { key: 'Cutlery Holders', label: 'Cutlery Holders' },
  { key: 'Kalvat Pots & Utensils', label: 'Kalvat Pots' },
  { key: 'Barware', label: 'Barware & Bathware' },
  { key: 'Milk Cans', label: 'Milk Cans' },
  { key: 'Dishes & Bowls', label: 'Dishes & Bowls' },
  { key: 'Stainless Steel Utensils', label: 'Other Utensils' },
];

export default function ProductCatalogueView({ initialCategory }: { initialCategory?: string }) {
  const { openProduct } = useModals();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCat, setSelectedCat] = useState(initialCategory || categoryParam || 'all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const raw = categoryParam || initialCategory;
    if (raw) {
      // Normalize friendly query names
      if (raw === 'Kalvat Pots') {
        setSelectedCat('Kalvat Pots & Utensils');
      } else if (raw === 'Barware & Bathware' || raw === 'Barware') {
        setSelectedCat('Barware');
      } else {
        setSelectedCat(raw);
      }
    } else {
      setSelectedCat('all');
    }
  }, [categoryParam, initialCategory]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PRODUCTS_CATALOG.filter((p) => {
      const matchCat =
        selectedCat === 'all' ||
        p.category === selectedCat ||
        (selectedCat === 'Kalvat Pots & Utensils' && p.category.includes('Kalvat')) ||
        (selectedCat === 'Barware' && p.category.includes('Barware'));
      if (!matchCat) return false;
      if (!q) return true;

      const codeMatch = p.code.toLowerCase().includes(q);
      const nameMatch = p.name.toLowerCase().includes(q);
      const specsMatch = Object.entries(p.specs || {})
        .some(([k, v]) => `${k} ${v}`.toLowerCase().includes(q));
      return codeMatch || nameMatch || specsMatch;
    });
  }, [selectedCat, search]);

  return (
    <>
      {/* Toolbar */}
      <div className="catalog-toolbar">
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            id="catalogSearch"
            placeholder="Search by product code, name, or dimension (e.g. SMI 1, Taper, Ice Bucket)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <span className="badge-stock-alert" id="productCountBadge">
            {filtered.length} Products
          </span>
          <Link href="/ready-stock" className="btn btn-accent btn-sm">
            <i className="fa-solid fa-boxes-stacked"></i> Ready Stock View
          </Link>
          <a
            href="https://wa.me/919412236335?text=Hello%20SS%20Metals%2C%20I%20am%20inquiring%20about%20your%20products%20catalogue"
            target="_blank"
            rel="noopener"
            className="btn btn-whatsapp btn-sm"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp Quotation
          </a>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="filter-pills">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            className={`filter-btn ${selectedCat === c.key ? 'active' : ''}`}
            onClick={() => setSelectedCat(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="catalog-grid" id="catalogGrid">
        {filtered.map((prod, idx) => {
          const cleanStock = prod.stock ? prod.stock.replace(/\\r\\n/g, '').trim() : '';
          const hasQty = cleanStock && !cleanStock.startsWith('00') && !cleanStock.startsWith('0 ');

          return (
            <div
              className="product-card"
              key={prod.code}
              data-aos="fade-up"
              data-aos-delay={(idx % 4) * 60}
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
                src={prod.image ? `/${prod.image}` : null}
                alt={`${prod.code} - ${prod.name}`}
                height={200}
              />

              <div className="product-card-body" style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      color: '#64748b',
                      fontWeight: 600,
                      textTransform: 'capitalize',
                    }}
                  >
                    {prod.category}
                  </span>
                  <span
                    style={{
                      background: hasQty ? 'rgba(34, 197, 94, 0.12)' : 'rgba(245, 158, 11, 0.12)',
                      color: hasQty ? '#16a34a' : '#d97706',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                    }}
                  >
                    {prod.code}
                  </span>
                </div>

                <h3
                  className="product-name"
                  style={{
                    fontSize: '1.12rem',
                    fontWeight: 800,
                    color: '#0a2540',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  {prod.name}
                </h3>

                {prod.specs && Object.keys(prod.specs).length > 0 && (
                  <div className="product-specs-compact" style={{ marginBottom: '16px' }}>
                    {Object.entries(prod.specs).slice(0, 3).map(([k, v]) => (
                      <div className="spec-line" key={k}>
                        <span className="label" style={{ fontWeight: 600, color: 'var(--primary)', marginRight: '4px' }}>
                          {k}:
                        </span>
                        {v}
                      </div>
                    ))}
                  </div>
                )}

                <div className="product-card-actions" style={{ marginTop: 'auto', paddingTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <a
                    href={`https://wa.me/919412236335?text=${encodeURIComponent(
                      `Hello SS Metals, I am inquiring about product ${prod.code} (${prod.name})`
                    )}`}
                    target="_blank"
                    rel="noopener"
                    style={{
                      color: '#0284c7',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      textDecoration: 'none',
                    }}
                  >
                    <i className="fa-brands fa-whatsapp" style={{ color: '#25d366', fontSize: '1.05rem' }}></i>
                    Inquire on WhatsApp
                  </a>

                  <button
                    onClick={() =>
                      openProduct({
                        code: prod.code,
                        name: prod.name,
                        category: prod.category,
                        stock: cleanStock || 'Inquire for Stock',
                        image: prod.image ? `/${prod.image}` : undefined,
                        specs: prod.specs,
                      })
                    }
                    className="btn btn-outline btn-sm"
                    style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                    title="View Technical Specs"
                  >
                    <i className="fa-solid fa-sliders"></i> Specs
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
