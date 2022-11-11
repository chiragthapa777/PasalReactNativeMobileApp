import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Btn from '../components/utility/button/Btn';

export default function WishlistScreen({navigation}: any) {
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
        <Btn loading={loading} type={'info'} title="md btn" />
        <Btn loading={loading} type={'warning'} />
      </View>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Btn loading={loading} type={'info'} size="sm" title="sm btn" />
        <Btn loading={loading} type={'warning'} size="md" title="md btn" />
        <Btn loading={loading} type={'warning'} size="lg" title="lg btn" />
      </View>
      <Btn loading={loading} type={'info'} size="sm" title="sm btn" />
      <Btn loading={loading} type={'warning'} size="lg" title="lg btn" />
      <Btn loading={loading} type={'warning'} opt="outline" title="lg btn" />
      <Btn title="Loading" type={'secondary'} action={toggleLoading} />
    </View>
  );
}
