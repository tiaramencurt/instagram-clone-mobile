import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0c002d' 
  },
  profileHeader: { 
    flexDirection: 'row', 
    padding: 20, 
    gap: 20, 
    alignItems: 'center', 
    borderBottomWidth: 0.5, 
    borderColor: '#333' 
  },
  avatarBorder: { 
    width: 86, 
    height: 86, 
    borderRadius: 43, 
    padding: 3, 
    backgroundColor: '#E1306C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: { 
    width: '100%', 
    height: '100%', 
    borderRadius: 40 
  },
  info: { 
    flex: 1 
  },
  username: { 
    color: '#FFF', 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 4 
  },
  bio: { 
    color: '#A4A4A4', 
    fontSize: 13, 
    marginBottom: 12 
  },
  statsRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 4 
  },
  stat: { 
    color: '#FFF', 
    fontSize: 12 
  },
  bold: { 
    fontWeight: 'bold' 
  },
  gridImage: {
    borderWidth: 1, 
    borderColor: '#0c002d'
  }
});