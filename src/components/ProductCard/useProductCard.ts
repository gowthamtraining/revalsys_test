import React from 'react';
import { Product } from '../../types/product.types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleWishlist } from '../../redux/slices/wishlistSlice';
import { addItem } from '../../redux/slices/cartSlice';
import { selectIsInWishlist } from '../../redux/selectors/productSelectors';

export const useProductCard = (product: Product) => {
  const dispatch = useAppDispatch();
  const isWishlisted = useAppSelector(selectIsInWishlist(product.id));

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleWishlist(product.id));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addItem({ product, quantity: 1 }));
  };

  const isOutOfStock = product.stock === 0;

  return {
    isWishlisted,
    isOutOfStock,
    handleWishlistToggle,
    handleAddToCart
  };
};
export default useProductCard;
