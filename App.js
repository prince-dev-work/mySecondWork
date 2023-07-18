import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import MainStack from './src/navigation/mainStack';
import store from './src/Redux/reducer/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack/>
    </Provider>
  )
}

export default App

