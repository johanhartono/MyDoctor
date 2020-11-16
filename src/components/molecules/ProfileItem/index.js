import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors,Fonts } from '../../../utils';

const ProfileItem = ({label,value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    label : {
        fontSize: 14,
        fontFamily: Fonts.primary.normal,
        color: Colors.text.secondary,
        marginBottom: 8,
    },
    value: {
        fontSize: 14,
        fontFamily: Fonts.primary.normal,
        color: Colors.text.primary,
    }
})
