import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DummyDoctor1, IconStar} from '../../../assets';
import {Colors, Fonts} from '../../../utils';

const RatedDoctor = ({name, desc, avatar, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}l</Text>
        <Text style={styles.category}>{desc}</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    alignItems: 'center',
  },
  avatar: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  rate: {flexDirection: 'row'},
  name: {
    fontSize: 16,
    fontFamily: Fonts.primary[600],
    color: Colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: Fonts.primary.normal,
    color: Colors.text.secondary,
    marginTop: 2,
  },
  profile: {flex: 1},
});
