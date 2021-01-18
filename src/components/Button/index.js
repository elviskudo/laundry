import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { DollarIcon, PointIcon } from '../../assets'

const Button = ({ title }) => {
    const Icon = () => {
        if (title === 'Add Money') return <DollarIcon width="70%" />
        if (title === 'Get Point') return <PointIcon width="70%" />

        return <DollarIcon />
    }

    return (
        <TouchableOpacity style={styles.buttonView}>
            <View style={styles.button}>
                <Icon />
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonView: {
        marginTop: -10,
        marginLeft: 7,
        paddingRight: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        alignItems: 'center',
    },
    text: {
        marginTop: -10,
        fontWeight: 'bold',
        fontSize: 12
    }
})
