import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {GlobalVariables} from '../../../Styles/GlobalStyles';

export default function Indicator({children, action, value}: any) {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? GlobalVariables.base200
            : GlobalVariables.base100,
          position: 'relative',
          paddingTop: 7,
          paddingRight: 7,
        },
      ]}
      onPress={() => {
        action();
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: GlobalVariables.secondary,
          borderRadius: 50,
          height: 17,
          width: 17,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
          borderColor: GlobalVariables.base100,
          borderWidth: 1,
        }}>
        <Text
          style={{
            color: GlobalVariables.secondaryText,
            fontSize: GlobalVariables.textXs,
          }}>
          {value}
        </Text>
      </View>
      {children}
      {/*<MaterialCommunityIcons*/}
      {/*  size={28}*/}
      {/*  color={GlobalVariables.primary}*/}
      {/*  name="cart"*/}
      {/*/>*/}
    </Pressable>
  );
}
