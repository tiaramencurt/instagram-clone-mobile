import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Text } from 'react-native';
import { Foundation, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import Profile from './src/screens/Profile';
import { type CatPost } from './src/services/catApi';

type ScreenView = 'home' | 'detail' | 'profile';

export default function App() {
  // Estados de navegación local controlada
  const [currentScreen, setCurrentScreen] = useState<ScreenView>('home');
  const [previousScreen, setPreviousScreen] = useState<ScreenView>('home'); // Guarda el historial
  const [selectedPost, setSelectedPost] = useState<CatPost | null>(null);

  // Manejador para ingresar a la vista extendida de un post
  const handleNavigateToDetail = (post: CatPost) => {
    setPreviousScreen(currentScreen); // Recordamos si venía de 'home' o 'profile'
    setSelectedPost(post);
    setCurrentScreen('detail');
  };

  // Manejador para cambiar de pestañas principales en el TabBar
  const handleTabPress = (screen: ScreenView) => {
    setCurrentScreen(screen);
  };

  // Renderizador condicional de pantallas
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onNavigateToDetail={handleNavigateToDetail} />;
      case 'detail':
        return selectedPost ? (
          <Detail post={selectedPost} onBack={() => setCurrentScreen(previousScreen)} />
        ) : (
          <Home onNavigateToDetail={handleNavigateToDetail} />
        );
      case 'profile':
        return <Profile onNavigateToDetail={handleNavigateToDetail} />;
      default:
        return <Home onNavigateToDetail={handleNavigateToDetail} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      <View style={styles.mainContent}>
        {renderScreen()}
      </View>

      {/* TabBar Inferior */}
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={styles.tabButton} 
          onPress={() => handleTabPress('home')}
          activeOpacity={0.7}
        >
          <Foundation 
            name="home" 
            size={25} 
            color={currentScreen === 'home' || (currentScreen === 'detail' && previousScreen === 'home') ? '#ffffff' : '#737373'} 
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
          onPress={() => handleTabPress('profile')}
          activeOpacity={0.7}
        >
          <Feather 
            name="user" 
            size={24} 
            color={currentScreen === 'profile' || (currentScreen === 'detail' && previousScreen === 'profile') ? '#ffffff' : '#737373'} 
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  mainContent: {
    flex: 1,
  },
  tabBar: {
    height: 49,
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