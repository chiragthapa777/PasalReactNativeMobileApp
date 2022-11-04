import React from 'react';
import {Button, Text, View} from 'react-native';

export default function LoginScreen({navigation}: any) {
  const handlePress = () => {
    navigation.navigate('App', {screen: 'Home'});
  };
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button onPress={handlePress} title="Home" />
    </View>
  );
}
