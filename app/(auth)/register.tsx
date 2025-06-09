import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function RegisterScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Register</ThemedText>
      <ThemedText>Create an account to get started.</ThemedText>
      <Link href="/(auth)/login" style={styles.link}>
        <ThemedText type="link">Back to login</ThemedText>
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
