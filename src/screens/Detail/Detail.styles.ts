//hecho por la IA
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 12,
    borderBottomWidth: 0.3,
    borderBottomColor: '#1e1e1e',
  },
  backButton: {
    paddingHorizontal: 12,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  commentsSection: {
    paddingHorizontal: 14,
    paddingTop: 12,
    gap: 12,
  },
  commentRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
  },
  commentUser: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 13,
  },
  commentText: {
    color: '#ffffff',
    fontSize: 13,
    flex: 1,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderTopWidth: 0.3,
    borderTopColor: '#1e1e1e',
    backgroundColor: '#000000',
  },
  input: {
    flex: 1,
    color: '#ffffff',
    fontSize: 14,
    paddingVertical: 6,
  },
  postCommentButton: {
    color: '#0095f6',
    fontWeight: '700',
    fontSize: 14,
    paddingHorizontal: 8,
  },
});