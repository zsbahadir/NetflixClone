//React-Native
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//Constants
import {colors} from 'src/basic/constants/colors';

//Sections
import EpisodesSection from './E.EpisodesSection';
import SimilarSection from './F.SimilarSection';

function BottomSectionTitle() {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const bottomSection = [
    {
      id: 1,
      title: 'Episodes',
      components: [<EpisodesSection key={'EpisodesSection'} />],
    },
    {
      id: 2,
      title: 'Similar',
      components: [<SimilarSection key={'SimilarSection'} />],
    },
  ];

  const handlePress = itemId => {
    setSelectedItemId(itemId);
  };

  return (
    <View style={styles.listContainer}>
      {bottomSection.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => handlePress(item.id)}>
          <View style={styles.textContainer}>
            <View
              style={item.id === selectedItemId ? styles.activeTextContainer : null}>
              <Text style={[styles.text, item.id === selectedItemId ? styles.activeText : null ]}>
                {item.title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
      
      {selectedItemId &&
        bottomSection.find((item) => item.id === selectedItemId)?.components}
    </View>
  );
}

export default BottomSectionTitle;




const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'baseline',
    // borderColor: 'green',
    // borderWidth: 3,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  textContainer: {
    // borderColor: 'yellow',
    // borderWidth: 3,
     margin: 10,
    // alignItems: 'baseline',
  },
  activeTextContainer: {
    borderTopColor: 'red',
    borderTopWidth: 4,
    margin: 10,
  },
});
