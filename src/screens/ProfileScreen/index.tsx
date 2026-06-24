import React from 'react';
import { View, Text, Image, FlatList, useWindowDimensions } from 'react-native';
import user from '../../data/user';
import { styles } from './ProfileScreen.styles';

export default function ProfileScreen({ posts }: any) {
  const { width } = useWindowDimensions();
  const size = width / 3; // Grilla perfecta de 3 columnas sin desbordamiento

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarBorder}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
        </View>
        <View style={styles.info}>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
          <View style={styles.statsRow}>
            <Text style={styles.stat}><Text style={styles.bold}>{user.posts}</Text> posts</Text>
            <Text style={styles.stat}><Text style={styles.bold}>{user.followers}</Text> segs</Text>
            <Text style={styles.stat}><Text style={styles.bold}>{user.following}</Text> sigs</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <Image 
            source={{ uri: item.image }} 
            style={[styles.gridImage, { width: size, height: size }]} 
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}