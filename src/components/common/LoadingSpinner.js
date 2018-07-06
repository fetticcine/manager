import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadingSpinner = ({ size, color }) => {
  return (
    <View style={styles.viewStyle}>
      <ActivityIndicator size={size || 'small'} color={color || '#3eb489'} />
    </View>
  );
};

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { LoadingSpinner };
