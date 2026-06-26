import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ProductService } from '../../services/product.service';

export const selectProductsState = (state: RootState) => state.products;
export const selectAllProducts = (state: RootState) => state.products.products;
export const selectFeaturedProducts = (state: RootState) => state.products.featuredProducts;
export const selectProductsLoading = (state: RootState) => state.products.loading;
export const selectProductsError = (state: RootState) => state.products.error;

export const selectProductById = (id: string) => (state: RootState) =>
  state.products.products.find((p) => p.id === id);

export const selectFilters = (state: RootState) => state.filters;

export const selectWishlistItems = (state: RootState) => state.wishlist.items;
export const selectIsInWishlist = (id: string) => (state: RootState) =>
  state.wishlist.items.includes(id);

export const selectTheme = (state: RootState) => state.theme.theme;

export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectFilters],
  (products, filters) => {
    const filtered = ProductService.filterProducts(products, filters);
    return ProductService.sortProducts(filtered, filters.sort);
  }
);
