import Link from 'next/link';
import type { Metadata } from 'next';
import { requireAdmin } from '@/lib/auth';
import { logoutAction } from '../actions';

export const metadata: Metadata = { title: 'Admin', robots: { index: false, follow: false } };
export const dynamic = 'force-dynamic';

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  return (
    <div className="min-h-screen bg-steel-100">
      <header className="bg-ink text-white">
        <div className="wrap flex flex-wrap items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-6">
            <span className="font-display text-xl font-bold uppercase text-brass">SMI Admin</span>
            <nav className="flex gap-4 text-sm" aria-label="Admin">
              <Link href="/admin" className="hover:text-brass">Enquiries</Link>
              <Link href="/admin/products" className="hover:text-brass">Products</Link>
              <Link href="/admin/stock" className="hover:text-brass">Ready stock</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" target="_blank" className="hover:text-brass">View site</Link>
            <form action={logoutAction}><button className="rounded border border-white/40 px-3 py-1 hover:bg-white/10">Sign out</button></form>
          </div>
        </div>
      </header>
      <div className="wrap py-8">{children}</div>
    </div>
  );
}
