import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {Colors} from '../../../constants/colors';
import {WeekCalendar} from '../../../components';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SummaryAppointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.notSelectedButton}>
          <FontAwesome style={styles.notSelectedButtonText} name="circle-o" />
          <Text style={styles.notSelectedButtonText}>DASHBOARD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectedButton}>
          <FontAwesome style={styles.selectedButtonText} name="circle-o" />
          <Text style={styles.selectedButtonText}>SUMMARY</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headText}>
        <Text style={styles.boldText}>
          Green Health clinic, Kukatpally Housing Board
        </Text>
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
        <WeekCalendar date={date} onChange={newDate => setDate(newDate)} />
      </View>
      <View style={styles.appText}>
        <Text style={styles.text}>No Appointments for Sun, 05 March 2023</Text>
      </View>
      <View style={styles.bookButtonsContainer}>
        <View style={styles.appButtons}>
          <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.appButtonText}>Block Calender</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.appButtonText}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  mainContainer: {
    position: 'relative',
    height: '100%',
  },
  container: {
    backgroundColor: Colors.white,
    marginTop: 25,
    marginHorizontal: 10,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrayBg,
  },
  notSelectedButton: {
    width: '50%',
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingTop: 16,
    paddingBottom: 10,
  },
  notSelectedButtonText: {
    color: Colors.lightGrayText,
    fontSize: 16,
  },
  selectedButton: {
    width: '50%',
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderBottomColor: Colors.darkPurple,
    borderBottomWidth: 2,
    paddingTop: 16,
    paddingBottom: 10,
  },
  selectedButtonText: {
    color: Colors.darkPurple,
    fontWeight: 'bold',
    fontSize: 16,
  },
  headText: {
    paddingHorizontal: 15,
    padding: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrayBg,
    color: Colors.black,
  },
  boldText: {
    fontWeight: '500',
    color: Colors.black,
  },
  addrText: {
    fontSize: 12,
    marginTop: 5,
  },
  calenderText: {
    color: Colors.black,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 25,
    marginTop: 10,
  },
  appText: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGrayBg,
    borderBottomColor: Colors.lightGrayBg,
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    fontSize: 14,
    color: Colors.black,
    marginLeft: 10,
    paddingLeft: 10,
    fontWeight: '500',
  },
  bookButtonsContainer: {
    position: 'absolute',
    bottom: 15,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGrayBg,
    width: '100%',
  },
  appButtons: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appButtonText: {
    paddingTop: 10,
    color: Colors.darkPurple,
    fontSize: 14,
    fontWeight: '700',
  },
});


export default SummaryAppointment;
