import React from 'react';
import {Image, View} from 'react-native';

const RoundIcon = ({icon}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 15,
        marginRight: 10,
      }}>
      <Image style={{width: 18, height: 18}} source={icon} />
    </View>
  );
};

export default RoundIcon;
