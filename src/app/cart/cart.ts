import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { removeItem, updateQuantity, clearCart } from '../../redux/slices/cartSlice';
import {
  selectCartItems,
  selectCartSubtotal,
  selectCartTotal,
  selectCartQuantity
} from '../../redux/selectors/cartSelectors';
import { CartService } from '../../services/cart.service';

export const useCartPage = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartSubtotal);
  const total = useAppSelector(selectCartTotal);
  const quantity = useAppSelector(selectCartQuantity);

  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const shipping = CartService.calculateShipping(subtotal);
  const tax = CartService.calculateTax(subtotal);

  const handleCheckout = () => {
    setIsCheckoutModalOpen(true);
  };

  const confirmCheckout = () => {
    dispatch(clearCart());
    setIsCheckoutModalOpen(false);
  };

  const adjustQuantity = (productId: string, qty: number) => {
    dispatch(updateQuantity({ productId, quantity: qty }));
  };

  const removeFromCart = (productId: string) => {
    dispatch(removeItem(productId));
  };

  return {
    items,
    subtotal,
    shipping,
    tax,
    total,
    quantity,
    adjustQuantity,
    removeFromCart,
    handleCheckout,
    isCheckoutModalOpen,
    setIsCheckoutModalOpen,
    confirmCheckout
  };
};
export default useCartPage;
