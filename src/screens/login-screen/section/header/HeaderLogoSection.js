import React from 'react';
import { View, Image } from 'react-native';

//Style
import styles from './HeaderLogoSection.style';

//Components
import TouchableText from 'src/basic/components/touchable-text/TouchableText';

function HeaderLogoSection() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={{width: 150, height: 50}}
          source={require('src/basic/images/logo.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <TouchableText
          text="Help"
          style={styles.text}
          onPress={()=>console.log('help')}
        />
      </View>
    </View>
  );
}

export default HeaderLogoSection;
