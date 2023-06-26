import {StyleSheet} from 'react-native';
import { colors } from 'src/basic/constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // paddingHorizontal: 16,
    // paddingTop: 16,
    justifyContent: 'center',
    backgroundColor: colors.backColor,
  },
  // textContainer:{
  //   borderColor:'green',
  //   borderWidth: 3,
  // },
  learnMoreText: {
    color: colors.white,
    fontWeight: 'bold',
    borderColor: 'red',
     marginLeft: 15,
    marginTop: 39,
    height: 20,
  },
});
