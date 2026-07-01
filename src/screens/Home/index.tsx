import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import Header from '../../components/Header';
import StoryBar from '../../components/StoryBar';
import PostCard from '../../components/PostCard';
import { fetchCatPosts, type CatPost } from '../../services/catApi';
import { styles } from './Home.styles';

interface HomeProps {
  onNavigateToDetail: (post: CatPost) => void;
}

export default function Home({ onNavigateToDetail }: HomeProps) {
  const [posts, setPosts] = useState<CatPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadFeedData = async () => {
      try {
        const data = await fetchCatPosts(12); // Pide el mínimo de 10 elementos requeridos
        setPosts(data);
      } catch (error) {
        console.error("Error cargando feed:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFeedData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" color="#a8a8a8" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Cabecera Estática Superior */}
      <Header />

      {/* Feed dinámico optimizado mediante FlatList */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<StoryBar />} // Integra horizontal scroll sin colisiones de contenedores
        renderItem={({ item }) => (
          <PostCard
            id={item.id}
            imageUrl={item.url}
            onPress={() => onNavigateToDetail(item)}
          />
        )}
      />
    </View>
  );
}