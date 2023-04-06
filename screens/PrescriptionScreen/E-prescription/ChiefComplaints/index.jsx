import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StepsIndicator} from '../../../../components';
import {Colors} from '../../../../constants/colors';

const ChiefComplaints = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.sideBar}>
            <View style={styles.leftFull}>
              <StepsIndicator active="one" />
            </View>
          </View>
          <View style={styles.mainLayout}>
            <View style={styles.rightFull}>
              <Pressable onPressIn={() => navigation.navigate('Prescribe')}>
                <MaterialIcons
                  name="arrow-back-ios"
                  color={Colors.black}
                  style={styles.backIcon}
                />
              </Pressable>
              <Text style={styles.headerText}>Chief Complaints</Text>
              <TextInput
                placeholderTextColor="#ababb0"
                style={styles.inputField}
                placeholder="Search for Chief Complaints"
              />
              <Text style={styles.suggestionsHeader}>Suggestions</Text>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Cough</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Fatigue</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Sore throat</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Headache</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Generalized ach...</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Dry cough</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Cold</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>
                    nasal congestion...
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Loss of appetit...</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Nausea...</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Weakness</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Rhinitis</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Common cold</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Tummy ache</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Pain in throat</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonsFlex}>
        <TouchableOpacity style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Preview</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('Examination')}
          style={styles.nextButtonBackground}>
          <View style={styles.nextButtonFlex}>
            <Text style={styles.nextButtonText}>Examination</Text>
            <MaterialIcons
              name="navigate-next"
              color={Colors.black}
              style={styles.nextIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: Colors.white,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  sideBar: {
    width: '20%',
    height: '100%',
    flexDirection: 'column',
  },
  leftFull: {
    height: '100%',
  },
  rightFull: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  mainLayout: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
    flex: 1,
  },
  backIcon: {
    marginHorizontal: '5%',
    marginVertical: '3%',
    fontSize: 25,
    color: Colors.black,
  },
  headerText: {
    marginHorizontal: '5%',
    fontSize: 18,
    color: Colors.black,
  },
  inputField: {
    marginHorizontal: '5%',
    marginTop: '4%',
    height: '5%',
    backgroundColor: '#f7f6fe',
    borderRadius: 20,
    alignItems: 'center',
    paddingLeft: '5%',
  },
  suggestionsHeader: {
    fontSize: 14,
    fontWeight: '500',
    margin: '5%',
    marginTop: '13%',
    marginBottom: '1%',
    color: Colors.gray_600,
  },
  suggestionsFlex: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginVertical: '2%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
  },
  suggestionsText: {
    fontSize: 14,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: Colors.gray_400,
    color: Colors.gray_400,
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderRadius: 10,
  },
  buttonsFlex: {
    flexDirection: 'row',
  },
  buttonBackground: {
    width: '50%',
    paddingVertical: 15,
    backgroundColor: Colors.purple_200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.darkPurple,
  },
  nextButtonBackground: {
    width: '50%',
    paddingVertical: 15,
    backgroundColor: Colors.darkPurple,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.white,
  },
  nextIcon: {
    fontSize: 22,
    color: Colors.white,
  },
  nextButtonFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
export default ChiefComplaints;
