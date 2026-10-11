import { query } from './db';
import type { Enquiry, Product, StockItem } from './types';
import { SAMPLE_PRODUCTS, SAMPLE_STOCK, SAMPLE_ENQUIRIES } from './sample-data';

let warnedDb = false;
function handleDbError(err: unknown) {
  if (!warnedDb) {
    console.warn(
      '⚠️ [Database] Could not connect to PostgreSQL. Using fallback sample catalogue data.\n' +
      '   To use live database: Ensure PostgreSQL is running and execute `npm run db:setup`.\n' +
      '   Details:',
      err instanceof Error ? err.message : err
    );
    warnedDb = true;
  }
}

export const getProducts = async (opts: { popularOnly?: boolean; includeInactive?: boolean } = {}): Promise<Product[]> => {
  try {
    return await query<Product>(
      `SELECT id, name, category, description, specs, image_url, is_popular, is_active, sort_order
         FROM products
        WHERE ($1::boolean OR is_active)
          AND (NOT $2::boolean OR is_popular)
        ORDER BY sort_order, id`,
      [!!opts.includeInactive, !!opts.popularOnly],
    );
  } catch (err) {
    handleDbError(err);
    return SAMPLE_PRODUCTS.filter((p) => {
      if (!opts.includeInactive && !p.is_active) return false;
      if (opts.popularOnly && !p.is_popular) return false;
      return true;
    });
  }
};

export const getProduct = async (id: number): Promise<Product | undefined> => {
  try {
    const rows = await query<Product>('SELECT * FROM products WHERE id = $1', [id]);
    return rows[0];
  } catch (err) {
    handleDbError(err);
    return SAMPLE_PRODUCTS.find((p) => p.id === id);
  }
};

export const getStock = async (): Promise<StockItem[]> => {
  try {
    return await query<StockItem>('SELECT * FROM stock_items ORDER BY kind, category, name, grade, id');
  } catch (err) {
    handleDbError(err);
    return SAMPLE_STOCK;
  }
};

export const getStockItem = async (id: number): Promise<StockItem | undefined> => {
  try {
    const rows = await query<StockItem>('SELECT * FROM stock_items WHERE id = $1', [id]);
    return rows[0];
  } catch (err) {
    handleDbError(err);
    return SAMPLE_STOCK.find((s) => s.id === id);
  }
};

export const getEnquiries = async (): Promise<Enquiry[]> => {
  try {
    return await query<Enquiry>('SELECT * FROM enquiries ORDER BY created_at DESC LIMIT 300');
  } catch (err) {
    handleDbError(err);
    return SAMPLE_ENQUIRIES;
  }
};

export async function getCounts() {
  try {
    const rows = await query<{ products: number; stock: number; new_enquiries: number; enquiries: number }>(
      `SELECT (SELECT COUNT(*) FROM products)::int AS products,
              (SELECT COUNT(*) FROM stock_items)::int AS stock,
              (SELECT COUNT(*) FROM enquiries WHERE status = 'new')::int AS new_enquiries,
              (SELECT COUNT(*) FROM enquiries)::int AS enquiries`,
    );
    return rows[0] || { products: 0, stock: 0, new_enquiries: 0, enquiries: 0 };
  } catch (err) {
    handleDbError(err);
    return {
      products: SAMPLE_PRODUCTS.length,
      stock: SAMPLE_STOCK.length,
      new_enquiries: 0,
      enquiries: 0,
    };
  }
}
