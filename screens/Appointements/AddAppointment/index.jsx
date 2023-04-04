import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import CheckBox from '@react-native-community/checkbox';

const AddAppointment = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  // constructor(props){
  //     super(props);
  //     this.state = {date:"2016-05-15"}
  //   }

  return (
    <ScrollView>
      <View>
        <LinearGradient
          colors={[Colors.darkPurple, Colors.lightPurple]}
          style={styles.gradient}>
          <View style={styles.navBackground}>
            {/* <View style={styles.leftText}> */}
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.white}
              style={styles.leftText}
            />
            <Text style={styles.leftText}>Add Appointment</Text>
            {/* </View> */}
            <View style={styles.divText}>
              <FontAwesome
                name="video-camera"
                color={Colors.white}
                style={styles.rightText}
              />
              <Text style={styles.rightText}>Video Consult</Text>
              <MaterialIcons
                name="toggle-off"
                color={Colors.white}
                style={styles.toggleIcon}
              />
            </View>
          </View>
        </LinearGradient>
        <View style={styles.nameInput}>
          <View style={styles.nameInputHolder}>
            <TextInput
              placeholderTextColor={Colors.gray_200}
              style={styles.inputField}
              placeholder="First name"
            />
          </View>
          <View style={styles.nameInputHolder}>
            <TextInput
              placeholderTextColor={Colors.gray_200}
              style={styles.inputField}
              placeholder="Last name"
            />
          </View>
        </View>
        <View style={styles.nameInput}>
          <View style={styles.nameInputHolder}>
            <TextInput
              placeholderTextColor={Colors.gray_200}
              style={styles.inputField}
              placeholder="Phone Number"
            />
          </View>
          <View style={styles.nameInputHolder}>
            <TextInput
              placeholderTextColor={Colors.gray_200}
              style={styles.inputField}
              placeholder="Male|Female|Other"
            />
          </View>
        </View>
        <View style={styles.headerInput}>
          <Text style={styles.headerInput}>DOB</Text>
          <Text style={styles.headerInput}>Age</Text>
        </View>
        <View style={styles.nameInput}>
          <View style={styles.nameInputHolder}>
            <TextInput
              placeholderTextColor={Colors.gray_200}
              placeholder="YYYY|MM|DD"
            />
            <AntDesign
              name="calendar"
              color={Colors.lightPurple}
              style={styles.yearsDown}
            />
          </View>
          <View style={styles.nameInputHolder}>
            <TextInput
              placeholderTextColor={Colors.gray_200}
              placeholder="Age{'          '}Years"
            />
            <FontAwesome
              name="angle-down"
              color={Colors.lightPurple}
              style={styles.yearsDown}
            />
          </View>
        </View>
        <View style={styles.nameInput}>
          <View style={styles.bigInputHolder}>
            <TextInput
              placeholderTextColor={Colors.gray_200}
              style={styles.inputField}
              placeholder="Chief Complaints"
            />
          </View>
        </View>
        <View style={styles.appointmentText}>
          <Text style={styles.timeText}>Appointment Time:</Text>
          <TouchableOpacity style={styles.laterText}>
            <AntDesign
              name="clockcircleo"
              color={Colors.lightPurple}
              style={styles.clockIcon}
            />
            <Text style={styles.downText}>Later</Text>
            <FontAwesome
              name="angle-down"
              color={Colors.lightPurple}
              style={styles.downIcon}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollDate}>
          <View style={styles.dateText}>
            <Text style={styles.colorText}>Today</Text>
            <Text style={styles.datesText}>Toorrow</Text>
            <Text style={styles.datesText}>5th Mar</Text>
            <Text style={styles.datesText}>6th Mar</Text>
            <Text style={styles.datesText}>7th Mar</Text>
          </View>
        </ScrollView>
        <View style={styles.appText}>
          <Text style={styles.appTimeText}>
            Select a time to book an appointment
          </Text>
          <Text style={styles.appointmenttimeText}>11:21 AM</Text>
        </View>
        <View style={styles.notifyContainer}>
          <Text style={styles.notifyHeadText}>Notify Patient via</Text>
          <View style={styles.notifyFlexText}>
            <CheckBox
              tintColors={{true: Colors.lightPurple, false: Colors.slate_300}}
              onChange={() => setToggleCheckBox(!toggleCheckBox)}
              value={toggleCheckBox}
            />
            <Text style={styles.textColor}>WhatsApp</Text>
            <FontAwesome
              name="whatsapp"
              color="green"
              style={styles.clockIcon}
            />
            <CheckBox
              tintColors={{true: Colors.lightPurple, false: Colors.slate_300}}
              onChange={() => setToggleCheckBox(!toggleCheckBox)}
              value={toggleCheckBox}
            />
            <Text style={styles.textColor}>SMS</Text>
            <MaterialIcons
              name="message"
              color={Colors.black}
              style={styles.clockIcon}
            />
          </View>
          <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.buttonText}>Save Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
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
    justifyContent: 'flex-end',
    marginLeft: '5%',
    fontSize: 16,
    color: Colors.white,
  },
  rightText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '5%',
    fontSize: 16,
    color: Colors.white,
  },
  toggleIcon: {
    alignItems: 'center',
    marginLeft: '2%',
    marginTop: '2%',
    fontSize: 35,
  },
  divText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '6%',
  },
  inputField: {
    width: '100%',
    color: Colors.gray_700,
  },
  nameInputHolder: {
    height: 42,
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.slate_300,
    borderWidth: 1,
    borderRadius: 8,
    color: Colors.gray_700,
    paddingLeft: '3%',
    margin: '5%',
    marginBottom: '0%',
  },
  nameInput: {
    display: 'flex',
    flexDirection: 'row',
    width: '99%',
  },
  headerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 130,
    color: Colors.black,
    margin: '3%',
    marginBottom: '0%',
    fontSize: 20,
  },
  yearsDown: {
    fontSize: 25,
    marginLeft: '10%',
  },
  bigInputHolder: {
    height: 42,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.slate_300,
    borderWidth: 1,
    borderRadius: 8,
    color: Colors.gray_700,
    paddingLeft: '3%',
    margin: '5%',
    marginBottom: '0%',
  },
  appointmentText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
    backgroundColor: Colors.purple_100,
    padding: '2%',
    paddingHorizontal: '5%',
    marginLeft: '2%',
    marginRight: '2%',
  },
  laterText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    padding: '2%',
    borderRadius: 10,
  },
  clockIcon: {
    fontSize: 22,
    marginRight: '3%',
  },
  timeText: {
    fontSize: 18,
    color: Colors.black,
  },
  downText: {
    fontSize: 15,
    color: Colors.black,
  },
  downIcon: {
    fontSize: 25,
    marginLeft: '3%',
  },
  dateText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray_200,
    gap: 30,
  },
  datesText: {
    fontSize: 17,
    color: Colors.black,
    fontWeight: '400',
  },
  colorText: {
    fontSize: 17,
    fontWeight: '800',
    color: Colors.lightPurple,
    paddingBottom: '1%',
    borderBottomWidth: 4,
    borderBottomColor: Colors.lightPurple,
  },
  appText: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray_200,
  },
  appTimeText: {
    color: Colors.black,
    fontSize: 14,
  },
  appointmenttimeText: {
    color: Colors.lightPurple,
    fontSize: 14,
  },
  notifyContainer: {
    padding: '3%',
  },
  notifyHeadText: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: '5%',
  },
  notifyFlexText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2%',
  },
  textColor: {
    color: Colors.black,
    marginRight: '2%',
  },
  buttonBackground: {
    margin: 5,
    width: '98%',
    paddingVertical: 15,
    backgroundColor: Colors.lightPurple,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.white,
  },
});
export default AddAppointment;

//Date Picker
//Horizontal scrol
//check box
