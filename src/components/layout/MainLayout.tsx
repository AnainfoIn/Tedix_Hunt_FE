import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <View style={styles.shell}>
      <View style={styles.header} accessibilityRole="header">
        <Text style={styles.brand}>Tedix Hunt</Text>
        <Text style={styles.subtitle}>ReactJS starter architecture</Text>
      </View>
      <View style={styles.main}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    gap: 8,
    marginBottom: 32,
  },
  brand: {
    color: '#111827',
    fontSize: 28,
    fontWeight: '800',
  },
  subtitle: {
    color: '#2563eb',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  main: {
    flex: 1,
  },
});
