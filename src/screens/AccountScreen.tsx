import React from 'react';
import {Text, View} from 'react-native';
import HomeLayout from '../components/layouts/HomeLayout';

export default function AccountScreen({navigation}: any) {
  return (
    <HomeLayout navigation={navigation}>
      <View>
        <Text>Account</Text>
      </View>
    </HomeLayout>
  );
}
