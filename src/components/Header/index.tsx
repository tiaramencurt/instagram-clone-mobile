import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Header.styles';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Instagram</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon}>
          <Text style={styles.iconText}>📷</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Text style={styles.iconText}>✈️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}