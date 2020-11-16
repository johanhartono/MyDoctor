import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Fonts, Colors} from '../../../utils';
import {DummyDoctor9} from '../../../assets';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor9} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    //maxWidth: '70%',
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  chatContent: {
    padding: 12,
    paddingRight: 10,
    backgroundColor: Colors.primary,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: Fonts.primary.normal,
    color: Colors.white,
  },
  date: {
    fontSize: 11,
  },
});
