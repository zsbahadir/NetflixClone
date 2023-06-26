//React-Native
import { StyleSheet, Dimensions } from 'react-native';

//Constants
import { colors } from 'src/basic/constants/colors';


export default StyleSheet.create({
  container: {
    borderColor: colors.smokeWhite,
    borderWidth: 1,
    borderRadius: 30,
    // width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 26,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  selectedOption:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: colors.smokeWhite,
    fontWeight: '900',
    padding: 4
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,

  },
  option: {
    // padding: 10,
    
  },
});
