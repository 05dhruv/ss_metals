'use client';

import { useState, useMemo } from 'react';
import { useModals } from './ProductModals';
import ProductImagePlaceholder from './ProductImagePlaceholder';

// Top 11 Curated Active Ready Stock Manufactured Products
const READY_STOCK_PRODUCTS = [
  {
    code: 'SMI 2',
    name: 'TAPPER BIG ICE BUCKET',
    category: 'Ice Buckets',
    stock: '2100 sets',
    image: 'img/products/smi-2.jpg',
    specs: {
      Weight: '1.070 kg',
      Height: '190 mm',
      'Base Die': '124 mm',
      'Upper Die': '183 mm',
    },
  },
  {
    code: 'SMI 3',
    name: 'ICE BUCKET 6 X 6',
    category: 'Ice Buckets',
    stock: '2000 sets',
    image: 'img/products/smi-3.jpg',
    specs: {
      Weight: '678 gm',
      Height: '152 mm',
      'Base Die': '150 mm',
      'Upper Die': '152 mm',
    },
  },
  {
    code: 'SMI 4',
    name: 'ICE BUCKET 7 X 7',
    category: 'Ice Buckets',
    stock: '2000 sets',
    image: 'img/products/smi-4.jpg',
    specs: {
      Weight: '964 gm',
      Height: '180 mm',
      'Base Die': '178 mm',
      'Upper Die': '180 mm',
    },
  },
  {
    code: 'SMI 7',
    name: 'BIG CUTLERY HOLDER',
    category: 'Cutlery Holders',
    stock: '1500 pcs',
    image: 'img/products/smi-7.jpg',
    specs: {
      Weight: '278 gm',
      Height: '120 mm',
      'Base Die': '115 mm',
      'Upper Die': '115 mm',
    },
  },
  {
    code: 'SMI 12',
    name: 'CHIP CUP',
    category: 'Mugs & Tapers',
    stock: '900 pcs',
    image: 'img/products/smi-12.jpg',
    specs: {
      Weight: '130 gm',
      Height: '90 mm',
      'Base Die': '65 mm',
      'Upper Die': '85 mm',
    },
  },
  {
    code: 'SMI 16',
    name: 'TAPER MUG',
    category: 'Mugs & Tapers',
    stock: '4100 pcs',
    image: 'img/products/smi-16.jpg',
    specs: {
      Weight: '156 gm',
      Height: '104 mm',
      'Base Die': '60 mm',
      'Upper Die': '88 mm',
    },
  },
  {
    code: 'SMI 19',
    name: 'TEA POT',
    category: 'Kalvat Pots & Utensils',
    stock: '3000 pcs',
    image: 'img/products/smi-19.jpg',
    specs: {
      Weight: '350 gm',
      Height: '140 mm',
      'Base Die': '90 mm',
      'Upper Die': '110 mm',
    },
  },
  {
    code: 'SMI 21',
    name: 'GLASS ROYAL',
    category: 'Barware',
    stock: '3400 pcs',
    image: 'img/products/smi-21.jpg',
    specs: {
      Weight: '110 gm',
      Height: '95 mm',
      'Base Die': '55 mm',
      'Upper Die': '75 mm',
    },
  },
  {
    code: 'SMI 22',
    name: 'GLASS ROYAL (TALL)',
    category: 'Barware',
    stock: '1100 pcs',
    image: 'img/products/smi-22.jpg',
    specs: {
      Weight: '135 gm',
      Height: '115 mm',
      'Base Die': '58 mm',
      'Upper Die': '80 mm',
    },
  },
  {
    code: 'SMI 43',
    name: 'BIG BALTI TAPER',
    category: 'Kalvat Pots & Utensils',
    stock: '1200 pcs',
    image: 'img/products/smi-43.jpg',
    specs: {
      Weight: '420 gm',
      Height: '160 mm',
      'Base Die': '110 mm',
      'Upper Die': '155 mm',
    },
  },
  {
    code: 'SMI 45',
    name: 'INNER BIDDING BIG POT',
    category: 'Kalvat Pots & Utensils',
    stock: '1800 pcs',
    image: 'img/products/smi-45.jpg',
    specs: {
      Weight: '510 gm',
      Height: '175 mm',
      'Base Die': '125 mm',
      'Upper Die': '170 mm',
    },
  },
];

// Raw Material Inventory (Exact match to reference screenshot)
interface RawMaterialStockItem {
  item: string;
  subItem: string;
  grade: string;
  size: string;
  quantity: string;
  status: 'In stock' | 'Low stock' | 'Out of stock';
  statusClass: 'in-stock' | 'low-stock' | 'out-of-stock';
}

const RAW_MATERIAL_DATA: RawMaterialStockItem[] = [
  {
    item: 'Circle',
    subItem: 'Circles',
    grade: '304',
    size: '10" x 0.6 mm',
    quantity: '2,500 kg',
    status: 'In stock',
    statusClass: 'in-stock',
  },
  {
    item: 'Circle',
    subItem: 'Circles',
    grade: 'J4',
    size: '12" x 0.5 mm',
    quantity: '1,800 kg',
    status: 'In stock',
    statusClass: 'in-stock',
  },
  {
    item: 'Sheet',
    subItem: 'Sheets',
    grade: '316',
    size: '4 x 8 ft x 1.0 mm',
    quantity: '40 sheets',
    status: 'Low stock',
    statusClass: 'low-stock',
  },
  {
    item: 'Patta / Patti',
    subItem: 'Patta',
    grade: '430',
    size: '25 mm x 1.2 mm',
    quantity: '3,200 kg',
    status: 'In stock',
    statusClass: 'in-stock',
  },
  {
    item: 'Coil',
    subItem: 'Coil',
    grade: 'JSLU',
    size: '1250 mm x 0.6 mm',
    quantity: '0 kg',
    status: 'Out of stock',
    statusClass: 'out-of-stock',
  },
];

