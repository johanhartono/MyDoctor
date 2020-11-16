import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { DummyNews1 } from '../../../assets';
import { Colors, Fonts } from '../../../utils';

const NewsItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>
                    is it safe to stay home during coronavirus</Text>
                <Text style={styles.date}>Today</Text>
            </View>
                <Image style={styles.image} source={DummyNews1}/>
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        paddingBottom: 12,
        paddingTop: 16,
        paddingHorizontal: 16,
    },
    titleWrapper : {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.primary[600],
        color: Colors.text.primary,
        maxWidth: '90%',
    },
    date: {
        fontSize: 12,
        fontFamily: Fonts.primary.normal,
        color: Colors.text.secondary,
        marginTop: 4,
    },
    image: { width: 80, height: 60, borderRadius: 11},
})
