import {StyleSheet, Dimensions} from 'react-native';
import { colors } from 'src/basic/constants/colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 34,
    marginTop: 40,
    height: Dimensions.get('window').height / 2.8,
    justifyContent: 'space-around',
  },
  textInput: {
    height: 50,
    borderRadius: 4,
    padding: 10,
    color: colors.white,
    backgroundColor: colors.darkGray,
    fontSize: 18,
  },
});
