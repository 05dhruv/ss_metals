'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV, SITE, waLink } from '@/lib/site';

export default function MainNav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => (href === '/' ? path === '/' : path.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-steel-200 bg-white/95 backdrop-blur">
      <div className="wrap flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src="/img/logo/logo.png" alt="SS Metals Logo" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active(n.href) ? 'page' : undefined}
              className={`rounded px-3 py-2 text-sm font-medium ${active(n.href) ? 'bg-brand-light text-brand-dark' : 'text-steel-700 hover:text-brand'}`}
            >
              {n.label}
            </Link>
          ))}
          <a href={waLink()} target="_blank" rel="noopener" className="btn btn-outline ml-2 !py-2">WhatsApp</a>
          <Link href="/contact" className="btn btn-primary ml-1 !py-2">Get quote</Link>
        </nav>

        <button
          className="rounded border border-steel-300 px-3 py-2 text-sm font-medium lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-steel-200 bg-white lg:hidden" aria-label="Mobile">
          <div className="wrap flex flex-col py-2">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`border-b border-steel-100 py-3 text-base font-medium ${active(n.href) ? 'text-brand' : ''}`}
              >
                {n.label}
              </Link>
            ))}
            <div className="flex gap-2 py-3">
              <a href={waLink()} className="btn btn-outline flex-1">WhatsApp</a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary flex-1">Get quote</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
