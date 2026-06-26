import { Product } from './product.types';

export interface FilterOptions {
  category: string;
  search: string;
  sort: string;
  minPrice: number;
  maxPrice: number;
}

export interface ProductListResponse {
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
}
