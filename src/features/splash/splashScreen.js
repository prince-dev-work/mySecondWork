import {View, Text} from 'react-native';
import React from 'react';
import { ms } from 'react-native-size-matters';
import {themes} from '../../themes/theme';

const SplashScreen = () => {
  return (
    <View>
      <Text
        style={{fontSize: ms(30), fontFamily: themes.light.fontFamily.bold}}>
        SplashScreen
      </Text>
    </View>
  );
};

export default SplashScreen;
