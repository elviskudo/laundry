import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Button from '../Button'

const Money = () => {
    return (
        <View style={styles.box}>
            <View style={styles.informationMoney}>
                <View style={styles.text}>
                    <Text>cash</Text>
                    <Text style={styles.textCurrency}>987</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.textPoint}>point</Text>
                    <Text style={styles.textPoint}>9.800</Text>
                </View>
            </View>
            <View style={styles.button}>
                <Button title="Add Money"></Button>
                <Button title="Get Point"></Button>
            </View>
        </View>
    )
}

export default Money

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: windowWidth * 0.85,
        // marginHorizontal: 70,
        borderRadius: 8,
        paddingLeft: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    informationMoney: {
        width: '50%',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 8,
        paddingRight: 8
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: 'Raleway-Reguler'
    },
    textCurrency: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Raleway-Reguler'
    },
    textPoint: {
        fontSize: 16,
    },
    button: {
        backgroundColor: '#f2f2f2',
        marginLeft: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        flexDirection: 'row'
    }
})
