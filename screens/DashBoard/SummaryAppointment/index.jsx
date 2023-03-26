import { Text, View, StyleSheet,ScrollView,TouchableOpacity  } from 'react-native'
import React, { Component } from 'react'

import CalendarStrip from 'react-native-slideable-calendar-strip';
import Entypo from 'react-native-vector-icons/Entypo';

const SummaryAppointment = ()=>{
return (
    <ScrollView>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonBackground}>
            <Text >DASHBOARD</Text>
            </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBackground}>
                <Text style={styles.buttonText}>SUMMARY</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.headText}>
            <Text style={styles.boldText}>Green Helth clinic, Kukatpally Housing Board</Text>
                <Text style={styles.addrText}>Kukatpally Housing Board</Text>
            </View>
            <View style={styles.calenderText}>
                <Text>March 2023</Text>
                <Entypo name="chevron-thin-down" color="black" />
                <Text>Today</Text>
                <Text>Week</Text>
                <Text>Custom</Text>
            </View>
                
            <View style={styles.container}>
                <CalendarStrip isEnglish showWeekNumber showEnglishLuna
                        // selectedDate={this.state.selectedDate} onPressDate={(date) => { this.setState({ selectedDate: date });
                        // }}
                        // onPressGoToday={(today) => { this.setState({ selectedDate: today });
                        // }}
                        // onSwipeDown={() => { alert('onSwipeDown');
                        // }}
                    markedDate={['2020-03-04', '2020-03-15', '2020-03-04', '2020-03-01']}
                    weekStartsOn={1}
                />
            </View>
            <View style={styles.appText}>
                <Text style={styles.text}>No Appointments for Sun,05 March 2023</Text>
            </View>
            <View style={styles.appButtons}>
                    <TouchableOpacity style={styles.buttonBackground}>
                        <Text style={styles.appButtonText}>Block Calender</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBackground}>
                        <Text style={styles.appButtonText}>Book Appointment</Text>
                    </TouchableOpacity>
            </View>

    </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 25,
    },
    buttons:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth:1,
        borderBottomColor:'#D3D3D3'
      },
      buttonBackground: {
        margin: 5,
        width: '47%',
        paddingVertical: 12,
        backgroundColor: '#fff',     
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText:{
        color:'#1e1262',
        fontWeight:'bold',
        fontSize:17
      },
      headText:{
        paddingHorizontal:15,
        margin:10,
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#D3D3D3',
        color:'#000000'
      },
      boldText:{
        fontWeight:'500',
        color:'#000000'
      },
      addrText:{
        fontSize:12,
        marginTop:5,
      },
      calenderText:{
        color:'#000',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:25
      },
      appText:{
        marginBottom:10,
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#D3D3D3'
      },
      text:{
        display:'flex',
        alignItems:'center',
        marginTop:10,
        fontSize:15,
        color:'#000000',
        marginLeft:10,
        paddingLeft:10,
      },
      buttons:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      appButtons:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:425

      },
      appButtonText:{
        color:'#1e1262',
        fontSize:12
      },
})

export default SummaryAppointment