import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Text } from 'react-native';
import { Foundation, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './screens/Home';
import Detail from './screens/Detail';
import Profile from './screens/Profile';
import { type CatPost } from './services/catApi';

type ScreenView = 'home' | 'detail' | 'profile';

export default function App() {
  // Estados de navegación local controlada
  const [currentScreen, setCurrentScreen] = useState<ScreenView>('home');
  const [selectedPost, setSelectedPost] = useState<CatPost | null>(null);

  // Manejador para ingresar a la vista extendida de un post
  const handleNavigateToDetail = (post: CatPost) => {
    setSelectedPost(post);
    setCurrentScreen('detail');
  };

  // Renderizador condicional de pantallas
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onNavigateToDetail={handleNavigateToDetail} />;
      case 'detail':
        return selectedPost ? (
          <Detail post={selectedPost} onBack={() => setCurrentScreen('home')} />
        ) : (
          <Home onNavigateToDetail={handleNavigateToDetail} />
        );
      case 'profile':
        return <Profile />;
      default:
        return <Home onNavigateToDetail={handleNavigateToDetail} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* StatusBar estilizada para alto contraste */}
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      {/* Contenedor dinámico de pantallas */}
      <View style={styles.mainContent}>
        {renderScreen()}
      </View>

      {/* TabBar Inferior Idéntica a Instagram Móvil */}
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={styles.tabButton} 
          onPress={() => setCurrentScreen('home')}
          activeOpacity={0.7}
        >
          <Foundation 
            name="home" 
            size={25} 
            color={currentScreen === 'home' || currentScreen === 'detail' ? '#ffffff' : '#737373'} 
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton} activeOpacity={0.7}>
          <Feather name="search" size={24} color="#737373" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton} activeOpacity={0.7}>
          <Feather name="plus-square" size={24} color="#737373" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton} activeOpacity={0.7}>
          <MaterialCommunityIcons name="movie-play-outline" size={25} color="#737373" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.tabButton} 
          onPress={() => setCurrentScreen('profile')}
          activeOpacity={0.7}
        >
          <Feather 
            name="user" 
            size={24} 
            color={currentScreen === 'profile' ? '#ffffff' : '#737373'} 
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000', // Previene parpadeos blancos en los extremos de la pantalla
  },
  mainContent: {
    flex: 1,
  },
  tabBar: {
    height: 49, // Altura estándar del TabNav de Instagram nativo
    flexDirection: 'row',
    backgroundColor: '#000000',
    borderTopWidth: 0.3,
    borderTopColor: '#1e1e1e',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});