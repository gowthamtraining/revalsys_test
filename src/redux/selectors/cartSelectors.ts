import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartSubtotal = (state: RootState) => state.cart.subtotal;
export const selectCartTotal = (state: RootState) => state.cart.total;
export const selectCartQuantity = (state: RootState) => state.cart.quantity;

export const selectIsInCart = (productId: string) => (state: RootState) =>
  state.cart.items.some((item) => item.product.id === productId);

export const selectCartItemQuantity = (productId: string) => (state: RootState) => {
  const item = state.cart.items.find((item) => item.product.id === productId);
  return item ? item.quantity : 0;
};
