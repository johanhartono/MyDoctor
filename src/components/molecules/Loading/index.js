import React from 'react'
import { ActionSheetIOS, ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Colors,Fonts } from '../../../utils';

const Loading = () => {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator size="large" color={Colors.primary}/>
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.loadingBackground,
        width: '100%',
        height: '100%',
    },
    text : {
        fontSize: 10,
        color: Colors.primary,
        fontFamily: Fonts.primary[600],
        marginTop: 10,
    }

})
