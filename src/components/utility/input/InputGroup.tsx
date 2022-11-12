import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {GlobalVariables} from '../../../Styles/GlobalStyles';

export default function InputGroup({
  title,
  error,
  value,
  setValue,
  multiline,
  numberOfLines,
  editable,
  placeholder,
  secureTextEntry,
}: any) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.inputGrp}>
      {title ? <Text style={styles.inputName}>{title} </Text> : null}
      <TextInput
        value={value}
        editable={editable || true}
        onChangeText={setValue}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        multiline={multiline || false}
        numberOfLines={numberOfLines || 1}
        placeholder={placeholder || ''}
        placeholderTextColor={GlobalVariables.baseTextLight}
        secureTextEntry={secureTextEntry || false}
        style={[
          styles.inputTextField,
          {
            borderColor: error
              ? GlobalVariables.error
              : isFocused
              ? GlobalVariables.primaryLight
              : GlobalVariables.base300,
          },
          {
            textAlignVertical: numberOfLines > 1 ? 'top' : 'center',
          },
        ]}
      />
      {error && error !== '' ? (
        <Text style={styles.inputLabel}>{error}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
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
    borderColor: GlobalVariables.base400,
    padding: 5,
    color: GlobalVariables.baseText,
    // textAlignVertical: 'top', // for multiline textinput
  },
});
