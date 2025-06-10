import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type Props = {
  name: string;
  age: number;
  distance: string;
  image: string;
};

export default function ProfileCard({ name, age, distance, image }: Props) {
  return (
    <ThemedView style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <ThemedText type="subtitle">{name}, {age}</ThemedText>
      <ThemedText style={styles.distance}>{distance} away</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginVertical: 12,
    padding: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  distance: {
    color: '#888',
  },
});
