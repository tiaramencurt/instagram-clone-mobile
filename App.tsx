import React, { useState } from 'react';
import { View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { Foundation, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import Profile from './src/screens/Profile';
import { type CatPost } from './src/services/catApi';
import { styles } from './App.styles'; // Importamos la hoja de estilos unificada

type ScreenView = 'home' | 'detail' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenView>('home');
  const [previousScreen, setPreviousScreen] = useState<ScreenView>('home'); 
  const [selectedPost, setSelectedPost] = useState<CatPost | null>(null);

  const handleNavigateToDetail = (post: CatPost) => {
    setPreviousScreen(currentScreen); 
    setSelectedPost(post);
    setCurrentScreen('detail');
  };

  const handleTabPress = (screen: ScreenView) => {
    setCurrentScreen(screen);
  };

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