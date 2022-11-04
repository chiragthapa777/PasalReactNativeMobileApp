import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import {GlobalVariables} from '../Styles/GlobalStyles';
import LoginScreen from '../screens/LoginScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();
const focusedIconSize = 35;
const normalIconSize = 30;

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: GlobalVariables.primaryText,
        tabBarInactiveTintColor: GlobalVariables.baseText,
        tabBarActiveBackgroundColor: GlobalVariables.primary,
        tabBarInactiveBackgroundColor: GlobalVariables.base300,
        header: () => null,
      })}>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'cart',
          tabBarIcon: ({focused, size, color}) => {
            color = focused
              ? GlobalVariables.primaryText
              : GlobalVariables.baseText;
            size = focused ? focusedIconSize : normalIconSize;
            return (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            );
          },
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'search',
          tabBarIcon: ({focused, size, color}) => {
            color = focused
              ? GlobalVariables.primaryText
              : GlobalVariables.baseText;
            size = focused ? focusedIconSize : normalIconSize;
            return (
              <MaterialCommunityIcons
                name="shopping-search"
                color={color}
                size={size}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'home',
          tabBarIcon: ({focused, size, color}) => {
            color = focused
              ? GlobalVariables.primaryText
              : GlobalVariables.baseText;
            size = focused ? focusedIconSize : normalIconSize;
            return (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'account',
          tabBarIcon: ({focused, size, color}) => {
            color = focused
              ? GlobalVariables.primaryText
              : GlobalVariables.baseText;
            size = focused ? focusedIconSize : normalIconSize;
            return (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'login',
          tabBarIcon: ({focused, size, color}) => {
            color = focused
              ? GlobalVariables.primaryText
              : GlobalVariables.baseText;
            size = focused ? focusedIconSize : normalIconSize;
            return (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
