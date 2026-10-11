import type { Metadata } from 'next';
import ReadyStockTableView from '@/components/ReadyStockTableView';

export const metadata: Metadata = {
  title: 'Ready Stock Inventory | SS Metals',
  description:
    'View live available ready stock of Stainless Steel Kitchenware, Taper Mugs, Ice Buckets & Jug Sets at SS Metals Moradabad.',
};

export const dynamic = 'force-dynamic';

export default function ReadyStockPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container" data-aos="fade-up">
          <span className="hero-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-bolt"></i> Immediate Dispatch Availability
          </span>
          <h1 className="page-hero-title">Ready Stock Products Inventory</h1>
          <p className="page-hero-lead">
            Real-time status of ready factory stock. Contact our sales desk for immediate container loading or
            domestic freight dispatch.
          </p>
        </div>
      </section>

      {/* Main Table Section */}
      <section style={{ padding: '40px 0 90px', background: 'var(--bg-light)' }}>
        <div className="container">
          <ReadyStockTableView />
        </div>
      </section>
    </>
  );
}
