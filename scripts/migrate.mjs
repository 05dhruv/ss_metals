import './_env.mjs';
import fs from 'node:fs';
import path from 'node:path';
import pg from 'pg';

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set. Copy .env.example to .env first.');
  process.exit(1);
}
const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
await client.connect();
try {
  const sql = fs.readFileSync(path.join(process.cwd(), 'db', 'schema.sql'), 'utf8');
  await client.query(sql);
  console.log('✔ Database schema is up to date.');
} finally {
  await client.end();
}
