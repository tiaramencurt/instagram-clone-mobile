import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { mockStories } from '../../data/mockData';
import { styles } from './StoryBar.styles';

export default function StoryBar() {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockStories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const isMyStory = index === 0;

          return (
            <TouchableOpacity style={styles.storyItem} activeOpacity={0.8}>
              {isMyStory ? (
                // Tu historia no lleva gradiente rosa, lleva el badge de suma (+) azul
                <View style={[styles.avatarContainer, { backgroundColor: 'transparent' }]}>
                  <Image source={{ uri: item.image }} style={styles.avatarImage} />
                  <View style={styles.myStoryBadge}>
                    <Text style={styles.myStoryText}>+</Text>
                  </View>
                </View>
              ) : (
                // Gradiente cromático oficial de las historias de Instagram
                <LinearGradient
                  colors={['#c913b9', '#f9373f', '#fec053']}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.avatarContainer}
                >
                  <Image source={{ uri: item.image }} style={styles.avatarImage} />
                </LinearGradient>
              )}
              
              <Text style={styles.usernameText} numberOfLines={1} ellipsizeMode="tail">
                {isMyStory ? 'Tu historia' : item.username}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}