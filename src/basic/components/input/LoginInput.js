//React-Native
import React from 'react';
import { View, TextInput } from 'react-native';

//style
import styles from './LoginInput.style';

//React-Hook-Form
import { Controller } from 'react-hook-form';

const LoginInput = props => {
  const {
    control,
    name,
    rules = {},
    placeholder,
    placeholderTextColor,
    secureTextEntry,
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: {value, onChange, onBlur} }) => (
        <>
          <View>
            <TextInput
              style={styles.text}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              secureTextEntry={secureTextEntry}
            />
          </View>
        </>
      )}
    />
  );
};

export default LoginInput;
