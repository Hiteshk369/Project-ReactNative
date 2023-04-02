import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {WeekCalendar} from '../../../components';
import {Pressable} from 'react-native';
import {windowHeight, windowWidth} from '../../../FakeData/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ConsultationCard} from '../../../components';
import {appointmentData} from '../../../constants/appointmentData';

const TodaysAppointments = () => {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState(date.getDate());
  useEffect(() => {
    setDay(date.getDate());
    console.log(day);
  }, [date, day]);

  const [active, setActive] = useState('dashboard');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={[Colors.darkPurple, Colors.lightPurple]}
          style={styles.gradient}>
          <View style={styles.gradientContent}>
            <Text style={styles.helloText}>Hey Umar !</Text>
            <View style={styles.calenderContainer}>
              <View style={styles.monthContainer}>
                <Text style={styles.monthHeading}>Apr - 2023</Text>
                <Text style={styles.appointmentText}>Appointments: 0</Text>
              </View>
              <View style={styles.weekCalendar}>
                <WeekCalendar
                  date={date}
                  onChange={newDate => setDate(newDate)}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.mainLayout}>
          <View style={styles.headingContainer}>
            <Text style={styles.todaysAppointmentsText}>
              Today's Appointments
            </Text>
          </View>
          <View style={styles.buttonGroup}>
            <Pressable
              onPress={() => setActive('dashboard')}
              style={
                active === 'dashboard'
                  ? styles.selectedButton
                  : styles.notSelectedButton
              }>
              <Text
                style={
                  active === 'dashboard'
                    ? styles.selectedButtonText
                    : styles.notSelectedButtonText
                }>
                Appointments
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setActive('summary')}
              style={
                active === 'summary'
                  ? styles.selectedButton
                  : styles.notSelectedButton
              }>
              <Text
                style={
                  active === 'summary'
                    ? styles.selectedButtonText
                    : styles.notSelectedButtonText
                }>
                Patients
              </Text>
            </Pressable>
          </View>
          <ScrollView
            style={{flexShrink: 0, flexGrow: 0}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.horizontalScrollContainer}>
              <Pressable style={styles.scrollButtonContainer}>
                <Text style={styles.scrollButtonText}>All 0</Text>
              </Pressable>
              <Pressable style={styles.scrollButtonContainer}>
                <Text style={styles.scrollButtonText}>In Progress 0</Text>
              </Pressable>
              <Pressable style={styles.scrollButtonContainer}>
                <Text style={styles.scrollButtonText}>Completed 0</Text>
              </Pressable>
              <Pressable style={styles.scrollButtonContainer}>
                <Text style={styles.scrollButtonText}>Cancelled 0</Text>
              </Pressable>
              <Pressable style={styles.scrollButtonContainer}>
                <Text style={styles.scrollButtonText}>Rescheduled 0</Text>
              </Pressable>
              <Pressable style={styles.scrollButtonContainer}>
                <Text style={styles.scrollButtonText}>Upcoming 0</Text>
              </Pressable>
            </View>
          </ScrollView>
          <View style={styles.appointmentsContainer}>
            {appointmentData.map(
              data =>
                data.day === day && (
                  <View
                    style={styles.consultationCardContainer}
                    key={data.whatsappNumber}>
                    <ConsultationCard
                      appointmentStartTime={data.appointmentStartTime}
                      appointmentEndTime={data.appointmentEndTime}
                      name={data.name}
                      age={data.age}
                      gender={data.gender}
                      whatsappNumber={data.whatsappNumber}
                    />
                  </View>
                ),
            )}

            <TouchableOpacity style={styles.addAppointmentButton}>
              <View style={styles.rowContainer}>
                <AntDesign name="pluscircle" style={styles.plusIcon} />
                <Text style={styles.addAppointmentButtonText}>
                  Add Appointment
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Colors.white,
  },
  gradient: {
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  gradientContent: {
    margin: '5%',
  },
  helloText: {
    color: Colors.white,
    fontWeight: '400',
  },
  calenderContainer: {
    flexDirection: 'column',
    paddingVertical: '4%',
  },
  monthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  monthHeading: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '500',
  },
  appointmentText: {
    fontSize: 11,
    marginLeft: 40,
  },
  weekCalendar: {
    marginTop: 8,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  mainLayout: {
    width: '100%',
    height: windowHeight - 200,
  },
  headingContainer: {
    marginTop: '2%',
    paddingHorizontal: '5%',
    width: '100%',
    height: '5%',
  },
  todaysAppointmentsText: {
    color: Colors.black,
    fontWeight: '500',
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
    backgroundColor: Colors.purple_100,
    marginHorizontal: '1%',
    marginBottom: '1%',
  },
  selectedButton: {
    flexDirection: 'row',
    backgroundColor: Colors.darkPurple,
    padding: '2%',
    width: '50%',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  notSelectedButton: {
    flexDirection: 'row',
    backgroundColor: Colors.purple_100,
    padding: '2%',
    borderRadius: 10,
    width: '50%',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  selectedButtonText: {
    fontSize: 15,
    color: Colors.white,
  },
  notSelectedButtonText: {
    fontSize: 15,
    color: Colors.black,
  },
  horizontalScrollContainer: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    gap: 5,
    marginBottom: 10,
    height: '10%',
  },
  scrollButtonText: {
    color: Colors.white,
  },
  scrollButtonContainer: {
    backgroundColor: Colors.darkPurple,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 4,
    height: 30,
  },
  consultationCardContainer: {
    width: '100%',
    height: '20%',
    backgroundColor: Colors.white,
    borderBottomColor: Colors.slate_300,
    borderBottomWidth: 1,
    borderTopColor: Colors.slate_300,
    borderTopWidth: 1,
    elevation: 2,
  },
  appointmentsContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'relative',
    gap: 10,
  },
  appointmentsContainerFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    gap: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  addAppointmentButton: {
    position: 'absolute',
    backgroundColor: Colors.darkPurple,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    bottom: '10%',
    right: '4%',
  },
  addAppointmentButtonText: {
    color: Colors.white,
  },
  plusIcon: {
    fontSize: 18,
    color: Colors.white,
  },
});

export default TodaysAppointments;
