//React-Native
import React from 'react';
import { View } from 'react-native';

//Styles
import styles from './LoginScreen.style';

//Components
import TextArea from 'src/basic/components/text/TextArea';
import TouchableText from 'src/basic/components/touchable-text/TouchableText';

//Section
import LoginForm from 'src/screens/login-screen/section/form/LoginForm';

function LoginScreen() {

  return (
    <View style={styles.container}>
      <LoginForm/>
      <View>
        <TextArea type='signPageText'>
          Sign in protected by Google reCAPTCHA to ensure your're not a bot.
          <TouchableText
            text="Learn more."
            style={styles.learnMoreText}
            onPress={() => console.log('Learn more.')}
          />
        </TextArea>
      </View>
    </View>
  );
}

export default LoginScreen;

