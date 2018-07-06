import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ Pressed, children }) => {
  return (
    <TouchableOpacity
      onPress={Pressed}
      style={styles.buttonStyle}
    >
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>

  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#800020',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Futura-CondensedMedium',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
