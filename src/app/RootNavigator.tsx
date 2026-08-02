import { useAuth } from './providers/AuthProvider';
import { MainLayout } from '../components/layout/MainLayout';
import { LoginScreen } from '../features/auth/LoginScreen';
import { LandingScreen } from '../features/landing/LandingScreen';

export function RootNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <MainLayout subtitle={isAuthenticated ? 'Landing' : 'Sign in'}>
      {isAuthenticated ? <LandingScreen /> : <LoginScreen />}
    </MainLayout>
  );
}
