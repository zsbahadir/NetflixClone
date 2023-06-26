import { StyleSheet } from "react-native";
import { colors } from "src/basic/constants/colors"

export default StyleSheet.create({

    container: {
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 10,
    },
    imageContainer:{
        height: 500,
        borderRadius: 10,
    },
    image:{
        flex: 1,
        borderRadius: 10,
        resizeMode: 'cover',
        width: 'auto',
    },
    contentContainer:{
        position: 'absolute',
        width: 360,
        marginTop: 380,
    },
    textContainer:{
        flexDirection: 'row',
        justifyContent: 'center', 
        marginBottom: 6,
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})


