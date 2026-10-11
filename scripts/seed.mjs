// Adds SAMPLE products and stock only when the tables are empty.
// Replace with your real catalogue from /admin afterwards.
import './_env.mjs';
import pg from 'pg';

const SPECS = (extra = {}) => ({
  Material: 'Stainless steel (JSLU / J4 / 304 / 316 / 410 / 430)',
  Finish: 'Unfinished (Kalvat) – ready for polish, plating or branding',
  Customization: 'Sizes and weights on request',
  ...extra,
});

const products = [
  // [name, category, popular, description]
  ['TAPER MUG', 'Tapers & Mugs', true],
  ['TAPERS', 'Tapers & Mugs', true],
  ['MUG SETS', 'Tapers & Mugs', true],
  ['Beer Mug Plain', 'Tapers & Mugs', false],
  ['Straight Mug', 'Tapers & Mugs', false],
  ['JUG SET', 'Water Jugs', true],
  ['Water Jug Plain', 'Water Jugs', false],
  ['Jug with Lid', 'Water Jugs', false],
  ['INNER BIDDING SMALL POT', 'Kalvat Pots', true],
  ['L.B INNER BIDDING', 'Kalvat Pots', true],
  ['Kalvat Pot Medium', 'Kalvat Pots', false],
  ['Kalvat Pot Large', 'Kalvat Pots', false],
  ['BIG CUTLERY HOLDER', 'Cutlery Holders', true],
  ['BIG CATLARI HOLDER', 'Cutlery Holders', true],
  ['Cutlery Holder Small', 'Cutlery Holders', false],
  ['Cutlery Holder Round', 'Cutlery Holders', false],
  ['Ice Bucket Plain', 'Ice Buckets & Chillers', false],
  ['Ice Bucket Double Wall', 'Ice Buckets & Chillers', false],
  ['Wine Cooler', 'Ice Buckets & Chillers', false],
  ['Champagne Bucket', 'Ice Buckets & Chillers', false],
  ['Bar Tumbler', 'Barware & Bathware', false],
  ['Cocktail Shaker Body', 'Barware & Bathware', false],
  ['Bath Bucket', 'Barware & Bathware', false],
  ['Bath Mug', 'Barware & Bathware', false],
];

const stock = [
  // kind, name, category, grade, size, qty, unit, low
  ['product', 'Ice Bucket Plain', 'Ice Buckets & Chillers', '304', '3 L', 1200, 'pcs', 200],
  ['product', 'Ice Bucket Double Wall', 'Ice Buckets & Chillers', '304', '2 L', 80, 'pcs', 200],
  ['product', 'Taper Mug', 'Tapers & Mugs', 'JSLU', '300 ml', 4500, 'pcs', 500],
  ['product', 'Mug Set (6 pcs)', 'Tapers & Mugs', 'J4', '250 ml', 900, 'sets', 150],
  ['product', 'Jug Set (1 jug + 6 mugs)', 'Water Jugs', '304', '1.5 L', 350, 'sets', 100],
  ['raw', 'Circle', 'Circles', '304', '10" x 0.6 mm', 2500, 'kg', 500],
  ['raw', 'Circle', 'Circles', 'J4', '12" x 0.5 mm', 1800, 'kg', 500],
  ['raw', 'Sheet', 'Sheets', '316', '4 x 8 ft x 1.0 mm', 40, 'sheets', 50],
  ['raw', 'Patta / Patti', 'Patta', '430', '25 mm x 1.2 mm', 3200, 'kg', 500],
  ['raw', 'Coil', 'Coil', 'JSLU', '1250 mm x 0.6 mm', 0, 'kg', 1000],
];

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set. Copy .env.example to .env first.');
  process.exit(1);
}
const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
await client.connect();
try {
  const p = await client.query('SELECT COUNT(*)::int AS n FROM products');
  if (p.rows[0].n === 0) {
    let order = 0;
    for (const [name, category, popular] of products) {
      await client.query(
        `INSERT INTO products (name, category, description, specs, is_popular, sort_order)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          name,
          category,
          'High-grade stainless steel with precision unfinished Kalvat beading.',
          JSON.stringify(SPECS()),
          popular,
          order++,
        ],
      );
    }
    console.log(`✔ Seeded ${products.length} sample products.`);
  } else console.log('• Products already exist – skipped.');

  const s = await client.query('SELECT COUNT(*)::int AS n FROM stock_items');
  if (s.rows[0].n === 0) {
    for (const row of stock) {
      await client.query(
        `INSERT INTO stock_items (kind, name, category, grade, size, quantity, unit, low_threshold)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
        row,
      );
    }
    console.log(`✔ Seeded ${stock.length} sample stock rows.`);
  } else console.log('• Stock already exists – skipped.');
} finally {
  await client.end();
}
