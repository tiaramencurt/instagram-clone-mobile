import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: '#1e1e1e',
    backgroundColor: '#000000',
  },
  scrollContent: {
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 6,
    width: 76,
  },
  avatarContainer: {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 31,
    borderWidth: 2,
    borderColor: '#000000',
  },
  myStoryBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#0095f6',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myStoryText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
    textAlign: 'center',
  },
  usernameText: {
    color: '#ffffff',
    fontSize: 11,
    marginTop: 4,
    width: '100%',
    textAlign: 'center',
  },
});