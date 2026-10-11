'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prodDropdownOpen, setProdDropdownOpen] = useState(false);
  const [supplierDropdownOpen, setSupplierDropdownOpen] = useState(false);

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
              <a href="tel:+919412236335">+91 9412236335</a> /{' '}
              <a href="tel:+919458771652">9458771652</a>
            </span>
          </div>

          <div className="top-right">
            <span className="top-item">
              <i className="fa-solid fa-envelope"></i>{' '}
              <a href="mailto:ssmetals2000@gmail.com">ssmetals2000@gmail.com</a>
            </span>
            <span className="top-item">
              <i className="fa-solid fa-location-dot"></i> 19, Chitraguptnagar, Katghar, Moradabad, UP
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <div className="container-fluid header-inner">
          <Link href="/" className="brand-logo" onClick={() => setMobileOpen(false)}>
            <img src="/img/logo/logo.png" alt="SS Metals Logo" />
          </Link>

          <nav>
            <ul className={`nav-menu ${mobileOpen ? 'show' : ''}`} id="navMenu">
              <li>
                <Link
                  href="/"
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/company-profile"
                  className={`nav-link ${isActive('/company-profile') ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Company Profile
                </Link>
              </li>
              <li
                className={`nav-item-dropdown ${prodDropdownOpen ? 'open' : ''}`}
                onMouseEnter={() => setProdDropdownOpen(true)}
                onMouseLeave={() => setProdDropdownOpen(false)}
              >
                <div
                  className={`nav-link nav-dropdown-toggle ${isActive('/products') ? 'active' : ''}`}
                  onClick={() => setProdDropdownOpen(!prodDropdownOpen)}
                >
                  <Link
                    href="/products"
                    onClick={() => setMobileOpen(false)}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    Products
                  </Link>
                  <i
                    className={`fa-solid ${prodDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                    style={{ fontSize: '0.7rem', marginLeft: '3px' }}
                  ></i>
                </div>

                <div className={`nav-dropdown-menu ${prodDropdownOpen ? 'show' : ''}`}>
                  <Link
                    href="/products"
                    className="nav-dropdown-header-link"
                    onClick={() => {
                      setMobileOpen(false);
                      setProdDropdownOpen(false);
                    }}
                  >
                    All products (catalogue)
                  </Link>
                  <Link
                    href="/products?category=Ice+Buckets"
                    className="nav-dropdown-item"
                    onClick={() => {
                      setMobileOpen(false);
                      setProdDropdownOpen(false);
                    }}
                  >
                    Ice Buckets & Chillers
                  </Link>
                  <Link
                    href="/products?category=Mugs+%26+Tapers"
                    className="nav-dropdown-item"
                    onClick={() => {
                      setMobileOpen(false);
                      setProdDropdownOpen(false);
                    }}
                  >
                    Tapers & Mugs
                  </Link>
                  <Link
                    href="/products?category=Water+Jugs"
                    className="nav-dropdown-item"
                    onClick={() => {
                      setMobileOpen(false);
                      setProdDropdownOpen(false);
                    }}
                  >
                    Water Jugs
                  </Link>
                  <Link
                    href="/products?category=Cutlery+Holders"
                    className="nav-dropdown-item"
                    onClick={() => {
                      setMobileOpen(false);
                      setProdDropdownOpen(false);
                    }}
                  >
                    Cutlery Holders
                  </Link>
                  <Link
                    href="/products?category=Kalvat+Pots"
                    className="nav-dropdown-item"
                    onClick={() => {
                      setMobileOpen(false);
                      setProdDropdownOpen(false);
                    }}
                  >
                    Kalvat Pots
                  </Link>
                  <Link
                    href="/products?category=Barware"
                    className="nav-dropdown-item"
                    onClick={() => {
                      setMobileOpen(false);
                      setProdDropdownOpen(false);
                    }}
                  >
                    Barware & Bathware
                  </Link>
                </div>
              </li>

              {/* Supplier Dropdown */}
              <li
                className={`nav-item-dropdown ${supplierDropdownOpen ? 'open' : ''}`}
                onMouseEnter={() => setSupplierDropdownOpen(true)}
                onMouseLeave={() => setSupplierDropdownOpen(false)}
              >
                <div
                  className={`nav-link nav-dropdown-toggle ${isActive('/supplier') ? 'active' : ''}`}
                  onClick={() => setSupplierDropdownOpen(!supplierDropdownOpen)}
                >
                  <Link
                    href="/supplier"
                    onClick={() => setMobileOpen(false)}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    Supplier
                  </Link>
                  <i
                    className={`fa-solid ${supplierDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                    style={{ fontSize: '0.7rem', marginLeft: '3px' }}
                  ></i>
                </div>

                <div className={`nav-dropdown-menu ${supplierDropdownOpen ? 'show' : ''}`}>
                  <Link
                    href="/supplier"
                    className="nav-dropdown-header-link"
                    onClick={() => {
                      setMobileOpen(false);
                      setSupplierDropdownOpen(false);
                    }}
                  >
                    All supplier lines
                  </Link>
                  <Link
                    href="/supplier/coil"
                    className="nav-dropdown-item"
                    onClick={() => {
                      setMobileOpen(false);
                      setSupplierDropdownOpen(false);
                    }}
                  >
                    Steel Coil
                  </Link>
                  <Link
                    href="/supplier/sheet"
                    className="nav-dropdown-item"
                    onClick={() => {
                      setMobileOpen(false);
                      setSupplierDropdownOpen(false);
                    }}
                  >
                    Sheet
                  </Link>
                  <Link
                    href="/supplier/circle"
                    className="nav-dropdown-item"
                    onClick={() => {
                      setMobileOpen(false);
                      setSupplierDropdownOpen(false);
                    }}
                  >
                    Circle
                  </Link>
                  <Link
                    href="/supplier/blank"
                    className="nav-dropdown-item"
                    onClick={() => {
                      setMobileOpen(false);
                      setSupplierDropdownOpen(false);
                    }}
                  >
                    Blank
                  </Link>
                  <Link
                    href="/supplier/wire"
                    className="nav-dropdown-item"
                    onClick={() => {
                      setMobileOpen(false);
                      setSupplierDropdownOpen(false);
                    }}
                  >
                    Wire
                  </Link>
                  <Link
                    href="/supplier/rod"
                    className="nav-dropdown-item"
                    onClick={() => {
                      setMobileOpen(false);
                      setSupplierDropdownOpen(false);
                    }}
                  >
                    Rod
                  </Link>
                  <Link
                    href="/supplier/pipe"
                    className="nav-dropdown-item"
                    onClick={() => {
                      setMobileOpen(false);
                      setSupplierDropdownOpen(false);
                    }}
                  >
                    Pipe
                  </Link>
                </div>
              </li>

              <li>
                <Link
                  href="/ready-stock"
                  className={`nav-link ${isActive('/ready-stock') ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Ready Stock
                </Link>
              </li>
              <li>
                <Link
                  href="/infrastructure"
                  className={`nav-link ${isActive('/infrastructure') ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Enquiry & Contact
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
