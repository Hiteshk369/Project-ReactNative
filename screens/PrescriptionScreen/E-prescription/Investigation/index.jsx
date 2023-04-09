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
import {useState} from 'react';
import {useEffect} from 'react';

const suggestions = [
  {
    id: 1,
    name: 'As advised',
  },
  {
    id: 2,
    name: 'Cbc with esr',
  },
  {
    id: 3,
    name: 'Cbc',
  },
  {
    id: 4,
    name: 'Crp',
  },
  {
    id: 5,
    name: 'Chest x-ray',
  },
  {
    id: 6,
    name: 'Complete blood picture',
  },
  {
    id: 7,
    name: 'Usg whole abdomen',
  },
  {
    id: 8,
    name: 'Lft',
  },
  {
    id: 9,
    name: 'Ecg',
  },
  {
    id: 10,
    name: 'Kft',
  },
  {
    id: 11,
    name: 'Chest x-ray pav',
  },
  {
    id: 12,
    name: 'Cbp',
  },
  {
    id: 13,
    name: 'Rt pcr',
  },
  {
    id: 14,
    name: 'Hrct chest',
  },
  {
    id: 15,
    name: 'Nothing required',
  },
];

const Investigation = ({navigation}) => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  const updateItemsInvestigation = data => {
    if (items.includes(data)) {
      setItems(items.filter(item => item !== data));
    } else {
      setItems([...items, data]);
    }
  };

  useEffect(() => {
    dispatch({
      type: 'SET_INVESTIGATION',
      investigation: items,
    });
  }, [items, dispatch]);

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
                      <Pressable
                        onPressIn={() => updateItemsInvestigation(data)}>
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
                    onPressIn={() => updateItemsInvestigation(suggestion.name)}
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
                              maxWidth: 150,
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
export default Investigation;
