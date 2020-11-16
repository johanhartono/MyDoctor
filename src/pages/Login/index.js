import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Link, Gap, Button} from '../../components';
import {Colors} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} align="center" />
      <Gap height={20} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Gap height={20} />
      <Link title="Create New Account" size={12} align="center" onPress={() => navigation.navigate('Register')}/>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: Colors.white,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    color: Colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
