import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { HomeIcon, OrderIcon, ProfileIcon } from '../../assets';

const TabItem = ({ label, isFocused, onPress, onLongPress }) => {
    const Icon = () => {
        if (label === "Home") return isFocused ? <HomeIcon /> : <HomeIcon />
        if (label === "Order") return isFocused ? <OrderIcon /> : <OrderIcon />
        if (label === "Profile") return isFocused ? <ProfileIcon /> : <ProfileIcon />
  
        return <HomeIcon />
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icon />
            <Text style={styles.text(isFocused)}>{label}</Text>
        </TouchableOpacity>
    );
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (isFocused) => ({
        fontSize: 14,
        color: '#EA495B',
        marginTop: 8
    })
})
