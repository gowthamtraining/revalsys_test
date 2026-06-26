import { RootState } from '../store';

export const selectAuth = (state: RootState) => state.auth;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsGuest = (state: RootState) => state.auth.isGuest;
export const selectUsername = (state: RootState) => state.auth.username;
