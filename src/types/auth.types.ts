export interface UserSession {
  username: string;
  isGuest: boolean;
  isLoggedIn: boolean;
}

export interface AuthState {
  isLoggedIn: boolean;
  isGuest: boolean;
  username: string | null;
}
