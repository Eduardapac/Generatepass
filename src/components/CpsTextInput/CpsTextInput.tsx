import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './CpsTextInputStyles';


export function CpsTextInput() {
  return (
    <TextInput
        style={styles.inputer}
        placeholder='Pass'
    />
  );
}