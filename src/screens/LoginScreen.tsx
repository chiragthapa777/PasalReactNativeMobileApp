import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalVariables} from '../Styles/GlobalStyles';
import Btn from '../components/utility/button/Btn';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import InputGroup from '../components/utility/input/InputGroup';

export default function LoginScreen({navigation}: any) {
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('App');
    }, 1000);
  };
  const [username, setUsername] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <View style={styles.formHeaderView}>
          <MaterialCommunityIcons
            name="store"
            color={GlobalVariables.primary}
            size={35}
          />
          <Text style={styles.formHeaderText}>Pasal</Text>
        </View>
        <InputGroup
          // title={'Username'}
          error={''}
          value={username}
          setValue={setUsername}
          placeholder={'Email'}
        />
        <InputGroup
          placeholder={'Password'}
          error={''}
          value={username}
          setValue={setUsername}
          secureTextEntry={true}
        />

        <Btn title={'Login'} action={handleLogin} loading={loading} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalVariables.base100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  loginForm: {
    // elevation: 5,
    width: '100%',
    // backgroundColor: GlobalVariables.base100,
    borderRadius: 10,
    padding: 10,
  },
  formHeaderView: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  formHeaderText: {
    color: GlobalVariables.primary,
    fontSize: GlobalVariables.textXxxl,
    fontWeight: 'bold',
    marginLeft: 3,
  },
});
