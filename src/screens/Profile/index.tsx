import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { currentUser } from '../../data/mockData';
import { styles } from './Profile.styles';

export default function Profile() {
  // Generamos un set de fotos mockeadas simétricas
  const userPosts = Array.from({ length: 15 }, (_, i) => ({
    id: `p${i}`,
    url: `https://picsum.photos/300/300?random=${i + 20}`
  }));

  const renderProfileHeader = () => (
    <View>
      {/* Nombre del Perfil superior */}
      <View style={styles.headerNameRow}>
        <Text style={styles.headerUsername}>{currentUser.username}</Text>
        <MaterialCommunityIcons name="chevron-down" size={16} color="#ffffff" />
      </View>

      {/* Info Principal: Avatar + Contadores */}
      <View style={styles.topInfoRow}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: currentUser.profilePicture }} style={styles.avatar} />
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{currentUser.postsCount}</Text>
            <Text style={styles.statLabel}>Publicaciones</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{currentUser.followers}</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{currentUser.following}</Text>
            <Text style={styles.statLabel}>Seguidos</Text>
          </View>
        </View>
      </View>

      {/* Biografía */}
      <View style={styles.bioSection}>
        <Text style={styles.fullName}>{currentUser.fullName}</Text>
        <Text style={styles.bioText}>{currentUser.bio}</Text>
      </View>

      {/* Botón Obligatorio de Editar Perfil */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.editButton} activeOpacity={0.7}>
          <Text style={styles.editButtonText}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Pestañas de Mosaico estilo Instagram Móvil */}
      <View style={styles.tabsContainer}>
        <View style={[styles.tabItem, styles.activeTab]}>
          <MaterialCommunityIcons name="grid" size={22} color="#ffffff" />
        </View>
        <View style={styles.tabItem}>
          <MaterialCommunityIcons name="movie-open-outline" size={22} color="#737373" />
        </View>
        <View style={styles.tabItem}>
          <MaterialCommunityIcons name="account-outline" size={22} color="#737373" />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Toda la grilla optimizada en un FlatList nativo de 3 columnas */}
      <FlatList
        data={userPosts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        ListHeaderComponent={renderProfileHeader}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.9}>
            <Image source={{ uri: item.url }} style={styles.gridImage} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}