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
        <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}>
          <View style={styles.navBackground}>
            {/* <View style={styles.leftText}> */}
            <MaterialIcons
              name="arrow-back-ios"
              color="#fff"
              style={styles.leftText}
            />
            <Text style={styles.leftText}>Add Appointment</Text>
            {/* </View> */}
            <View style={styles.divText}>
              <FontAwesome
                name="video-camera"
                color="#fff"
                style={styles.rightText}
              />
              <Text style={styles.rightText}>Video Consult</Text>
              <MaterialIcons
                name="toggle-off"
                color="#fff"
                style={styles.toggleIcon}
              />
            </View>
          </View>
        </LinearGradient>
        <View style={styles.nameInput}>
          <View style={styles.nameInputHolder}>
            <TextInput
              placeholderTextColor={'#d3d3d3'}
              style={styles.inputField}
              placeholder="First name"
            />
          </View>
          <View style={styles.nameInputHolder}>
            <TextInput
              placeholderTextColor={'#d3d3d3'}
              style={styles.inputField}
              placeholder="Last name"
            />
          </View>
        </View>
        <View style={styles.nameInput}>
          <View style={styles.nameInputHolder}>
            <TextInput
              placeholderTextColor={'#d3d3d3'}
              style={styles.inputField}
              placeholder="Phone Number"
            />
          </View>
          <View style={styles.nameInputHolder}>
            <TextInput
              placeholderTextColor={'#d3d3d3'}
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
              placeholderTextColor={'#d3d3d3'}
              placeholder="YYYY|MM|DD"
            />
            <AntDesign
              name="calendar"
              color="#4d0d7e"
              style={styles.yearsDown}
            />
          </View>
          <View style={styles.nameInputHolder}>
            <TextInput
              placeholderTextColor={'#d3d3d3'}
              placeholder="Age          Years"
            />
            <FontAwesome
              name="angle-down"
              color="#4d0d7e"
              style={styles.yearsDown}
            />
          </View>
        </View>
        <View style={styles.nameInput}>
          <View style={styles.bigInputHolder}>
            <TextInput
              placeholderTextColor={'#d3d3d3'}
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
              color="#4d0d7e"
              style={styles.clockIcon}
            />
            <Text style={styles.downText}>Later</Text>
            <FontAwesome
              name="angle-down"
              color="#4d0d7e"
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
              tintColors={{true: '#4d0d7e', false: '#afafaf'}}
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
              tintColors={{true: '#4d0d7e', false: '#afafaf'}}
              onChange={() => setToggleCheckBox(!toggleCheckBox)}
              value={toggleCheckBox}
            />
            <Text style={styles.textColor}>SMS</Text>
            <MaterialIcons
              name="message"
              color="#000"
              style={styles.clockIcon}
            />
          </View>
          <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.buttonText}>Save & Proceed</Text>
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
    color: '#fff',
  },
  rightText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '5%',
    fontSize: 16,
    color: '#fff',
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
    color: '#606060',
  },
  nameInputHolder: {
    height: 42,
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#afafaf',
    borderWidth: 1,
    borderRadius: 8,
    color: '#606060',
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
    color: '#000',
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
    borderColor: '#afafaf',
    borderWidth: 1,
    borderRadius: 8,
    color: '#606060',
    paddingLeft: '3%',
    margin: '5%',
    marginBottom: '0%',
  },
  appointmentText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
    backgroundColor: '#F7EEFF',
    padding: '2%',
    paddingHorizontal: '5%',
    // borderRadius:20,
    marginLeft: '2%',
    marginRight: '2%',
  },
  laterText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: '2%',
    borderRadius: 10,
  },
  clockIcon: {
    fontSize: 22,
    marginRight: '3%',
  },
  timeText: {
    fontSize: 18,
    color: '#000',
  },
  downText: {
    fontSize: 15,
    color: '#000',
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
    borderBottomColor: '#D3D3D3',
    gap: 30,
  },
  datesText: {
    fontSize: 17,
    color: '#000',
    fontWeight: '400',
  },
  colorText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#4d0d7e',
    paddingBottom: '1%',
    borderBottomWidth: 4,
    borderBottomColor: '#4d0d7e',
  },
  appText: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: '#D3D3D3',
  },
  appTimeText: {
    color: '#000',
    fontSize: 14,
  },
  appointmenttimeText: {
    color: '#4d0d7e',
    fontSize: 14,
  },
  notifyContainer: {
    padding: '3%',
  },
  notifyHeadText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: '5%',
  },
  notifyFlexText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:'2%'
  },
  textColor: {
    color: '#000',
    marginRight: '2%',
  },
  buttonBackground: {
    margin: 5,
    width: '98%',
    paddingVertical: 15,
    backgroundColor: '#4d0d7e',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
});
export default AddAppointment;

//Date Picker
//Horizontal scrol
//check box
