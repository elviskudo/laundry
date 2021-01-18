import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Logo } from '../../assets'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp')
        }, 3000)
    }, [navigation])

    return (
        <View style={styles.background}>
            <Image source={Logo} style={styles.logo}></Image>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5'
    },
    logo: {
        width: 277,
        height: 128
    }
})
