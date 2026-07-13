import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { styles } from './Header.styles';

interface HeaderProps {
  onNotificationsPress?: () => void;
  onMessagesPress?: () => void;
}

export default function Header({ onNotificationsPress, onMessagesPress }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      {/* Logo tipográfico oficial en blanco/gris transparente */}
      <Image
        source={{ uri: 'https://logos-marcas.com/wp-content/uploads/2020/04/Instagram-Logo.png' }}
        style={styles.logoImage}
      />

      {/* Botones laterales de Interacción de la App Móvil */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={onNotificationsPress} activeOpacity={0.7}>
          <Feather name="heart" size={24} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={onMessagesPress} activeOpacity={0.7}>
          <FontAwesome5 name="paper-plane" size={22} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}