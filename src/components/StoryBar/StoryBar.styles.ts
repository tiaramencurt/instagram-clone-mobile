import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: '#0c002d',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  scroll: {
    paddingHorizontal: 12,
    gap: 14,
  },
  storyWrapper: {
    alignItems: 'center',
    width: 76,
  },
  border: {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 3,
    backgroundColor: '#E1306C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 31,
    backgroundColor: '#000',
  },
  username: {
    color: '#D7D7D7',
    fontSize: 11,
    marginTop: 4,
  },
});