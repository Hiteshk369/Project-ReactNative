import {View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';

const MedicationOptions = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.navigation}>
          <Text style={styles.navigationText}>AZEE 500MG TAB</Text>
          <MaterialIcons
            name="close"
            color={Colors.black}
            style={styles.closeIcon}
          />
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTopText}>Combinations</Text>
          <Text style={styles.bodyTopColorText}>Clear Selection</Text>
        </View>
        <TouchableOpacity style={styles.activeButton}>
          <Text style={styles.activeButtonText}>0-0-1 For 5 days , A... </Text>
        </TouchableOpacity>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTopText}>Frequency</Text>
        </View>
        <View style={styles.flexButtonsContainer}>
          <TouchableOpacity style={styles.flexButtons}>
            <Text style={styles.flexButtonsText}>1-0-0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexButtons}>
            <Text style={styles.flexButtonsText}>1-0-0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexButtonsColor}>
            <Text style={styles.flexButtonsColorText}>1-0-0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexButtons}>
            <Text style={styles.flexButtonsText}>1-0-0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexButtonsContainer}>
          <TouchableOpacity style={styles.flexButtons}>
            <Text style={styles.flexButtonsText}>1-0-0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexButtons}>
            <Text style={styles.flexButtonsText}>1-0-0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexButtons}>
            <Text style={styles.flexButtonsText}>1-0-0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexButtons}>
            <Text style={styles.flexButtonsText}>1-0-0</Text>
          </TouchableOpacity>
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
        <TextInput style={styles.boxText} placeholder="    1 Tab/1 Tsp/5 ml" />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTopText}>Duration</Text>
        </View>
        <View style={styles.durationContainer}>
          <TouchableOpacity style={styles.numberTextContainer}>
            <AntDesign
              name="minus"
              color={Colors.black}
              style={styles.minusIcon}
            />
            <Text style={styles.numberText}>5</Text>
            <MaterialIcons
              name="add"
              color={Colors.black}
              style={styles.minusIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.daysText}>Days</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.weeksText}>Weeks</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.weeksText}>Months</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.weeksText}>Years</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTopText}>Timings</Text>
        </View>
        <View style={styles.flexButtonsContainer}>
          <TouchableOpacity style={styles.flexButtons}>
            <Text style={styles.timingButtonsText}>Before food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexButtonsColor}>
            <Text style={styles.timingButtonsColorText}>After food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexButtons}>
            <Text style={styles.timingButtonsText}>Any time of day</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexButtonsContainer}>
          <TouchableOpacity style={styles.flexButtons}>
            <Text style={styles.timingButtonsText}>Before lunch/dinner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexButtons}>
            <Text style={styles.timingButtonsText}>after lunch/dinner</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexButtonsContainer}>
          <TouchableOpacity style={styles.flexButtons}>
            <Text style={styles.timingButtonsText}>Empty stomach</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexButtons}>
            <Text style={styles.timingButtonsText}>Severe pain</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexButtons}>
            <Text style={styles.timingButtonsText}>At night</Text>
          </TouchableOpacity>
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
          style={styles.boxText}
          placeholder="    Enter instructions here"
        />
        <TouchableOpacity style={styles.buttonBackground}>
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
  activeButton: {
    borderWidth: 1,
    borderColor: Colors.darkPurple,
    backgroundColor: Colors.purple_100,
    borderRadius: 5,
    width: '47%',
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
    color: Colors.gray_400,
  },
  timingButtonsText: {
    paddingHorizontal: '3.3%',
    paddingVertical: '2%',
    fontSize: 15,
    fontWeight: '500',
    color: Colors.gray_400,
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
  },
  customButtonText: {
    paddingHorizontal: '10%',
    paddingVertical: '8%',
    fontSize: 15,
    fontWeight: '500',
    color: Colors.gray_200,
  },
  editIcon: {
    fontSize: 18,
  },
  boxText: {
    borderWidth: 1,
    borderColor: Colors.gray_100,
    borderRadius: 5,
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
    color: Colors.gray_200,
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
