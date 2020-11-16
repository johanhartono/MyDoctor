import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../../utils';
import { IconSendDark,IconSendLight } from '../../../assets';


const BtnIconSend = ({disable}) => {
    return (
        <View style={styles.container(disable)}>
            {disable && <IconSendDark/>}
            {!disable && <IconSendLight/>}
        </View>
    )
}

export default BtnIconSend

const styles = StyleSheet.create({
    container: (disable) => (
        {
        backgroundColor: disable? Colors.disable: Colors.tertiary,
        width: 45,
        height: 45,
        borderRadius: 1,
        paddingTop: 3,
        paddingRight: 3,
        paddingBottom: 8,
        paddingLeft: 8,

    })
})
