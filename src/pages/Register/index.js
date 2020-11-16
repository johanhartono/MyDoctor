import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Input, Button, Header, Gap,Loading} from '../../components';
import {Colors,useForm} from '../../utils';
import { Fire } from '../../config';
import FlashMessage from 'react-native-flash-message';
import {showMessage,hideMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
/*   const [fullName, setFullName] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); */
  
  const [form,setForm] = useForm({
        fullName: '' ,
        profession: '',
        email: '',
        password: '',
  })
  const [loading,setLoading] = useState(false);

  const onContinue = ({navigation}) => {
      console.log(form);

      setLoading(true);
      setForm('reset');
      //https:/firebase.com/users/
      const data = {
        fullName: form.fullName,
        profession: form.profession,
        email: form.email,
      }

      Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        console.log('register success: ', success);
              Fire.database()
      .ref('users/' + success.user.uid+ '/')
      .set(data);
      })
      .catch((error) => {
        // Handle Errors here.
        const  errorMessage = error.message;
        setLoading(false);
        //console.log('error register: ', errorMessage);
      showMessage({
        message: errorMessage,
        type: 'default',
        backgroundColor: Colors.error,
        color: Colors.white,
      });
        // ...
      });
  }
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
/*             value={fullName}
            onChangeText={value => setFullName(value)} */
            value={form.fullName}
            onChangeText={value => setForm('fullName',value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={form.profession}
            onChangeText={value => setForm('profession',value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
            value={form.email}
            onChangeText={value => setForm('email',value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password',value)}
            secureTextEntry
          />
          <Gap height={24} />
          <Button
            title="Continue"
            onPress={() => navigation.navigate('UploadPhoto')}
            //onPress={onContinue}
          />
        </ScrollView>
      </View>
      { loading && <Loading /> }
    </View>
   
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