export default function ReadyStockTableView() {
  const { openProduct } = useModals();
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return READY_STOCK_PRODUCTS;
    return READY_STOCK_PRODUCTS.filter((p) => {
      return (
        p.code.toLowerCase().includes(q) ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [search]);

  return (
    <>
      {/* Manufactured Products Section */}
      <div style={{ marginBottom: '22px' }} data-aos="fade-up">
        <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0a2540', letterSpacing: '-0.5px', margin: 0 }}>
          Manufactured Products Ready Stock
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.96rem', margin: '6px 0 0' }}>
          Showing {filteredProducts.length} immediate dispatch kitchenware and kalvat products available in our Katghar warehouse.
        </p>
      </div>

      {/* Toolbar */}
      <div className="catalog-toolbar" data-aos="fade-up" style={{ marginTop: 0, marginBottom: '24px' }}>
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            id="stockTableSearch"
            placeholder="Search ready stock products (e.g. SMI 2, Ice Bucket, Tea Pot)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/919412236335?text=Hello%20SS%20Metals%2C%20I%20want%20to%20inquire%20about%20your%20current%20Ready%20Stock%20availability"
            target="_blank"
            rel="noopener"
            className="btn btn-whatsapp btn-sm"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp Dispatch Desk
          </a>
        </div>
      </div>

      {/* Manufactured Ready Stock Table */}
      <div className="table-responsive" data-aos="fade-up" data-aos-delay="60">
        <table className="stock-table" id="stockTable">
          <thead>
            <tr>
              <th style={{ width: '70px' }}>Item</th>
              <th style={{ width: '140px' }}>Product Code</th>
              <th>Product Name &amp; Category</th>
              <th style={{ width: '220px' }}>Available Stock</th>
              <th style={{ width: '180px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((prod) => {
              const handleOpen = () => {
                openProduct({
                  code: prod.code,
                  name: prod.name,
                  category: prod.category,
                  stock: prod.stock,
                  image: prod.image ? `/${prod.image}` : undefined,
                  specs: prod.specs,
                });
              };

              return (
                <tr key={prod.code}>
                  <td>
                    <div style={{ width: '46px', height: '46px', borderRadius: '6px', overflow: 'hidden' }}>
                      <ProductImagePlaceholder
                        src={prod.image ? `/${prod.image}` : null}
                        alt={prod.code}
                        height={46}
                      />
                    </div>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={handleOpen}
                      className="prod-code"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}
                    >
                      {prod.code}
                    </button>
                  </td>
                  <td>
                    <strong>{prod.name}</strong>
                    <br />
                    <span style={{ fontSize: '0.8rem', color: 'var(--steel)' }}>{prod.category}</span>
                  </td>
                  <td>
                    <span className="stock-quantity-badge has-stock">
                      <i className="fa-solid fa-check"></i> {prod.stock}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={handleOpen} className="btn btn-primary btn-sm">
                        <i className="fa-solid fa-eye"></i> Specs
                      </button>
                      <a
                        href={`https://wa.me/919412236335?text=${encodeURIComponent(
                          `Inquiry for Ready Stock: ${prod.code} (${prod.name} - ${prod.stock})`
                        )}`}
                        target="_blank"
                        rel="noopener"
                        className="btn btn-whatsapp btn-sm"
                        title="WhatsApp Inquire"
                      >
                        <i className="fa-brands fa-whatsapp"></i> Inquire
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Raw Material Ready Stock Section (Exactly as in Reference Screenshot) */}
      <section className="raw-material-section" data-aos="fade-up">
        <div className="raw-material-header">
          <h2 className="raw-material-title">Raw material</h2>
          <p className="raw-material-sub">
            Stainless steel circles, sheets, patta, patti and coil in JSLU, J4, 304, 316, 410 and 430 grades.
          </p>
        </div>

        <div className="raw-stock-table-wrap">
          <div className="table-responsive" style={{ border: 'none', boxShadow: 'none', margin: 0 }}>
            <table className="raw-stock-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Item</th>
                  <th style={{ width: '15%' }}>Grade</th>
                  <th style={{ width: '25%' }}>Size</th>
                  <th style={{ width: '18%' }}>Quantity</th>
                  <th style={{ width: '12%' }}>Status</th>
                  <th style={{ width: '8%', textAlign: 'right' }}></th>
                </tr>
              </thead>
              <tbody>
                {RAW_MATERIAL_DATA.map((row, idx) => {
                  const orderMessage = `Hello SS Metals, I would like to order Raw Material: ${row.item} Grade ${row.grade} (Size: ${row.size}, Qty: ${row.quantity})`;

                  return (
                    <tr key={idx}>
                      <td>
                        <div className="raw-item-main">{row.item}</div>
                        <div className="raw-item-sub">{row.subItem}</div>
                      </td>
                      <td>
                        <strong style={{ color: '#0a2540' }}>{row.grade}</strong>
                      </td>
                      <td>
                        <span>{row.size}</span>
                      </td>
                      <td>
                        <span style={{ fontWeight: 600 }}>{row.quantity}</span>
                      </td>
                      <td>
                        <span className={`raw-status-pill ${row.statusClass}`}>
                          {row.status}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <a
                          href={`https://wa.me/919412236335?text=${encodeURIComponent(orderMessage)}`}
                          target="_blank"
                          rel="noopener"
                          className="raw-order-link"
                          title={`Order ${row.item} ${row.grade}`}
                        >
                          Order
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
