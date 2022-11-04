import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default function Layout({children}: any) {
  return (
    <SafeAreaView>
      <Text>Layout</Text>
      {children}
    </SafeAreaView>
  );
}
