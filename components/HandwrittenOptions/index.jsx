import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constants/colors';

import CheckBox from '@react-native-community/checkbox';

const HandwrittenOptions = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.lightText}>Upload Hand-Written Prescription</Text>
        <Text style={styles.darkText}>
          Upload photo of Hand-Written Prescription{'\n'} directly from here
        </Text>
        <View style={styles.box}>
          <Text style={styles.boxText}>Upload</Text>
        </View>
        <View style={styles.checkBox}>
          <CheckBox
            tintColors={{true: Colors.lightPurple, false: Colors.slate_300}}
            onChange={() => setToggleCheckBox(!toggleCheckBox)}
            value={toggleCheckBox}
          />
          <Text style={styles.checkBoxText}>
            Share Prescription with patient
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonBackground}>
          <Text style={styles.buttonText}>End Consultation</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  lightText: {
    marginHorizontal: '22%',
    marginTop: '20%',
    marginBottom: '5%',
    fontWeight: '500',
    color: Colors.black,
  },
  darkText: {
    marginHorizontal: '15%',
    fontWeight: '500',
    color: Colors.gray_400,
  },
  box: {
    height: 220,
    width: 220,
    borderStyle: 'dashed',
    borderColor: Colors.darkPurple,
    borderWidth: 1,
    marginTop: '5%',
    margin: '23%',
    marginBottom: '0%',
    borderRadius: 10,
    backgroundColor: Colors.purple_200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    fontSize: 25,
    color: Colors.darkPurple,
    fontWeight: '700',
  },
  checkBox: {
    flexDirection: 'row',
    margin: '19%',
    marginLeft: '22%',
    marginBottom: '2%',
    alignItems: 'center',
  },
  checkBoxText: {
    color: Colors.gray_200,
    fontWeight: '500',
  },
  buttonBackground: {
    marginHorizontal: '32%',
    marginBottom: '10%',
    width: '40%',
    paddingVertical: 15,
    backgroundColor: Colors.darkPurple,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.gray_500,
  },
});

export default HandwrittenOptions;
