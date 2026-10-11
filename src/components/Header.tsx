'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prodDropdownOpen, setProdDropdownOpen] = useState(false);
  const [supplierDropdownOpen, setSupplierDropdownOpen] = useState(false);

  // Auto-close mobile navigation drawer on any page change
  useEffect(() => {
    setMobileOpen(false);
    setProdDropdownOpen(false);
    setSupplierDropdownOpen(false);
  }, [pathname]);

  const closeMobile = () => {
    setMobileOpen(false);
    setProdDropdownOpen(false);
    setSupplierDropdownOpen(false);
  };

  const handleDropdownHover = (type: 'prod' | 'supplier', open: boolean) => {
    // Only handle mouse hover on desktop screens (> 1024px)
    if (typeof window !== 'undefined' && window.innerWidth > 1024) {
      if (type === 'prod') setProdDropdownOpen(open);
      if (type === 'supplier') setSupplierDropdownOpen(open);
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Topbar */}
      <div className="top-bar">
        <div className="container-fluid top-bar-inner">
          <div className="top-left">
            <span className="top-item">
              <i className="fa-solid fa-phone"></i>{' '}
              <a href="tel:+919412236335">+91 9412236335</a>
              <span className="top-phone-alt"> / <a href="tel:+919458771652">9458771652</a></span>
            </span>
          </div>

          <div className="top-right">
            <span className="top-item top-email-item">
              <i className="fa-solid fa-envelope"></i>{' '}
              <a href="mailto:ssmetals2000@gmail.com">ssmetals2000@gmail.com</a>
            </span>
            <span className="top-item top-address-item">
              <i className="fa-solid fa-location-dot"></i>{' '}
              <span className="top-address-full">19, Chitraguptnagar, Katghar, Moradabad, UP</span>
              <span className="top-address-short">Moradabad, UP</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <div className="container-fluid header-inner">
          <Link href="/" className="brand-logo" onClick={closeMobile}>
            <img
              src="/img/logo/logo.png"
              alt="SS Metals Logo"
              width={180}
              height={42}
              loading="eager"
              decoding="async"
            />
          </Link>

          <nav>
            <ul className={`nav-menu ${mobileOpen ? 'show' : ''}`} id="navMenu">
              <li>
                <Link
                  href="/"
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={closeMobile}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/company-profile"
                  className={`nav-link ${isActive('/company-profile') ? 'active' : ''}`}
                  onClick={closeMobile}
                >
                  Company Profile
                </Link>
              </li>

              {/* Products Dropdown */}
              <li
                className={`nav-item-dropdown ${prodDropdownOpen ? 'open' : ''}`}
                onMouseEnter={() => handleDropdownHover('prod', true)}
                onMouseLeave={() => handleDropdownHover('prod', false)}
              >
                <button
                  type="button"
                  className={`nav-link nav-dropdown-toggle ${isActive('/products') ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setProdDropdownOpen(!prodDropdownOpen);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    font: 'inherit',
                    color: 'inherit',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    textAlign: 'left',
                  }}
                  aria-expanded={prodDropdownOpen}
                >
                  <span>Products</span>
                  <i
                    className={`fa-solid ${prodDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                    style={{ fontSize: '0.75rem', marginLeft: '6px' }}
                  ></i>
                </button>

                <div className={`nav-dropdown-menu ${prodDropdownOpen ? 'show' : ''}`}>
                  <Link
                    href="/products"
                    className="nav-dropdown-header-link"
                    onClick={closeMobile}
                  >
                    <span>All products (catalogue)</span>
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                  </Link>
                  <Link
                    href="/products?category=Ice+Buckets"
                    className="nav-dropdown-item"
                    onClick={closeMobile}
                  >
                    Ice Buckets &amp; Chillers
                  </Link>
                  <Link
                    href="/products?category=Mugs+%26+Tapers"
                    className="nav-dropdown-item"
                    onClick={closeMobile}
                  >
                    Tapers &amp; Mugs
                  </Link>
                  <Link
                    href="/products?category=Water+Jugs"
                    className="nav-dropdown-item"
                    onClick={closeMobile}
                  >
                    Water Jugs
                  </Link>
                  <Link
                    href="/products?category=Cutlery+Holders"
                    className="nav-dropdown-item"
                    onClick={closeMobile}
                  >
                    Cutlery Holders
                  </Link>
                  <Link
                    href="/products?category=Kalvat+Pots"
                    className="nav-dropdown-item"
                    onClick={closeMobile}
                  >
                    Kalvat Pots
                  </Link>
                  <Link
                    href="/products?category=Barware"
                    className="nav-dropdown-item"
                    onClick={closeMobile}
                  >
                    Barware &amp; Bathware
                  </Link>
                </div>
              </li>

              {/* Supplier Dropdown */}
              <li
                className={`nav-item-dropdown ${supplierDropdownOpen ? 'open' : ''}`}
                onMouseEnter={() => handleDropdownHover('supplier', true)}
                onMouseLeave={() => handleDropdownHover('supplier', false)}
              >
                <button
                  type="button"
                  className={`nav-link nav-dropdown-toggle ${isActive('/supplier') ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSupplierDropdownOpen(!supplierDropdownOpen);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    font: 'inherit',
                    color: 'inherit',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    textAlign: 'left',
                  }}
                  aria-expanded={supplierDropdownOpen}
                >
                  <span>Supplier</span>
                  <i
                    className={`fa-solid ${supplierDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                    style={{ fontSize: '0.75rem', marginLeft: '6px' }}
                  ></i>
                </button>

                <div className={`nav-dropdown-menu ${supplierDropdownOpen ? 'show' : ''}`}>
                  <Link
                    href="/supplier"
                    className="nav-dropdown-header-link"
                    onClick={closeMobile}
                  >
                    <span>All supplier lines</span>
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                  </Link>
                  <Link
                    href="/supplier/coil"
                    className="nav-dropdown-item"
                    onClick={closeMobile}
                  >
                    Steel Coil
                  </Link>
                  <Link
                    href="/supplier/sheet"
                    className="nav-dropdown-item"
                    onClick={closeMobile}
                  >
                    Sheet
                  </Link>
                  <Link
                    href="/supplier/circle"
                    className="nav-dropdown-item"
                    onClick={closeMobile}
                  >
                    Circle
                  </Link>
                  <Link
                    href="/supplier/blank"
                    className="nav-dropdown-item"
                    onClick={closeMobile}
                  >
                    Blank
                  </Link>
                  <Link
                    href="/supplier/wire"
                    className="nav-dropdown-item"
                    onClick={closeMobile}
                  >
                    Wire
                  </Link>
                  <Link
                    href="/supplier/rod"
                    className="nav-dropdown-item"
                    onClick={closeMobile}
                  >
                    Rod
                  </Link>
                  <Link
                    href="/supplier/pipe"
                    className="nav-dropdown-item"
                    onClick={closeMobile}
                  >
                    Pipe
                  </Link>
                </div>
              </li>

              <li>
                <Link
                  href="/ready-stock"
                  className={`nav-link ${isActive('/ready-stock') ? 'active' : ''}`}
                  onClick={closeMobile}
                >
                  Ready Stock
                </Link>
              </li>
              <li>
                <Link
                  href="/infrastructure"
                  className={`nav-link ${isActive('/infrastructure') ? 'active' : ''}`}
                  onClick={closeMobile}
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                  onClick={closeMobile}
                >
                  Enquiry &amp; Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-cta-group">
            <a
              href="https://wa.me/919412236335?text=Hello%20SS%20Metals%2C%20I%20want%20to%20inquire%20about%20your%20products"
              target="_blank"
              rel="noopener"
              className="btn btn-whatsapp btn-sm"
            >
              <i className="fa-brands fa-whatsapp"></i> <span>WhatsApp</span>
            </a>
            <Link href="/contact" className="btn btn-primary btn-sm">
              <i className="fa-solid fa-envelope"></i> <span>Get Quote</span>
            </Link>
            <button
              className="mobile-toggle"
              id="mobileToggle"
              aria-label="Toggle Navigation"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <i className={mobileOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
