import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { useCallback, useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ProfileCard from '@/components/ProfileCard';
import { mockUsers, UserProfile } from '@/constants/mockUsers';

export default function ExploreScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [users, setUsers] = useState<UserProfile[]>(mockUsers);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // In a real app you would fetch new data here.
    setTimeout(() => {
      setUsers([...mockUsers]);
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <ProfileCard name={item.name} age={item.age} distance={item.distance} image={item.image} />
        )}
        ListHeaderComponent={<ThemedText type="title">Explore Nearby</ThemedText>}
        contentContainerStyle={styles.listContent}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
});
