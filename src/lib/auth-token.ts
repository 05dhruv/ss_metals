// Edge-safe helpers (used by middleware too) – only depends on `jose`.
import { SignJWT, jwtVerify } from 'jose';

export const COOKIE_NAME = 'smi_admin';
export const SESSION_SECONDS = 60 * 60 * 24 * 7;

function secret() {
  return new TextEncoder().encode(process.env.AUTH_SECRET || 'dev-only-secret-change-me');
}

export async function signSession() {
  return new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_SECONDS}s`)
    .sign(secret());
}

export async function verifySession(token?: string) {
  if (!token) return false;
  try {
    await jwtVerify(token, secret());
    return true;
  } catch {
    return false;
  }
}
