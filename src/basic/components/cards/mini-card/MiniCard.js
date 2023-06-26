//React-Native
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

//Styles
import styles from './MiniCard.style';


function MiniCard({ item, onPress }) {


  const imageSource = `https://image.tmdb.org/t/p/w500${item.poster_path}`;


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress= {onPress}>
      <Image style={styles.image} 
      source={{uri: imageSource}} 
      />
   
      </TouchableOpacity>
    </View>
  );
}

export default MiniCard;
