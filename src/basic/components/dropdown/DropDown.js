//React-Native
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

//Styles
import styles from './DropDown.style';

//Components
import CustomIcon from 'src/basic/components/icon/CustomIcon';


function DropDown( props ) {

    const { options, name, size, color, title } = props;

  const [selectedOptions, setSelectedOptions] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.selectedOption}>
        <Text style={{color: 'white'}}>{ selectedOptions || title }</Text>
        {name && <CustomIcon name={name} size={size} color={color}/>}
      </TouchableOpacity>
      {dropdownVisible && (
        <View style={styles.dropdown}>
          {options.map((option) => (
          <TouchableOpacity
              key={option}
              onPress={() => selectedOptions(option)}
              style={styles.option}>
              <Text>{option}</Text>
            </TouchableOpacity>))}
        </View>
      )}
    </View>
  );
}



export default DropDown;

