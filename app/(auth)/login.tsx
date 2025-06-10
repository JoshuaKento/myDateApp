import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Login</ThemedText>
      <ThemedText>Sign in to continue.</ThemedText>
      <Link href="/(auth)/register" style={styles.link}>
        <ThemedText type="link">Create an account</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
  },
});
