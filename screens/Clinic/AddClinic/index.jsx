import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {useState} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../constants/colors';
import {SaveButton} from '../../../components';

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

const AddClinic = () => {
  const [timeDropdown, setTimeDropdown] = useState(false);
  const [timeOption, setTimeOption] = useState('10 mins');
  const [fromDropdown, setFromDropdown] = useState(false);
  const [fromOption, setFromOption] = useState('From');
  const [toDropdown, setToDropdown] = useState(false);
  const [toOption, setToOption] = useState('To');
  const [toggleIcon, setToggleIcon] = useState(false);
  const [circleIcon, setcircleIcon] = useState(false);
  const [genderCircleIcon, setGenderCircleIcon] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.navBar}>
          <MaterialIcons
            name="arrow-back-ios"
            color={Colors.white}
            style={styles.backIcon}
          />
          <Text style={styles.navText}>Add Clinic</Text>
        </View>
        <View style={styles.Card}>
          <View style={styles.bgWhite}>
            <View style={styles.nameInputHolder}>
              <TextInput
                placeholderTextColor={Colors.gray_100}
                style={styles.inputField}
                placeholder="Hospital/Clinic Name"
              />
            </View>
            <Text style={styles.inputsHeader}>Address</Text>
            <View style={styles.addressInputHolder}>
              <TextInput
                placeholderTextColor={Colors.gray_100}
                style={styles.addressInputField}
                placeholder="Selected address location"
              />
            </View>
            <Text style={styles.inputsHeader}>City</Text>
            <View style={styles.cityInputHolder}>
              <TextInput
                placeholderTextColor={Colors.gray_100}
                style={styles.inputField}
                placeholder="City"
              />
            </View>
            <Text style={styles.mainHeader}>Practice Timings</Text>
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
                  <Entypo name="chevron-thin-up" color="black" />
                ) : (
                  <Entypo name="chevron-thin-down" color="black" />
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
              <TouchableOpacity onPressIn={() => setToggleIcon(!toggleIcon)}>
                {toggleIcon ? (
                  <MaterialIcons
                    name="toggle-on"
                    color={Colors.blue_500}
                    style={styles.toggleIcon}
                  />
                ) : (
                  <MaterialIcons
                    name="toggle-off"
                    color={Colors.black}
                    style={styles.toggleIcon}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.daysRow}>
              <View style={styles.daysColumn}>
                <View style={styles.daysRowText}>
                  <FontAwesome
                    name="circle-thin"
                    color={Colors.black}
                    style={styles.circleIcon}
                  />
                  <Text style={styles.daysText}>Monday</Text>
                </View>
                <View style={styles.daysRowText}>
                  <FontAwesome
                    name="circle-thin"
                    color={Colors.black}
                    style={styles.circleIcon}
                  />
                  <Text style={styles.daysText}>Tuesday</Text>
                </View>
                <View style={styles.daysRowText}>
                  <FontAwesome
                    name="circle-thin"
                    color={Colors.black}
                    style={styles.circleIcon}
                  />
                  <Text style={styles.daysText}>Wednesday</Text>
                </View>
                <View style={styles.daysRowText}>
                  <FontAwesome
                    name="circle-thin"
                    color={Colors.black}
                    style={styles.circleIcon}
                  />
                  <Text style={styles.daysText}>Thursday</Text>
                </View>
              </View>
              <View style={styles.daysColumn}>
                <View style={styles.daysRowText}>
                  <FontAwesome
                    name="circle-thin"
                    color={Colors.black}
                    style={styles.circleIcon}
                  />
                  <Text style={styles.daysText}>Friday</Text>
                </View>
                <View style={styles.daysRowText}>
                  <FontAwesome
                    name="circle-thin"
                    color={Colors.black}
                    style={styles.circleIcon}
                  />
                  <Text style={styles.daysText}>Saturday</Text>
                </View>
                <View style={styles.daysRowText}>
                  <FontAwesome
                    name="circle-thin"
                    color={Colors.black}
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
            <Text style={styles.inputsHeader}>Age Restriction</Text>
            <View style={styles.yesNoContainer}>
              <TouchableOpacity
                style={styles.flexButton}
                onPressIn={() => setcircleIcon(!circleIcon)}>
                {circleIcon ? (
                  <MaterialIcons
                    name="radio-button-off"
                    color={Colors.lightPurple}
                    style={styles.radioButtonIcon}
                  />
                ) : (
                  <MaterialIcons
                    name="radio-button-on"
                    color={Colors.lightPurple}
                    style={styles.radioButtonIcon}
                  />
                )}
                <Text style={styles.yesNoText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.flexButton}
                onPressIn={() => setcircleIcon(!circleIcon)}>
                {circleIcon ? (
                  <MaterialIcons
                    name="radio-button-on"
                    color={Colors.lightPurple}
                    style={styles.radioButtonIcon}
                  />
                ) : (
                  <MaterialIcons
                    name="radio-button-off"
                    color={Colors.lightPurple}
                    style={styles.radioButtonIcon}
                  />
                )}
                <Text style={styles.yesNoText}>No</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgShadeHeaderContainer}>
              <Text style={styles.bgShadeHeader}>From</Text>
              <Text style={styles.bgShadeHeader}>To</Text>
            </View>
            <View style={styles.fromTwoInputHolder}>
              <View style={styles.bgshadeInput}>
                <TextInput
                  placeholderTextColor={Colors.black}
                  style={styles.inputField}
                  placeholder="0"
                />
              </View>
              <View style={styles.bgshadeInput}>
                <TextInput
                  placeholderTextColor={Colors.black}
                  style={styles.inputField}
                  placeholder="70"
                />
              </View>
            </View>
            <Text style={styles.inputsHeader}>Gender Restriction</Text>
            <View style={styles.yesNoContainer}>
              <TouchableOpacity
                style={styles.flexButton}
                onPressIn={() => setGenderCircleIcon(!genderCircleIcon)}>
                {genderCircleIcon ? (
                  <MaterialIcons
                    name="radio-button-off"
                    color={Colors.lightPurple}
                    style={styles.radioButtonIcon}
                  />
                ) : (
                  <MaterialIcons
                    name="radio-button-on"
                    color={Colors.lightPurple}
                    style={styles.radioButtonIcon}
                  />
                )}
                <Text style={styles.yesNoText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.flexButton}
                onPressIn={() => setGenderCircleIcon(!genderCircleIcon)}>
                {genderCircleIcon ? (
                  <MaterialIcons
                    name="radio-button-on"
                    color={Colors.lightPurple}
                    style={styles.radioButtonIcon}
                  />
                ) : (
                  <MaterialIcons
                    name="radio-button-off"
                    color={Colors.lightPurple}
                    style={styles.radioButtonIcon}
                  />
                )}
                <Text style={styles.yesNoText}>No</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.inputsHeader}>Select Gender</Text>
            <View style={styles.genderInputHolder}>
              <TextInput
                placeholderTextColor={Colors.black}
                style={styles.genderInputField}
                placeholder="Male"
              />
            </View>
            <Text style={styles.mainHeader}>
              Appointment Confirmation Details
            </Text>
            <Text style={styles.inputsHeader}>Mobile Number</Text>
            <View style={styles.cityInputHolder}>
              <TextInput
                placeholderTextColor={Colors.gray_100}
                style={styles.inputField}
                placeholder="+91"
              />
            </View>
            <View style={styles.addMoreText}>
              <Ionicons
                name="add-circle-outline"
                color={Colors.lightPurple}
                style={styles.circleaddIcon}
              />
              <Text style={styles.addDaysText}>Add More</Text>
            </View>
            <Text style={styles.inputsHeader}>LandLine</Text>
            <View style={styles.cityInputHolder}>
              <TextInput
                placeholderTextColor={Colors.gray_100}
                style={styles.inputField}
              />
            </View>
            <View style={styles.addMoreText}>
              <Ionicons
                name="add-circle-outline"
                color={Colors.lightPurple}
                style={styles.circleaddIcon}
              />
              <Text style={styles.addDaysText}>Add More</Text>
            </View>
            <Text style={styles.inputsHeader}>E-Mail</Text>
            <View style={styles.cityInputHolder}>
              <TextInput
                placeholderTextColor={Colors.gray_100}
                style={styles.inputField}
              />
            </View>
          </View>

          {/* <View style={styles.saveButtonContainer}>
            <SaveButton nextScreen="ClinicAppointmentDetails" />
          </View> */}
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
  mainContainer: {
    margin: '1%',
  },
  navBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 100,
    padding: '4%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_200,
  },
  backIcon: {
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: '600',
  },
  navText: {
    fontSize: 20,
    color: Colors.white,
  },
  Card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgWhite: {
    marginTop: '2%',
    marginBottom: '5%',
    paddingHorizontal: '5%',
    height: '91.5%',
    width: '90%',
    borderRadius: 25,
    backgroundColor: Colors.white,
  },
  inputField: {
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
  nameInputHolder: {
    height: 45,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.gray_300,
    borderBottomWidth: 1.5,
    color: Colors.gray_700,
    paddingLeft: '1%',
    marginTop: '5%',
    marginBottom: '4%',
  },
  addressInputHolder: {
    height: 60,
    width: '100%',
    display: 'flex',
    backgroundColor: Colors.gray_300,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.gray_300,
    borderBottomWidth: 1.5,
    paddingLeft: '1%',
    marginTop: '1%',
  },
  inputsHeader: {
    marginVertical: '2%',
    fontSize: 16,
    color: Colors.gray_100,
    fontWeight: '500',
  },
  addressInputField: {
    width: '100%',
    fontSize: 16,
    fontWeight: '800',
  },
  cityInputHolder: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: Colors.gray_300,
    borderBottomWidth: 1.5,
    paddingBottom: '1%',
  },
  rightDropDown: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1%',
    marginBottom: '2%',
  },
  textInput: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '500',
  },
  textLightInput: {
    fontSize: 15,
    color: Colors.slate_300,
  },
  dropDownArea: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    alignSelf: 'center',
    paddingVertical: '1%',
  },
  dropDownText: {
    paddingHorizontal: '5%',
    paddingVertical: 10.6,
    width: 305,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_100,
  },
  dropDownTextColor: {
    color: Colors.slate_500,
    fontSize: 16,
  },
  fromDropDownArea: {
    width: '50%',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    paddingVertical: '1%',
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
    width: '45%',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    paddingVertical: '1%',
    marginLeft: '55%',
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
  mainHeader: {
    marginVertical: '5%',
    fontSize: 17,
    fontWeight: '500',
    color: Colors.black,
  },
  timeDown: {
    fontSize: 25,
    color: Colors.red,
    // marginRight: '2%',
  },
  daysFlexText: {
    paddingTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  LeftText: {
    fontSize: 15,
    fontWeight: '500',
  },
  RightText: {
    marginLeft: '20%',
    fontSize: 15,
    fontWeight: '500',
  },
  toggleIcon: {
    fontSize: 35,
  },
  daysRow: {
    marginHorizontal: '2%',
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
    color: Colors.gray_200,
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
    // marginHorizontal: '2%',
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
  fromInputHolder: {
    height: 45,
    width: '45%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.gray_300,
    borderBottomWidth: 1.5,
    paddingLeft: '1%',
    marginTop: '1%',
  },
  fromTwoInputHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radioButtonIcon: {
    fontSize: 25,
  },
  yesNoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    // marginHorizontal: '5%',
    marginTop: '3%',
    marginBottom: '5%',
  },
  flexButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  yesNoText: {
    marginRight: '15%',
  },
  bgShadeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginHorizontal: '6%',
    marginBottom: '0%',
  },
  bgshadeInput: {
    height: 45,
    width: '42%',
    backgroundColor: Colors.gray_300,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.gray_300,
    borderBottomWidth: 1.5,
    paddingLeft: '1%',
    marginVertical: '5%',
    marginRight: '1%',
    marginTop: '1%',
  },
  bgShadeHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight: '35%',
    gap: 140,
    marginTop: '3%',
  },
  genderInputHolder: {
    height: 45,
    width: '100%',
    display: 'flex',
    backgroundColor: Colors.gray_300,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.gray_300,
    borderBottomWidth: 1.5,
    paddingLeft: '1%',
    marginVertical: '5%',
  },
  genderInputField: {
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
  },
  addMoreText: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: '3%',
    alignItems: 'center',
  },
  AddMoreBottomText: {
    fontSize: 13,
    margin: '5%',
    fontWeight: '400',
    marginTop: '2%',
    color: Colors.gray_100,
  },
  buttonBackground: {
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
  // saveButtonContainer: {
  //   width: '90%',
  //   alignSelf: 'center',
  //   marginBottom: '15%',
  // },
});

export default AddClinic;
