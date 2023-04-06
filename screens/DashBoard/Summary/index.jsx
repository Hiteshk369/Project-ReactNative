import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {useState} from 'react';
import {Colors} from '../../../constants/colors';

import {WeekCalendar} from '../../../components';

import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Summary = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('Home')}
          style={styles.notSelectedButton}>
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
      <View>
        <Text style={styles.text}>Summary</Text>
        <View style={styles.doctorCard}>
          <LinearGradient
            colors={[Colors.darkPurple, Colors.lightPurple]}
            style={styles.gradient}>
            <View style={styles.cardText}>
              <View style={styles.innerText}>
                <Text style={styles.whiteText}>Consults</Text>
                <Text style={styles.bigText}>0</Text>
                <Text style={styles.rupText}>₹0</Text>
              </View>
              <View style={styles.innerText}>
                <Text style={styles.whiteText}>Appointments</Text>
                <Text style={styles.bigText}>0</Text>
                <Text style={styles.rupText}>₹0</Text>
              </View>
              <View style={styles.innerText}>
                <Text style={styles.whiteText}>Enquiries</Text>
                <Text style={styles.bigText}>0</Text>
                <Text style={styles.rupText}>₹0</Text>
              </View>
            </View>
            <View style={styles.totalText}>
              <Text style={styles.finalText}>Total ₹0</Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.creditCard}>
          <LinearGradient
            colors={[Colors.darkPurple, Colors.lightPurple]}
            style={styles.gradient}>
            <View style={styles.flexBox}>
              <Text style={styles.creditText}>Total Amount Credited </Text>
              <Text style={styles.creditText}>₹0</Text>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.OverviewText}>
          <Text style={styles.overviewText}>Profile Overview</Text>
          <View style={styles.allFlexText}>
            <Text style={styles.overviewText}>All</Text>
            <Entypo
              style={styles.overviewText}
              name="chevron-thin-down"
              color="black"
            />
          </View>
        </View>
        <View style={styles.scoreCard}>
          <LinearGradient
            colors={[Colors.darkPurple, Colors.lightPurple]}
            style={styles.gradient}>
            <View style={styles.scoreText}>
              <View style={styles.innerText}>
                <Text style={styles.whiteText}>Patient Experience Score</Text>
                <Text style={styles.bigText}>0%</Text>
              </View>
              <View style={styles.innerText}>
                <Text style={styles.whiteText}>Thanks</Text>
                <Text style={styles.bigText}>0</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.OverviewText}>
          <Text style={styles.overviewText}>Next Payment Scheduled</Text>
          <Text style={styles.dateText}>Wed,Mar 06,2023</Text>
        </View>
        <View style={styles.scoreCard}>
          <LinearGradient
            colors={[Colors.darkPurple, Colors.lightPurple]}
            style={styles.gradient}>
            <View style={styles.scoreText}>
              <View style={styles.innerText}>
                <Text style={styles.whiteText}>Consultations</Text>
                <Text style={styles.zeroText}>0</Text>
                <Text style={styles.countText}>
                  Total amount to be transferred:0
                </Text>
              </View>
              <View style={styles.innerText}>
                <Text style={styles.whiteText}>Instant Connect</Text>
                <Text style={styles.zeroText}>0</Text>
                <Text> </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <Text style={styles.text}>Feedback from Patients</Text>
        <View style={styles.doctorCard}>
          <LinearGradient
            colors={[Colors.darkPurple, Colors.lightPurple]}
            style={styles.gradient}>
            <View style={styles.cardBottomText}>
              <View style={styles.innerBottomText}>
                <Text style={styles.whiteText}> </Text>
                <Text style={styles.whiteText}> </Text>
                <Text style={styles.feedbackText}>Last Week</Text>
                <Text style={styles.feedbackText}>Last Month</Text>
              </View>
              <View style={styles.innerBottomText}>
                <Ionicons name="heart" color="green" style={styles.heartIcon} />
                <Text style={styles.whiteText}>Helpfull</Text>
                <Text style={styles.bigText}>0</Text>
                <Text style={styles.bigText}>0</Text>
              </View>
              <View style={styles.innerBottomText}>
                <Ionicons
                  name="heart"
                  color="orange"
                  style={styles.heartIcon}
                />
                <Text style={styles.whiteText}>Okay</Text>
                <Text style={styles.bigText}>0</Text>
                <Text style={styles.bigText}>0</Text>
              </View>
              <View style={styles.innerBottomText}>
                <Ionicons name="heart" color="red" style={styles.heartIcon} />
                <Text style={styles.whiteText}>NotHelpfull</Text>
                <Text style={styles.bigText}>0</Text>
                <Text style={styles.bigText}>0</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
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
    color: Colors.gray_700,
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
  doctorCard: {
    marginTop: '5%',
    height: '19%',
    width: '100%',
  },
  gradient: {
    height: '100%',
    width: '100%',
    // padding: 10,
  },
  cardText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '2%',
    marginVertical: '2%',
    // marginBottom: '5%',
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.gray_100,
  },
  cardBottomText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20%',
  },
  innerText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: '4%',
  },
  innerBottomText: {
    alignItems: 'center',
    paddingVertical: '4%',
  },
  whiteText: {
    color: Colors.white,
    fontSize: 15,
    marginBottom: '5%',
  },
  bigText: {
    color: Colors.blue,
    marginHorizontal: '10%',
    // marginVertical: '5%',
    fontSize: 30,
  },
  rupText: {
    color: Colors.white,
    // marginHorizontal: '%',
    marginVertical: '5%',
    fontSize: 15,
  },
  totalText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  finalText: {
    color: Colors.white,
    marginRight: '12%',
    fontSize: 20,
  },
  creditCard: {
    marginVertical: '5%',
    height: '7%',
    width: '100%',
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    padding: '5%',
  },
  creditText: {
    color: Colors.white,
    fontSize: 18,
  },
  OverviewText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    gap: 30,
    marginLeft: '5%',
    marginBottom: '4%',
  },
  allFlexText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginRight: '3%',
  },
  overviewText: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '600',
  },
  scoreCard: {
    marginBottom: 10,
    height: 110,
    width: '100%',
  },
  dateText: {
    fontSize: 10,
    color: Colors.black,
    marginRight: '2%',
  },
  scoreText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 0,
    marginHorizontal: '5%',
  },
  zeroText: {
    color: Colors.blue,
    margin: 0,
    marginBottom: 0,
    fontSize: 30,
  },
  countText: {
    fontSize: 10,

    color: Colors.gray_200,

    marginBottom: 10,
  },
  heartIcon: {
    fontSize: 35,
  },
  feedbackText: {
    color: Colors.white,
    fontSize: 15,
    marginVertical: '3%',
    paddingTop: '4%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'flex-end',
  },
});

export default Summary;

//calender
