/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import WinScreen from './screens/WinScreen';
import LoseScreen from './screens/LoseScreem';

export type RootStackParamList = {
  Home: { points: number };
  Win: { points: number };
  Lose: { points: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{ points: 0 }} />
        <Stack.Screen name="Win" component={WinScreen} />
        <Stack.Screen name="Lose" component={LoseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
