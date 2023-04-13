import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../../constants/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const frequencyOptions = [
  {
    id: 1,
    name: '1-0-0',
  },
  {
    id: 2,
    name: '0-1-0',
  },
  {
    id: 3,
    name: '0-0-1',
  },
  {
    id: 4,
    name: '1-1-1',
  },
  {
    id: 5,
    name: '1-1-0',
  },
  {
    id: 6,
    name: '0-1-1',
  },
  {
    id: 7,
    name: '1-0-1',
  },
  {
    id: 8,
    name: '0-0-0',
  },
];

const durationOptions = [
  {
    id: 1,
    name: 'Days',
  },
  {
    id: 2,
    name: 'Weeks',
  },
  {
    id: 3,
    name: 'Months',
  },
  {
    id: 4,
    name: 'Years',
  },
];

const timingOptions = [
  {
    id: 1,
    name: 'Before Food',
  },
  {
    id: 2,
    name: 'After Food',
  },
  {
    id: 3,
    name: 'Any time of day',
  },
  {
    id: 4,
    name: 'Before lunch/dinner',
  },
  {
    id: 5,
    name: 'After lunch/dinner',
  },
  {
    id: 6,
    name: 'Empty stomach',
  },
  {
    id: 7,
    name: 'Severe pain',
  },
  {
    id: 8,
    name: 'At night',
  },
];

