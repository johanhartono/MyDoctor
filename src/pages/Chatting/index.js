import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header,ChatItem,InputChat} from '../../components';
import { Colors , Fonts} from '../../utils';

const Chatting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type="dark-profile" title="Nairobi Putri Hayza" onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
            <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
                <ChatItem isMe/>
                <ChatItem/>
                <ChatItem isMe/>
            </View>
            <InputChat/>
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page: {
        flex: 1 
    },
    content: {
        flex:1,
        backgroundColor: 'white'
   },
    chatDate: {
        fontSize: 11,
        fontFamily: Fonts.primary.normal,
        color: Colors.text.secondary,
        marginVertical: 20,   
        textAlign: 'center',     
    }
})
