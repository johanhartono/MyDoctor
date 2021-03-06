import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ILNullPhoto, IconAddPhoto, IconRemovePhoto} from '../../assets';
import {Link, Button, Header, Gap} from '../../components';
import {Colors, Fonts} from '../../utils';
import ImagePicker from 'react-native-image-picker';
const UploadPhoto = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getImage = () => {
      ImagePicker.launchImageLibrary({}, Response => {
          console.log('response: ',Response);
          const source = {uri: Response.uri};
          setPhoto(source);
          setHasPhoto(true);
      })
  };
  return (
    <View style={styles.page}>
      <Header
        onPress={() => navigation.navigate('Register')}
        title="Upload Photo"
      />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
            <IconAddPhoto style={styles.addPhoto} />
            <IconRemovePhoto style={styles.addPhoto} />
          </TouchableOpacity>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button disable={!hasPhoto} title="Upload and Continue" />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Colors.white},
  profile: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110/2,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 24,
    color: Colors.text.primary,
    fontFamily: Fonts.primary[600],
    textAlign: 'center',
  },

  profession: {
    fontSize: 16,
    color: Colors.text.secondary,
    fontFamily: Fonts.primary.normal,
    textAlign: 'center',
  },
});
