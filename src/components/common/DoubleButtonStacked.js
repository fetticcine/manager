import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DoubleButtonStacked = ({ Pressed, children }) => {
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity
        onPress={Pressed}
        style={styles.buttonStyle}
      >
        <Text style={styles.textStyle}>
          {children}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={Pressed}
        style={styles.buttonStyle}
      >
        <Text style={styles.textStyle}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 100,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { DoubleButtonStacked };
