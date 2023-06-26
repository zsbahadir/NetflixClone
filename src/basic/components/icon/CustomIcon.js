//React
import React from 'react';

//Vector-Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomIcon(props){
    
  const {name, size, color, margin } = props;


    return (
        <Icon
         name = {name}
         color = {color}
         size = {size}
         margin = {margin}
          />
        
      );

};

export default CustomIcon;


