import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './DetailScreen.styles';

export default function DetailScreen({ route, navigation }: any) {
  const { post } = route.params;
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbarMock}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>⬅ Volver</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>Detalle del Post</Text>
      </View>

      <Image source={{ uri: post.image }} style={styles.mainImage} />

      <View style={styles.infoContainer}>
        <View style={styles.interactiveRow}>
          <TouchableOpacity onPress={() => { setLiked(!liked); setLikes(l => liked ? l-1 : l+1); }}>
            <Text style={styles.likeEmoji}>{liked ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
          <Text style={styles.likesText}>{likes} Me gusta</Text>
        </View>

        <Text style={styles.caption}>
          <Text style={styles.userTitle}>{post.username} </Text>
          {post.caption}
        </Text>

        <Text style={styles.commentsHeader}>Comentarios</Text>
        {post.comments.map((comment: string, i: number) => (
          <View key={i} style={styles.commentBox}>
            <Text style={styles.commentText}>💬 {comment}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}