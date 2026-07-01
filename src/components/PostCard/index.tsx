import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import { styles } from './PostCard.styles';

interface PostCardProps {
  id: string;
  imageUrl: string;
  onPress: () => void;
}

export default function PostCard({ id, imageUrl, onPress }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const baseLikes = 1420;
  const username = `cat_lover_${id.slice(0, 4)}`;

  const handleLikePress = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.cardContainer}>
      {/* Cabecera del Post */}
      <View style={styles.headerRow}>
        <View style={styles.userInfo}>
          <Image 
            source={{ uri: `https://i.pravatar.cc/150?u=${id}` }} 
            style={styles.avatar} 
          />
          <View>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.location}>Gatolandia Central</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.moreButton} activeOpacity={0.6}>
          <Feather name="more-horizontal" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Imagen del Post (Tildable para ir al Detalle) */}
      <TouchableOpacity activeOpacity={0.95} onPress={onPress}>
        <Image source={{ uri: imageUrl }} style={styles.postImage} />
      </TouchableOpacity>

      {/* Fila de Acciones/Iconografía Oficial */}
      <View style={styles.actionsRow}>
        <View style={styles.leftIcons}>
          <TouchableOpacity onPress={handleLikePress} activeOpacity={0.7}>
            <Ionicons 
              name={liked ? "heart" : "heart-outline"} 
              size={26} 
              color={liked ? "#ff3040" : "#ffffff"} 
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <Ionicons name="chatbubble-outline" size={24} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Feather name="send" size={23} color="#ffffff" />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={() => setSaved(!saved)} activeOpacity={0.7}>
          <FontAwesome 
            name={saved ? "bookmark" : "bookmark-o"} 
            size={24} 
            color="#ffffff" 
          />
        </TouchableOpacity>
      </View>

      {/* Información Inferior */}
      <View style={styles.footerContent}>
        <Text style={styles.likesText}>
          {(liked ? baseLikes + 1 : baseLikes).toLocaleString()} Me gusta
        </Text>
        
        <Text style={styles.captionText} numberOfLines={2}>
          <Text style={styles.boldUsername}>{username} </Text>
          Miren este hermoso ejemplar simulando código nativo en Expo. 
          <Text style={styles.hashtagText}> #cat #reactnative #expo #tp</Text>
        </Text>
        
        <Text style={styles.timeAgo}>Hace 2 horas</Text>
      </View>
    </View>
  );
}