import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fonts,Colors} from '../../../utils';

const IsMe = () => {
    return (
        <View style={styles.container}>
          <View style={styles.chatContent}>
            <Text style={styles.text}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
          </View>
          <Text style={styles.date}>4.20 AM</Text>
        </View>
      );
}

export default IsMe

const styles = StyleSheet.create({
    container: {
        //maxWidth: '70%',
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingRight: 16,
    },
    chatContent: {
        padding: 12,
        paddingRight: 10,
        backgroundColor: Colors.cardLight,
        maxWidth: '70%',
        borderRadius: 10,
        borderBottomRightRadius: 0,

    },
    text : { 
        fontSize: 14,
        fontFamily: Fonts.primary.normal,
        color: Colors.text.primary,
    }
    ,
    date: {
        fontSize: 11,
    }
});