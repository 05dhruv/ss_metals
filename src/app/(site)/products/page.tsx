import type { Metadata } from 'next';
import ProductCatalogueView from '@/components/ProductCatalogueView';

export const metadata: Metadata = {
  title: 'Products Catalogue | 103+ Stainless Steel Products | SS Metals',
  description:
    'Explore complete catalogue of 103+ Stainless Steel Unfinished (KALVAT) Utensils, Ice Buckets, Taper Mugs, Water Jugs, Cutlery Holders by SS Metals.',
};

export const dynamic = 'force-dynamic';

export default function ProductsPage({ searchParams }: { searchParams?: { category?: string } }) {
  const category = searchParams?.category;

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container" data-aos="fade-up">
          <span className="hero-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-list-check"></i> Complete Factory Catalogue
          </span>
          <h1 className="page-hero-title">Stainless Steel Products Catalogue</h1>
          <p className="page-hero-lead">
            Browse our full range of 103+ manufactured models. Click on any model for complete dimensional
            specifications, weight, base die, and instant WhatsApp enquiry.
          </p>
        </div>
      </section>

      {/* Catalog Main */}
      <section style={{ padding: '40px 0 90px', background: 'var(--bg-light)' }}>
        <div className="container">
          <ProductCatalogueView initialCategory={category} />
        </div>
      </section>
    </>
  );
}
