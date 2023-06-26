import { StyleSheet } from 'react-native';
import { colors } from 'src/basic/constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  leftSide: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSide: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 120,
    marginTop: 50,
  },
});
