import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OnlineConsultDetails = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Card}>
        <View style={styles.bgWhite}>
          <View style={styles.receivingFlexText}>
            <Text style={styles.receivingText}>Instant Online consult</Text>
            <Text style={styles.activeText}>Active</Text>
            <MaterialIcons
              name="toggle-on"
              color={Colors.blue_500}
              style={styles.toggleTopIcon}
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
                placeholder="02:00 PM"
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
                placeholder="08:00 PM"
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
            <MaterialIcons
              name="toggle-on"
              color={Colors.blue_500}
              style={styles.togglIcon}
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
              <TextInput
                placeholderTextColor={Colors.black}
                style={styles.inputField}
                placeholder="Select"
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
                placeholder="Select"
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
            <MaterialIcons
              name="toggle-off"
              color={Colors.lightGrayBg}
              style={styles.togglIcon}
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
            <MaterialIcons
              name="toggle-on"
              color={Colors.blue_500}
              style={styles.toggleTopIcon}
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
            <MaterialIcons
              name="toggle-on"
              color={Colors.blue_500}
              style={styles.togglIcon}
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
        <TouchableOpacity
          onPressIn={() => navigation.navigate('Home')}
          style={styles.buttonBackground}>
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
    // marginBottom: '5%',
    marginHorizontal: '5%',
    height: '95%',
    width: '90%',
    borderRadius: 25,
    backgroundColor: Colors.white,
  },
  receivingFlexText: {
    marginLeft: '5%',
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
    marginLeft: '28%',
    fontSize: 14,
  },
  activeMiddleText: {
    color: Colors.lightGrayText,
    marginLeft: '20%',
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
    marginTop: '1%',
  },
  fromTwoInputHolder: {
    flexDirection: 'row',
  },

  daysFlexText: {
    paddingTop: '5%',
    marginLeft: '5%',
    flexDirection: 'row',
    alignItems: 'center',
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
    marginVertical: '3%',
    marginBottom: '0%',
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
    marginTop: '2%',
    marginBottom: '5%',
    height: 130,
    width: '90%',
    borderRadius: 25,
    borderColor: Colors.lightGrayText,
    backgroundColor: Colors.lightBorderGray,
  },
  saveButton: {
    // marginTop: '5%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5%',
  },
  buttonBackground: {
    marginHorizontal: 5,
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
    height: '8%',
    width: '90%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    backgroundColor: Colors.purple_100,
  },
});

export default OnlineConsultDetails;
