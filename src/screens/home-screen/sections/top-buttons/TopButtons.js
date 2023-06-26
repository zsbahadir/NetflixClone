//React-Native
import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';

//Constants
import { colors } from 'src/basic/constants/colors';
import { IconList, IconPosition } from 'src/basic/icon-list/IconList';

//Basic Components
import Button from 'src/basic/components/button/Button';
import IconButton from 'src/basic/components/icon/IconButton';
import CustomModal from 'src/basic/components/modal/CustomModal';

//Navigate
import { useNavigation } from '@react-navigation/native';

//Hook
import { useCategories } from 'src/store/hooks/getCategories';


function TopButtons() {

  const [categoryVisible, setCategoryVisible] = useState(false);
  
  const navigation = useNavigation();

  const { data: categories } = useCategories();

  //for opening modal. 
  const openModal = () => {
    setCategoryVisible(true);
  };

  const closeModal = () => {
    setCategoryVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button
        type="topButtons"
        title="Movies"
        onPress={() => console.log('dizi tik')}
      />
      <Button
        type="topButtons"
        title="Tv Series"
        onPress={() => console.log('film tik')}
      />
      <Button 
      type="categoriesButton"
      title="Categories"
      onPress={openModal}
      //icon
      iconPosition = {IconPosition.After}
      name={IconList.DropDown}
      size={30}
      color={colors.smokeWhite}
      />
      <CustomModal visible={categoryVisible} >
        <ScrollView> 
        {categories?.map((category) => (
          <Text 
          key={category.id} 
          // category = {category}
          style={{ color: 'white' }}>
            {category.name}
          </Text>
        ))}
        <IconButton name= {IconList.Close} size={30} color={colors.smokeWhite} onPress= {closeModal}/>
        </ScrollView>
      </CustomModal>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    width: 300,
    // borderColor: 'green',
    // borderWidth: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    margin: 6
  },
  dropdownContainer:{
    marginRight: 10,
    borderColor: 'blue',
    borderWidth: 3,
  }

});

export default TopButtons;
