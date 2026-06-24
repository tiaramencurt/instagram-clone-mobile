import React from 'react';
import { View, FlatList } from 'react-native';
import Header from '../../components/Header';
import StoryBar from '../../components/StoryBar';
import PostItem from '../../components/PostItem';
import { styles } from './FeedScreen.styles';

export default function FeedScreen({ posts, navigation }: any) {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<StoryBar />}
        renderItem={({ item }) => (
          <PostItem 
            post={item} 
            onPress={() => navigation.navigate('PostDetail', { post: item })} 
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}