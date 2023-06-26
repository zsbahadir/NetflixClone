//StyleSheet
import { StyleSheet } from 'react-native';

//Constants
import { colors } from 'src/basic/constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    width: 130,
    marginLeft: 10,
  },
  image: {
    flex: 6,
    width: 'auto',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  icon:{
    position:'absolute',
    marginLeft: 35,
    marginTop: 50,
  },
  childContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: colors.darkGray,
  },
  leftSide: {
    marginLeft: 5,
    justifyContent: 'center',
  },
  rightSide: {
    marginRight: 5,
  },
  textContainer:{
    position: 'absolute',
    top: 148,
    right: 50,
  },
  text:{
    color: colors.white,
    fontSize: 10,
    fontWeight: '900',
  },
  redLine:{
    position: 'absolute',
    top: 155,
    width: 50
  },
});
