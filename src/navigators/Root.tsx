import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import LoginScreen from '../screens/LoginScreen';
import AccountScreen from '../screens/AccountScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        header: () => null,
        headerStyle: {backgroundColor: 'tomato'},
      })}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={Home} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          title: 'Awesome app',
        }}
      />
    </Stack.Navigator>
  );
}
