export type UserProfile = {
  id: string;
  name: string;
  age: number;
  distance: string;
  image: string;
};

export const mockUsers: UserProfile[] = [
  {
    id: '1',
    name: 'Alice',
    age: 28,
    distance: '2 km',
    image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
  },
  {
    id: '2',
    name: 'Bob',
    age: 31,
    distance: '3 km',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  },
  {
    id: '3',
    name: 'Carol',
    age: 25,
    distance: '5 km',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?2',
  },
];
