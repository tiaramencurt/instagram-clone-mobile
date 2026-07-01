import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  post: {
    width: '100%',
    backgroundColor: '#05083c',
    marginBottom: 16,
  },
  postTop: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  username: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '600',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  postContent: {
    padding: 12,
  },
  actions: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  actionIcon: {
    fontSize: 24,
  },
  likesCount: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 4,
  },
  caption: {
    color: '#E1E1E1',
    fontSize: 13,
    lineHeight: 18,
  },
  boldUser: {
    fontWeight: 'bold',
    color: '#FFF',
  },
});