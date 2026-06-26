import { Product } from './product.types';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
  total: number;
  quantity: number;
}
