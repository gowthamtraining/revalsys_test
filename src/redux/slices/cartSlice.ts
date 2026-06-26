import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from '../../types/cart.types';
import { Product } from '../../types/product.types';
import { CartService } from '../../services/cart.service';

const initialState: CartState = {
  items: [],
  subtotal: 0,
  total: 0,
  quantity: 0
};

const updateCartTotals = (state: CartState) => {
  state.subtotal = CartService.calculateSubtotal(state.items);
  state.quantity = CartService.calculateTotalQuantity(state.items);
  const shipping = CartService.calculateShipping(state.subtotal);
  const tax = CartService.calculateTax(state.subtotal);
  state.total = CartService.calculateTotal(state.subtotal, shipping, tax);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.product.id === product.id);

      if (existingItem) {
        const newQty = existingItem.quantity + quantity;
        if (newQty <= product.stock) {
          existingItem.quantity = newQty;
        } else {
          existingItem.quantity = product.stock;
        }
      } else {
        const initialQty = Math.min(quantity, product.stock);
        if (initialQty > 0) {
          state.items.push({ product, quantity: initialQty });
        }
      }
      updateCartTotals(state);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.product.id !== action.payload);
      updateCartTotals(state);
    },
    updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find((i) => i.product.id === productId);
      if (item) {
        const targetQty = Math.max(1, Math.min(quantity, item.product.stock));
        item.quantity = targetQty;
      }
      updateCartTotals(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.subtotal = 0;
      state.total = 0;
      state.quantity = 0;
    }
  }
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
