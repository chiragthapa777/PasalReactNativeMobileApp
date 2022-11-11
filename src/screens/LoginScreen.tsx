import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {GlobalVariables} from '../Styles/GlobalStyles';
import Btn from '../components/utility/button/Btn';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const InputGroup = ({title, error, value, setValue}: any) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.inputGrp}>
      <Text style={styles.inputName}>{title} </Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        style={[
          styles.inputTextField,
          {
            borderColor:
              error === ''
                ? isFocused
                  ? GlobalVariables.primaryLight
                  : GlobalVariables.base300
                : GlobalVariables.error,
          },
        ]}
      />
      {error !== '' ? <Text style={styles.inputLabel}>Label here</Text> : null}
    </View>
  );
};

export default function LoginScreen({}: any) {
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
          title={'Username'}
          error={''}
          value={username}
          setValue={setUsername}
        />
        <InputGroup
          title={'Password'}
          error={'incorrect passoword'}
          value={username}
          setValue={setUsername}
        />
        <Btn title={'Login'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalVariables.base200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  loginForm: {
    elevation: 5,
    width: '85%',
    backgroundColor: GlobalVariables.base100,
    borderRadius: 10,
    padding: 15,
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
  inputGrp: {
    width: '100%',
    paddingVertical: 10,
  },
  inputName: {
    color: GlobalVariables.baseText,
    fontSize: GlobalVariables.textSm,
  },
  inputLabel: {
    color: GlobalVariables.error,
    fontSize: GlobalVariables.textXs,
  },
  inputTextField: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: GlobalVariables.base300,
    padding: 5,
    color: GlobalVariables.baseText,
  },
});
