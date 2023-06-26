import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';



function MiniImageCard( { onPress, source } ) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
        <Image  style={ styles.image } source={source} />
        </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    container: {
    },
    image:{
        marginTop: 3,
        height: 20,
        width: 22,
        borderRadius: 2,
    },
   
})

export default MiniImageCard;

