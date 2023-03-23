import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import {FormNavigation, SaveButton} from '../../../components';

const PersonalDetailsRegistration = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <View style={styles.uploadImage} />
      <Entypo name="camera" style={styles.cameraImage} />
      <View>
        <View style={styles.breadCrumb}>
          <FormNavigation />
        </View>
        <View style={styles.inputDetailsForm}>
          <View style={styles.personalDetailsForm}>
            <View style={styles.nameInput}>
              <View style={styles.nameInputHolder}>
                <FontAwesome
                  name="circle-thin"
                  color="#c8c8c8"
                  style={styles.circleIcon}
                />
                <TextInput
                  placeholderTextColor={'#d3d3d3'}
                  style={styles.inputField}
                  placeholder="First name"
                />
              </View>
              <View style={styles.nameInputHolder}>
                <FontAwesome
                  name="circle-thin"
                  color="#c8c8c8"
                  style={styles.circleIcon}
                />
                <TextInput
                  placeholderTextColor={'#d3d3d3'}
                  style={styles.inputField}
                  placeholder="Last name"
                />
              </View>
            </View>
            <View style={styles.inputHolder}>
              <FontAwesome
                name="circle-thin"
                color="#c8c8c8"
                style={styles.circleIcon}
              />
              <TextInput
                placeholderTextColor={'#d3d3d3'}
                style={styles.inputField}
                placeholder="Enter your mail address"
              />
            </View>
            <View style={styles.inputHolder}>
              <FontAwesome
                name="circle-thin"
                color="#c8c8c8"
                style={styles.circleIcon}
              />
              <TextInput
                placeholderTextColor={'#d3d3d3'}
                style={styles.inputField}
                placeholder="Enter your gender"
              />
            </View>
            <View style={styles.inputHolder}>
              <FontAwesome
                name="circle-thin"
                color="#c8c8c8"
                style={styles.circleIcon}
              />
              <TextInput
                placeholderTextColor={'#d3d3d3'}
                style={styles.inputField}
                placeholder="Enter your date of birth"
              />
            </View>
            <View style={styles.inputHolder}>
              <FontAwesome
                name="circle-thin"
                color="#c8c8c8"
                style={styles.circleIcon}
              />
              <TextInput
                placeholderTextColor={'#d3d3d3'}
                style={styles.inputField}
                placeholder="Enter your headline"
              />
            </View>
            <View style={styles.inputHolder}>
              <FontAwesome
                name="circle-thin"
                color="#c8c8c8"
                style={styles.circleIcon}
              />
              <TextInput
                placeholderTextColor={'#d3d3d3'}
                style={styles.inputField}
                placeholder="Enter your contact number"
              />
            </View>
            <View style={styles.inputHolder}>
              <FontAwesome
                name="circle-thin"
                color="#c8c8c8"
                style={styles.circleIcon}
              />
              <TextInput
                placeholderTextColor={'#d3d3d3'}
                style={styles.inputField}
                placeholder="Enter contact for patients (optional)"
              />
            </View>
          </View>
          <View style={styles.subForms}>
            <View style={styles.subFormsHeading}>
              <Text style={styles.subFormsHeadingText}>About Us</Text>
              <Entypo name="chevron-thin-down" color="black" />
            </View>
            <View style={styles.textAreaContainer}>
              <FontAwesome
                name="circle-thin"
                color="#c8c8c8"
                style={styles.textAreaCircle}
              />
              <TextInput
                multiline={true}
                numberOfLines={4}
                placeholder="Enter your about us details here"
                placeholderTextColor={'#d3d3d3'}
                style={styles.textAreaInput}
              />
            </View>
          </View>
          <View style={styles.subForms}>
            <View style={styles.subFormsHeading}>
              <Text style={styles.subFormsHeadingText}>Specialization</Text>
              <Entypo name="chevron-thin-down" color="black" />
            </View>
            <View style={styles.dropDown}>
              <View style={styles.flexRow}>
                <FontAwesome
                  name="circle-thin"
                  color="#c8c8c8"
                  style={styles.circleIcon}
                />
                <TextInput
                  style={styles.dropDownInput}
                  placeholder="Pulmonologist"
                  placeholderTextColor={'#d3d3d3'}
                />
              </View>
              <Entypo name="chevron-thin-down" color="black" />
            </View>
            <View style={styles.textAreaContainer}>
              <FontAwesome
                name="circle-thin"
                color="#c8c8c8"
                style={styles.textAreaCircle}
              />
              <TextInput
                multiline={true}
                numberOfLines={4}
                placeholder="Enter your about us details here"
                placeholderTextColor={'#d3d3d3'}
                style={styles.textAreaInput}
              />
            </View>
          </View>
          <View style={styles.subForms}>
            <View style={styles.subFormsHeading}>
              <Text style={styles.subFormsHeadingText}>Social Details</Text>
              <Entypo name="chevron-thin-down" color="black" />
            </View>
            <View style={styles.dropDown}>
              <View style={styles.flexRow}>
                <FontAwesome
                  name="circle-thin"
                  color="#c8c8c8"
                  style={styles.circleIcon}
                />
                <TextInput
                  style={styles.dropDownInput}
                  placeholder="Pulmonologist"
                  placeholderTextColor={'#d3d3d3'}
                />
              </View>
              <Entypo name="chevron-thin-down" color="black" />
            </View>
            <View style={styles.dropDown}>
              <View style={styles.flexRow}>
                <FontAwesome
                  name="circle-thin"
                  color="#c8c8c8"
                  style={styles.circleIcon}
                />
                <TextInput
                  style={styles.dropDownInput}
                  placeholder="Pulmonologist"
                  placeholderTextColor={'#d3d3d3'}
                />
              </View>
              <Entypo name="chevron-thin-down" color="black" />
            </View>
          </View>
          <SaveButton />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  uploadImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    backgroundColor: '#1e1262',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 50,
    top: 150,
    left: 125,
    zIndex: 50,
  },
  cameraImage: {
    position: 'absolute',
    top: 215,
    left: 190,
    zIndex: 100,
    fontSize: 20,
    color: '#fff',
  },
  breadCrumb: {
    height: 120,
    marginTop: 10,
    marginBottom: 10,
  },
  inputDetailsForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    position: 'relative',
  },
  personalDetailsForm: {
    paddingTop: 120,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: 'auto',
    marginTop: 50,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    paddingBottom: 20,
  },
  inputField: {
    width: '100%',
    color: '#606060',
  },
  nameInput: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    width: '98%',
  },
  nameInputHolder: {
    height: 42,
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#afafaf',
    borderWidth: 1,
    borderRadius: 8,
    color: '#606060',
    paddingLeft: 15,
  },
  inputHolder: {
    height: 42,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    borderColor: '#afafaf',
    borderWidth: 1,
    borderRadius: 8,
    color: '#606060',
    paddingLeft: 15,
  },
  circleIcon: {
    fontSize: 15,
  },
  subFormsHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
  },
  subForms: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 10,
  },
  subFormsHeadingText: {
    color: '#5a5a5a',
    fontWeight: '600',
    fontSize: 16,
  },
  textAreaContainer: {
    borderColor: '#d8d8d8',
    borderWidth: 1,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    paddingHorizontal: 5,
  },
  textAreaInput: {
    textAlignVertical: 'top',
    color: '#606060',
  },
  textAreaCircle: {
    fontSize: 15,
    paddingTop: 12,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDown: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    gap: 8,
    borderColor: '#d8d8d8',
    borderWidth: 1,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 42,
    marginTop: 10,
    marginBottom: 10,
  },
  dropDownInput: {
    width: '90%',
    color: '#5a5a5a',
  },
});

export default PersonalDetailsRegistration;
