import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {useState} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MedicationOptions, StepsIndicator} from '../../../../components';
import {Colors} from '../../../../constants/colors';

const Medication = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.sideBar}>
            <View style={styles.leftFull}>
              <StepsIndicator active="fourth" />
            </View>
          </View>
          <View style={styles.mainLayout}>
            <View style={styles.rightFull}>
              <MaterialIcons
                name="arrow-back-ios"
                color={Colors.black}
                style={styles.backIcon}
              />
              <Text style={styles.headerText}>Medication</Text>
              <TextInput
                placeholderTextColor={Colors.gray_200}
                style={styles.inputField}
                placeholder="Search for Medication"
              />
              <Text style={styles.suggestionsHeader}>Recently used</Text>
              <View style={styles.suggestionsFlex}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <TouchableOpacity
                    // style={[styles.button, styles.buttonClose]}
                    onPressIn={() => setModalVisible(!modalVisible)}>
                    <MedicationOptions />
                  </TouchableOpacity>
                </Modal>
                <TouchableOpacity
                  // style={[styles.button, styles.buttonOpen]}
                  onPressIn={() => setModalVisible(true)}>
                  <Text style={styles.suggestionsText}>AZEE 500MG TAB</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>STAMLO BETA M T...</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.suggestionsHeader}>Suggestions</Text>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>PAN-D CAP PR</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>AZEE 500MG TAB</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>STAMLO BETA M T...</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>MONTEK 8MG CAP</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>MEDROL 8MG CAP</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>TELEKAST L TAB</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.suggestionsFlex}>
                <TouchableOpacity>
                  <Text style={styles.suggestionsText}>DOLO 650MG TAB</Text>
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
            <Text style={styles.nextButtonText}>Procedure</Text>
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
    // width: '50%',
  },
  suggestionsFlex: {
    // flexDirection: 'row',
    marginHorizontal: '5%',
    marginVertical: '2%',
    // alignItems: 'center',
    // width: '60%',
    justifyContent: 'flex-start',
    gap: 8,
  },
  suggestionsText: {
    width: '60%',

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
export default Medication;
