import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors, Fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis Pesan untuk Nairobi " />
      <Button type="btn-icon-send" disable={false} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: Fonts.primary.normal,
    maxHeight: 45,
  },
});
