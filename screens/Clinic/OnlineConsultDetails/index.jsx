import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Switch,
} from 'react-native';
import {useState} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const OnlineConsultDetails = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const toggleSwitch = () => setToggleIcon(previousState => !previousState);
  const [toggleIcon2, setToggleIcon2] = useState(false);
  const toggleSwitch2 = () => setToggleIcon2(previousState => !previousState);
  const [toggleIcon3, setToggleIcon3] = useState(false);
  const toggleSwitch3 = () => setToggleIcon3(previousState => !previousState);
  const [toggleIcon4, setToggleIcon4] = useState(false);
  const toggleSwitch4 = () => setToggleIcon4(previousState => !previousState);
  const [toggleIcon5, setToggleIcon5] = useState(false);
  const toggleSwitch5 = () => setToggleIcon5(previousState => !previousState);
  const [fromDropdown, setFromDropdown] = useState(false);
  const [fromOption, setFromOption] = useState('Select');
  const [toDropdown, setToDropdown] = useState(false);
  const [toOption, setToOption] = useState('Select');
  const [fromDropdown2, setFromDropdown2] = useState(false);
  const [fromOption2, setFromOption2] = useState('Select');
  const [toDropdown2, setToDropdown2] = useState(false);
  const [toOption2, setToOption2] = useState('Select');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Card}>
        <View style={styles.bgWhite}>
          <View style={styles.receivingFlexText}>
            <Text style={styles.receivingText}>Instant Online consult</Text>
            <Text style={styles.activeText}>Active</Text>
            <Switch
              trackColor={{false: Colors.gray_200, true: Colors.blue_500}}
              thumbColor={toggleIcon ? Colors.white : Colors.white}
              onValueChange={toggleSwitch}
              value={toggleIcon}
            />
          </View>
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
            <Switch
              trackColor={{false: Colors.gray_200, true: Colors.blue_500}}
              thumbColor={toggleIcon ? Colors.white : Colors.white}
              onValueChange={toggleSwitch2}
              value={toggleIcon2}
            />
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
          <View style={styles.bgShadeHeaderContainer}>
            <Text style={styles.bgShadeHeader}>From</Text>
            <Text style={styles.bgShadeHeader}>To</Text>
          </View>
          <View style={styles.fromTwoInputHolder}>
            <View style={styles.fromInputHolder}>
              <TouchableOpacity
                style={styles.rightDropDown}
                onPressIn={() => setFromDropdown2(!fromDropdown2)}>
                <Text style={styles.textLightInput}>
                  {'  '}
                  {fromOption2}
                </Text>
                {fromDropdown2 ? (
                  <Entypo name="chevron-thin-up" color="black" />
                ) : (
                  <Entypo name="chevron-thin-down" color="black" />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.fromInputHolder}>
              <TouchableOpacity
                style={styles.rightDropDown}
                onPressIn={() => setToDropdown2(!toDropdown2)}>
                <Text style={styles.textLightInput}>
                  {'  '}
                  {toOption2}
                </Text>
                {toDropdown2 ? (
                  <Entypo name="chevron-thin-up" color="black" />
                ) : (
                  <Entypo name="chevron-thin-down" color="black" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          {fromDropdown2 ? (
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
                          setFromOption2(item.name);
                          setFromDropdown2(false);
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
          {toDropdown2 ? (
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
                          setToOption2(item.name);
                          setToDropdown2(false);
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
            <Switch
              trackColor={{false: Colors.gray_200, true: Colors.blue_500}}
              thumbColor={toggleIcon ? Colors.white : Colors.white}
              onValueChange={toggleSwitch3}
              value={toggleIcon3}
            />
          </View>
          <View style={styles.daysRow}>
            <View style={styles.daysColumn}>
              <View style={styles.daysRowText}>
                <FontAwesome
                  name="circle-thin"
                  color={Colors.lightGrayBg}
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Monday</Text>
              </View>
              <View style={styles.daysRowText}>
                <FontAwesome
                  name="circle-thin"
                  color={Colors.lightGrayBg}
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Tuesday</Text>
              </View>
              <View style={styles.daysRowText}>
                <FontAwesome
                  name="circle-thin"
                  color={Colors.lightGrayBg}
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Wednesday</Text>
              </View>
              <View style={styles.daysRowText}>
                <FontAwesome
                  name="circle-thin"
                  color={Colors.lightGrayBg}
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Thursday</Text>
              </View>
            </View>
            <View style={styles.daysColumn}>
              <View style={styles.daysRowText}>
                <FontAwesome
                  name="circle-thin"
                  color={Colors.lightGrayBg}
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Friday</Text>
              </View>
              <View style={styles.daysRowText}>
                <FontAwesome
                  name="circle-thin"
                  color={Colors.lightGrayBg}
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Saturday</Text>
              </View>
              <View style={styles.daysRowText}>
                <FontAwesome
                  name="circle-thin"
                  color={Colors.lightGrayBg}
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Sunday</Text>
              </View>
            </View>
          </View>
          <View style={styles.flexDaysText}>
            <View style={styles.additionalDaysText}>
              <Ionicons
                name="add-circle-outline"
                color={Colors.lightPurple}
                style={styles.circleaddIcon}
              />
              <Text style={styles.addDaysText}>
                Add additional days {'\n'} and timings
              </Text>
            </View>
            <View style={styles.additionalDaysText}>
              <Ionicons
                name="remove-circle-outline"
                color={Colors.lightPurple}
                style={styles.circleaddIcon}
              />
              <Text style={styles.addDaysText}>Remove timings</Text>
            </View>
          </View>
          <View style={styles.smallCard}>
            <View style={styles.bgGray}>
              <View style={styles.bulletPointContainer}>
                <Text style={styles.bulletPoint}>{'\u2022'}</Text>
                <Text style={styles.bulletPointText}>
                  Allows patient to connect instantly with available
                  practitioner
                </Text>
              </View>
              <View style={styles.bulletPointContainer}>
                <Text style={styles.bulletPoint}>{'\u2022'}</Text>
                <Text style={styles.bulletPointText}>
                  Fees is standard for all practitioner for the selected
                  speciality
                </Text>
              </View>
              <View style={styles.bulletPointContainer}>
                <Text style={styles.bulletPoint}>{'\u2022'}</Text>
                <Text style={styles.bulletPointText}>
                  Fees for your Specialization Pulmonologist ₹100/-
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.receivingFlexText}>
            <Text style={styles.receivingText}>Scheduled Online consult</Text>
            <Text style={styles.activeMiddleText}>Active</Text>
            <Switch
              trackColor={{false: Colors.gray_200, true: Colors.blue_500}}
              thumbColor={toggleIcon ? Colors.white : Colors.white}
              onValueChange={toggleSwitch4}
              value={toggleIcon4}
            />
          </View>
          <View style={styles.bgShadeHeaderContainer}>
            <Text style={styles.bgShadeHeader}>From</Text>
            <Text style={styles.bgShadeHeader}>To</Text>
          </View>
          <View style={styles.fromTwoInputHolder}>
            <View style={styles.fromInputHolder}>
              <TextInput
                placeholderTextColor={Colors.black}
                style={styles.inputField}
                placeholder="12:00 AM"
              />
              <FontAwesome
                name="angle-down"
                color={Colors.black}
                style={styles.timeDown}
              />
            </View>
            <View style={styles.fromInputHolder}>
              <TextInput
                placeholderTextColor={Colors.black}
                style={styles.inputField}
                placeholder="06:00 AM"
              />
              <FontAwesome
                name="angle-down"
                color={Colors.black}
                style={styles.timeDown}
              />
            </View>
          </View>
          <View style={styles.daysFlexText}>
            <Text style={styles.LeftText}>Days of Practice</Text>
            <Text style={styles.RightText}>Apply To All</Text>
            <Switch
              trackColor={{false: Colors.gray_200, true: Colors.blue_500}}
              thumbColor={toggleIcon ? Colors.white : Colors.white}
              onValueChange={toggleSwitch5}
              value={toggleIcon5}
            />
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
          <View style={styles.bottomSmallCard}>
            <View style={styles.bgGraySmall}>
              <View style={styles.bulletPointContainer}>
                <Text style={styles.bulletPoint}>{'\u2022'}</Text>
                <Text style={styles.bulletPointText}>
                  Allows patient to book slot for online consultation in advance
                  with the selected practitioner
                </Text>
              </View>
              <View style={styles.bulletPointContainer}>
                <Text style={styles.bulletPointText}>
                  {'       '}Online Consultation Fees* {'\n'}
                  {'       '}₹ 500
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.saveButton}>
        <TouchableOpacity style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Save & Proceed</Text>
        </TouchableOpacity>
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
  Card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5%',
  },
  bgWhite: {
    marginTop: '2%',
    marginHorizontal: '5%',
    height: '95%',
    width: '90%',
    borderRadius: 25,
    backgroundColor: Colors.white,
  },
  receivingFlexText: {
    marginLeft: '5%',
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  receivingText: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '800',
  },
  toggleTopIcon: {
    fontSize: 45,
  },
  activeText: {
    color: Colors.lightGrayText,
    marginLeft: '26%',
    marginRight: '2%',
    fontSize: 14,
  },
  activeMiddleText: {
    color: Colors.lightGrayText,
    marginLeft: '18%',
    marginRight: '2%',
    fontSize: 14,
  },
  bgShadeHeaderContainer: {
    flexDirection: 'row',
    gap: 100,
    marginTop: '3%',
  },
  bgShadeHeader: {
    flexDirection: 'row',
    marginHorizontal: '6%',
    color: Colors.lightGrayText,
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
    margin: '5%',
    marginBottom: '0%',
    marginTop: '1%',
  },
  fromTwoInputHolder: {
    flexDirection: 'row',
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
    color: Colors.black,
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
  daysFlexText: {
    paddingTop: '5%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  LeftText: {
    marginRight: '10%',
    fontSize: 15,
    fontWeight: '500',
    color: Colors.lightGrayText,
  },
  RightText: {
    marginLeft: '10%',
    fontSize: 15,
    fontWeight: '500',
    color: Colors.lightGrayText,
  },
  togglIcon: {
    marginLeft: '4%',
    fontSize: 45,
  },
  daysRow: {
    marginHorizontal: '7%',
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
  flexDaysText: {
    flexDirection: 'row',
  },
  additionalDaysText: {
    flexDirection: 'row',
    // gap: 8,
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
  bgGray: {
    marginTop: '2%',
    marginBottom: '5%',
    height: 200,
    width: '90%',
    borderRadius: 25,
    borderColor: Colors.lightGrayText,
    backgroundColor: Colors.lightBorderGray,
  },
  bgGrayText: {
    margin: '5%',
    alignItems: 'center',
    display: 'flex',
    fontSize: 13,
  },
  bulletPointContainer: {
    flexDirection: 'row',
    width: '80%',
    marginHorizontal: '5%',
    // marginVertical: '3%',
    gap: 10,
    alignItems: 'center',
  },
  bulletPoint: {
    color: Colors.gray_800,
    fontSize: 30,
  },
  bulletPointText: {
    color: Colors.gray_800,
    fontSize: 11,
    fontWeight: '600',
  },
  smallCard: {
    marginHorizontal: '5%',
    height: '12%',
    width: '90%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    backgroundColor: Colors.purple_100,
  },
  bgGraySmall: {
    marginTop: '5%',
    // marginBottom: '5%',
    height: 130,
    width: '90%',
    borderRadius: 25,
    borderColor: Colors.lightGrayText,
    backgroundColor: Colors.lightBorderGray,
  },
  saveButton: {
    // marginTop: '5%',
    // marginBottom: '5%',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonBackground: {
    // marginHorizontal: 5,
    marginBottom: '15%',
    width: '98%',
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
  bottomSmallCard: {
    marginHorizontal: '5%',
    height: '10%',
    width: '90%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    backgroundColor: Colors.purple_100,
  },
});

export default OnlineConsultDetails;
