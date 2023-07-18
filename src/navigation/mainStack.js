import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {APP_SCREEN, AUTH_SCREEN, SPLASH_SCREEN} from '../constants/stack';
import SplashScreen from '../features/splash/splashScreen';
import AuthStack from './authStack';
import AppStack from './appStack';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SPLASH_SCREEN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={AUTH_SCREEN} component={AuthStack} />
        <Stack.Screen name={APP_SCREEN} component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
