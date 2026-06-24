import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#080837' 
  },
  navbarMock: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    borderBottomWidth: 0.5, 
    borderColor: '#333' 
  },
  backButton: { 
    color: '#FFF', 
    fontSize: 16, 
    marginRight: 20 
  },
  navTitle: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  mainImage: { 
    width: '100%', 
    aspectRatio: 1 
  },
  infoContainer: { 
    padding: 16 
  },
  interactiveRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 10, 
    marginBottom: 12 
  },
  likeEmoji: { 
    fontSize: 26 
  },
  likesText: { 
    color: '#FFF', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  caption: { 
    color: '#DDD', 
    fontSize: 14, 
    marginBottom: 20 
  },
  userTitle: { 
    fontWeight: 'bold', 
    color: '#FFF' 
  },
  commentsHeader: { 
    color: '#FFF', 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  commentBox: { 
    paddingVertical: 8, 
    borderBottomWidth: 0.2, 
    borderColor: '#555' 
  },
  commentText: { 
    color: '#CCC', 
    fontSize: 13 
  }
});