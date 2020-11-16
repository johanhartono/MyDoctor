import React from 'react'
import { StyleSheet,  View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Header,Profile,Input,Button ,Gap} from '../../components';
import { Colors , Fonts } from '../../utils';

const UpdateProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()}/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                <Profile isRemove/>
                <Gap height={26}/>
                <Input label="Full Name" />
                <Gap height={24}/>
                <Input label="Pekerjaan" />
                <Gap height={24}/>
                <Input label="Email" />
                <Gap height={24}/>
                <Input label="Password" />
                <Gap height={40}/>
                <Button title="Save Profile" onPress={() => navigation.goBack('UserProfile')} />
            </View>
            </ScrollView>

        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    content: {
        padding: 40,
        paddingTop: 0,
    },
    page: {
        flex: 1,
        backgroundColor: Colors.white,
    }
})
