import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Colors, Fonts} from '../../../utils';
import {DummyUser,IconRemovePhoto} from '../../../assets';

const Profile = ({name,desc, isRemove}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DummyUser} style={styles.avatar} />
        {isRemove &&  <IconRemovePhoto style={styles.removePhoto}/>}
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: Fonts.primary[600],
    color: Colors.text.primary,
    textAlign: 'center',
  },
  profession: {
    fontSize: 16,
    fontFamily: Fonts.primary[600],
    color: Colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
  removePhoto: {
      position: 'absolute',
      right: 8,
      bottom: 8,
  }
});
