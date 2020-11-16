import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DummyUser } from '../../../assets';
import { Colors, Fonts } from '../../../utils';

const HomeProfile = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress= {onPress}>
            <Image source={DummyUser} style={styles.avatar}/>
            <View>
                <Text style={styles.name}>Shayna Melinda</Text>
                <Text style={styles.profession}>Product Designer</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {flexDirection: 'row'},
    avatar: {width: 46,height:46,borderRadius: 45/2, marginRight: 12},
    name: {
        fontSize: 16,
        fontFamily: Fonts.primary[600],
        color: Colors.text.primary,
    },
    profession: {
        fontSize: 12,
        fontFamily: Fonts.primary[400],
        color: Colors.text.secondary,
    }
})
