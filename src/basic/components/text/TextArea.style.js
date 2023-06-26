import {StyleSheet} from 'react-native';
import { colors } from 'src/basic/constants/colors';



export default StyleSheet.create({
  container: {

  },
  signPageText: {
    color: colors.smokeWhite,
    lineHeight: 24,
    textAlign: 'center',
    padding: 8,
  },
  textOwnerName: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '700',
    height: 70
  },
  bigCardText: {
    color: colors.smokeWhite,
    lineHeight: 24,
    fontWeight: 'bold',
    fontSize: 18,
    padding: 8,
  },
  title: {
    fontWeight: '700',
    marginTop: 14,
    color: colors.white,
    fontSize: 17,
    padding: 8,
  },
  textWhiteInRed: {
    color: colors.white,
    fontWeight: 'bold',
    padding: 3,
    textAlign:'center',
  },
  episodeNum:{
    color: colors.smokeWhite,
    fontWeight: 'bold',
  }
});
