import React from 'react'
import { StyleSheet,  View ,Text, TouchableOpacity } from 'react-native'
import IconOnly from './IconOnly';
import { Colors, Fonts } from '../../../utils';
import BtnIcon from '../Button/BtnIconSend';

const Button = ({type, title, onPress,icon,disable}) => {
    if (type === "btn-icon-send") {
        return <BtnIcon disable={disable}/>
    }
    if (type === "icon-only") {
        return <IconOnly icon={icon} onPress={onPress}/>
        //return <Text>Icon Only</Text>
    }
    if (disable) {
    return (
        <View style={styles.disableBg}>
            <Text style={styles.disableText}>{title}</Text>
        </View> 
    )  ;      
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity> 
    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? Colors.button.secondary.background : Colors.button.primary.background,
        paddingVertical: 10,
        borderRadius: 10,
    }),
    text: (type) => ({
        fontSize: 18, 
        //fontWeight: '600',
        fontFamily: 'Nunito-SemiBold',
        textAlign: 'center', 
        color: type === 'secondary' ? Colors.button.secondary.text : Colors.button.primary.text,
    }),
    disableBg: {
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: Colors.button.disable.background,
    },
    disableText: {
        fontSize: 18,
        fontFamily: Fonts.primary[600],
        textAlign: 'center',
        color: Colors.button.disable.text,
    }
})
