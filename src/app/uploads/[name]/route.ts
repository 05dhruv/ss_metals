import { NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';

const TYPES: Record<string, string> = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.gif': 'image/gif',
};

export async function GET(_req: Request, { params }: { params: { name: string } }) {
  const name = path.basename(params.name);
  const type = TYPES[path.extname(name).toLowerCase()];
  if (!type) return new NextResponse('Not found', { status: 404 });
  try {
    const dir = path.resolve(process.env.UPLOAD_DIR || './storage/uploads');
    const file = await fs.readFile(path.join(dir, name));
    return new NextResponse(file, { headers: { 'Content-Type': type, 'Cache-Control': 'public, max-age=86400' } });
  } catch {
    return new NextResponse('Not found', { status: 404 });
  }
}
