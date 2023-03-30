import { Text, View,ScrollView, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../constants/colors';

const Timeline = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <LinearGradient colors={[Colors.darkPurple, Colors.lightPurple]} style={styles.gradient}>
                    <Text style={styles.leftText}>Timeline</Text>
                </LinearGradient>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%'
    },
    gradient: {
        height: 150,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    leftText: {
        marginTop: '22%',
        marginLeft: '10%',
        fontSize: 20,
        color: Colors.white
    },
})

export default Timeline