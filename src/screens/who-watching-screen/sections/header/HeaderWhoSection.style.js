import { StyleSheet } from "react-native";
import { colors } from "src/basic/constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 3,   
        justifyContent: 'center',
    },
    textContainer: {
        color: colors.white,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})