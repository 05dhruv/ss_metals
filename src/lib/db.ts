import { Pool, QueryResultRow } from 'pg';

const g = globalThis as unknown as { __smiPool?: Pool | null };

function createPool(): Pool | null {
  if (!process.env.DATABASE_URL) {
    console.warn('⚠️ [Database] DATABASE_URL is not set. Copy .env.example to .env to configure PostgreSQL.');
    return null;
  }
  try {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 10,
      connectionTimeoutMillis: 3000,
      ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
    });
  } catch (err) {
    console.warn('⚠️ [Database] Failed to initialize connection pool:', err);
    return null;
  }
}

function getPool(): Pool | null {
  if (g.__smiPool === undefined) g.__smiPool = createPool();
  return g.__smiPool;
}

export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params: unknown[] = [],
): Promise<T[]> {
  const pool = getPool();
  if (!pool) {
    throw new Error('DATABASE_URL is not configured');
  }
  const res = await pool.query<T>(text, params);
  return res.rows;
}
