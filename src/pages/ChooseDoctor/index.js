import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, List } from '../../components';
import { DummyDoctor1 } from '../../assets';
import { Colors } from '../../utils';

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type="dark" title="Pilih Dokter Anak" onPress={() => navigation.goBack()} />
            <List profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" onPress={() => navigation.navigate('Chatting')} />
            <List profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" />
            <List profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" />
            <List profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" />
            <List profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" />
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {backgroundColor: Colors.white, flex: 1},
  });
  