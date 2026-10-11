import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

const hits = new Map<string, number[]>(); // very small in-memory rate limit (per server instance)

const clean = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max);

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  if (recent.length >= 5) {
    return NextResponse.json({ error: 'Too many enquiries. Please try again in a few minutes.' }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body !== 'object') return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  if (body.website) return NextResponse.json({ ok: true }); // bot

  const name = clean(body.name, 120);
  const company = clean(body.company, 160);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 40);
  const product = clean(body.product_interest, 200);
  const message = clean(body.message, 4000);

  if (!name) return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
  if (!phone && !email) return NextResponse.json({ error: 'Please enter a phone number or email so we can reach you.' }, { status: 400 });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: 'That email address looks invalid.' }, { status: 400 });
  if (!message) return NextResponse.json({ error: 'Please describe your requirement.' }, { status: 400 });

  try {
    await query(
      `INSERT INTO enquiries (name, company, email, phone, product_interest, message) VALUES ($1,$2,$3,$4,$5,$6)`,
      [name, company, email, phone, product, message],
    );
  } catch (err) {
    console.error('enquiry insert failed', err);
    return NextResponse.json({ error: 'Could not save your enquiry. Please call or WhatsApp us.' }, { status: 500 });
  }
  hits.set(ip, [...recent, now]);
  return NextResponse.json({ ok: true });
}
