'use client';

import { useState } from 'react';

const CATEGORIES = [
  { id: 'kalvat', label: 'Unfinished Kalvat Utensils', icon: 'fa-solid fa-utensils' },
  { id: 'barware', label: 'Ice Buckets & Barware', icon: 'fa-solid fa-wine-glass' },
  { id: 'jugs', label: 'Taper Mugs & Jugs', icon: 'fa-solid fa-mug-saucer' },
  { id: 'pipes', label: 'Pipes & Tubes (Seamless / MS)', icon: 'fa-solid fa-grip-lines-vertical' },
  { id: 'raw', label: 'Patta, Patti, Coils & Circles', icon: 'fa-solid fa-circle-notch' },
  { id: 'stock', label: 'Ready Stock Immediate Dispatch', icon: 'fa-solid fa-bolt' },
];

const GRADES = ['AISI 304', 'AISI 316', 'JSLU Grade', 'J4 Quality', 'AISI 410', 'AISI 430'];

const VOLUMES = ['Sample / Trial Order', '100 – 500 Pcs', '500 – 2,000 Pcs', 'Bulk Container (2,000+ Pcs)'];

export default function ContactInquiryForm({ defaultProduct }: { defaultProduct?: string }) {
  const [selectedCategory, setSelectedCategory] = useState(defaultProduct || 'Unfinished Kalvat Utensils');
  const [selectedGrade, setSelectedGrade] = useState('AISI 304');
  const [selectedVolume, setSelectedVolume] = useState('500 – 2,000 Pcs');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState(
    defaultProduct ? `Inquiring about ${defaultProduct}. Please share rates and stock availability.` : ''
  );

  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const data = {
      name,
      phone,
      email,
      product_interest: `${selectedCategory} | Grade: ${selectedGrade} | Volume: ${selectedVolume}${city ? ` | Location: ${city}` : ''}`,
      message,
    };

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to submit inquiry.');
      }

      setSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please connect on WhatsApp directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const getWhatsAppMessage = () => {
    const lines = [
      'Hello SS Metals, I want to request a price quotation:',
      `• Name: ${name || 'Prospective Buyer'}`,
      phone ? `• Phone: ${phone}` : '',
      city ? `• City: ${city}` : '',
      `• Interested In: ${selectedCategory}`,
      `• Steel Grade: ${selectedGrade}`,
      `• Order Volume: ${selectedVolume}`,
      message ? `• Requirements: ${message}` : '',
    ].filter(Boolean);
    return encodeURIComponent(lines.join('\n'));
  };

  return (
    <div className="inquiry-form-card" style={{ background: '#ffffff', borderRadius: '16px', boxShadow: '0 12px 40px rgba(10,37,64,0.08)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
        <div>
          <span className="section-kicker" style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
            Direct Factory Quotation
          </span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.1rem)', fontWeight: 800, color: 'var(--primary)', margin: '4px 0 8px', letterSpacing: '-0.5px' }}>
            Request a Price Quotation
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', margin: 0 }}>
            Choose your specifications below for immediate factory-direct wholesale pricing.
          </p>
        </div>
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '6px 14px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#047857', fontWeight: 600 }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
          Response within 2 hours
        </div>
      </div>

      {sent ? (
        <div style={{ background: '#ecfdf5', border: '1px solid #10b981', padding: '36px 20px', borderRadius: '16px', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', background: '#10b981', color: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.8rem' }}>
            <i className="fa-solid fa-check"></i>
          </div>
          <h3 style={{ color: '#065f46', fontSize: '1.6rem', fontWeight: 700, marginBottom: '8px' }}>
            Thank You, {name || 'Valued Customer'}!
          </h3>
          <p style={{ color: '#047857', marginBottom: '24px', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 24px' }}>
            Your quotation request has been successfully dispatched to our sales desk. We will get in touch with you right away with detailed specifications and pricing.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/919412236335?text=${getWhatsAppMessage()}`}
              target="_blank"
              rel="noopener"
              className="btn btn-whatsapp btn-lg"
            >
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp with Quote Details
            </a>
            <button
              type="button"
              onClick={() => {
                setSent(false);
                setMessage('');
              }}
              className="btn btn-outline btn-lg"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form id="inquiryForm" onSubmit={handleSubmit}>
          {error && (
            <div style={{ color: '#dc2626', background: '#fee2e2', border: '1px solid #f87171', padding: '12px 16px', borderRadius: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fa-solid fa-circle-exclamation"></i>
              <span>{error}</span>
            </div>
          )}

          {/* Step 1: Product Segment Chips */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '10px' }}>
              1. Select Product Category:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))', gap: '10px' }}>
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat.label;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.label)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: active ? '2px solid var(--accent)' : '1px solid var(--steel-border)',
                      background: active ? 'rgba(217, 119, 6, 0.08)' : '#f8fafc',
                      color: active ? 'var(--accent-dark)' : 'var(--text-dark)',
                      fontWeight: active ? 700 : 500,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <i className={cat.icon} style={{ color: active ? 'var(--accent)' : 'var(--steel)' }}></i>
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Steel Grade & Volume Selector */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '20px', marginBottom: '24px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '8px' }}>
                2. Stainless Steel Grade:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {GRADES.map((g) => {
                  const active = selectedGrade === g;
                  return (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setSelectedGrade(g)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '20px',
                        border: active ? '1.5px solid var(--primary)' : '1px solid var(--steel-border)',
                        background: active ? 'var(--primary)' : '#ffffff',
                        color: active ? '#ffffff' : 'var(--text-dark)',
                        fontSize: '0.82rem',
                        fontWeight: active ? 700 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {g}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '8px' }}>
                3. Estimated Quantity:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {VOLUMES.map((v) => {
                  const active = selectedVolume === v;
                  return (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setSelectedVolume(v)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '20px',
                        border: active ? '1.5px solid var(--accent)' : '1px solid var(--steel-border)',
                        background: active ? 'var(--accent)' : '#ffffff',
                        color: active ? '#ffffff' : 'var(--text-dark)',
                        fontSize: '0.82rem',
                        fontWeight: active ? 700 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {v}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step 3: Contact Coordinates */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px', marginBottom: '16px' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--primary)' }}>Your Name *</label>
              <div style={{ position: 'relative' }}>
                <i className="fa-solid fa-user" style={{ position: 'absolute', left: '14px', top: '15px', color: 'var(--steel)' }}></i>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  style={{ paddingLeft: '38px' }}
                  placeholder="e.g. Rajesh Kumar"
                  required
                />
              </div>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--primary)' }}>Phone / WhatsApp *</label>
              <div style={{ position: 'relative' }}>
                <i className="fa-solid fa-phone" style={{ position: 'absolute', left: '14px', top: '15px', color: 'var(--steel)' }}></i>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  style={{ paddingLeft: '38px' }}
                  placeholder="e.g. +91 9876543210"
                  required
                />
              </div>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--primary)' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <i className="fa-solid fa-envelope" style={{ position: 'absolute', left: '14px', top: '15px', color: 'var(--steel)' }}></i>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  style={{ paddingLeft: '38px' }}
                  placeholder="e.g. info@company.com"
                />
              </div>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--primary)' }}>City / Port of Delivery</label>
              <div style={{ position: 'relative' }}>
                <i className="fa-solid fa-location-dot" style={{ position: 'absolute', left: '14px', top: '15px', color: 'var(--steel)' }}></i>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="form-control"
                  style={{ paddingLeft: '38px' }}
                  placeholder="e.g. Delhi / Mundra Port"
                />
              </div>
            </div>
          </div>

          {/* Step 4: Specifications & Requirements */}
          <div className="form-group" style={{ marginBottom: '24px' }}>
            <label style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--primary)' }}>
              Product Codes / Custom Specifications / Order Notes *
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control"
              style={{ minHeight: '100px', resize: 'vertical' }}
              placeholder="Mention required items (e.g. Taper Mugs, Ice Buckets, Seamless Pipes), dimensions, gauge/thickness, finish requirements..."
              required
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={submitting}
              style={{ padding: '14px 28px', fontSize: '1rem', fontWeight: 700 }}
            >
              <i className="fa-solid fa-paper-plane"></i> {submitting ? 'Submitting Inquiry...' : 'Submit Price Inquiry'}
            </button>

            <a
              href={`https://wa.me/919412236335?text=${getWhatsAppMessage()}`}
              target="_blank"
              rel="noopener"
              className="btn btn-whatsapp btn-lg"
              style={{ padding: '14px 24px', fontSize: '1rem', fontWeight: 700 }}
            >
              <i className="fa-brands fa-whatsapp"></i> Instant WhatsApp Quote
            </a>

            <span style={{ fontSize: '0.84rem', color: 'var(--steel-dark)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <i className="fa-solid fa-shield-halved" style={{ color: 'var(--accent)' }}></i> 100% Factory Direct
            </span>

          </div>
        </form>
      )}
    </div>
  );
}
