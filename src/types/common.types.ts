import { Product } from './product.types';

export type Theme = 'light' | 'dark';

export interface ThemeState {
  theme: Theme;
}

export interface WishlistState {
  items: string[];
}

export interface ProductState {
  products: Product[];
  featuredProducts: Product[];
  loading: boolean;
  error: string | null;
}
