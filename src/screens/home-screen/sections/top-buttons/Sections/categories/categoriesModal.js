//React-Native
import React from 'react';
import {View, ScrollView, Text } from 'react-native';

//style
import styles from './categoriesModal.style'

//Components
import CustomModal from 'src/basic/components/modal/CustomModal';
import IconButton from 'src/basic/components/icon/IconButton';


function categoriesModal() {
  return (
    <View style={styles.container}>
      <CustomModal visible={categoryVisible} >
        <ScrollView>
          {categories?.map(category => (
            <Text
              key={category.id}
              // category = {category}
              style={styles.text}>
              {category.name}
            </Text>
          ))}
          <IconButton
            name={IconList.Close}
            size={30}
            color={colors.smokeWhite}
            onPress={closeModal}
          />
        </ScrollView>
      </CustomModal>
    </View>
  );
}

export default categoriesModal;
