import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Btn from '../components/button/Btn';

export default function LoginScreen({navigation}: any) {
  const [loading, setloading] = useState(false);
  const handlePress = () => {
    navigation.navigate('App', {screen: 'Home'});
  };
  const toggleLoading = () => {
    setloading(!loading);
  };
  return (
    <View>
      <Text>LoginScreen</Text>
      <Btn
        action={handlePress}
        title="Home"
        loading={loading}
        type={'primary'}
      />
      <Btn loading={loading} type={'success'} width={150} />
      <Btn loading={loading} type={'error'} />
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Btn loading={loading} type={'info'} />
        <Btn loading={loading} type={'warning'} />
      </View>
      <Btn title="Loading" type={'secondary'} action={toggleLoading} />
    </View>
  );
}
