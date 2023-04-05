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
      <View style={styles.calenderContainer}>
        <Text style={styles.calenderText}>March 2023</Text>
        <Entypo name="chevron-thin-down" color={Colors.black} />
        <Text style={styles.calenderText}>Today</Text>
        <Text style={styles.calenderText}>Week</Text>
        <Text style={styles.calenderText}>Custom</Text>
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
    backgroundColor: Colors.white,
  },
  container: {
    backgroundColor: Colors.white,
    marginTop: '5%',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_200,
  },
  notSelectedButton: {
    width: '50%',
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: '3%',
  },
  notSelectedButtonText: {
    color: Colors.gray_500,
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
    paddingVertical: '3%',
  },
  selectedButtonText: {
    color: Colors.darkPurple,
    fontWeight: 'bold',
    fontSize: 16,
  },
  headText: {
    paddingHorizontal: '3%',
    margin: '2%',
    paddingBottom: '2%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_200,
    color: Colors.black,
  },
  boldText: {
    fontWeight: '500',
    color: Colors.black,
  },
  addrText: {
    fontSize: 12,
    marginTop: '1%',
  },
  calenderContainer: {
    color: Colors.black,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  calenderText: {
    color: Colors.black,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1%',
    fontSize: 18,
    color: Colors.black,
    marginLeft: '5%',
    fontWeight: '600',
  },
  appText: {
    marginBottom: '5%',
    paddingBottom: '3%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: Colors.gray_200,
    borderBottomColor: Colors.gray_200,
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '3%',
    fontSize: 14,
    color: Colors.black,
    marginLeft: '5%',
    fontWeight: '500',
  },
  bookButtonsContainer: {
    position: 'absolute',
    bottom: 15,
    borderTopWidth: 1,
    borderTopColor: Colors.gray_200,
    width: '100%',
  },
  appButtons: {
    marginHorizontal: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '3%',
  },
  appButtonText: {
    // paddingVertical: '4%',
    // marginVertical: '4%',
    color: Colors.darkPurple,
    fontSize: 14,
    fontWeight: '700',
  },
});

export default SummaryAppointment;
