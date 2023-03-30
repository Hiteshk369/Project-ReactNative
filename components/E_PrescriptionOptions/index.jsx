import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/colors'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import CheckBox from '@react-native-community/checkbox';

const E_PrescriptionOptions = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.bodyText}>
                    <View style={styles.bodyLeftText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleIcon}
                        />
                        <Text style={styles.bodyTextFlex}> Examinations</Text>
                    </View>
                    <View style={styles.bodyRightText}>
                        <MaterialIcons
                            name="add"
                            color={Colors.lightGrayBg}
                            style={styles.addIcon}
                        />
                    </View>
                </View>
                <View style={styles.bodyText}>
                    <View style={styles.bodyLeftText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleIcon}
                        />
                        <Text style={styles.bodyTextFlex}> Diagnosis</Text>
                    </View>
                    <View style={styles.bodyRightText}>
                        <MaterialIcons
                            name="add"
                            color={Colors.lightGrayBg}
                            style={styles.addIcon}
                        />
                    </View>
                </View>
                <View style={styles.bodyText}>
                    <View style={styles.bodyLeftText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleIcon}
                        />
                        <Text style={styles.bodyTextFlex}> Medication</Text>
                    </View>
                    <View style={styles.bodyRightText}>
                        <MaterialIcons
                            name="add"
                            color={Colors.lightGrayBg}
                            style={styles.addIcon}
                        />
                    </View>
                </View>
                <View style={styles.bodyText}>
                    <View style={styles.bodyLeftText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleIcon}
                        />
                        <Text style={styles.bodyTextFlex}> Procedure</Text>
                    </View>
                    <View style={styles.bodyRightText}>
                        <MaterialIcons
                            name="add"
                            color={Colors.lightGrayBg}
                            style={styles.addIcon}
                        />
                    </View>
                </View>
                <View style={styles.bodyText}>
                    <View style={styles.bodyLeftText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleIcon}
                        />
                        <Text style={styles.bodyTextFlex}> Investigation</Text>
                    </View>
                    <View style={styles.bodyRightText}>
                        <MaterialIcons
                            name="add"
                            color={Colors.lightGrayBg}
                            style={styles.addIcon}
                        />
                    </View>
                </View>
                <View style={styles.bodyText}>
                    <View style={styles.bodyLeftText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleIcon}
                        />
                        <Text style={styles.bodyTextFlex}> Advice</Text>
                    </View>
                    <View style={styles.bodyRightText}>
                        <MaterialIcons
                            name="add"
                            color={Colors.lightGrayBg}
                            style={styles.addIcon}
                        />
                    </View>
                </View>
                <View style={styles.bodyText}>
                    <View style={styles.bodyLeftText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleIcon}
                        />
                        <Text style={styles.bodyTextFlex}> Findings</Text>
                    </View>
                    <View style={styles.bodyRightText}>
                        <MaterialIcons
                            name="add"
                            color={Colors.lightGrayBg}
                            style={styles.addIcon}
                        />
                    </View>
                </View>
                <View style={styles.bodyText}>
                    <View style={styles.bodyLeftText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleIcon}
                        />
                        <Text style={styles.bodyTextFlex}>Emergency Instructions</Text>
                    </View>
                    <View style={styles.bodyRightText}>
                        <MaterialIcons
                            name="add"
                            color={Colors.lightGrayBg}
                            style={styles.addIcon}
                        />
                    </View>
                </View>
                <View style={styles.bodyText}>
                    <View style={styles.bodyLeftText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleIcon}
                        />
                        <Text style={styles.bodyTextFlex}> Prognosis</Text>
                    </View>
                    <View style={styles.bodyRightText}>
                        <MaterialIcons
                            name="add"
                            color={Colors.lightGrayBg}
                            style={styles.addIcon}
                        />
                    </View>
                </View>
                <View style={styles.bodyText}>
                    <View style={styles.bodyLeftText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleIcon}
                        />
                        <Text style={styles.bodyTextFlex}> Refferd To</Text>
                    </View>
                    <View style={styles.bodyRightText}>
                        <MaterialIcons
                            name="add"
                            color={Colors.lightGrayBg}
                            style={styles.addIcon}
                        />
                    </View>
                </View>
                <View style={styles.bodyText}>
                    <View style={styles.bodyLeftText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleIcon}
                        />
                        <Text style={styles.bodyTextFlex}> Refferd By</Text>
                    </View>
                    <View style={styles.bodyRightText}>
                        <MaterialIcons
                            name="add"
                            color={Colors.lightGrayBg}
                            style={styles.addIcon}
                        />
                    </View>
                </View>
                <View style={styles.bodyText}>
                    <View style={styles.bodyLeftText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleIcon}
                        />
                        <Text style={styles.bodyTextFlex}> Doctor notes</Text>
                    </View>
                    <View style={styles.bodyRightText}>
                        <MaterialIcons
                            name="add"
                            color={Colors.lightGrayBg}
                            style={styles.addIcon}
                        />
                    </View>
                </View>
                <View style={styles.bodyText}>
                    <View style={styles.bodyLeftText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleIcon}
                        />
                        <Text style={styles.bodyTextFlex}> Chief Complaints</Text>
                    </View>
                    <View style={styles.bodyRightText}>
                        <MaterialIcons
                            name="add"
                            color={Colors.lightGrayBg}
                            style={styles.addIcon}
                        />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleColorIcon}
                        />
                        <Text style={styles.bottomTextColor}>  Edit EMR</Text>
                    </View>
                    <View style={styles.bottomText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleColorIcon}
                        />
                        <Text style={styles.bottomTextColor}>  Attachments</Text>
                    </View>
                    <View style={styles.bottomText}>
                        <FontAwesome
                            name="circle-thin"
                            color={Colors.lightGrayBg}
                            style={styles.circleColorIcon}
                        />
                        <Text style={styles.bottomTextColor}>  Followup</Text>
                    </View>
                </View>
                <View style={styles.checkBox}>
                    <CheckBox
                        tintColors={{ true: Colors.lightPurple, false: Colors.slate_300 }}
                        onChange={() => setToggleCheckBox(!toggleCheckBox)}
                        value={toggleCheckBox}
                    />
                    <Text style={styles.checkBoxText}>Share Prescription with patient</Text>
                </View>
                <View style={styles.buttonsFlex}>
                    <TouchableOpacity style={styles.buttonBackground}>
                        <Text style={styles.buttonText}>Preview Rx</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.activeButtonBackground}>
                        <Text style={styles.activeButtonText}>End Consultation</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    bodyText: {
        marginTop: '5%',
        marginHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray_100
    },
    bodyLeftText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: '4%'
    },
    bodyRightText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '4%'
    },
    circleIcon: {
        fontSize: 20,
        color: Colors.black,
        marginBottom: '5%',
    },
    bodyTextFlex: {
        marginBottom: '5%',
        fontSize: 15,
        fontWeight: '500',
        marginLeft: '5%',
        color: Colors.black
    },
    addIcon: {
        marginBottom: '0%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontSize: 25,
        color: Colors.black,
    },
    bottomContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '6%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray_100
    },
    bottomText: {
        flexDirection: 'row',
        marginBottom: '5%',
        backgroundColor: Colors.purple_100,
        padding: '3%',
        borderRadius: 10,
    },
    circleColorIcon: {
        fontSize: 18,
        color: Colors.darkPurple,
        fontWeight: '500',
    },
    bottomTextColor: {
        color: Colors.darkPurple,
        fontWeight: '700'
    },
    checkBox: {
        flexDirection: 'row',
        margin: '19%',
        marginBottom: '2%',
        alignItems: 'center'
    },
    checkBoxText: {
        color: Colors.gray_200,
        fontWeight: '500'
    },
    buttonsFlex: {
        flexDirection: 'row'
    },
    buttonBackground: {
        marginHorizontal: '5%',
        marginBottom: '10%',
        width: '40%',
        paddingVertical: 15,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.gray_500,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.gray_500,
    },
    activeButtonBackground: {
        marginHorizontal: '5%',
        marginBottom: '10%',
        width: '40%',
        paddingVertical: 15,
        backgroundColor: Colors.darkPurple,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeButtonText: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.gray_400,
    },
})
export default E_PrescriptionOptions