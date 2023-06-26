import React from 'react';
import { View, Text } from 'react-native';
import styles from './TopTen.style';



function TopTen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>TOP</Text>
      <Text style={styles.textTen}>10</Text>
    </View>
  );
}

export default TopTen;
