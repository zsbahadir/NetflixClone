//React-Native
import React from 'react'
import { SafeAreaView, Text } from 'react-native'

//Style
import styles from './TextArea.style'


function TextArea( props ) {

    const {type, color} = props;

    const textStyle = [styles.container];

    if (type === 'signPageText') {
        textStyle.push(styles.signPageText);
    }
    if(type === 'bigCardText'){
        textStyle.push(styles.bigCardText)
    }
    if(type === 'textOwnerName'){
      textStyle.push(styles.textOwnerName)
    }
    if (type === 'title'){
      textStyle.push(styles.title)
    }
    if (type === 'textWhiteInRed'){
      textStyle.push(styles.textWhiteInRed)
    }
    if (type === 'episodeNum'){
      textStyle.push(styles.episodeNum)
    }


  return (
    <SafeAreaView>
    <Text 
    {...props}
    style={textStyle}
    >
        {props.children}
    </Text>
    </SafeAreaView>
  )
}

export default TextArea;



