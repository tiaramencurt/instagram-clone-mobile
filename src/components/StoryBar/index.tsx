import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from './StoryBar.styles';

export default function StoryBar() {
  const stories = [1, 2, 3, 4, 5, 6];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {stories.map((story) => (
          <View key={story} style={styles.storyWrapper}>
            <TouchableOpacity style={styles.border}>
              <Image source={{ uri: `https://i.pravatar.cc/100?img=${story}` }} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.username} numberOfLines={1}>cat_user</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}