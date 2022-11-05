import React, {useRef} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import {GlobalVariables} from '../../Styles/GlobalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/dist/AntDesign';

export default function Btn({
  type,
  title,
  width,
  action,
  loading = false,
}: any) {
  const getColor = () => {
    switch (type || '') {
      case 'primary': {
        return [
          GlobalVariables.primary,
          GlobalVariables.primaryLight,
          GlobalVariables.primaryText,
        ];
      }
      case 'secondary': {
        return [
          GlobalVariables.secondary,
          GlobalVariables.secondaryLight,
          GlobalVariables.secondaryText,
        ];
      }
      case 'success': {
        return [
          GlobalVariables.success,
          GlobalVariables.successLight,
          GlobalVariables.successText,
        ];
      }
      case 'error': {
        return [
          GlobalVariables.error,
          GlobalVariables.errorLight,
          GlobalVariables.errorText,
        ];
      }
      case 'info': {
        return [
          GlobalVariables.info,
          GlobalVariables.infoLight,
          GlobalVariables.infoText,
        ];
      }
      case 'warning': {
        return [
          GlobalVariables.warning,
          GlobalVariables.warningLight,
          GlobalVariables.warningText,
        ];
      }
      default: {
        return [
          GlobalVariables.primary,
          GlobalVariables.primaryLight,
          GlobalVariables.primaryText,
        ];
      }
    }
  };
  let spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? getColor()[1] : getColor()[0],
        },
        styles.btn,
        {
          width,
        },
      ]}
      onPress={() => {
        if (!loading && action) {
          action();
        }
      }}>
      <Text
        style={{
          color: getColor()[2],
        }}>
        {title || 'Button'}
      </Text>
      {loading ? (
        <Animated.View
          style={{
            transform: [{rotate: spin}],
            marginRight: 3,
          }}>
          <AntDesignIcons name="loading1" size={15} color={'#fff'} />
        </Animated.View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 2,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
});
