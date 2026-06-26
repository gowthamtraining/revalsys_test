import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WishlistState } from '../../types/common.types';

const initialState: WishlistState = {
  items: []
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.items.indexOf(id);
      if (index > -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(id);
      }
    },
    clearWishlist: (state) => {
      state.items = [];
    }
  }
});

export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
