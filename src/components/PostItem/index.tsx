import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import { styles } from './PostItem.styles';

export default function PostItem({ post, onPress }: { post: any, onPress: () => void }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <View style={styles.post}>
      <View style={styles.postTop}>
        <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatar} />
        <Text style={styles.username}>{post.username}</Text>
      </View>

      <Pressable onPress={onPress}>
        <Image source={{ uri: post.image }} style={styles.postImage} />
      </Pressable>

      <View style={styles.postContent}>
        <View style={styles.actions}>
          <TouchableOpacity onPress={handleLike}>
            <Text style={styles.actionIcon}>{liked ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.likesCount}>{likes} Me gusta</Text>

        <Text style={styles.caption}>
          <Text style={styles.boldUser}>{post.username} </Text>
          {post.caption}
        </Text>
      </View>
    </View>
  );
}