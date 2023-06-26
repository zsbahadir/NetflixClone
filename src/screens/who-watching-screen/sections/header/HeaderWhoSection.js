import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

//Style
import styles from './HeaderWhoSection.style';


function HeaderWhoSection() {
    
  return (
    <SafeAreaView
      style={ styles.container }>
      <View style ={styles.textContainer}>
          <Text style ={styles.textContainer}> Who is watching? </Text>
      </View>
    </SafeAreaView>
  )
}

export default HeaderWhoSection;