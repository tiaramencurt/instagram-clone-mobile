import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedScreen from './src/screens/FeedScreen';
import DetailScreen from './src/screens/Detail';
import ProfileScreen from './src/screens/ProfileScreen';
import { getCats } from './src/services/catApi';
import { styles } from './App.styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function FeedStack({ posts }: { posts: any[] }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FeedHome">
        {(props) => <FeedScreen {...props} posts={posts} />}
      </Stack.Screen>
      <Stack.Screen name="PostDetail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const data = await getCats();
        const formattedPosts = data.map((cat: any, index: number) => ({
          id: cat.id || String(index),
          image: cat.url,
          username: `cat_user_${index + 1}`,
          likes: Math.floor(Math.random() * 5000),
          caption: 'Michi fachero nativo 😺',
          comments: [
            'Que lindo gato 😍',
            'Necesito adoptarlo ya mismo',
            'El mejor michi del feed móvil'
          ]
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error cargando michis:", error);
      }
    };
    fetchCats();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#100A2C" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#E1306C',
            tabBarInactiveTintColor: '#A4A4A4',
            tabBarStyle: { backgroundColor: '#100A2C', borderTopWidth: 0 },
          }}
        >
          <Tab.Screen 
            name="Home" 
            options={{ tabBarLabel: '🏠 Home' }}
          >
            {() => <FeedStack posts={posts} />}
          </Tab.Screen>
          <Tab.Screen 
            name="ProfileTab" 
            options={{ tabBarLabel: '👤 Perfil' }}
          >
            {(props) => <ProfileScreen {...props} posts={posts} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}