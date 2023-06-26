//React-Native
import React, { useState } from 'react';
import { View, Alert } from 'react-native';

//React-Hook-Form
import { useForm } from 'react-hook-form';

//styles
import styles from './LoginForm.style';

//Constants
import {colors} from 'src/basic/constants/colors';

//Components
import LoginInput from 'src/basic/components/input/LoginInput';
import Button from 'src/basic/components/button/Button';

//Navigate
import { useNavigation } from '@react-navigation/native';

function LoginForm() {
  const {control, handleSubmit, formState: {errors}, getValues} = useForm();

  const [buttonType, setButtonType] = useState('signInRedButton');

  const navigation = useNavigation();

  const onSubmit = data => {
    if (data.email === 'Zeynep@gmail.com' && data.password === '123') {
      navigation.navigate('WhoWatching');
    } else {
      Alert.alert(`Trying to sign up?`, `Sorry, we can't find an account with this email address.`, [
        {text: 'Try Again', onPress: () => console.log('Try Again Pressed')}
      ]);
    }
  };

  const handleButtonChange = ()=>{
    const { email, password } = getValues();
    if(email && password) {
        setButtonType('signInRedButton')
    } else {
        setButtonType('signInBlackButton')
    }
  }

  return (
    <View style={styles.container}>
      <LoginInput
        name="email"
        placeholder="Email or phone number"
        placeholderTextColor={colors.smokeWhite}
        control={control}
        rules= {{required: true}}
        onChange = {handleButtonChange}
        
      />

      <LoginInput
        name="password"
        placeholder="Password"
        placeholderTextColor={colors.smokeWhite}
        secureTextEntry
        control={control}
        rules= {{required: true}}
        onChange = {handleButtonChange}
      />

      <Button
        title="Sign In"
        type={buttonType}
        onPress={handleSubmit(onSubmit)}
      />
      <Button title="Recover Password" type="recoverButton" />
    </View>
  );
}

export default LoginForm;
