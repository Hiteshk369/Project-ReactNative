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
import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';

const suggestions = [
  {
    id: 1,
    name: 'Flu',
  },
  {
    id: 2,
    name: 'Asthama',
  },
  {
    id: 3,
    name: 'Cough',
  },
  {
    id: 4,
    name: 'Chest Pain',
  },
  {
    id: 5,
    name: 'Sinusitis',
  },
  {
    id: 6,
    name: 'Acute gastritis',
  },
  {
    id: 7,
    name: 'Acute bronchitis',
  },
  {
    id: 8,
    name: 'Breathless',
  },
  {
    id: 9,
    name: 'Sore throat',
  },
  {
    id: 10,
    name: 'Allergic bronchitis',
  },
  {
    id: 11,
    name: 'Soft tissue injury',
  },
  {
    id: 12,
    name: 'Infectious gastroenteritis',
  },
  {
    id: 13,
    name: 'Migraine',
  },
  {
    id: 14,
    name: 'Diabetic neuropathy',
  },
  {
    id: 15,
    name: 'Cirrhosis of liver',
  },
];

const Diagnosis = ({navigation}) => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  const updateItemsDiagnosis = data => {
    if (items.includes(data)) {
      setItems(items.filter(item => item !== data));
    } else {
      setItems([...items, data]);
    }
  };

  useEffect(() => {
    dispatch({
      type: 'SET_DIAGNOSIS',
      diagnosis: items,
    });
  }, [items, dispatch]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.sideBar}>
            <View style={styles.leftFull}>
              <StepsIndicator active="three" />
            </View>
          </View>
          <View style={styles.mainLayout}>
            <View style={styles.rightFull}>
              <Pressable onPressIn={() => navigation.navigate('Examination')}>
                <MaterialIcons
                  name="arrow-back-ios"
                  color={Colors.black}
                  style={styles.backIcon}
                />
              </Pressable>
              <Text style={styles.headerText}>Diagnosis</Text>
              <TextInput
                placeholderTextColor={Colors.gray_200}
                style={styles.inputField}
                placeholder="Search for Diagnosis"
              />
              {items.length > 0 && (
                <View
                  style={{
                    width: '90%',
                    marginTop: 15,
                    marginLeft: 15,
                    marginRight: 6,
                  }}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontWeight: '600',
                        fontSize: 14,
                        color: Colors.darkPurple,
                      }}>
                      Added
                    </Text>
                    <Pressable onPressIn={() => setItems([])}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 14,
                          color: Colors.red,
                        }}>
                        Clear All
                      </Text>
                    </Pressable>
                  </View>
                  {items.map((data, index) => (
                    <View
                      key={index}
                      style={{
                        marginTop: 6,
                        marginLeft: 2,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 8,
                        }}>
                        <Text style={{fontSize: 10}}>{'\u2B24'}</Text>
                        <Text
                          style={{color: Colors.gray_700, fontWeight: '500'}}>
                          {data}
                        </Text>
                      </View>
                      <Pressable onPressIn={() => updateItemsDiagnosis(data)}>
                        <Text
                          style={{color: Colors.gray_700, fontWeight: '500'}}>
                          x
                        </Text>
                      </Pressable>
                    </View>
                  ))}
                  <View
                    style={{
                      borderColor: Colors.gray_400,
                      borderWidth: 1,
                      marginTop: 12,
                    }}
                  />
                </View>
              )}

              <Text style={styles.suggestionsHeader}>Suggestions</Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginHorizontal: '5%',
                  gap: 10,
                  marginVertical: '2%',
                }}>
                {suggestions.map(suggestion => (
                  <TouchableOpacity
                    onPressIn={() => updateItemsDiagnosis(suggestion.name)}
                    key={suggestion.id}
                    style={
                      items.includes(suggestion.name)
                        ? styles.activeSuggestionsText
                        : {
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: 4,
                            borderColor: Colors.gray_400,
                            borderWidth: 1,
                            marginVertical: '0.5%',
                            paddingHorizontal: '4%',
                            paddingVertical: '3%',
                            borderRadius: 6,
                          }
                    }>
                    <Text
                      style={
                        items.includes(suggestion.name)
                          ? {
                              color: Colors.darkPurple,
                              fontWeight: '500',
                              overflow: 'hidden',
                            }
                          : {
                              color: Colors.gray_400,
                              fontWeight: '500',
                              maxWidth: 110,
                              overflow: 'hidden',
                            }
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
      <View style={styles.buttonsFlex}>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('Prescribe')}
          style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Preview</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('Medication')}
          style={styles.nextButtonBackground}>
          <View style={styles.nextButtonFlex}>
            <Text style={styles.nextButtonText}>Medication</Text>
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
  activeSuggestionsText: {
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
export default Diagnosis;
