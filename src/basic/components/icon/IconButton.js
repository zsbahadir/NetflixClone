//React-Native
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from 'src/basic/constants/colors';


function IconButton(props) {
  const {name, size, color, onPress, style, subtitle, transform, backgroundColor} = props;

  const borderWidth = backgroundColor === 'gray' ? 50 : 0;

  return (
    <TouchableOpacity {...props} onPress={onPress} style={{alignItems:'center',justifyContent:'space-between'}}>
      <Icon name={name} size={size} color={color} style={{...style, borderWidth}} transform={transform} 
      backgroundColor ={backgroundColor} />
      {subtitle && <Text style={{color: colors.white, paddingTop: 5}}>{subtitle}</Text>}
    </TouchableOpacity>
  );
}

export default IconButton;
