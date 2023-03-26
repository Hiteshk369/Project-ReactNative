import { Text, View,ScrollView,StyleSheet,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';

import CalendarStrip from 'react-native-slideable-calendar-strip';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

// constructor(props) {
//     super(props);
//     this.state = {
//     selectedStartDate: null,
//     };
//     this.onDateChange = this.onDateChange.bind(this);
//     };
//     onDateChange(date) {
//     this.setState({
//     selectedStartDate: date,
//     });
//     };

const Summary = () => {
    // const { selectedStartDate } = this.state;
    // const startDate = selectedStartDate ? selectedStartDate.toString() :
    // '';
 
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

            <View>
                <Text style={styles.text}>Summary</Text>
                    <View style={styles.doctorCard}>
                        <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}> 
                            <View style={styles.cardText}>
                                <View  style={styles.innerText}>
                                    <Text style={styles.whiteText}>Consults</Text>
                                    <Text style={styles.bigText}>0</Text>
                                    <Text style={styles.rupText}>₹0</Text>
                                </View>
                                <View style={styles.innerText}>
                                    <Text style={styles.whiteText}>Appointments</Text>
                                    <Text style={styles.bigText}>0</Text>
                                    <Text style={styles.rupText}>₹0</Text>
                                </View>
                                <View style={styles.innerText}>
                                    <Text style={styles.whiteText}>Enquiries</Text>
                                    <Text style={styles.bigText}>0</Text>
                                    <Text style={styles.rupText}>₹0</Text>
                                </View>
                            </View>
                                <View style={styles.totalText}>
                                    <Text style={styles.finalText}>Total       ₹0</Text>
                                </View>
                        </LinearGradient>
                    </View>
                    
                    <View style={styles.creditCard}>
                        <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}> 
                        <View style={styles.flexBox}>
                            <Text style={styles.creditText}>Total Amount Credited </Text>
                            <Text style={styles.creditText}>₹0</Text>
                        </View>
                        </LinearGradient>
                    </View>
                    <View style={styles.OverviewText}>
                        <Text style={styles.overviewText}>Profile Overview</Text>
                        <Text style={styles.overviewText}>All</Text>
                        <Entypo style={styles.overviewText} name="chevron-thin-down" color="black" />
                    </View>
                    <View style={styles.scoreCard}>
                        <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}> 
                            <View style={styles.scoreText}>
                                <View  style={styles.innerText}>
                                    <Text style={styles.whiteText}>Patient Experience Score</Text>
                                    <Text style={styles.bigText}>0%</Text>
                                </View>
                                <View style={styles.innerText}>
                                    <Text style={styles.whiteText}>Thanks</Text>
                                    <Text style={styles.bigText}>0</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={styles.OverviewText}>
                        <Text style={styles.overviewText}>Next Payment Scheduled</Text>
                        <Text style={styles.dateText}>Wed,Mar 06,2023</Text>
                    </View>
                    <View style={styles.scoreCard}>
                        <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}> 
                            <View style={styles.scoreText}>
                                <View  style={styles.innerText}>
                                    <Text style={styles.whiteText}>Consultations</Text>
                                    <Text style={styles.zeroText}>0</Text>
                                    <Text style={styles.countText}>Total amount to be transfered:0</Text>
                                </View>
                                <View style={styles.innerText}>
                                    <Text style={styles.whiteText}>Instant Connect</Text>
                                    <Text style={styles.zeroText}>0</Text>
                                    <Text>{" "}</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                    <Text style={styles.text}>Feedback from Patients</Text>
                    <View style={styles.doctorCard}>
                        <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}>
                        <View style={styles.cardText}>
                                <View  style={styles.innerText}>
                                    <Text style={styles.whiteText}>{" "}</Text>
                                    <Text style={styles.whiteText}>{" "}</Text>
                                    <Text style={styles.feedbackText}>Last Week</Text>
                                    <Text style={styles.feedbackText}>Last Month</Text>
                                </View>
                                <View style={styles.innerText}>
                                    <Ionicons
                                        name="heart"
                                        color="green"
                                        style={styles.heartIcon}
                                    />
                                    <Text style={styles.whiteText}>Helpfull</Text>
                                    <Text style={styles.bigText}>0</Text>
                                    <Text style={styles.bigText}>0</Text>
                                </View>
                                <View style={styles.innerText}>
                                    <Ionicons
                                        name="heart"
                                        color="orange"
                                        style={styles.heartIcon}
                                    />
                                    <Text style={styles.whiteText}>Okay</Text>
                                    <Text style={styles.bigText}>0</Text>
                                    <Text style={styles.bigText}>0</Text>
                                </View>
                                <View style={styles.innerText}>
                                    <Ionicons
                                        name="heart"
                                        color="red"
                                        style={styles.heartIcon}
                                    />
                                    <Text style={styles.whiteText}>NotHelpfull</Text>
                                    <Text style={styles.bigText}>0</Text>
                                    <Text style={styles.bigText}>0</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
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
      text:{
        display:'flex',
        alignItems:'center',
        marginTop:10,
        fontSize:18,
        color:'#000000',
        marginLeft:10,
        paddingLeft:10,
      },
      doctorCard:{
        marginTop:10,
        height: 210,
        width: '100%',
      },
      gradient: {
        height: '100%',
        width: '100%',
        // padding: 10,
        borderRadius:10,
    },
    cardText:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:0,
        margin:10,
        borderBottomWidth:0.5,
        borderBottomColor:'#D3D3D3'
    },
    innerText:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:15
    },
    whiteText:{
        color:'#fff',
        fontSize:15
    },
    bigText:{
        color:'#87CEEB',
        margin:10,
        fontSize:30,
    },
    rupText:{
        color:'#fff',
        margin:5,
        fontSize:15,
    },
    totalText:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"flex-end",
    },
    finalText:{
        color:'#fff',
        marginRight:50,
        fontSize:20
    },
    creditCard:{
        marginTop:20,
        marginBottom:10,
        height: 70,
        width: '100%',
      },
      flexBox:{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          textAlign:'center',
          padding:22
      },
    creditText:{
        color:'#fff',
        fontSize:18
    },
    OverviewText:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        textAlign:'center',
        gap:30,
        marginLeft:10,
        padding:10
    },
    overviewText:{
        fontSize:18,
        color:'#000000',
    },
    scoreCard:{
        marginBottom:10,
        height: 110,
        width: '100%',
      },
      dateText:{
        fontSize:10,
        color:"#000"
      },
      scoreText:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:0,
        margin:10,
      },
      zeroText:{
        color:'#87CEEB',
        margin:0,
        marginBottom:0,
        fontSize:30,
      },
      countText:{
        fontSize:10,
        color:"#D3D3D3",
        marginBottom:10
      },
      heartIcon:{
        fontSize:35
      },
      feedbackText:{
        color:'#fff',
        fontSize:15,
        margin:10,
        paddingTop:20,
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
        justifyContent:'flex-end'
    }
        
})

export default Summary

//calender