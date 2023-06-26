import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from 'src/basic/constants/colors';

function EpisodeNum() {
  return (
    <View>
      <Text style={styles.text}>S4:B1</Text>
    </View>
  );
}

export default EpisodeNum;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '900',
  },
});
