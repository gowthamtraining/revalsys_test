import { AuthState } from '../types/auth.types';

export const AuthService = {
  loginAsUser: (username: string): AuthState => {
    return {
      isLoggedIn: true,
      isGuest: false,
      username: username
    };
  },

  loginAsGuest: (): AuthState => {
    return {
      isLoggedIn: true,
      isGuest: true,
      username: 'Guest'
    };
  },

  logout: (): AuthState => {
    return {
      isLoggedIn: false,
      isGuest: false,
      username: null
    };
  }
};
