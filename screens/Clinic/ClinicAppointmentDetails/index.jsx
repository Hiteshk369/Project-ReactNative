import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../constants/colors';

const ClinicAppointmentDetails = ({navigation}) => {
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
                Enabled for receiving appointments
              </Text>
              <MaterialIcons
                name="toggle-on"
                color="#0077CD"
                style={styles.toggleTopIcon}
              />
            </View>
            <Text style={styles.inputsHeader}>Appointment Duration</Text>
            <View style={styles.cityInputHolder}>
              <TextInput
                placeholderTextColor={Colors.black}
                style={styles.inputField}
                placeholder="15 Mins"
              />
              <FontAwesome
                name="angle-down"
                color={Colors.black}
                style={styles.timeDown}
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
                  placeholder="Open 24Hrs"
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
                  placeholder="Open 24Hrs"
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
                style={styles.toggleIcon}
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
                style={styles.circleAddIcon}
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
            onPressIn={() => navigation.navigate('OnlineConsultDetails')}
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgWhite: {
    marginTop: '2%',
    marginBottom: '5%',
    height: '80%',
    width: '90%',
    borderRadius: 25,
    backgroundColor: Colors.white,
  },
  cardTopTextFlex: {
    backgroundColor: Colors.gray_200,
    flexDirection: 'row',
    // margin:'5%',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardTopText: {
    fontSize: 18,
    color: Colors.black,
    margin: '5%',
  },
  upIcon: {
    marginLeft: '35%',
    fontSize: 20,
  },
  onlineFlexText: {
    marginLeft: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlineText: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '800',
  },
  toggleTopIcon: {
    fontSize: 45,
    marginLeft: '18%',
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
    // height: 45,
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
    paddingTop: '5%',
    marginLeft: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  LeftText: {
    marginRight: '10%',
    fontSize: 15,
    fontWeight: '500',
  },
  RightText: {
    marginLeft: '15%',
    fontSize: 15,
    fontWeight: '500',
  },
  toggleIcon: {
    marginLeft: '4%',
    fontSize: 35,
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
  circleAddIcon: {
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
