import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../constants/colors';

const timeOptions = [
  {
    id: 1,
    name: '10 Min',
  },
  {
    id: 2,
    name: '30 Min',
  },
  {
    id: 3,
    name: '1 hr',
  },
];

const fromOptions = [
  {
    id: 1,
    name: '01:00 Am',
  },
  {
    id: 2,
    name: '02:00 Am',
  },
  {
    id: 3,
    name: '03:00 Am',
  },
  {
    id: 4,
    name: '04:00 Am',
  },
  {
    id: 5,
    name: '05:00 Am',
  },
  {
    id: 6,
    name: '06:00 Am',
  },
  {
    id: 7,
    name: '07:00 Am',
  },
  {
    id: 8,
    name: '08:00 Am',
  },
  {
    id: 9,
    name: '09:00 Am',
  },
  {
    id: 10,
    name: '10:00 Am',
  },
  {
    id: 11,
    name: '11:00 Am',
  },
  {
    id: 12,
    name: '12:00 Am',
  },
];

const toOptions = [
  {
    id: 1,
    name: '01:00 Am',
  },
  {
    id: 2,
    name: '02:00 Am',
  },
  {
    id: 3,
    name: '03:00 Am',
  },
  {
    id: 4,
    name: '04:00 Am',
  },
  {
    id: 5,
    name: '05:00 Am',
  },
  {
    id: 6,
    name: '06:00 Am',
  },
  {
    id: 7,
    name: '07:00 Am',
  },
  {
    id: 8,
    name: '08:00 Am',
  },
  {
    id: 9,
    name: '09:00 Am',
  },
  {
    id: 10,
    name: '10:00 Am',
  },
  {
    id: 11,
    name: '11:00 Am',
  },
  {
    id: 12,
    name: '12:00 Am',
  },
];
const ClinicAppointmentDetails = () => {
  const [timeDropdown, setTimeDropdown] = useState(false);
  const [timeOption, setTimeOption] = useState('15 mins');
  const [toggleIcon, setToggleIcon] = useState(false);
  const [toggleIcon2, setToggleIcon2] = useState(false);
  const [fromDropdown, setFromDropdown] = useState(false);
  const [fromOption, setFromOption] = useState('Open 24Hrs');
  const [toDropdown, setToDropdown] = useState(false);
  const [toOption, setToOption] = useState('Open 24Hrs');
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>In-Clinic Timings</Text>
          <MaterialIcons
            name="add-circle"
            color={Colors.white}
            style={styles.circleNavIcon}
          />
          <Text style={styles.HeaderText}>Add Clinic</Text>
        </View>
        <View style={styles.Card}>
          <View style={styles.bgWhite}>
            <View style={styles.cardTopTextFlex}>
              <Text style={styles.cardTopText}>Green-health clinic</Text>
              <Entypo
                name="chevron-thin-up"
                color={Colors.black}
                style={styles.upIcon}
              />
            </View>
            <View style={styles.onlineFlexText}>
              <Text style={styles.onlineText}>
                Enabled for receving appointments
              </Text>
              <TouchableOpacity onPressIn={() => setToggleIcon(!toggleIcon)}>
                {toggleIcon ? (
                  <MaterialIcons
                    name="toggle-on"
                    color={Colors.blue_500}
                    style={styles.toggleTopIcon}
                  />
                ) : (
                  <MaterialIcons
                    name="toggle-off"
                    color={Colors.black}
                    style={styles.toggleTopIcon}
                  />
                )}
              </TouchableOpacity>
            </View>
            <Text style={styles.inputsHeader}>Appointment Duration</Text>
            <View style={styles.cityInputHolder}>
              <TouchableOpacity
                style={styles.rightDropDown}
                onPressIn={() => setTimeDropdown(!timeDropdown)}>
                <Text style={styles.textInput}>
                  {'  '}
                  {timeOption}
                </Text>
                {timeDropdown ? (
                  <Entypo
                    name="chevron-thin-up"
                    color="black"
                    style={styles.upIcon}
                  />
                ) : (
                  <Entypo
                    name="chevron-thin-down"
                    color="black"
                    style={styles.upIcon}
                  />
                )}
              </TouchableOpacity>
            </View>
            {timeDropdown ? (
              <View style={styles.dropDownArea}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <FlatList
                    data={timeOptions}
                    renderItem={({item, index}) => {
                      return (
                        <TouchableOpacity
                          style={styles.dropDownText}
                          onPressIn={() => {
                            setTimeOption(item.name);
                            setTimeDropdown(false);
                          }}>
                          <Text style={styles.dropDownTextColor}>
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </ScrollView>
              </View>
            ) : null}
            <View style={styles.bgShadeHeaderContainer}>
              <Text style={styles.bgShadeHeader}>From</Text>
              <Text style={styles.bgShadeHeader}>To</Text>
            </View>
            <View style={styles.fromTwoInputHolder}>
              <View style={styles.fromInputHolder}>
                <TouchableOpacity
                  style={styles.rightDropDown}
                  onPressIn={() => setFromDropdown(!fromDropdown)}>
                  <Text style={styles.textLightInput}>
                    {'  '}
                    {fromOption}
                  </Text>
                  {fromDropdown ? (
                    <Entypo name="chevron-thin-up" color="black" />
                  ) : (
                    <Entypo name="chevron-thin-down" color="black" />
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.fromInputHolder}>
                <TouchableOpacity
                  style={styles.rightDropDown}
                  onPressIn={() => setToDropdown(!toDropdown)}>
                  <Text style={styles.textLightInput}>
                    {'  '}
                    {toOption}
                  </Text>
                  {toDropdown ? (
                    <Entypo name="chevron-thin-up" color="black" />
                  ) : (
                    <Entypo name="chevron-thin-down" color="black" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            {fromDropdown ? (
              <View style={styles.fromDropDownArea}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <FlatList
                    data={fromOptions}
                    renderItem={({item, index}) => {
                      return (
                        <TouchableOpacity
                          style={styles.fromDropDownText}
                          onPressIn={() => {
                            setFromOption(item.name);
                            setFromDropdown(false);
                          }}>
                          <Text style={styles.fromDropDownTextColor}>
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </ScrollView>
              </View>
            ) : null}
            {toDropdown ? (
              <View style={styles.toDropDownArea}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <FlatList
                    data={toOptions}
                    renderItem={({item, index}) => {
                      return (
                        <TouchableOpacity
                          style={styles.toDropDownText}
                          onPressIn={() => {
                            setToOption(item.name);
                            setToDropdown(false);
                          }}>
                          <Text style={styles.toDropDownTextColor}>
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </ScrollView>
              </View>
            ) : null}
            <View style={styles.daysFlexText}>
              <Text style={styles.LeftText}>Days of Practice</Text>
              <Text style={styles.RightText}>Apply To All</Text>
              <TouchableOpacity onPressIn={() => setToggleIcon2(!toggleIcon2)}>
                {toggleIcon2 ? (
                  <MaterialIcons
                    name="toggle-on"
                    color={Colors.blue_500}
                    style={styles.toggleTopIcon}
                  />
                ) : (
                  <MaterialIcons
                    name="toggle-off"
                    color={Colors.black}
                    style={styles.toggleTopIcon}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.daysRow}>
              <View style={styles.daysColumn}>
                <View style={styles.daysRowText}>
                  <MaterialIcons
                    name="check-circle"
                    color={Colors.lightPurple}
                    style={styles.circleIcon}
                  />
                  <Text style={styles.daysText}>Monday</Text>
                </View>
                <View style={styles.daysRowText}>
                  <MaterialIcons
                    name="check-circle"
                    color={Colors.lightPurple}
                    style={styles.circleIcon}
                  />
                  <Text style={styles.daysText}>Tuesday</Text>
                </View>
                <View style={styles.daysRowText}>
                  <MaterialIcons
                    name="check-circle"
                    color={Colors.lightPurple}
                    style={styles.circleIcon}
                  />
                  <Text style={styles.daysText}>Wednesday</Text>
                </View>
                <View style={styles.daysRowText}>
                  <MaterialIcons
                    name="check-circle"
                    color={Colors.lightPurple}
                    style={styles.circleIcon}
                  />
                  <Text style={styles.daysText}>Thursday</Text>
                </View>
              </View>
              <View style={styles.daysColumn}>
                <View style={styles.daysRowText}>
                  <MaterialIcons
                    name="check-circle"
                    color={Colors.lightPurple}
                    style={styles.circleIcon}
                  />
                  <Text style={styles.daysText}>Friday</Text>
                </View>
                <View style={styles.daysRowText}>
                  <MaterialIcons
                    name="check-circle"
                    color={Colors.lightPurple}
                    style={styles.circleIcon}
                  />
                  <Text style={styles.daysText}>Saturday</Text>
                </View>
                <View style={styles.daysRowText}>
                  <MaterialIcons
                    name="check-circle"
                    color={Colors.lightPurple}
                    style={styles.circleIcon}
                  />
                  <Text style={styles.daysText}>Sunday</Text>
                </View>
              </View>
            </View>
            <View style={styles.additionalDaysText}>
              <Ionicons
                name="add-circle-outline"
                color={Colors.lightPurple}
                style={styles.circleaddIcon}
              />
              <Text style={styles.addDaysText}>
                Add additional days and timings
              </Text>
            </View>
            <Text style={styles.inputsHeader}>
              In-Clinic Consultation Fees *
            </Text>
            <View style={styles.cityInputHolder}>
              <TextInput
                placeholderTextColor={Colors.black}
                style={styles.inputField}
                placeholder="₹450"
              />
            </View>
          </View>
          <TouchableOpacity
            // onPressIn={() => navigation.navigate(nextScreen)}
            style={styles.buttonBackground}>
            <Text style={styles.buttonText}>Save & Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.darkPurple,
  },
  Header: {
    marginHorizontal: '2%',
    marginVertical: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderText: {
    fontSize: 18,
    color: Colors.white,
  },
  circleNavIcon: {
    marginLeft: '28%',
    marginRight: '2%',
    fontSize: 18,
  },
  Card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgWhite: {
    marginTop: '2%',
    marginBottom: '5%',
    alignSelf: 'center',
    margin: '5%',
    height: '80%',
    width: '90%',
    borderRadius: 25,
    backgroundColor: Colors.white,
  },
  cardTopTextFlex: {
    backgroundColor: Colors.gray_200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardTopText: {
    fontSize: 18,
    color: Colors.black,
    margin: '5%',
  },
  upIcon: {
    fontSize: 20,
    margin: '5%',
  },
  onlineFlexText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  onlineText: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '800',
  },
  toggleTopIcon: {
    fontSize: 45,
  },
  inputsHeader: {
    margin: '5%',
    marginTop: '2%',
    fontSize: 16,
    marginBottom: '0%',
    color: Colors.gray_500,
  },
  cityInputHolder: {
    // height: 45,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 0,
    alignItems: 'center',
    borderColor: Colors.gray_300,
    borderBottomWidth: 1.5,
    margin: '5%',
    marginTop: '0%',
  },
  rightDropDown: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '500',
  },
  dropDownArea: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    alignSelf: 'center',
  },
  dropDownText: {
    paddingHorizontal: '5%',
    paddingVertical: 10.6,
    width: 312,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_100,
  },
  dropDownTextColor: {
    color: Colors.slate_500,
    fontSize: 16,
  },
  textLightInput: {
    fontSize: 15,
    color: Colors.slate_300,
  },
  fromDropDownArea: {
    width: '38%',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    paddingVertical: '1%',
    marginLeft: '5%',
  },
  fromDropDownText: {
    paddingHorizontal: '5%',
    paddingVertical: 10.6,
    width: 305,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_100,
  },
  fromDropDownTextColor: {
    color: Colors.slate_500,
    fontSize: 16,
  },
  toDropDownArea: {
    width: '38%',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    marginLeft: '53%',
  },
  toDropDownText: {
    paddingHorizontal: '5%',
    paddingVertical: 10.6,
    width: 305,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_100,
  },
  toDropDownTextColor: {
    color: Colors.slate_500,
    fontSize: 16,
  },
  timeDown: {
    fontSize: 25,
    marginRight: '2%',
  },
  inputField: {
    width: '100%',
    fontSize: 16,
    color: Colors.gray_700,
  },
  fromInputHolder: {
    height: 45,
    width: '38%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.gray_300,
    borderBottomWidth: 1.5,
    paddingLeft: '1%',
    marginHorizontal: '5%',
    marginTop: '1%',
  },
  fromTwoInputHolder: {
    flexDirection: 'row',
  },
  bgShadeHeaderContainer: {
    flexDirection: 'row',
    gap: 100,
    marginTop: '3%',
  },
  bgShadeHeader: {
    color: Colors.gray_500,
    flexDirection: 'row',
    marginHorizontal: '6%',
  },
  daysFlexText: {
    marginHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  LeftText: {
    marginRight: '15%',
    fontSize: 15,
    fontWeight: '500',
  },
  RightText: {
    // marginLeft: '15%',
    fontSize: 15,
    fontWeight: '500',
  },
  daysRow: {
    marginHorizontal: '4%',
    flexDirection: 'row',
    gap: 40,
  },
  daysRowText: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    margin: '2%',
  },
  daysColumn: {
    // alignItems:'center'
  },
  circleIcon: {
    fontSize: 20,
  },
  daysText: {
    fontSize: 17,
    color: Colors.black,
    fontWeight: '400',
  },
  additionalDaysText: {
    flexDirection: 'row',
    gap: 10,
    margin: '3%',
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  circleaddIcon: {
    fontSize: 22,
  },
  addDaysText: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.lightPurple,
  },
  buttonBackground: {
    margin: '5%',
    width: '90%',
    paddingVertical: 15,
    backgroundColor: Colors.orange,
    borderRadius: 50,
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

export default ClinicAppointmentDetails;
