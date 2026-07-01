export interface UserProfile {
  id: string;
  username: string;
  fullName: string;
  bio: string;
  profilePicture: string;
  followers: string;
  following: string;
  postsCount: number;
}

export interface Story {
  id: string;
  username: string;
  image: string;
}

export const currentUser: UserProfile = {
  id: '1',
  username: 'ugur_mercan0',
  fullName: 'Ugur Mercan',
  bio: 'Creador Digital | Fotógrafo y Montañas 🏔️\nDesarrollador con React Native y Expo.',
  profilePicture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
  followers: '121K',
  following: '842',
  postsCount: 450,
};

export const mockStories: Story[] = [
  { id: '1', username: 'tu_historia', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop' },
  { id: '2', username: 'cake_master', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=150&h=150&fit=crop' },
  { id: '3', username: 'city_lights', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=150&h=150&fit=crop' },
  { id: '4', username: 'wild_life', image: 'https://images.unsplash.com/photo-1512446816042-444d641267d4?w=150&h=150&fit=crop' },
  { id: '5', username: 'neon_vibes', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=150&h=150&fit=crop' },
];