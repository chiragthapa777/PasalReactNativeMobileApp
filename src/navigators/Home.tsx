import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import {GlobalVariables} from '../Styles/GlobalStyles';
import LoginScreen from '../screens/LoginScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();
const focusedIconSize = 32;
const normalIconSize = 28;

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={() => ({
        tabBarActiveTintColor: GlobalVariables.primary,
        tabBarInactiveTintColor: GlobalVariables.baseText,
        tabBarActiveBackgroundColor: GlobalVariables.base100,
        tabBarInactiveBackgroundColor: GlobalVariables.base100,
        tabBarHideOnKeyboard: true,
        header: () => null,
      })}>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'cart',
          tabBarIcon: ({focused, size, color}) => {
            color = focused
              ? GlobalVariables.primary
              : GlobalVariables.baseText;
            size = focused ? focusedIconSize : normalIconSize;
            return (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            );
          },
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: GlobalVariables.secondary,
            color: GlobalVariables.secondaryText,
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'search',
          tabBarIcon: ({focused, size, color}) => {
            color = focused
              ? GlobalVariables.primary
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
              ? GlobalVariables.primary
              : GlobalVariables.baseText;
            size = focused ? focusedIconSize : normalIconSize;
            return (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            );
          },
        }}
      />

      {/*<Tab.Screen*/}
      {/*  name="Account"*/}
      {/*  component={AccountScreen}*/}
      {/*  options={{*/}
      {/*    tabBarLabel: 'account',*/}
      {/*    tabBarIcon: ({focused, size, color}) => {*/}
      {/*      color = focused*/}
      {/*        ? GlobalVariables.primary*/}
      {/*        : GlobalVariables.baseText;*/}
      {/*      size = focused ? focusedIconSize : normalIconSize;*/}
      {/*      return (*/}
      {/*        <MaterialCommunityIcons*/}
      {/*          name="account"*/}
      {/*          color={color}*/}
      {/*          size={size}*/}
      {/*        />*/}
      {/*      );*/}
      {/*    },*/}
      {/*  }}*/}
      {/*/>*/}
      <Tab.Screen
        name="More"
        component={LoginScreen}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({focused, size, color}) => {
            color = focused
              ? GlobalVariables.primary
              : GlobalVariables.baseText;
            size = focused ? focusedIconSize : normalIconSize;
            return (
              <MaterialCommunityIcons name="menu" color={color} size={size} />
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
