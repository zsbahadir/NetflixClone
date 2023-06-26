import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

//Constants
import { colors } from 'src/basic/constants/colors';



function ImageCard( { item, onPress } ) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
        <Image  style={ styles.image } source={item.imageSource} />
        </View>
        <View>
        <Text style={ styles.subtitle }>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 3,
        margin: 20,
        alignItems: "center",
    },
    image:{
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    subtitle: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 18,
        padding: 10,
       
    }, 
})

export default ImageCard;

