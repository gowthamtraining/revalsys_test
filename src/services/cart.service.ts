import { CartItem } from '../types/cart.types';

export const CartService = {
  calculateSubtotal: (items: CartItem[]): number => {
    return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  },

  calculateTotalQuantity: (items: CartItem[]): number => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  },

  calculateTax: (subtotal: number, rate: number = 0.08): number => {
    return subtotal * rate;
  },

  calculateShipping: (subtotal: number, threshold: number = 100): number => {
    if (subtotal === 0) return 0;
    return subtotal >= threshold ? 0 : 15; // Free shipping over $100, otherwise $15
  },

  calculateTotal: (subtotal: number, shipping: number, tax: number): number => {
    return subtotal + shipping + tax;
  }
};
