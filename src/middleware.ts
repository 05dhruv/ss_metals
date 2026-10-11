import { NextRequest, NextResponse } from 'next/server';
import { COOKIE_NAME, verifySession } from '@/lib/auth-token';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === '/admin/login') return NextResponse.next();
  const ok = await verifySession(req.cookies.get(COOKIE_NAME)?.value);
  if (!ok) return NextResponse.redirect(new URL('/admin/login', req.url));
  return NextResponse.next();
}

export const config = { matcher: ['/admin/:path*'] };
