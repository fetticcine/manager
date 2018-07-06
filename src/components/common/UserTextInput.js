import React from 'react';
import { TextInput, View } from 'react-native';

const UserTextInput = ({ value, onChangeText, placeholder, keyboardType, secureTextEntry }) => {
  return (
    <View style={styles.containerStyle}>
      <TextInput
        style={styles.inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor='#D3D3D3'
        keyboardType={keyboardType}
        selectionColor='#3eb489'
        secureTextEntry={secureTextEntry}
        autoCapitalize='none'
      />
    </View>
  );
};

const styles = {
  // containerStyle: {
  //   height: 16,
  //   padding: 20
  // },
  inputStyle: {
    fontSize: 14,
    fontFamily: 'Futura-CondensedMedium',
    lineHeight: 14,
    color: '#000',
    padding: 10
  }
};

export { UserTextInput };
