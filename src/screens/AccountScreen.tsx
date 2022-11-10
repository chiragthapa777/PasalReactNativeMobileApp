import React from 'react';
import {Text, View} from 'react-native';
import Layout from '../components/Layout';

export default function AccountScreen({navigation}: any) {
  return (
    <Layout navigation={navigation}>
      <View>
        <Text>Account</Text>
      </View>
    </Layout>
  );
}
