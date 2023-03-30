import { Text, View, ScrollView, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../constants/colors';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Prescription } from '../../../components';

const Selectpatient = () => {
    return (
        <ScrollView style={styles.container}>
            <LinearGradient colors={[Colors.purple_200, Colors.purple_100]} style={styles.gradient}>
                <View style={styles.navHeader}>
                    <View style={styles.leftText}>
                        <MaterialIcons
                            name="arrow-back-ios"
                            color={Colors.black}
                            style={styles.backIcon}
                        />
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleIcon}
                        />
                        <Text style={styles.navText}>Select Patient</Text>
                    </View>
                    <View style={styles.rightText}>
                        <MaterialIcons
                            name="more-vert"
                            color={Colors.black}
                            style={styles.moreIcon}
                        />
                    </View>
                </View>
            </LinearGradient>
            <Prescription />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    gradient: {
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomWidth: 5,
        borderBottomColor: Colors.gray_300,
        // elevation: 5
    },
    navHeader: {
        height: 140,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftText: {
        flexDirection: 'row',
        margin: '5%',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    backIcon: {
        fontSize: 25,
    },
    circleIcon: {
        fontSize: 50,
    },
    navText: {
        fontSize: 18,
        color: Colors.black,
        fontWeight: '500'
    },
    rightText: {
        marginLeft: '26%'
    },
    moreIcon: {
        fontSize: 35
    }
})

export default Selectpatient