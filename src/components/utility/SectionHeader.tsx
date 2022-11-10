import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {GlobalVariables} from '../../Styles/GlobalStyles';

export default function SectionHeader({title}:any) {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2,
        paddingHorizontal: 5,
      }}>
      <Text
        style={{
          color: GlobalVariables.primary,
          fontSize: GlobalVariables.textMd,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
      <Pressable>
        <Text style={{color: GlobalVariables.baseTextLight}}>
          see more{' >>'}
        </Text>
      </Pressable>
    </View>
  );
}
