import { createContext, useCallback, useContext, useMemo, useState, type PropsWithChildren } from 'react';
import type { AuthUser, LoginCredentials } from '../../features/auth/types';

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = useCallback(async ({ email }: LoginCredentials) => {
    // Mock authentication: replace with a real API call when the backend is available.
    await new Promise((resolve) => setTimeout(resolve, 400));
    setUser({ email });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, isAuthenticated: user !== null, login, logout }),
    [user, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
