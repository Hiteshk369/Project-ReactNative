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
import {Pressable} from 'react-native';

const Investigation = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.sideBar}>
            <View style={styles.leftFull}>
              <StepsIndicator active="six" />
            </View>
          </View>
          <View style={styles.mainLayout}>
            <View style={styles.rightFull}>
              <Pressable onPressIn={() => navigation.navigate('Procedure')}>
                <MaterialIcons
                  name="arrow-back-ios"
                  color={Colors.black}
                  style={styles.backIcon}
                />
              </Pressable>
              <Text style={styles.headerText}>Investigation</Text>
              <TextInput
                placeholderTextColor={Colors.gray_200}
                style={styles.inputField}
                placeholder="Search for Investigation"
              />
              <Text style={styles.suggestionsHeader}>Suggestions</Text>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>As advised</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Cbc with esr</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Cbc</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Crp</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Chest X-Ray</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Complete Blood...</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Usg whole abdom...</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Lft</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Ecg</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Kft</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Chest xray pav</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Cbp</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Rt pcr</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Hrct chest</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>Nothing require...</Text>
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
          onPressIn={() => navigation.navigate('Advice')}
          style={styles.nextButtonBackground}>
          <View style={styles.nextButtonFlex}>
            <Text style={styles.nextButtonText}>Advice</Text>
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
    fontSize: 14,
    fontWeight: '600',
    margin: '5%',
    marginTop: '13%',
    marginBottom: '2%',
    color: Colors.gray_500,
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
export default Investigation;
