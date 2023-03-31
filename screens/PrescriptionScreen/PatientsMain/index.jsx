import { Text, View, ScrollView, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../constants/colors';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { E_PrescriptionOptions, HandwrittenOptions } from '../../../components';

const PatientsMain = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState('prescription');
    const [dropdown, setdropdown] = useState('withOutDropDown');
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
                        <View>
                            <Text style={styles.navText}>Rajesh Kanna</Text>
                            <Text>28 Yrs Male</Text>
                        </View>
                    </View>
                    <View style={styles.rightText}>
                        <MaterialIcons
                            name="call"
                            color={Colors.black}
                            style={styles.moreIcon}
                        />
                        <MaterialIcons
                            name="more-vert"
                            color={Colors.black}
                            style={styles.moreIcon}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => setdropdown('withOutDropDown')}>
                    <View >
                        <FontAwesome
                            name="angle-down"
                            color={Colors.black}
                            style={styles.arrowDown}
                        />
                    </View>
                </TouchableOpacity>
            </LinearGradient>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => setToggleCheckBox('prescription')}>
                    <Text style={toggleCheckBox === 'prescription' ? styles.selectedButton : styles.notselectedButton}>E-prescription</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setToggleCheckBox('handwritten')}>
                    <Text style={toggleCheckBox === 'handwritten' ? styles.selectedButton : styles.notselectedButton}>Handwritten</Text>
                </TouchableOpacity>
            </View>
            <View style={toggleCheckBox === 'prescription' ? styles.activeButton : styles.headerButton}>
                {toggleCheckBox === 'prescription' ? (<E_PrescriptionOptions />) : (<HandwrittenOptions />)}
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
        borderBottomWidth: 5,
        width: '100%',
        borderBottomColor: Colors.gray_300,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1
    },
    navHeader: {
        height: 140,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftText: {
        flexDirection: 'row',
        margin: '3%',
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
        marginLeft: '18%',
        flexDirection: 'row'
    },
    moreIcon: {
        fontSize: 35
    },
    arrowDown: {
        justifyContent: 'center',
        fontSize: 35,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: '5%',
        marginTop: '48%',
        width: '90%',
        borderBottomColor: Colors.gray_100,
        borderBottomWidth: 2,
    },

    selectedButton: {
        width: '77%',
        fontSize: 18,
        marginLeft: '10%',
        paddingVertical: 12,
        color: Colors.darkPurple,
        borderBottomColor: Colors.darkPurple,
        borderBottomWidth: 2,
    },
    notselectedButton: {
        marginLeft: '10%',
        fontSize: 18,
        paddingVertical: 12,
        color: Colors.gray_700,
        width: '77%',
    },
})

export default PatientsMain