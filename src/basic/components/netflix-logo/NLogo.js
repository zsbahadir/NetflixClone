import React from 'react';
import { View, Image } from 'react-native';
import styles from './NLogo.style'

function NLogo() {
  return (
    <View style={styles.container}>
      <Image source={require('src/basic/images/nLogo.png')} style={styles.image}/>
    </View>
  );
}

export default NLogo;
