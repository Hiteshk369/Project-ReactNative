import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';
import {FormNavigation, SaveButton} from '../../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
const BankingDetailsRegistration = () => {
  return (
    <LinearGradient
      colors={[Colors.darkPurple, Colors.lightPurple]}
      style={styles.gradient}>
      <ScrollView style={styles.container}>
        <View style={styles.breadCrumb}>
          <FormNavigation />
        </View>
        <View style={styles.inputFormContainer}>
          <View style={styles.inputForm}>
            <View style={styles.inputHolder}>
              <FontAwesome name="circle-thin" style={styles.circleIcon} />
              <TextInput
                placeholderTextColor={Colors.gray_100}
                style={styles.inputField}
                placeholder="Bank Name"
              />
            </View>
            <View style={styles.inputHolder}>
              <View style={styles.dropdown}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TextInput
                  placeholderTextColor={Colors.gray_100}
                  style={styles.inputField}
                  placeholder="Select account type"
                />
              </View>
              <Entypo name="chevron-thin-down" color={Colors.gray_700} />
            </View>
            <View style={styles.inputHolder}>
              <FontAwesome name="circle-thin" style={styles.circleIcon} />
              <TextInput
                placeholderTextColor={Colors.gray_100}
                style={styles.inputField}
                placeholder="Name as per bank records"
              />
            </View>
            <View style={styles.inputHolder}>
              <FontAwesome name="circle-thin" style={styles.circleIcon} />
              <TextInput
                placeholderTextColor={Colors.gray_100}
                style={styles.inputField}
                placeholder="Enter your bank records"
              />
            </View>
            <View style={styles.inputHolder}>
              <FontAwesome name="circle-thin" style={styles.circleIcon} />
              <TextInput
                placeholderTextColor={Colors.gray_100}
                style={styles.inputField}
                placeholder="Enter bank IFSC"
              />
            </View>
            <View style={styles.inputHolder}>
              <FontAwesome name="circle-thin" style={styles.circleIcon} />
              <TextInput
                placeholderTextColor={Colors.gray_100}
                style={styles.inputField}
                placeholder="Enter your PAN"
              />
            </View>
          </View>
        </View>
        <View style={styles.uploadsContainer}>
          <Text style={styles.uploadHeading}>
            PAN Card<Text style={styles.lightredColor}>*</Text>
          </Text>
          <TouchableOpacity style={styles.uploadFileButton}>
            <Feather style={styles.uploadIcon} name="upload" />
            <Text style={styles.uploadFileText}>UploadFile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.uploadsContainer}>
          <Text style={styles.uploadHeading}>
            Cancelled cheque<Text style={styles.lightredColor}>*</Text>
          </Text>
          <TouchableOpacity style={styles.uploadFileButton}>
            <Feather style={styles.uploadIcon} name="upload" />
            <Text style={styles.uploadFileText}>UploadFile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.saveButton}>
          <SaveButton />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  breadCrumb: {
    height: 120,
    marginTop: 10,
    marginBottom: 10,
  },
  inputFormContainer: {
    alignItems: 'center',
  },
  inputForm: {
    width: '95%',
    height: 'auto',
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 25,
    paddingBottom: 25,
    gap: 8,
  },
  inputHolder: {
    height: 42,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    borderColor: Colors.slate_300,
    borderWidth: 1,
    borderRadius: 8,
    color: Colors.gray_700,
    paddingLeft: 15,
  },
  circleIcon: {
    fontSize: 15,
    color: Colors.slate_200,
  },
  inputField: {
    width: '100%',
    color: Colors.gray_700,
  },
  dropdown: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  uploadsContainer: {
    marginVertical: '5%',
    marginHorizontal: '5%',
    width: '90%',
    gap: 4,
  },
  uploadHeading: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.slate_300,
  },
  lightredColor: {
    color: Colors.lightRed,
  },
  uploadFileButton: {
    marginTop: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 16,
    width: '50%',
    paddingVertical: 12,
    gap: 6,
  },
  uploadFileText: {
    fontSize: 16,
    color: Colors.slate_200,
  },
  uploadIcon: {
    color: Colors.slate_200,
    fontSize: 18,
  },
  saveButton: {
    marginTop: 15,
    marginBottom: 40,
    marginHorizontal: 10,
  },
});

export default BankingDetailsRegistration;
