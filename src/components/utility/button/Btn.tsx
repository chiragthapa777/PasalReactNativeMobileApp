import React, {useRef} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import {GlobalVariables} from '../../../Styles/GlobalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/dist/AntDesign';

export default function Btn({
  type,
  title,
  width,
  action,
  loading = false,
  disable = false,
  opt,
  size,
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
  const getSize = () => {
    switch (size) {
      case 'sm': {
        return {
          py: 5,
          px: 15,
          fontSize: 13,
          iconSize: 10,
        };
      }
      case 'md': {
        return {
          py: 10,
          px: 28,
          fontSize: 16,
          iconSize: 14,
        };
      }
      case 'lg': {
        return {
          py: 12,
          px: 32,
          fontSize: 18,
          iconSize: 14,
        };
      }
      default: {
        return {
          py: 10,
          px: 28,
          fontSize: 16,
          iconSize: 14,
        };
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
      disabled={disable}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? getColor()[1] : getColor()[0],
        },
        styles.btn,
        {
          width,
          paddingHorizontal: getSize().px,
          paddingVertical: getSize().py,
          borderWidth: opt === 'outline' ? 2 : 0,
          borderColor: getColor()[0],
        },
      ]}
      onPress={() => {
        if (!loading && action) {
          action();
        }
      }}>
      <Text
        style={[
          styles.txt,
          {
            color: opt === 'outline' ? getColor()[0] : getColor()[2],
            fontSize: getSize().fontSize,
          },
        ]}>
        {title || 'Button'}
      </Text>
      {loading ? (
        <Animated.View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            transform: [{rotate: spin}],
            marginRight: 3,
          }}>
          <AntDesignIcons
            name="loading1"
            size={getSize().fontSize}
            color={'#fff'}
          />
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
  txt: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: 'white',
  },
});
