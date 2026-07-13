//hecho por la IA
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const imageSize = width / 3;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerUsername: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginRight: 4,
  },
  topInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  avatarContainer: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 1,
    borderColor: '#3a3a3c',
    padding: 3,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 39,
  },
  statsRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  statLabel: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 2,
  },
  bioSection: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  fullName: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 13,
  },
  bioText: {
    color: '#ffffff',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 2,
  },
  buttonRow: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  editButton: {
    backgroundColor: '#1c1c1e',
    borderRadius: 8,
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
  tabsContainer: {
    flexDirection: 'row',
    borderTopWidth: 0.3,
    borderTopColor: '#1e1e1e',
    marginTop: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#ffffff',
  },
  gridImage: {
    width: imageSize,
    height: imageSize,
    borderWidth: 0.5,
    borderColor: '#000000',
  },
});