import { StyleSheet } from "react-native";
import { colors } from "src/basic/constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.black,
    },
    imgContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: 40
    },
    textContainer:{
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    text:{
        color: 'white', 
        fontWeight: '700',
        padding: 10

    }
})