'use client';

import { useState, createContext, useContext } from 'react';
import ProductImagePlaceholder from './ProductImagePlaceholder';

export type ProductModalInfo = {
  code: string;
  name: string;
  category: string;
  stock?: string;
  image?: string;
  specs: Record<string, string>;
};

export type LightboxInfo = {
  src: string;
  caption: string;
};

type ModalContextType = {
  openProduct: (p: ProductModalInfo) => void;
  openLightbox: (src: string, caption: string) => void;
};

const ModalContext = createContext<ModalContextType>({
  openProduct: () => { },
  openLightbox: () => { },
});

export const useModals = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [activeProduct, setActiveProduct] = useState<ProductModalInfo | null>(null);
  const [activeLightbox, setActiveLightbox] = useState<LightboxInfo | null>(null);

  const openProduct = (p: ProductModalInfo) => setActiveProduct(p);
  const openLightbox = (src: string, caption: string) => setActiveLightbox({ src, caption });

  const closeProduct = () => setActiveProduct(null);
  const closeLightbox = () => setActiveLightbox(null);

  return (
    <ModalContext.Provider value={{ openProduct, openLightbox }}>
      {children}

      {/* Product Technical Specifications Modal */}
      {activeProduct && (
        <div
          className="modal-overlay"
          style={{ display: 'flex' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeProduct();
          }}
        >
          <div className="modal-card" style={{ maxWidth: '640px', borderRadius: '14px', overflow: 'hidden' }}>
            <button
              className="modal-close-btn"
              id="closeModal"
              aria-label="Close modal"
              onClick={closeProduct}
              style={{ zIndex: 20 }}
            >
              &times;
            </button>

            {/* Product Image Placeholder Header (shows image when added, tumbler placeholder right now) */}
            <ProductImagePlaceholder
              src={activeProduct.image}
              alt={activeProduct.name}
              height={220}
            />

            <div className="modal-body-content" style={{ padding: '24px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', marginBottom: '16px', paddingRight: '40px' }}>
                <span className="modal-code" id="modalProductCode" style={{ fontSize: '0.95rem' }}>
                  {activeProduct.code}
                </span>
                <span className="badge-stock-alert" id="modalProductStock">
                  {activeProduct.stock?.trim() || 'Inquire for Stock'}
                </span>
              </div>

              <h2 id="modalProductTitle" style={{ fontSize: 'clamp(1.3rem, 4vw, 1.65rem)', color: 'var(--primary)', marginBottom: '4px' }}>
                {activeProduct.name}
              </h2>
              <p className="product-cat" id="modalProductCat" style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <i className="fa-solid fa-tag" style={{ color: 'var(--accent)' }}></i>
                {activeProduct.category}
              </p>

              <h4 style={{ fontSize: '0.95rem', color: 'var(--primary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                <i className="fa-solid fa-sliders" style={{ marginRight: '6px' }}></i> Technical Specifications
              </h4>

              <table className="modal-specs-table">
                <tbody id="modalSpecsBody">
                  {activeProduct.specs && Object.keys(activeProduct.specs).length > 0 ? (
                    Object.entries(activeProduct.specs).map(([k, v]) => (
                      <tr key={k}>
                        <th>{k}</th>
                        <td>{v}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2} style={{ color: 'var(--steel)' }}>
                        Standard export finish and specifications. Contact for custom sizing.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
                <a
                  href={`https://wa.me/919412236335?text=${encodeURIComponent(
                    `Hello SS Metals, I am inquiring about product: ${activeProduct.code} (${activeProduct.name}). Please provide price quote and availability.`
                  )}`}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-whatsapp"
                  style={{ flex: 1, minWidth: '160px', justifyContent: 'center' }}
                >
                  <i className="fa-brands fa-whatsapp"></i> Inquire on WhatsApp
                </a>
                <a href="/contact" className="btn btn-primary" style={{ flex: 1, minWidth: '160px', justifyContent: 'center' }}>
                  <i className="fa-solid fa-envelope"></i> Request Quotation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="modal-overlay"
          style={{ display: 'flex' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <div style={{ position: 'relative', maxWidth: '900px', width: '100%', textAlign: 'center' }}>
            <button
              className="modal-close-btn"
              id="lightboxClose"
              style={{ top: '12px', right: '12px', background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 2px 10px rgba(0,0,0,0.3)', zIndex: 10 }}
              onClick={closeLightbox}
            >
              &times;
            </button>
            <img
              id="lightboxImg"
              src={activeLightbox.src}
              alt={activeLightbox.caption}
              decoding="async"
              style={{
                maxHeight: '80vh',
                width: 'auto',
                margin: '0 auto',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-xl)',
              }}
            />
            <p
              id="lightboxCaption"
              style={{ color: '#ffffff', marginTop: '12px', fontWeight: 600, fontSize: '1.1rem' }}
            >
              {activeLightbox.caption}
            </p>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}
