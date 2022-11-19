import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {GlobalVariables} from '../../../Styles/GlobalStyles';

export default function Batch({children, action, value}: any) {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? GlobalVariables.base200
            : GlobalVariables.base100,
          position: 'relative',
          borderRadius: 50,
          padding: 4,
        },
      ]}
      onPress={() => {
        action();
      }}>
      <View
        style={{
          position: 'absolute',
          top: -3,
          right: -3,
          backgroundColor: GlobalVariables.secondary,
          borderRadius: 50,
          height: 20,
          width: 20,
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
