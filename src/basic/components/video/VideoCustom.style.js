import {StyleSheet} from 'react-native';
import { colors } from 'src/basic/constants/colors';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
      },
      video: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
      playButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -25 }, { translateY: -25 }],
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: colors.white,
        fontSize: 16,
      },
    });
    
