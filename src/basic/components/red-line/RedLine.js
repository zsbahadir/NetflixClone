//React-native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Constants
import { colors } from 'src/basic/constants/colors';

function RedLine() {
  return (
    <View style={styles.textLine}>
        <Text></Text>
    </View>
  )
}

export default RedLine;

const styles = StyleSheet.create({
    textLine:{
        borderBottomWidth: 4,
        borderColor: colors.red,
    }
})