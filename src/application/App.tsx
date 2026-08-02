import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { MainLayout } from '../components/layout/MainLayout';
import { HomeScreen } from '../features/home/HomeScreen';

export function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <MainLayout>
          <HomeScreen />
        </MainLayout>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f8fafc',
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
});
