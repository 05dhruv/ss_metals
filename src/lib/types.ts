export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  specs: Record<string, string>;
  image_url: string | null;
  is_popular: boolean;
  is_active: boolean;
  sort_order: number;
};

export type StockItem = {
  id: number;
  kind: 'product' | 'raw';
  name: string;
  category: string;
  grade: string;
  size: string;
  quantity: number;
  unit: string;
  low_threshold: number;
  updated_at: string;
};

export type Enquiry = {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  product_interest: string;
  message: string;
  status: 'new' | 'contacted' | 'closed';
  created_at: string;
};
