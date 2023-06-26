import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from "src/basic/constants/colors"

function NewSeason() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>New Season</Text>   
    </View>
  );
}

export default NewSeason;


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
    },
    text:{
        color: colors.white,
        fontWeight: 'bold',
        padding: 3,
        textAlign:'center',
        fontSize: 12
    }


})
