import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './navigators/Root';
// import {NativeBaseProvider} from 'native-base';

type Props = {};

export default function App({}: Props) {
  return (
    <NavigationContainer>
      {/* <NativeBaseProvider> */}
      <Root />
      {/* </NativeBaseProvider> */}
    </NavigationContainer>
  );
}
