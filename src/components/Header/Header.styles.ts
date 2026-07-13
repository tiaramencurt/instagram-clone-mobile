import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#000000',
    borderBottomWidth: 0.5,
    borderBottomColor: '#1e1e1e',
    paddingTop: Platform.OS === 'android' ? 4 : 0,
  },
  logoImage: {
    width: 110,
    height: 50,
    resizeMode: 'contain',
    tintColor: '#ffffff',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});