import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from '../../types/common.types';
import { Product } from '../../types/product.types';
import productsData from '../../data/products.json';

const initialState: ProductState = {
  products: productsData as unknown as Product[],
  featuredProducts: (productsData as unknown as Product[]).filter((p) => p.featured),
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.featuredProducts = action.payload.filter((p) => p.featured);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { setProducts, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;
