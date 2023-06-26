//React-native
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

//Styles
import styles from './Button.style'

//Components
import CustomIcon from 'src/basic/components/icon/CustomIcon';



function Button(props) {
  const {title, onPress, type, color, name, size, iconPosition} = props;

  const buttonStyles = [styles.container];
  const textStyles = [styles.text];

  
  if (type === 'signInRedButton') {
    buttonStyles.push(styles.signInRedButton);
    textStyles.push(styles.textWhite);
  }
  if (type === 'signInBlackButton') {
    buttonStyles.push(styles.signInBlackButton);
    textStyles.push(styles.textSmokeWhite);
  }
  if (type == 'playSmButton') {
    buttonStyles.push(styles.playSmButton);
    textStyles.push(styles.textBlack);
  }
  if (type == 'playLgButton') {
    buttonStyles.push(styles.playLgButton);
    textStyles.push(styles.textBlack);
  }
  if (type == 'grayButton') {
    buttonStyles.push(styles.grayButton);
    textStyles.push(styles.textWhite);
  }
  if (type == 'recoverButton') {
    textStyles.push(styles.recoverTextSize);
    textStyles.push(styles.textSmokeWhite);
  }
  if (type == 'myListButton') {
    buttonStyles.push(styles.myListButton);
    textStyles.push(styles.textWhite);
  }
  if (type == 'topButtons') {
    buttonStyles.push(styles.topButtons);
    textStyles.push(styles.topButtonsText);
  }
  if (type == 'categoriesButton') {
    buttonStyles.push(styles.categoriesButton);
    textStyles.push(styles.topButtonsText);
  }
  if (type == 'downloadGrayButton') {
    buttonStyles.push(styles.downloadGrayButton);
    textStyles.push(styles.textWhite);
  }

  return (
    <TouchableOpacity
      {...props}
      title={title}
      onPress={onPress}
      style={buttonStyles}
      color={color} >
      <View style={styles.buttonContent}>
      {iconPosition === "before" && name && (<CustomIcon name={name} size={size} color={color} />)}
      <Text style={textStyles}>{title}</Text>
      {iconPosition === "after" && name && (<CustomIcon name={name} size={size} color={color} />)}
      </View>
    </TouchableOpacity>
  );
}

export default Button;


