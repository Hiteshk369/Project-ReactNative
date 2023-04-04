import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {PatientsData} from '../../../components';
import {Colors} from '../../../constants/colors';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HabitHistory = () => {
  return (
    <ScrollView>
      <PatientsData />
      <View style={styles.bgShade}>
        <View style={styles.bgShadeFlex}>
          <Entypo name="dot-single" color={Colors.black} style={styles.dot} />
          <Text style={styles.bgShadeText}>Non Smoker</Text>
        </View>
      </View>
      <View style={styles.suggestionsContainer}>
        <Text style={styles.suggestionsText}>Suggestions:</Text>
        <View style={styles.buttonFlex}>
          <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.buttonText}>Diabetes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.buttonText}>High Blood Pressure</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.buttonText}>Heart Attack</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonRight}>
        <TouchableOpacity style={styles.bottomButtonBackground}>
          <AntDesign
            name="doubleleft"
            color={Colors.lightPurple}
            style={styles.rightArrow}
          />
          <Text style={styles.bottomButtonText}>Allergies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButtonBackground}>
          <Text style={styles.bottomButtonText}>Surgeries</Text>
          <AntDesign
            name="doubleright"
            color={Colors.lightPurple}
            style={styles.rightArrow}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  bgShade: {
    height: 200,
    width: '83%',
    margin: '8%',
    // justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: Colors.purple_100,
  },
  bgShadeFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginVertical: '10%',
  },
  dot: {
    fontSize: 30,
  },
  bgShadeText: {
    fontSize: 15,
    color: Colors.black,
  },
  suggestionsContainer: {
    marginHorizontal: '8%',
    paddingTop: '40%',
  },
  suggestionsText: {
    fontSize: 14,
    color: Colors.gray_800,
  },

  suggestionsContainer: {
    marginHorizontal: '8%',
    paddingTop: '40%',
  },
  suggestionsText: {
    fontSize: 14,
    color: Colors.gray_800,
  },
  buttonFlex: {
    flexDirection: 'row',
    gap: 10,
  },
  buttonBackground: {
    // width: '30%',
    marginTop: '3%',
    paddingVertical: '1%',
    paddingHorizontal: '3%',
    borderColor: Colors.darkPurple,
    borderWidth: 1,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.darkPurple,
  },
  buttonRight: {
    flexDirection: 'row',
    marginHorizontal: '3%',
  },
  bottomButtonBackground: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    margin: '5%',
    width: '40%',
    paddingVertical: '5%',
    paddingHorizontal: '2%',
    borderColor: Colors.lightPurple,
    borderWidth: 1,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
  },
  bottomButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.lightPurple,
  },
  rightArrow: {
    fontSize: 18,
  },
});

export default HabitHistory;
