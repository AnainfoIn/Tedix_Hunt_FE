import { StyleSheet, Text, View } from 'react-native';

const architectureItems = [
  'app: application composition and providers',
  'components: reusable UI building blocks',
  'features: domain-focused screens and logic',
  'shared: global styles, utilities, and constants',
];

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>Build Tedix Hunt with a clean frontend foundation.</Text>
        <Text style={styles.intro}>
          This starter organizes the React codebase around feature modules, shared
          components, and a small application shell so new screens and services have
          an obvious place to live.
        </Text>
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Project structure</Text>
        {architectureItems.map((item) => (
          <Text key={item} style={styles.item}>
            • {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  hero: {
    gap: 16,
  },
  title: {
    color: '#111827',
    fontSize: 40,
    fontWeight: '900',
    lineHeight: 46,
  },
  intro: {
    color: '#4b5563',
    fontSize: 18,
    lineHeight: 30,
  },
  panel: {
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
    borderRadius: 24,
    borderWidth: 1,
    gap: 12,
    padding: 24,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
  },
  panelTitle: {
    color: '#111827',
    fontSize: 22,
    fontWeight: '800',
  },
  item: {
    color: '#374151',
    fontSize: 16,
    lineHeight: 24,
  },
});
