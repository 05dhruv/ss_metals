'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { timingSafeEqual } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { query } from '@/lib/db';
import { createSession, destroySession, requireAdmin } from '@/lib/auth';

const str = (fd: FormData, k: string, max = 500) => String(fd.get(k) ?? '').trim().slice(0, max);
const num = (fd: FormData, k: string, d = 0) => {
  const n = parseInt(String(fd.get(k) ?? ''), 10);
  return Number.isFinite(n) ? n : d;
};
const refresh = () => revalidatePath('/', 'layout');

function safeEqual(a: string, b: string) {
  const A = Buffer.from(a);
  const B = Buffer.from(b);
  return A.length === B.length && timingSafeEqual(A, B);
}

/* ---------- auth ---------- */
export async function loginAction(_prev: { error?: string } | undefined, fd: FormData) {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return { error: 'ADMIN_PASSWORD is not set in the server environment (.env).' };
  const okUser = safeEqual(str(fd, 'username', 100), process.env.ADMIN_USERNAME || 'admin');
  const okPass = safeEqual(String(fd.get('password') ?? ''), password);
  if (!(okUser && okPass)) return { error: 'Wrong username or password.' };
  await createSession();
  redirect('/admin');
}

export async function logoutAction() {
  destroySession();
  redirect('/admin/login');
}

/* ---------- products ---------- */
function parseSpecs(text: string) {
  const out: Record<string, string> = {};
  for (const line of text.split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i < 1) continue;
    const k = line.slice(0, i).trim();
    const v = line.slice(i + 1).trim();
    if (k && v) out[k] = v;
  }
  return out;
}

async function saveUpload(file: File): Promise<string | null> {
  if (!file || file.size === 0) return null;
  const ext = path.extname(file.name).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) throw new Error('Only JPG, PNG, WEBP or GIF images are allowed.');
  if (file.size > 5 * 1024 * 1024) throw new Error('Image must be under 5 MB.');
  const dir = path.resolve(process.env.UPLOAD_DIR || './storage/uploads');
  await fs.mkdir(dir, { recursive: true });
  const name = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
  await fs.writeFile(path.join(dir, name), Buffer.from(await file.arrayBuffer()));
  return `/uploads/${name}`;
}

export async function saveProduct(fd: FormData) {
  await requireAdmin();
  const id = num(fd, 'id');
  const name = str(fd, 'name', 200);
  const category = str(fd, 'category', 120);
  if (!name || !category) redirect(`/admin/products?error=${encodeURIComponent('Name and category are required.')}`);

  let image = str(fd, 'image_url', 500) || null;
  try {
    const uploaded = await saveUpload(fd.get('image') as File);
    if (uploaded) image = uploaded;
  } catch (e) {
    redirect(`/admin/products?error=${encodeURIComponent(e instanceof Error ? e.message : 'Upload failed')}`);
  }

  const values = [
    name, category, str(fd, 'description', 2000), JSON.stringify(parseSpecs(str(fd, 'specs', 4000))),
    image, fd.get('is_popular') === 'on', fd.get('is_active') === 'on', num(fd, 'sort_order'),
  ];
  if (id) {
    await query(
      `UPDATE products SET name=$1, category=$2, description=$3, specs=$4::jsonb, image_url=$5,
              is_popular=$6, is_active=$7, sort_order=$8, updated_at=now() WHERE id=$9`,
      [...values, id],
    );
  } else {
    await query(
      `INSERT INTO products (name, category, description, specs, image_url, is_popular, is_active, sort_order)
       VALUES ($1,$2,$3,$4::jsonb,$5,$6,$7,$8)`,
      values,
    );
  }
  refresh();
  redirect('/admin/products?saved=1');
}

export async function deleteProduct(fd: FormData) {
  await requireAdmin();
  await query('DELETE FROM products WHERE id = $1', [num(fd, 'id')]);
  refresh();
  redirect('/admin/products');
}

/* ---------- stock ---------- */
export async function saveStock(fd: FormData) {
  await requireAdmin();
  const id = num(fd, 'id');
  const name = str(fd, 'name', 200);
  if (!name) redirect(`/admin/stock?error=${encodeURIComponent('Item name is required.')}`);
  const kind = str(fd, 'kind') === 'raw' ? 'raw' : 'product';
  const values = [
    kind, name, str(fd, 'category', 120), str(fd, 'grade', 40), str(fd, 'size', 80),
    Math.max(0, num(fd, 'quantity')), str(fd, 'unit', 20) || 'pcs', Math.max(0, num(fd, 'low_threshold', 100)),
  ];
  if (id) {
    await query(
      `UPDATE stock_items SET kind=$1, name=$2, category=$3, grade=$4, size=$5, quantity=$6, unit=$7,
              low_threshold=$8, updated_at=now() WHERE id=$9`,
      [...values, id],
    );
  } else {
    await query(
      `INSERT INTO stock_items (kind, name, category, grade, size, quantity, unit, low_threshold)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
      values,
    );
  }
  refresh();
  redirect('/admin/stock?saved=1');
}

export async function deleteStock(fd: FormData) {
  await requireAdmin();
  await query('DELETE FROM stock_items WHERE id = $1', [num(fd, 'id')]);
  refresh();
  redirect('/admin/stock');
}

/* ---------- enquiries ---------- */
export async function setEnquiryStatus(fd: FormData) {
  await requireAdmin();
  const status = str(fd, 'status');
  if (!['new', 'contacted', 'closed'].includes(status)) return;
  await query('UPDATE enquiries SET status = $1 WHERE id = $2', [status, num(fd, 'id')]);
  revalidatePath('/admin');
}

export async function deleteEnquiry(fd: FormData) {
  await requireAdmin();
  await query('DELETE FROM enquiries WHERE id = $1', [num(fd, 'id')]);
  revalidatePath('/admin');
}
