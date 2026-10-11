-- SS METALS Industries – PostgreSQL schema (safe to run repeatedly)

CREATE TABLE IF NOT EXISTS products (
  id          SERIAL PRIMARY KEY,
  name        TEXT        NOT NULL,
  category    TEXT        NOT NULL,
  description TEXT        NOT NULL DEFAULT '',
  specs       JSONB       NOT NULL DEFAULT '{}'::jsonb,
  image_url   TEXT,
  is_popular  BOOLEAN     NOT NULL DEFAULT FALSE,
  is_active   BOOLEAN     NOT NULL DEFAULT TRUE,
  sort_order  INTEGER     NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_products_category ON products (category);

-- kind = 'product' (finished goods) or 'raw' (patta, patti, coil, circles, sheets)
CREATE TABLE IF NOT EXISTS stock_items (
  id            SERIAL PRIMARY KEY,
  kind          TEXT        NOT NULL DEFAULT 'product' CHECK (kind IN ('product', 'raw')),
  name          TEXT        NOT NULL,
  category      TEXT        NOT NULL DEFAULT '',
  grade         TEXT        NOT NULL DEFAULT '',
  size          TEXT        NOT NULL DEFAULT '',
  quantity      INTEGER     NOT NULL DEFAULT 0 CHECK (quantity >= 0),
  unit          TEXT        NOT NULL DEFAULT 'pcs',
  low_threshold INTEGER     NOT NULL DEFAULT 100,
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_stock_kind ON stock_items (kind);

CREATE TABLE IF NOT EXISTS enquiries (
  id               SERIAL PRIMARY KEY,
  name             TEXT        NOT NULL,
  company          TEXT        NOT NULL DEFAULT '',
  email            TEXT        NOT NULL DEFAULT '',
  phone            TEXT        NOT NULL DEFAULT '',
  product_interest TEXT        NOT NULL DEFAULT '',
  message          TEXT        NOT NULL,
  status           TEXT        NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_enquiries_created ON enquiries (created_at DESC);
