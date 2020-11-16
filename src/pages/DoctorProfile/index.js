import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../utils';
import {
  Header,
  Profile,
  List,
  Gap,
  ProfileItem,
  Button,
} from '../../components';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()}/>
      <Profile name="Nairobi Putri Hayza" desc="Dokter Anak" />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
      <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
      <ProfileItem label="No. STR" value="0011223344556677889900" />
      <View style={styles.action}>
        <Button  title="Start Consultation" onPress={() => navigation.navigate('Chatting')} />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
