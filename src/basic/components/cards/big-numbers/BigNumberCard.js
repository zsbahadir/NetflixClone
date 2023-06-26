//React-Native
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

//Styles
import styles from './BigNumberCard.style';

function BigNumberCard({ item, onPress }) {
  
  const imageSource = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
        <Text style={styles.text}>3</Text>
        </View>
        <Image style={styles.image} source={{ uri: imageSource }} />
      </View>
    </TouchableOpacity>
  );
}

export default BigNumberCard;



{Array.from({ length: 10 }, (_, index) => (
  <Text key={index} style={styles.text}>{index + 1}</Text>
))}