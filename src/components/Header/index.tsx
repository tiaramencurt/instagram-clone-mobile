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
      {/* Logo tipográfico clásico de Instagram */}
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' }}
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