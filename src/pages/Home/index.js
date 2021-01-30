import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import { HeaderImage } from '../../assets'
import Money from '../../components/Money'

const Home = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={HeaderImage} style={styles.header}>
                <View style={styles.hello}>
                    <Text style={styles.welcome}>Welcome,</Text>
                    <Text style={styles.username}>elviskudo</Text>
                </View>
                <Money />
            </ImageBackground>
            <View style={styles.services}>
                <Text style={styles.heading}>Our Services</Text>
            </View>
        </View>
    )
}

export default Home

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: windowWidth,
        height: windowHeight * 0.4
    },
    hello: {
        marginTop: windowHeight * 0.17,
        alignItems: 'center'
    },
    welcome: {
        fontSize: 16,
        fontFamily: 'Raleway-Regular'
    },
    username: {
        fontSize: 18,
        fontFamily: 'Raleway-Bold'
    },
    services: {
        width: windowWidth,
        marginTop: 16,
        height: windowHeight * 0.4,
        paddingLeft: 27,
    },
    heading: {
        width: windowWidth * 0.85,
        fontWeight: 'bold',
    },
})
