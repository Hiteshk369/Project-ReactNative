import { ScrollView, Text, View, StyleSheet, Pressable } from 'react-native'
import React, { Component } from 'react'

import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../constants/colors';

const DashBoardAmount = () => {
    return (
        <ScrollView style={styles.container}>
            <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}>
                <View style={styles.navBackground}>
                    <MaterialIcons
                        name="arrow-back-ios"
                        color="#fff"
                        style={styles.backIcon}
                    />
                    <Text style={styles.leftText}>Dashboard</Text>
                </View>
            </LinearGradient>
            <View style={styles.alignContainer}>
                <View style={styles.timeContainer}>
                    <View style={styles.daysFlexMarginButton}>
                        <View style={styles.daysFlexButton}>
                            <Pressable style={styles.activeDayButtonBackground}>
                                <Text style={styles.activeDayButtonText}>Today</Text>
                            </Pressable>
                            <Pressable style={styles.daysButtonBackground}>
                                <Text style={styles.daysButtonText}>Yesterday</Text>
                            </Pressable>
                            <Pressable style={styles.daysButtonBackground}>
                                <Text style={styles.daysButtonText}>Last Week</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={styles.timeContainer}>
                    <View style={styles.daysFlexButton}>
                        <Pressable style={styles.daysButtonBackground}>
                            <Text style={styles.daysButtonText}>Currrent Month</Text>
                        </Pressable>
                        <Pressable style={styles.daysButtonBackground}>
                            <Text style={styles.daysButtonText}>Last Month</Text>
                        </Pressable>
                        <Pressable style={styles.daysButtonBackground}>
                            <Text style={styles.daysButtonText}>Current FY</Text>
                        </Pressable>
                    </View>

                </View>
                <View style={styles.timeContainer}>
                    <View style={styles.daysThirdFlexButton}>
                        <Pressable style={styles.daysButtonBackground}>
                            <Text style={styles.daysButtonText}>Last FY</Text>
                        </Pressable>
                        <Pressable style={styles.daysButtonBackground}>
                            <Text style={styles.daysButtonText}>Select Range</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.Card}>
                <View style={styles.bgWhite}>
                    <View style={styles.cardRightText}>
                        <Text style={styles.cardText}>Payment</Text>
                        <View style={styles.paymentText}>
                            <Text style={styles.receviedText}>Received</Text>
                            <Text style={styles.rupeesText}>₹ 0</Text>
                        </View>
                        <View style={styles.paymentText}>
                            <Text style={styles.dueText}>Due</Text>
                            <Text style={styles.rupeesText}>₹ 0</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.Card}>
                <View style={styles.bgWhite}>
                    <View style={styles.cardLeftText}>
                        <Text style={styles.cardText}>Patient Status</Text>
                        <View style={styles.paymentText}>
                            <Text style={styles.receviedText}>Received</Text>
                            <Text style={styles.rupeesText}>₹ 0</Text>
                        </View>
                        <View style={styles.paymentText}>
                            <Text style={styles.dueText}>Due</Text>
                            <Text style={styles.rupeesText}>₹ 0</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.Card}>
                <View style={styles.bgWhite}>
                    <View style={styles.cardRightText}>
                        <Text style={styles.cardText}>Appointment</Text>
                        <View style={styles.paymentText}>
                            <Text style={styles.receviedText}>Received</Text>
                            <Text style={styles.rupeesText}>₹ 0</Text>
                        </View>
                        <View style={styles.paymentText}>
                            <Text style={styles.dueText}>Due</Text>
                            <Text style={styles.rupeesText}>₹ 0</Text>
                        </View>
                    </View>
                </View>
            </View>
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
    },
    navBackground: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '25%',
        marginBottom: '5%',
    },
    leftText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '2%',
        fontSize: 20,
        color: '#fff',
    },
    backIcon: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '8%',
        fontSize: 25,
        fontWeight: '600',
    },
    alignContainer: {
        marginTop: '5%',
        alignItems: 'center',
    },
    timeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: '1%'
        // backgroundColor:'#000'
    },
    daysButtonBackground: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 5,
    },
    activeDayButtonBackground: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.lightPurple,
        justifyContent: 'center',
        borderRadius: 10
    },
    activeDayButtonText: {
        color: Colors.white,
        fontSize: 13,
        margin: '7%',
    },
    daysButtonText: {
        color: Colors.black,
        fontSize: 13,
        margin: '7%',
        marginHorizontal: '5%',
    },
    daysFlexButton: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '1%',
        gap: 5
    },
    daysFlexMarginButton: {
        marginLeft: '5%'
    },
    thirdLineButtonBackground: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        backgroundColor: Colors.white,
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 5,
    },
    thirdLineButtonText: {
        color: Colors.black,
        fontSize: 13,
        margin: '7%',
        marginRight: '9%',
        marginHorizontal: '5%',
    },
    daysThirdFlexButton: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
        margin: '1%',
        marginLeft: '10%',
        gap: 20
    },
    Card: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgWhite: {
        marginTop: '2%',
        marginBottom: '5%',
        height: 180,
        width: '90%',
        borderRadius: 25,
        backgroundColor: '#fff',
        elevation: 5,
    },
    cardText: {
        fontSize: 16,
        color: Colors.black,
        fontWeight: '600',
    },
    paymentText: {
        flexDirection: 'row'
    },
    receviedText: {
        fontSize: 15,
        marginTop: '2%',
        color: Colors.green
    },
    dueText: {
        fontSize: 15,
        color: Colors.red,
        marginTop: '2%'
    },
    rupeesText: {
        fontSize: 15,
        marginLeft: '3%',
        marginTop: '2%',
        color: Colors.black
    },
    cardRightText: {
        marginTop:'14%',
        marginLeft: '53%'
    },
    cardLeftText: {
        marginTop:'14%',
        marginLeft: '10%'
    },
})

export default DashBoardAmount