const MedicationOptions = ({
  modalVisible,
  setModalVisible,
  modalItem,
  allMedicineItems,
  setAllMedicineItems,
}) => {
  const [count, setCount] = useState(1);
  const handleCountMinus = () => {
    if (count != 1) {
      setCount(count - 1);
    }
  };

  const [items, setItems] = useState({
    medicineName: '',
    combinations: '',
    frequency: '',
    quantity: '',
    count: 1,
    duration: '',
    timings: '',
    instructions: '',
  });
  const medicationItems = useSelector(
    state => state.prescriptionReducer.medication,
  );

  useEffect(() => {
    console.log(items);
  }, [items]);
  useEffect(() => {
    setItems(prevState => ({
      ...prevState,
      count: count,
      medicineName: modalItem,
    }));
  }, [count, modalItem]);

  const dispatch = useDispatch();

  const dispatchData = () => {
    setAllMedicineItems([...allMedicineItems, items]);
    dispatch({
      type: 'SET_MEDICATION',
      medication: items,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.navigation}>
          <Text style={styles.navigationText}>{modalItem}</Text>
          <Pressable onPressIn={() => setModalVisible(!modalVisible)}>
            <MaterialIcons
              name="close"
              color={Colors.black}
              style={styles.closeIcon}
            />
          </Pressable>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTopText}>Combinations</Text>
          <Text style={styles.bodyTopColorText}>Clear Selection</Text>
        </View>
        <TouchableOpacity
          onPressIn={() =>
            setItems(prevState => ({
              ...prevState,
              combinations: '0-0-1 For 5 days , A...',
            }))
          }
          style={
            items.combinations === '0-0-1 For 5 days , A...'
              ? styles.activeButton
              : styles.notActiveButton
          }>
          <Text
            style={
              items.combinations === '0-0-1 For 5 days , A...'
                ? styles.activeButtonText
                : styles.notActiveButtonText
            }>
            0-0-1 For 5 days , A...{' '}
          </Text>
        </TouchableOpacity>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTopText}>Frequency</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 10,
            marginVertical: '2%',
          }}>
          {frequencyOptions.length > 0 &&
            frequencyOptions.map(option => (
              <TouchableOpacity
                onPressIn={() =>
                  setItems(prevState => ({
                    ...prevState,
                    frequency: option.name,
                  }))
                }
                key={option.id}
                style={
                  items.frequency === option.name
                    ? {
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
                      }
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
                    items.frequency === option.name
                      ? {
                          fontSize: 15,
                          fontWeight: '500',
                          color: Colors.darkPurple,
                          width: 50,
                          textAlign: 'center',
                        }
                      : {
                          fontSize: 15,
                          fontWeight: '500',
                          color: Colors.gray_500,
                          width: 50,
                          textAlign: 'center',
                        }
                  }>
                  {option.name}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
        <TouchableOpacity style={styles.customButton}>
          <Text style={styles.customButtonText}>Custom</Text>
          <MaterialIcons
            name="edit"
            color={Colors.darkPurple}
            style={styles.editIcon}
          />
        </TouchableOpacity>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTopText}>Quantity</Text>
        </View>
        <TextInput
          onChangeText={text =>
            setItems(prevState => ({...prevState, quantity: text}))
          }
          style={styles.boxText}
          placeholder="1 Tab/1 Tsp/5 ml"
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTopText}>Duration</Text>
        </View>
        <View style={styles.durationContainer}>
          <Pressable
            onPressIn={handleCountMinus}
            style={styles.numberTextContainer}>
            <AntDesign
              name="minus"
              color={Colors.black}
              style={styles.minusIcon}
            />
          </Pressable>
          <View style={styles.numberTextContainer}>
            <Text style={styles.numberText}>{count}</Text>
          </View>
          <Pressable
            onPressIn={() => setCount(count + 1)}
            style={styles.numberTextContainer}>
            <MaterialIcons
              name="add"
              color={Colors.black}
              style={styles.minusIcon}
            />
          </Pressable>
          {durationOptions.length > 0 &&
            durationOptions.map(option => (
              <TouchableOpacity
                onPressIn={() =>
                  setItems(prevState => ({...prevState, duration: option.name}))
                }
                key={option.id}>
                <Text
                  style={
                    items.duration === option.name
                      ? {
                          color: Colors.darkPurple,
                          borderColor: Colors.lightPurple,
                          backgroundColor: Colors.purple_100,
                          borderWidth: 1,
                          fontWeight: '500',
                          paddingHorizontal: '4.4%',
                          paddingVertical: '2%',
                        }
                      : styles.weeksText
                  }>
                  {option.name}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTopText}>Timings</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 10,
            marginVertical: '2%',
          }}>
          {timingOptions.length > 0 &&
            timingOptions.map(option => (
              <TouchableOpacity
                onPressIn={() =>
                  setItems(prevState => ({...prevState, timings: option.name}))
                }
                key={option.id}
                style={
                  items.timings === option.name
                    ? {
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
                      }
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
                    items.timings === option.name
                      ? {
                          fontSize: 14,
                          fontWeight: '500',
                          color: Colors.darkPurple,
                        }
                      : {
                          fontSize: 14,
                          fontWeight: '500',
                          color: Colors.gray_500,
                        }
                  }>
                  {option.name}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
        <TouchableOpacity style={styles.customButton}>
          <Text style={styles.customButtonText}>Custom</Text>
          <MaterialIcons
            name="edit"
            color={Colors.darkPurple}
            style={styles.editIcon}
          />
        </TouchableOpacity>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTopText}>Instructions(optional)</Text>
        </View>
        <TextInput
          onChangeText={text =>
            setItems(prevState => ({...prevState, instructions: text}))
          }
          style={styles.boxText}
          placeholder="Enter instructions here"
        />
        <TouchableOpacity
          onPressIn={dispatchData}
          style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Add Medicine</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.gray_100,
  },
  card: {
    width: '100%',
    height: 'auto',
    marginTop: '15%',
    paddingHorizontal: '5%',
    padding: '3%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navigation: {
    // marginHorizontal: '5%',
    // margin: '3%',
    paddingBottom: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Colors.gray_200,
    borderBottomWidth: 1,
  },
  navigationText: {
    fontSize: 17,
    fontWeight: '500',
    color: Colors.black,
  },
  closeIcon: {
    fontSize: 22,
  },
  bodyContainer: {
    marginVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bodyTopText: {
    fontSize: 15,
    color: Colors.black,
  },
  bodyTopColorText: {
    fontSize: 15,
    color: Colors.red,
  },
  notActiveButton: {
    borderWidth: 1,
    borderColor: Colors.gray_200,
    backgroundColor: Colors.white,
    borderRadius: 5,
    width: '47%',
  },
  activeButton: {
    borderWidth: 1,
    borderColor: Colors.lightPurple,
    backgroundColor: Colors.purple_100,
    borderRadius: 5,
    width: '47%',
  },
  notActiveButtonText: {
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    fontSize: 15,
    fontWeight: '500',
    color: Colors.gray_500,
  },
  activeButtonText: {
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    fontSize: 15,
    fontWeight: '500',
    color: Colors.darkPurple,
  },
  flexButtonsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: '5%',
  },
  flexButtons: {
    borderWidth: 1,
    borderColor: Colors.gray_200,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  flexButtonsText: {
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    fontSize: 15,
    fontWeight: '500',
    color: Colors.gray_600,
  },
  timingButtonsText: {
    paddingHorizontal: '3.3%',
    paddingVertical: '2%',
    fontSize: 15,
    fontWeight: '500',
    color: Colors.gray_600,
  },
  timingButtonsColorText: {
    paddingHorizontal: '3.3%',
    paddingVertical: '2%',
    fontSize: 15,
    fontWeight: '500',
    color: Colors.darkPurple,
  },
  flexButtonsColor: {
    borderWidth: 1,
    borderColor: Colors.darkPurple,
    backgroundColor: Colors.purple_100,
    borderRadius: 5,
  },
  flexButtonsColorText: {
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    fontSize: 15,
    fontWeight: '500',
    color: Colors.darkPurple,
  },
  customButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray_200,
    backgroundColor: Colors.white,
    borderRadius: 5,
    width: '30%',
    marginBottom: '5%',
    marginTop: '1%',
  },
  customButtonText: {
    paddingHorizontal: '10%',
    paddingVertical: '8%',
    fontSize: 15,
    fontWeight: '500',
    color: Colors.gray_600,
  },
  editIcon: {
    fontSize: 18,
  },
  boxText: {
    borderWidth: 1,
    borderColor: Colors.gray_100,
    borderRadius: 5,
    paddingLeft: 15,
  },
  durationContainer: {
    flexDirection: 'row',
    borderColor: Colors.gray_200,
    borderWidth: 1,
    borderRadius: 5,
  },
  numberTextContainer: {
    backgroundColor: Colors.gray_200,
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  minusIcon: {
    fontSize: 15,
    color: Colors.black,
  },
  numberText: {
    fontSize: 15,
    color: Colors.black,
  },
  daysText: {
    borderWidth: 1,
    borderColor: Colors.darkPurple,
    borderRadius: 5,
    backgroundColor: Colors.purple_100,
    color: Colors.darkPurple,
    fontWeight: '500',
    paddingHorizontal: '4.4%',
    paddingVertical: '2%',
  },
  weeksText: {
    color: Colors.gray_500,
    fontWeight: '500',
    paddingHorizontal: '4.4%',
    paddingVertical: '2%',
  },
  buttonBackground: {
    // marginHorizontal: '10%',
    marginTop: '5%',
    width: '100%',
    paddingVertical: 15,
    backgroundColor: Colors.darkPurple,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default MedicationOptions;
