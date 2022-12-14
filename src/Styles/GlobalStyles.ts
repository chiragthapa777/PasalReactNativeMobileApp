import {StyleSheet} from 'react-native';

export const GlobalVariables = {
  primary: '#570DF8',
  primaryFocus: '#4506CB',
  primaryLight: '#8451F1',
  primaryText: '#fff',
  secondary: '#F000B8',
  secondaryLight: '#FF67DC',
  secondaryText: '#fff',
  success: '#36D399',
  successLight: '#80DCBA',
  successText: '#fff',
  error: '#F66060',
  errorLight: '#F08383',
  errorText: '#fff',
  warning: '#FBBD23',
  warningLight: '#FFD56E',
  warningText: '#000000',
  info: '#3ABFF8',
  infoLight: '#8BDCFF',
  infoText: '#000000',
  base100: '#ffffff',
  base200: '#F0F6FF',
  base300: '#E2E8F4',
  base400: '#c7cad9',
  base500: '#9ea1af',
  baseText: '#171e28',
  baseTextLight: '#363641',
  textXxs: 8,
  textXs: 10,
  textSm: 12,
  textMd: 15,
  textLg: 18,
  textXl: 20,
  textXxl: 25,
  textXxxl: 30,
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
