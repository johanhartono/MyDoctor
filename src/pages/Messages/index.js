import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components';
import {Colors, Fonts} from '../../utils';
import {DummyDoctor4, DummyDoctor5, DummyDoctor6} from '../../assets';

const Messages = ({navigation}) => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      profile: DummyDoctor4,
      name: 'Alexander Jannie',
      desc: 'oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 2,
      profile: DummyDoctor5,
      name: 'Nairobi Putri Hayza',
      desc: 'oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profile: DummyDoctor6,
      name: 'John McParker Steve',
      desc: 'oh tentu saja tidak karena jeruk it...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((doctor) => {
          return (
            <List
              key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
              onPress= {() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: Colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.primary[600],
  },
});
