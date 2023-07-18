import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  GET_START_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
} from '../constants/stack';
import Login from '../features/login/login';
import Register from '../features/register/register';
import GettingStarted from '../features/gettingStarted/gettingStarted';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={GET_START_SCREEN}>
      <Stack.Screen name={LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={REGISTER_SCREEN} component={Register} />
      <Stack.Screen name={GET_START_SCREEN} component={GettingStarted} />
    </Stack.Navigator>
  );
};

export default AuthStack;
