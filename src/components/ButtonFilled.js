import React from 'react';
import {Subheading} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const ButtonFilled = ({name, uppercase}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{borderRadius: 6}}
      colors={['#1DA069', '#1DA069', '#110732']}>
      <Subheading
        style={{color: 'white', textAlign: 'center', paddingVertical: 8}}>
        {name}
      </Subheading>
    </LinearGradient>
  );
};

export default ButtonFilled;
