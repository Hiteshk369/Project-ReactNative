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

const Advice = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.sideBar}>
            <View style={styles.leftFull}>
              <StepsIndicator active="seventh" />
            </View>
          </View>
          <View style={styles.mainLayout}>
            <View style={styles.rightFull}>
              <MaterialIcons
                name="arrow-back-ios"
                color={Colors.black}
                style={styles.backIcon}
              />
              <Text style={styles.headerText}>Advice</Text>
              <TextInput
                placeholderTextColor={Colors.gray_200}
                style={styles.inputField}
                placeholder="Search for Advice"
              />
              <Text style={styles.suggestionsHeader}>Suggestions</Text>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>
                    Drink more water, maintain...
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>
                    Drink atleast 3 litres o...
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>
                    Encourage fluid intake in...
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Avoid oily food</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>
                    Exercise regularly...
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>
                    Eat green leafy vegetable...
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>
                    Encourage intake of prote...
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Eat more fruits</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>
                    Get 8 hours of sleep daily...
                  </Text>
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
        <TouchableOpacity style={styles.nextButtonBackground}>
          <View style={styles.nextButtonFlex}>
            <Text style={styles.nextButtonText}>Findings</Text>
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
    backgroundColor: Colors.purple_200,
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
export default Advice;
