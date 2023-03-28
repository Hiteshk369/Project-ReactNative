import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const MainAppointment = () => {
    return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
        <View>
            <View style={styles.navigation}>
                <Text style={styles.navHeader}>PRANA</Text>
                <Text style={styles.drHeader}>Docter</Text>
                <View style={styles.navIcons}>   
                    <MaterialIcons
                        name="notifications"
                        color="#fff"
                        style={styles.circleIcon}
                    />
                    <AntDesign
                        name="questioncircle"
                        color="#fff"
                        style={styles.circleIcon}
                    />
                    <MaterialIcons
                        name="settings"
                        color="#fff"
                        style={styles.circleIcon}
                    />
                </View>
            </View>
            <View style={styles.Card}>
                <View style={styles.doctorCard}>
                    <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}> 
                        <View style={styles.box} >
                            <Fontisto
                                name="doctor"
                                color="#fff"
                                style={styles.drIcon}
                            />                        
                        </View>
                        <Text style={styles.boxText}>Dr.Chandra Shekar</Text>
                        <View style={styles.bottomText}>
                            <Text style={styles.numberText}>4 </Text>
                            <Text style={styles.consultedText}>Patients Consulted</Text>
                            <Text style={styles.lineText}>{" "}</Text>
                            <Text style={styles.numbersText}>2 </Text>
                            <Text style={styles.consultedText}>Completed Appoinments</Text>
                        </View>
                    </LinearGradient>
                </View>
            </View>
                <Text style={styles.Text}>Your Appointments</Text>
                <View style={styles.dashButtons}>
                    <TouchableOpacity >
                    <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradientButtons}> 
                            <Text style={styles.dashButton}>Mar 6th</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity >
                    <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradientButtons}> 
                            <Text style={styles.dashButton}>Mar 7th</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity >
                    <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradientButtons}> 
                            <Text style={styles.dashButton}>Mar 8th</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.bigButtons}>
                    <TouchableOpacity >
                        <Text style={styles.dashBigButton}>Week In Review</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.dashBigButton}>Next Up</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity >
                        <Text style={styles.addButton}>Add New +</Text>
                </TouchableOpacity>
                <Text style={styles.Text}>Your Calender</Text>
                <View style={styles.calenderCard}>
                    <Text style={styles.nameCard}>Sundeep R Reddy</Text>
                    <Text style={styles.timeCard}>03:30 PM - 04:30 PM</Text>
                    <MaterialIcons
                        name="calendar-today"
                        color="#000"
                        style={styles.calenderIcon}
                    />
                    <TouchableOpacity >
                            <Text style={styles.cardButton}>Add New +</Text>
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
    navigation:{
        height: 60,
        width: '100%',
        backgroundColor:'#1e1262',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
      },
      drHeader:{
        fontSize:20,
        color: '#fff',
        paddingLeft:95,
        paddingRight:50,
      },
      navHeader:{
        fontSize:15,
        color:'#BEFF33',
        paddingLeft:15,
      },
      navIcons:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
      },
      circleIcon: {
        padding:8,
        fontSize: 23,
      },
      drIcon:{
        padding:16,
        display:'flex',
        alignItems:'center',
        fontSize: 62,

      },
      Card:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      },
        gradient: {
            height: '100%',
            width: '100%',
            padding: 10,
            borderRadius:30,
            display:'flex',
            alignItems:'center',
        },
      doctorCard:{
        marginTop:20,
        height: 220,
        width: 350,
      },
      box: {
        height: 90,
        width: 90,
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 20,
        marginBottom: 15,
        borderRadius: 100,
      },
      boxText:{
        color:'#fff',
        fontSize:16,
        marginBottom: 10,
      },
      bottomText:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
      },
      numberText:{
        color:'#fff',
        fontSize:35,
      },
      lineText:{
        textAlign:'center',
        fontSize:35,
        marginLeft:30,
        borderLeftWidth:2,
        borderLeftColor: '#D3D3D3',
      },
      numbersText:{
        color:'#fff',
        paddingLeft:10,
        fontSize:35,
      },
      consultedText:{
        color:'#fff',
        fontSize:10,
        paddingRight:10,
      },
      Text:{
        color:'#000',
        display:'flex',
        textAlign:'center',
        margin:15,
        fontSize:18
      },
      dashButton:{
        color:'#fff',
        height:70,
        width:70,
        display:'flex',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center'
      },
      dashButtons:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:20,
        padding:5,
      },
      gradientButtons:{
        padding: 10,
        borderRadius:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
      },
      bigButtons:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:30,
        padding:20,
        margin:10
      },
      dashBigButton:{
        color:'#000',
        borderRadius:20,
        backgroundColor:'#fff',
        elevation:11,
        height:130,
        width:130,
        padding:15,
        display:'flex',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center'
      },
      addButton:{
        color:'#fff',
        borderRadius:25,
        width:'30%',
        display:'flex',
        backgroundColor:'#1e1262',
        textAlign:'center',
        marginLeft:130,
        padding:8,
        fontSize:15
      },
      calenderCard:{
        display:'flex',
        alignItems:'center',
        width:'92%',
        height:250,
        borderRadius:20,
        margin:15,
        borderWidth:1.5,
        borderColor:'#D3D3D3'
      },
      nameCard:{
        color:'#000',
        fontSize:18,
        marginTop:10
      },
      timeCard:{
        color:'#000',
        fontWeight:300,
        fontSize:12,
      },
      calenderIcon:{
        fontSize:150,
      },
      cardButton:{
        color:'#fff',
        borderRadius:25,
        width:'30%',
        backgroundColor:'#1e1262',
        paddingHorizontal:15,
        paddingVertical:10,
        fontSize:15
      },
})
export default MainAppointment

//calender