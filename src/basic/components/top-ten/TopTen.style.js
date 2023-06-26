import {StyleSheet} from 'react-native';
import {colors} from 'src/basic/constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 24,
    height: 30,
    borderTopRightRadius: 6,
  },
  textTop: {
    color: colors.white,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 8,
    paddingTop: 3
  },
  textTen: {
    color: colors.white,
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 12,
  },
});
