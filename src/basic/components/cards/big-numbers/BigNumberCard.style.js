import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 2,
    width: 150,
    // height:120,
    flexDirection: 'row', 
    alignItems: 'flex-end' 
  },
  image: {
    flex: 3,
    height: 160,
    borderRadius: 6,
    marginLeft: 40

  },
  textContainer:{
    flex: 2,
   position: 'absolute',
   zIndex: 9999

  },
   text: {
    flex: 1,
    fontSize: 100,
    color: 'white',
    textShadowColor :'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius:12,
  },
});
