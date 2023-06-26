import {StyleSheet, Dimensions} from 'react-native';
import { colors } from 'src/basic/constants/colors';

export default StyleSheet.create({
    container: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      //margin: 10,
    },
    buttonContent:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: 100,
      height: 40,
      // borderColor: 'white',
      // borderWidth: 3
    },
    signInRedButton: {
      backgroundColor: colors.red,
       color: colors.white,
       //height: Dimensions.get('window').height / 20,
       height: 50
    },
    signInBlackButton: {
      borderColor: colors.black,
      borderWidth: 1,
      //height: Dimensions.get('window').height / 15,
      height: 50
    },
    playSmButton: {
      backgroundColor: colors.white,
      width: Dimensions.get('window').width /2.5,
      height: Dimensions.get('window').height / 20,
      zIndex: -1
    },
    playLgButton: {
      backgroundColor: colors.white,
      height: Dimensions.get('window').height / 26,      
    },
    grayButton: {
      backgroundColor: colors.lightGray,
      height: Dimensions.get('window').height / 20,
    },
    downloadGrayButton: {
      backgroundColor: colors.lightGray,
      height: Dimensions.get('window').height / 26,
    },
    topButtons:{
      borderColor: colors.smokeWhite,
      borderWidth: 0.5,
      borderRadius: 30,
      width: Dimensions.get('window').width / 5,
      height: Dimensions.get('window').height / 26,
      paddingVertical: 2,
      paddingHorizontal: 4,
    },
    categoriesButton:{
      borderColor: colors.smokeWhite,
      borderWidth: 0.5,
      borderRadius: 30,
      width: Dimensions.get('window').width / 3,
      height: Dimensions.get('window').height / 26,
      paddingVertical: 2,
      paddingHorizontal: 4,
    },

    text: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    textBlack: {
      color: colors.black,
    },
    textWhite: {
      color: colors.white,
    },
    textSmokeWhite: {
      color: colors.smokeWhite,
    },
    recoverTextSize: {
      fontSize: 12,
      width: 120,
    },
    playText:{
      fontSize: 18
    },   
    topButtonsText:{
      fontSize: 14,
      color: colors.smokeWhite,
    }
  });
  