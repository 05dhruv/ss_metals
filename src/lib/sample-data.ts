import type { Product, StockItem, Enquiry } from './types';

const SPECS = (extra: Record<string, string> = {}) => ({
  Material: 'Stainless steel (JSLU / J4 / 304 / 316 / 410 / 430)',
  Finish: 'Unfinished (Kalvat) – ready for polish, plating or branding',
  Customization: 'Sizes and weights on request',
  ...extra,
});

export const SAMPLE_PRODUCTS: Product[] = [
  { id: 1, name: 'TAPER MUG', category: 'Tapers & Mugs', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: true, is_active: true, sort_order: 0 },
  { id: 2, name: 'TAPERS', category: 'Tapers & Mugs', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: true, is_active: true, sort_order: 1 },
  { id: 3, name: 'MUG SETS', category: 'Tapers & Mugs', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: true, is_active: true, sort_order: 2 },
  { id: 4, name: 'Beer Mug Plain', category: 'Tapers & Mugs', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 3 },
  { id: 5, name: 'Straight Mug', category: 'Tapers & Mugs', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 4 },
  { id: 6, name: 'JUG SET', category: 'Water Jugs', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: true, is_active: true, sort_order: 5 },
  { id: 7, name: 'Water Jug Plain', category: 'Water Jugs', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 6 },
  { id: 8, name: 'Jug with Lid', category: 'Water Jugs', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 7 },
  { id: 9, name: 'INNER BIDDING SMALL POT', category: 'Kalvat Pots', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: true, is_active: true, sort_order: 8 },
  { id: 10, name: 'L.B INNER BIDDING', category: 'Kalvat Pots', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: true, is_active: true, sort_order: 9 },
  { id: 11, name: 'Kalvat Pot Medium', category: 'Kalvat Pots', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 10 },
  { id: 12, name: 'Kalvat Pot Large', category: 'Kalvat Pots', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 11 },
  { id: 13, name: 'BIG CUTLERY HOLDER', category: 'Cutlery Holders', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: true, is_active: true, sort_order: 12 },
  { id: 14, name: 'BIG CATLARI HOLDER', category: 'Cutlery Holders', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: true, is_active: true, sort_order: 13 },
  { id: 15, name: 'Cutlery Holder Small', category: 'Cutlery Holders', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 14 },
  { id: 16, name: 'Cutlery Holder Round', category: 'Cutlery Holders', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 15 },
  { id: 17, name: 'Ice Bucket Plain', category: 'Ice Buckets & Chillers', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 16 },
  { id: 18, name: 'Ice Bucket Double Wall', category: 'Ice Buckets & Chillers', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 17 },
  { id: 19, name: 'Wine Cooler', category: 'Ice Buckets & Chillers', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 18 },
  { id: 20, name: 'Champagne Bucket', category: 'Ice Buckets & Chillers', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 19 },
  { id: 21, name: 'Bar Tumbler', category: 'Barware & Bathware', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 20 },
  { id: 22, name: 'Cocktail Shaker Body', category: 'Barware & Bathware', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 21 },
  { id: 23, name: 'Bath Bucket', category: 'Barware & Bathware', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 22 },
  { id: 24, name: 'Bath Mug', category: 'Barware & Bathware', description: 'High-grade stainless steel with precision unfinished Kalvat beading.', specs: SPECS(), image_url: null, is_popular: false, is_active: true, sort_order: 23 },
];

export const SAMPLE_STOCK: StockItem[] = [
  { id: 1, kind: 'product', name: 'Ice Bucket Plain', category: 'Ice Buckets & Chillers', grade: '304', size: '3 L', quantity: 1200, unit: 'pcs', low_threshold: 200, updated_at: new Date().toISOString() },
  { id: 2, kind: 'product', name: 'Ice Bucket Double Wall', category: 'Ice Buckets & Chillers', grade: '304', size: '2 L', quantity: 80, unit: 'pcs', low_threshold: 200, updated_at: new Date().toISOString() },
  { id: 3, kind: 'product', name: 'Taper Mug', category: 'Tapers & Mugs', grade: 'JSLU', size: '300 ml', quantity: 4500, unit: 'pcs', low_threshold: 500, updated_at: new Date().toISOString() },
  { id: 4, kind: 'product', name: 'Mug Set (6 pcs)', category: 'Tapers & Mugs', grade: 'J4', size: '250 ml', quantity: 900, unit: 'sets', low_threshold: 150, updated_at: new Date().toISOString() },
  { id: 5, kind: 'product', name: 'Jug Set (1 jug + 6 mugs)', category: 'Water Jugs', grade: '304', size: '1.5 L', quantity: 350, unit: 'sets', low_threshold: 100, updated_at: new Date().toISOString() },
  { id: 6, kind: 'raw', name: 'Circle', category: 'Circles', grade: '304', size: '10" x 0.6 mm', quantity: 2500, unit: 'kg', low_threshold: 500, updated_at: new Date().toISOString() },
  { id: 7, kind: 'raw', name: 'Circle', category: 'Circles', grade: 'J4', size: '12" x 0.5 mm', quantity: 1800, unit: 'kg', low_threshold: 500, updated_at: new Date().toISOString() },
  { id: 8, kind: 'raw', name: 'Sheet', category: 'Sheets', grade: '316', size: '4 x 8 ft x 1.0 mm', quantity: 40, unit: 'sheets', low_threshold: 50, updated_at: new Date().toISOString() },
  { id: 9, kind: 'raw', name: 'Patta / Patti', category: 'Patta', grade: '430', size: '25 mm x 1.2 mm', quantity: 3200, unit: 'kg', low_threshold: 500, updated_at: new Date().toISOString() },
  { id: 10, kind: 'raw', name: 'Coil', category: 'Coil', grade: 'JSLU', size: '1250 mm x 0.6 mm', quantity: 0, unit: 'kg', low_threshold: 1000, updated_at: new Date().toISOString() },
];

export const SAMPLE_ENQUIRIES: Enquiry[] = [];
