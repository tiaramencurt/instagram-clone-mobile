//hecho por la IA
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: '#000000',
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1c1c1e',
  },
  username: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
  location: {
    color: '#a8a8a8',
    fontSize: 11,
    marginTop: 1,
  },
  moreButton: {
    paddingHorizontal: 4,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  leftIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  footerContent: {
    paddingHorizontal: 14,
    paddingBottom: 4,
  },
  likesText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 5,
  },
  captionText: {
    color: '#ffffff',
    fontSize: 13,
    lineHeight: 18,
  },
  boldUsername: {
    fontWeight: '700',
  },
  hashtagText: {
    color: '#e0f1ff',
  },
  timeAgo: {
    color: '#737373',
    fontSize: 11,
    textTransform: 'uppercase',
    marginTop: 6,
    letterSpacing: 0.2,
  },
});