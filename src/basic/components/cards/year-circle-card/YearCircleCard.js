//React-Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from 'src/basic/constants/colors';

function YearCircleCard({year}) {

const years = {
    yearTwelve : 12,
    yearFifteen : 15,
    yearEighteen : 18
};
const textContainerStyle = [styles.textContainer];
let circleStyle;

if (year === years.yearTwelve) {
  circleStyle = textContainerStyle.push(styles.yearTwelve);
} else if (year === years.yearFifteen) {
  circleStyle = textContainerStyle.push(styles.yearFifteen);
} else if (year === years.yearEighteen) {
  circleStyle = textContainerStyle.push(styles.yearEighteen);
} else {
  circleStyle = null;
}

  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{year}</Text>
    </View>
  );
}

export default YearCircleCard;


const styles = StyleSheet.create({
  textContainer: {
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 50,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.pink,
  },
  yearTwelve: {
    backgroundColor: colors.orange,
  },
  yearFifteen: {
    backgroundColor: colors.pink,
  },
  yearEighteen: {
    backgroundColor: colors.red,
  },
  text: {
    fontSize: 12,
    color: colors.white,
    fontWeight: 900
  },
});
