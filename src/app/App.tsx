import { AuthProvider } from './providers/AuthProvider';
import { RootNavigator } from './RootNavigator';

export function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
