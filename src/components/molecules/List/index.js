import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { IconNext, DummyDoctor2, IconEditProfile, IconLanguage, IconRate, IconHelp } from '../../../assets';
import { Colors, Fonts } from '../../../utils';

const List = ({profile,name,desc,type,onPress, icon}) => {
    const Icon = () => {
        if (icon === 'edit-profile') {
            return <IconEditProfile/>
        }
        if (icon === 'edit-language') {
            return <IconLanguage/>
        }
        if (icon === 'rate') {
            return <IconRate/>
        }
        if (icon === 'help') {
            return <IconHelp/>
        }
            return <IconEditProfile/>
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon ? <Icon /> : <Image source={DummyDoctor2} style={styles.avatar}/> }
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {
                type === "next" &&  <IconNext/>
            }
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 46, height: 46, borderRadius: 46 /2 ,
    },
    name: {
        fontSize: 16,
        fontFamily: Fonts.primary.normal,
        color: Colors.text.primary,
    },
    desc: {
        fontSize: 12,
        fontFamily: Fonts.primary[300],
        color: Colors.text.secondary,       
    },
    content: {
        flex: 1,marginLeft: 16
    }
})
