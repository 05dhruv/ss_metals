import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { COOKIE_NAME, SESSION_SECONDS, signSession, verifySession } from './auth-token';

export async function createSession() {
  cookies().set(COOKIE_NAME, await signSession(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production' && process.env.INSECURE_COOKIES !== 'true',
    path: '/',
    maxAge: SESSION_SECONDS,
  });
}

export function destroySession() {
  cookies().delete(COOKIE_NAME);
}

export async function requireAdmin() {
  const ok = await verifySession(cookies().get(COOKIE_NAME)?.value);
  if (!ok) redirect('/admin/login');
}
