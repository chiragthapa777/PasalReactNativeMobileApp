import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './navigators/Root';

type Props = {};

export default function App({}: Props) {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
