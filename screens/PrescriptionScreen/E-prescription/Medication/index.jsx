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
import {Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

const suggestions = [
  {
    id: 1,
    name: 'PAN-D CAP PR',
  },
  {
    id: 2,
    name: 'AZEE 500MG TAB',
  },
  {
    id: 3,
    name: 'STAMLO BETA M T...',
  },
  {
    id: 4,
    name: 'MONTEK 8MG CAP',
  },
  {
    id: 5,
    name: 'MEDROL 8MG CAP',
  },
  {
    id: 6,
    name: 'TELEKAST L TAB',
  },
  {
    id: 7,
    name: 'DOLO 650MG TAB',
  },
];

const Medication = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalItem, setModalItem] = useState('');
  const [items, setItems] = useState([]);

  const handleModal = name => {
    setModalItem(name);
    setModalVisible(true);
  };
  const dispatch = useDispatch();
  const [allMedicineItems, setAllMedicineItems] = useState([]);
  useEffect(() => {
    if (allMedicineItems.length > 0) {
      dispatch({
        type: 'SET_MEDICINE',
        allMedicines: allMedicineItems,
      });
    }
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <View style={styles.sideBar}>
              <View style={styles.leftFull}>
                <StepsIndicator active="four" />
              </View>
            </View>
            <View style={styles.mainLayout}>
              <View style={styles.rightFull}>
                <Pressable onPressIn={() => navigation.navigate('Diagnosis')}>
                  <MaterialIcons
                    name="arrow-back-ios"
                    color={Colors.black}
                    style={styles.backIcon}
                  />
                </Pressable>
                <Text style={styles.headerText}>Medication</Text>
                <TextInput
                  placeholderTextColor={Colors.gray_200}
                  style={styles.inputField}
                  placeholder="Search for Medication"
                />
                {allMedicineItems.length > 0 && (
                  <View style={styles.addedItemsContainer}>
                    <View style={styles.flexContainer}>
                      <Text style={styles.addedText}>Added</Text>
                      <Pressable onPressIn={() => setAllMedicineItems([])}>
                        <Text style={styles.clearText}>Clear All</Text>
                      </Pressable>
                    </View>
                    {allMedicineItems.map((data, index) => (
                      <View
                        style={{flexDirection: 'column', gap: 3, marginTop: 4}}>
                        <View key={index} style={styles.textFlex}>
                          <View style={styles.bulletsFlex}>
                            <Text style={styles.bulletText}>{'\u2B24'}</Text>
                            <Text style={styles.textColor}>
                              {data.medicineName}
                            </Text>
                          </View>
                          <Pressable>
                            <Text style={styles.closeText}>x</Text>
                          </Pressable>
                        </View>
                        <View style={styles.headerSmallContainer}>
                          <Text style={styles.headerSmallText}>
                            {data.frequency}, {data.count}
                            {data.duration}, {data.timings}, {data.instructions}
                          </Text>
                        </View>
                      </View>
                    ))}
                    <View style={styles.border} />
                  </View>
                )}
                <Text style={styles.suggestionsHeader}>Recently used</Text>
                <View style={styles.suggestionsFlex}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <MedicationOptions
                      modalVisible={modalVisible}
                      setModalVisible={setModalVisible}
                      modalItem={modalItem}
                      allMedicineItems={allMedicineItems}
                      setAllMedicineItems={setAllMedicineItems}
                    />
                  </Modal>
                  <TouchableOpacity
                    onPressIn={() => handleModal('AZEE 500MG TAB')}>
                    <Text
                      style={
                        allMedicineItems.some(
                          item => item.medicineName === 'AZEE 500MG TAB',
                        )
                          ? styles.activeSuggestionsText
                          : styles.notActiveSuggestionsText
                      }>
                      AZEE 500MG TAB
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPressIn={() => handleModal('STAMLO BETA M T...')}>
                    <Text
                      style={
                        allMedicineItems.some(
                          item => item.medicineName === 'STAMLO BETA M T...',
                        )
                          ? styles.activeSuggestionsText
                          : styles.notActiveSuggestionsText
                      }>
                      STAMLO BETA M T...
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.suggestionsHeader}>Suggestions</Text>
                <View style={styles.suggestionsButtonFlex}>
                  {suggestions.map(suggestion => (
                    <TouchableOpacity
                      onPressIn={() => handleModal(suggestion.name)}
                      key={suggestion.id}
                      style={
                        allMedicineItems.some(
                          item => item.medicineName === suggestion.name,
                        )
                          ? styles.suggestionsButton
                          : styles.activeSuggestionsButton
                      }>
                      <Text
                        style={
                          allMedicineItems.some(
                            item => item.medicineName === suggestion.name,
                          )
                            ? styles.activeSuggestionText
                            : styles.suggestionText
                        }
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        {suggestion.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonsFlex}>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('Prescribe')}
          style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Preview</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('Procedure')}
          style={styles.nextButtonBackground}>
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
    </View>
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
    backgroundColor: Colors.slate_400,
    borderRadius: 20,
    alignItems: 'center',
    paddingLeft: '5%',
  },
  addedItemsContainer: {
    width: '90%',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 6,
  },
  flexContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  addedText: {
    fontWeight: '600',
    fontSize: 14,
    color: Colors.darkPurple,
  },
  clearText: {
    fontWeight: '600',
    fontSize: 14,
    color: Colors.red,
  },
  textFlex: {
    marginTop: 6,
    marginLeft: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bulletsFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bulletText: {fontSize: 10},
  textColor: {
    color: Colors.gray_700,
    fontWeight: '500',
  },
  closeText: {color: Colors.gray_700, fontWeight: '500'},
  headerSmallContainer: {
    marginLeft: 18,
  },
  headerSmallText: {
    fontSize: 12,
    color: Colors.gray_400,
    fontWeight: '500',
  },
  border: {
    borderColor: Colors.gray_400,
    backgroundColor: Colors.gray_400,
    borderWidth: 1,
    marginTop: '5%',
  },
  suggestionsHeader: {
    fontSize: 14,
    fontWeight: '600',
    margin: '5%',
    marginTop: '13%',
    marginBottom: '2%',
    color: Colors.gray_500,
    // width: '50%',
  },
  suggestionsButtonFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: '5%',
    gap: 10,
    marginVertical: '2%',
  },
  activeSuggestionsButton: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 4,
    borderColor: Colors.gray_400,
    borderWidth: 1,
    marginVertical: '0.5%',
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderRadius: 6,
  },
  activeSuggestionText: {
    color: Colors.darkPurple,
    fontWeight: '500',
    maxWidth: 180,
    overflow: 'hidden',
  },
  suggestionText: {
    color: Colors.gray_400,
    fontWeight: '500',
    maxWidth: 180,
    overflow: 'hidden',
  },
  suggestionsButton: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 4,
    borderColor: Colors.lightPurple,
    backgroundColor: Colors.purple_100,
    borderWidth: 1,
    marginVertical: '0.5%',
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderRadius: 6,
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
  notActiveSuggestionsText: {
    width: '60%',
    fontSize: 14,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: Colors.gray_400,
    color: Colors.gray_400,
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderRadius: 10,
  },
  activeSuggestionsText: {
    width: '60%',
    fontSize: 14,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: Colors.lightPurple,
    color: Colors.darkPurple,
    backgroundColor: Colors.purple_100,
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
