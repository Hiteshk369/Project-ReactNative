import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StepsIndicator} from '../../../../components';
import {Colors} from '../../../../constants/colors';

const Trail = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.sideBar}>
            <View style={styles.leftFull}>
              <StepsIndicator active="first" />
            </View>
          </View>
          <View style={styles.mainLayout}>
            <View style={styles.rightFull}>
              <MaterialIcons
                name="arrow-back-ios"
                // color={Colors.black}
                color={Colors.black}
                style={styles.backIcon}
              />
              <Text style={styles.headerText}>Cheif Complaints</Text>
              <TextInput
                placeholderTextColor={Colors.gray_200}
                style={styles.inputField}
                placeholder="Search for Cheif Complaints"
              />
              <Text style={styles.suggestionsHeader}>Suggestions</Text>
              <View style={styles.suggestionsFlex}>
                <Text style={styles.suggestionsText}>Cough</Text>
                <Text style={styles.suggestionsText}>Fatigue</Text>
                <Text style={styles.suggestionsText}>Sore Throat</Text>
              </View>
              <View style={styles.suggestionsFlex}>
                <Text style={styles.suggestionsText}>Headache</Text>
                <Text style={styles.suggestionsText}>Generalized ach....</Text>
              </View>
              <View style={styles.suggestionsFlex}>
                <Text style={styles.suggestionsText}>Dry cough</Text>
                <Text style={styles.suggestionsText}>Cold</Text>
              </View>
              <View style={styles.suggestionsFlex}>
                <Text style={styles.suggestionsText}>NAsal congestion..</Text>
              </View>
              <View style={styles.suggestionsFlex}>
                <Text style={styles.suggestionsText}>Loss of appetit...</Text>
                <Text style={styles.suggestionsText}>Nausea</Text>
              </View>
              <View style={styles.suggestionsFlex}>
                <Text style={styles.suggestionsText}>Weakness</Text>
                <Text style={styles.suggestionsText}>Rhintis</Text>
              </View>
              <View style={styles.suggestionsFlex}>
                <Text style={styles.suggestionsText}>Common Cold</Text>
                <Text style={styles.suggestionsText}>Tummy ache</Text>
              </View>
              <View style={styles.suggestionsFlex}>
                <Text style={styles.suggestionsText}>Pain in throat</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonsFlex}>
        <TouchableOpacity style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Preview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButtonBackground}>
          <Text style={styles.nextButtonText}>Examination</Text>
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
    backgroundColor: Colors.slate_100,
    borderRadius: 20,
    alignItems: 'center',
    paddingLeft: '5%',
  },
  suggestionsHeader: {
    fontSize: 18,
    fontWeight: '500',
    margin: '5%',
    marginTop: '13%',
    marginBottom: '2%',
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
    fontWeight: '300',
    borderWidth: 1,
    borderColor: Colors.gray_100,
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
});
export default Trail;
