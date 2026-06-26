import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterOptions } from '../../types/api.types';
import { FILTER_DEFAULTS } from '../../constants/filters';

const initialState: FilterOptions = FILTER_DEFAULTS;

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },
    resetFilters: () => FILTER_DEFAULTS
  }
});

export const {
  setCategory,
  setSearch,
  setSort,
  setMinPrice,
  setMaxPrice,
  setPriceRange,
  resetFilters
} = filterSlice.actions;
export default filterSlice.reducer;
