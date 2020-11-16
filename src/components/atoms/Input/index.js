import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Colors, Fonts} from '../../../utils';

const Input = ({label, value, onChangeText, secureTextEntry, disable}) => {
  const [border, setBorder] = useState(Colors.border);
  const onFocusForm = () => {
    setBorder(Colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(Colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    fontSize: 16,
    color: Colors.text.secondary,
    marginBottom: 6,
    fontFamily: Fonts.primary[400],
  },
});