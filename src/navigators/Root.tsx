import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        header: () => null,
      })}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={Home} />
    </Stack.Navigator>
  );
}
