import { Text, View, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, { Component } from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SaveButton } from '../../../components';

const OnlineConsultDetails = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.Card}>
                    <View style={styles.bgWhite}>
                        <View style={styles.receivingFlexText}>
                            <Text style={styles.receivingText}>
                                Instant Online consult
                            </Text>
                            <Text style={styles.activeText}>Active</Text>
                            <MaterialIcons
                                name="toggle-on"
                                color="#0077CD"
                                style={styles.toggleTopIcon}
                            />
                        </View>
                        <View style={styles.bgShadeHeaderContainer}>
                            <Text style={styles.bgShadeHeader}>From</Text>
                            <Text style={styles.bgShadeHeader}>To</Text>
                        </View>
                        <View style={styles.fromTwoInputHolder}>
                            <View style={styles.fromInputHolder}>
                                <TextInput
                                    placeholderTextColor={'#000'}
                                    style={styles.inputField}
                                    placeholder="02:00 PM"
                                />
                                <FontAwesome
                                    name="angle-down"
                                    color="#000"
                                    style={styles.timeDown}
                                />
                            </View>
                            <View style={styles.fromInputHolder}>
                                <TextInput
                                    placeholderTextColor={'#000'}
                                    style={styles.inputField}
                                    placeholder="08:00 PM"
                                />
                                <FontAwesome
                                    name="angle-down"
                                    color="#000"
                                    style={styles.timeDown}
                                />
                            </View>
                        </View>
                        <View style={styles.daysFlexText}>
                            <Text style={styles.LeftText}>Days of Practice</Text>
                            <Text style={styles.RightText}>Apply To All</Text>
                            <MaterialIcons
                                name="toggle-on"
                                color="#0077CD"
                                style={styles.togglIcon}
                            />
                        </View>
                        <View style={styles.daysRow}>
                            <View style={styles.daysColumn}>
                                <View style={styles.daysRowText}>
                                    <MaterialIcons
                                        name="check-circle"
                                        color="#4d0d7e"
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Monday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <MaterialIcons
                                        name="check-circle"
                                        color="#4d0d7e"
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Tuesday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <MaterialIcons
                                        name="check-circle"
                                        color="#4d0d7e"
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Wednesday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <MaterialIcons
                                        name="check-circle"
                                        color="#4d0d7e"
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Thursday</Text>
                                </View>
                            </View>
                            <View style={styles.daysColumn}>
                                <View style={styles.daysRowText}>
                                    <MaterialIcons
                                        name="check-circle"
                                        color="#4d0d7e"
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Friday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <MaterialIcons
                                        name="check-circle"
                                        color="#4d0d7e"
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Saturday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <MaterialIcons
                                        name="check-circle"
                                        color="#4d0d7e"
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Sunday</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bgShadeHeaderContainer}>
                            <Text style={styles.bgShadeHeader}>From</Text>
                            <Text style={styles.bgShadeHeader}>To</Text>
                        </View>
                        <View style={styles.fromTwoInputHolder}>
                            <View style={styles.fromInputHolder}>
                                <TextInput
                                    placeholderTextColor={'#000'}
                                    style={styles.inputField}
                                    placeholder="Select"
                                />
                                <FontAwesome
                                    name="angle-down"
                                    color="#000"
                                    style={styles.timeDown}
                                />
                            </View>
                            <View style={styles.fromInputHolder}>
                                <TextInput
                                    placeholderTextColor={'#000'}
                                    style={styles.inputField}
                                    placeholder="Select"
                                />
                                <FontAwesome
                                    name="angle-down"
                                    color="#000"
                                    style={styles.timeDown}
                                />
                            </View>
                        </View>
                        <View style={styles.daysFlexText}>
                            <Text style={styles.LeftText}>Days of Practice</Text>
                            <Text style={styles.RightText}>Apply To All</Text>
                            <MaterialIcons
                                name="toggle-off"
                                color={Colors.lightGrayBg}
                                style={styles.togglIcon}
                            />
                        </View>
                        <View style={styles.daysRow}>
                            <View style={styles.daysColumn}>
                                <View style={styles.daysRowText}>
                                    <FontAwesome
                                        name="circle-thin"
                                        color={Colors.lightGrayBg}
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Monday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <FontAwesome
                                        name="circle-thin"
                                        color={Colors.lightGrayBg}
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Tuesday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <FontAwesome
                                        name="circle-thin"
                                        color={Colors.lightGrayBg}
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Wednesday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <FontAwesome
                                        name="circle-thin"
                                        color={Colors.lightGrayBg}
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Thursday</Text>
                                </View>
                            </View>
                            <View style={styles.daysColumn}>
                                <View style={styles.daysRowText}>
                                    <FontAwesome
                                        name="circle-thin"
                                        color={Colors.lightGrayBg}
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Friday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <FontAwesome
                                        name="circle-thin"
                                        color={Colors.lightGrayBg}
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Saturday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <FontAwesome
                                        name="circle-thin"
                                        color={Colors.lightGrayBg}
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Sunday</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.flexDaysText}>
                            <View style={styles.additionalDaysText}>
                                <Ionicons
                                    name="add-circle-outline"
                                    color="#4d0d7e"
                                    style={styles.circleaddIcon}
                                />
                                <Text style={styles.addDaysText}>
                                    Add additional days {'\n'} and timings
                                </Text>
                            </View>
                            <View style={styles.additionalDaysText}>
                                <Ionicons
                                    name="remove-circle-outline"
                                    color="#4d0d7e"
                                    style={styles.circleaddIcon}
                                />
                                <Text style={styles.addDaysText}>
                                    Remove timings
                                </Text>
                            </View>
                        </View>
                        <View style={styles.Card}>
                            <View style={styles.bgGray}>
                                <View style={styles.bulletPointContainer}>
                                    <Text style={styles.bulletPoint}>{'\u2022'}</Text>
                                    <Text style={styles.bulletPointText}>Allows patient to connect instantly with available practitioner</Text>
                                </View>
                                <View style={styles.bulletPointContainer}>
                                    <Text style={styles.bulletPoint}>{'\u2022'}</Text>
                                    <Text style={styles.bulletPointText}>Fees is standard for all practitioner for the selected speciality</Text>
                                </View>
                                <View style={styles.bulletPointContainer}>
                                    <Text style={styles.bulletPoint}>{'\u2022'}</Text>
                                    <Text style={styles.bulletPointText}>Fees for your Specialization Pulmonologist ₹100/-</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.receivingFlexText}>
                            <Text style={styles.receivingText}>
                                Instant Online consult
                            </Text>
                            <Text style={styles.activeText}>Active</Text>
                            <MaterialIcons
                                name="toggle-on"
                                color="#0077CD"
                                style={styles.toggleTopIcon}
                            />
                        </View>
                        <View style={styles.bgShadeHeaderContainer}>
                            <Text style={styles.bgShadeHeader}>From</Text>
                            <Text style={styles.bgShadeHeader}>To</Text>
                        </View>
                        <View style={styles.fromTwoInputHolder}>
                            <View style={styles.fromInputHolder}>
                                <TextInput
                                    placeholderTextColor={'#000'}
                                    style={styles.inputField}
                                    placeholder="02:00 PM"
                                />
                                <FontAwesome
                                    name="angle-down"
                                    color="#000"
                                    style={styles.timeDown}
                                />
                            </View>
                            <View style={styles.fromInputHolder}>
                                <TextInput
                                    placeholderTextColor={'#000'}
                                    style={styles.inputField}
                                    placeholder="08:00 PM"
                                />
                                <FontAwesome
                                    name="angle-down"
                                    color="#000"
                                    style={styles.timeDown}
                                />
                            </View>
                        </View>
                        <View style={styles.daysFlexText}>
                            <Text style={styles.LeftText}>Days of Practice</Text>
                            <Text style={styles.RightText}>Apply To All</Text>
                            <MaterialIcons
                                name="toggle-on"
                                color="#0077CD"
                                style={styles.togglIcon}
                            />
                        </View>
                        <View style={styles.daysRow}>
                            <View style={styles.daysColumn}>
                                <View style={styles.daysRowText}>
                                    <MaterialIcons
                                        name="check-circle"
                                        color="#4d0d7e"
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Monday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <MaterialIcons
                                        name="check-circle"
                                        color="#4d0d7e"
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Tuesday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <MaterialIcons
                                        name="check-circle"
                                        color="#4d0d7e"
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Wednesday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <MaterialIcons
                                        name="check-circle"
                                        color="#4d0d7e"
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Thursday</Text>
                                </View>
                            </View>
                            <View style={styles.daysColumn}>
                                <View style={styles.daysRowText}>
                                    <MaterialIcons
                                        name="check-circle"
                                        color="#4d0d7e"
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Friday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <MaterialIcons
                                        name="check-circle"
                                        color="#4d0d7e"
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Saturday</Text>
                                </View>
                                <View style={styles.daysRowText}>
                                    <MaterialIcons
                                        name="check-circle"
                                        color="#4d0d7e"
                                        style={styles.circleIcon}
                                    />
                                    <Text style={styles.daysText}>Sunday</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.additionalDaysText}>
                            <Ionicons
                                name="add-circle-outline"
                                color="#4d0d7e"
                                style={styles.circleaddIcon}
                            />
                            <Text style={styles.addDaysText}>
                                Add additional days and timings
                            </Text>
                        </View>
                        <View style={styles.Card}>
                            <View style={styles.bgGraySmall}>
                                <View style={styles.bulletPointContainer}>
                                    <Text style={styles.bulletPoint}>{'\u2022'}</Text>
                                    <Text style={styles.bulletPointText}>Allows patient to book slot for online consultation in advance with the selected practitioner</Text>
                                </View>
                                <View style={styles.bulletPointContainer}>
                                    <Text style={styles.bulletPointText}>Online Consultation Fees* {'\n'} ₹ 500</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.saveButton}>
            <SaveButton/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    Card: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgWhite: {
        marginTop: '2%',
        marginBottom: '5%',
        height: 1360,
        width: '95%',
        borderRadius: 25,
        backgroundColor: '#fff',
    },
    receivingFlexText: {
        marginLeft: '4%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    receivingText: {
        fontSize: 14,
        color: '#000',
        fontWeight: '800',
    },
    toggleTopIcon: {
        fontSize: 45,
    },
    activeText: {
        color:Colors.lightGrayText,
        marginLeft: '25%',
        fontSize: 14
    },
    bgShadeHeaderContainer: {
        flexDirection: 'row',
        gap: 100,
        marginTop: '3%',
        marginBottom: '0%',
    },
    bgShadeHeader: {
        flexDirection: 'row',
        marginHorizontal: '6%',
        marginBottom: '0%',
        color:Colors.lightGrayText,
    },
    timeDown: {
        fontSize: 25,
        marginRight: '2%',
    },
    inputField: {
        width: '100%',
        fontSize: 16,
        color: '#606060',
    },
    fromInputHolder: {
        height: 45,
        width: '38%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#EDEEF1',
        borderBottomWidth: 1.5,
        paddingLeft: '1%',
        margin: '5%',
        marginTop: '1%',
    },
    fromTwoInputHolder: {
        flexDirection: 'row',
    },

    daysFlexText: {
        paddingTop: '5%',
        marginLeft: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    LeftText: {
        marginRight: '10%',
        fontSize: 15,
        fontWeight: '500',
        color:Colors.lightGrayText,
    },
    RightText: {
        marginLeft: '10%',
        fontSize: 15,
        fontWeight: '500',
        color:Colors.lightGrayText,
    },
    togglIcon: {
        marginLeft: '4%',
        fontSize: 35,
    },
    daysRow: {
        marginHorizontal: '4%',
        flexDirection: 'row',
        gap: 40,
    },
    daysRowText: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        margin: '2%',
    },
    daysColumn: {
        // alignItems:'center'
    },
    circleIcon: {
        fontSize: 20,
    },
    daysText: {
        fontSize: 17,
        color: '#000',
        fontWeight: '400',
    },
    flexDaysText: {
        flexDirection: 'row'
    },
    additionalDaysText: {
        flexDirection: 'row',
        // gap: 8,
        margin: '3%',
        marginHorizontal: '5%',
        alignItems: 'center',
    },
    circleaddIcon: {
        fontSize: 22,
    },
    addDaysText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#4d0d7e',
    },
    bgGray: {
        marginTop: '2%',
        marginBottom: '5%',
        height: 200,
        width: '90%',
        borderRadius: 25,
        borderColor: Colors.lightGrayText,
        backgroundColor: Colors.lightBorderGray,
    },
    bgGrayText: {
        margin: '5%',
        alignItems: 'center',
        display: 'flex',
        fontSize: 13
    },
    bulletPointContainer: {
        flexDirection: 'row',
        width: '80%',
        margin: '5%',
        marginBottom: '0%',
        gap: 10,
        alignItems: 'center',
    },
    bulletPoint: {
        color: '#8a8a8a',
        fontSize: 36,
    },
    bulletPointText: {
        color: '#8a8a8a',
        fontSize: 13,
        fontWeight: '600'
    },
    bgGraySmall: {
        marginTop: '2%',
        marginBottom: '5%',
        height: 130,
        width: '90%',
        borderRadius: 25,
        borderColor: Colors.lightGrayText,
        backgroundColor: Colors.lightBorderGray,
    },
    saveButton:{
        marginTop:'5%',
        marginBottom:'5%',
        width:'95%',
        marginLeft:'2%'
    }
});

export default OnlineConsultDetails