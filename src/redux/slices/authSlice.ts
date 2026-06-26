import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../types/auth.types';

const initialState: AuthState = {
  isLoggedIn: false,
  isGuest: false,
  username: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.isGuest = action.payload.isGuest;
      state.username = action.payload.username;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.isGuest = false;
      state.username = null;
    }
  }
});

export const { setAuth, logoutUser } = authSlice.actions;
export default authSlice.reducer;
