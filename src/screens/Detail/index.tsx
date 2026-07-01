import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PostCard from '../../components/PostCard';
import { type CatPost } from '../../services/catApi';
import { styles } from './Detail.styles';

interface DetailProps {
  post: CatPost;
  onBack: () => void;
}

export default function Detail({ post, onBack }: DetailProps) {
  const [comments, setComments] = useState([
    { id: '1', user: 'user_99', text: '¡Qué lindo gatito! ❤️' },
    { id: '2', user: 'dev_guru', text: 'Ese michi programa mejor que yo seguro.' }
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    setComments([
      ...comments,
      { id: Date.now().toString(), user: 'ugur_mercan0', text: newComment }
    ]);
    setNewComment('');
  };

  return (
    <View style={styles.container}>
      {/* Barra superior de navegación interna */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Explorar</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Reutilizamos el PostCard pasándole el ID y URL del gato elegido */}
        <PostCard id={post.id} imageUrl={post.url} onPress={() => {}} />

        {/* Zona de Comentarios Simulados */}
        <View style={styles.commentsSection}>
          {comments.map((comment) => (
            <View key={comment.id} style={styles.commentRow}>
              <Text style={styles.commentText}>
                <Text style={styles.commentUser}>{comment.user} </Text>
                {comment.text}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Input de Comentarios Interactivos en Tiempo Real (useState) */}
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Añade un comentario..."
          placeholderTextColor="#737373"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity onPress={handleAddComment}>
          <Text style={styles.postCommentButton}>Publicar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}