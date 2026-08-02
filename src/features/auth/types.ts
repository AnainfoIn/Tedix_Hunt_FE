export type AuthUser = {
  email: string;
};

export type AuthState = {
  user: AuthUser | null;
  isAuthenticated: boolean;
};

export type LoginCredentials = {
  email: string;
  password: string;
};
