import {StyleSheet} from 'react-native';

export const GlobalVariables = {
  primary: '#570DF8',
  primaryText: '#fff',
  secondary: '#F000B8',
  secondaryText: '#fff',
  success: '#36D399',
  successText: '#fff',
  error: '#F66060',
  errorText: '#fff',
  warning: '#FBBD23',
  warningText: '#000000',
  info: '#3ABFF8',
  infoText: '#000000',
  base100: '#ffffff',
  base200: '#F0F6FF',
  base300: '#E2E8F4',
  baseText: '#1F2937',
};

export const GlobalStyles = StyleSheet.create({
  text: {
    fontFamily: 'FuzzyBubbles-Regular',
    color: 'red',
  },
  btn: {
    margin: 10,
    padding: 10,
    paddingHorizontal: 50,
    backgroundColor: '#81C784',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
