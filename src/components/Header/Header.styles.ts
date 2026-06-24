import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#100A2C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  logo: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
    color: '#FFF',
  },
});