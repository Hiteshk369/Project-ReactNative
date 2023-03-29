import {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';
import {FormNavigation, SaveButton} from '../../../components';
import {Colors} from '../../../constants/colors';

import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const ExperienceDetailsRegistration = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <LinearGradient
      colors={[Colors.darkPurple, Colors.lightPurple]}
      style={styles.gradient}>
      <ScrollView style={styles.container}>
        <View style={styles.breadCrumb}>
          <FormNavigation />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.whiteFormContainer}>
            <View style={styles.inputHolder}>
              <FontAwesome name="circle-thin" style={styles.circleIcon} />
              <TextInput
                placeholderTextColor={Colors.gray_100}
                style={styles.inputField}
                placeholder="Umar"
              />
            </View>
            <View style={styles.textAreaContainer}>
              <FontAwesome name="circle-thin" style={styles.textAreaCircle} />
              <TextInput
                multiline={true}
                numberOfLines={4}
                placeholder="Experience details"
                placeholderTextColor={Colors.gray_100}
                style={styles.textAreaInput}
              />
            </View>
            <View style={styles.dateInput}>
              <View style={styles.dateInputHolder}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TextInput
                  placeholderTextColor={Colors.gray_100}
                  style={styles.inputField}
                  placeholder="From mm/yy"
                />
              </View>
              <View style={styles.dateInputHolder}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TextInput
                  placeholderTextColor={Colors.gray_100}
                  style={styles.inputField}
                  placeholder="To mm/yy"
                />
              </View>
            </View>
            <View style={styles.addExperienceContainer}>
              <View style={styles.flexRowContainer}>
                <CheckBox
                  tintColors={{
                    true: Colors.lightPurple,
                    false: Colors.lightPurple,
                  }}
                  onChange={() => setToggleCheckBox(!toggleCheckBox)}
                  value={toggleCheckBox}
                />
                <Text>Present</Text>
              </View>
              <View style={styles.flexRowContainer}>
                <AntDesign style={styles.plusIcon} name="pluscircle" />
                <Text style={styles.text}>Add Experience</Text>
              </View>
            </View>
          </View>
          <View style={styles.whiteFormContainer}>
            <View style={styles.spaceBetweenContainer}>
              <Text style={styles.subHeading}>Education Details</Text>
              <Entypo name="chevron-thin-down" style={styles.chevron} />
            </View>
            <View style={styles.line} />
            <View style={styles.inputHolder}>
              <View style={styles.dropdown}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TextInput
                  placeholderTextColor={Colors.gray_100}
                  style={styles.inputField}
                  placeholder="Select your institute"
                />
              </View>
              <Entypo name="chevron-thin-down" color={Colors.gray_700} />
            </View>
            <View style={styles.inputHolder}>
              <View style={styles.dropdown}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TextInput
                  placeholderTextColor={Colors.gray_100}
                  style={styles.inputField}
                  placeholder="Select degree"
                />
              </View>
              <Entypo name="chevron-thin-down" color={Colors.gray_700} />
            </View>
            <View style={styles.dateInput}>
              <View style={styles.dateInputHolder}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TextInput
                  placeholderTextColor={Colors.gray_100}
                  style={styles.inputField}
                  placeholder="From year"
                />
              </View>
              <View style={styles.dateInputHolder}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TextInput
                  placeholderTextColor={Colors.gray_100}
                  style={styles.inputField}
                  placeholder="To year"
                />
              </View>
            </View>
            <View style={styles.flexEndContainer}>
              <View style={styles.rightFlexRowContainer}>
                <AntDesign style={styles.plusIcon} name="pluscircle" />
                <Text style={styles.text}>Add Experience</Text>
              </View>
            </View>
          </View>
          <View style={styles.whiteFormContainer}>
            <View style={styles.spaceBetweenContainer}>
              <Text style={styles.subHeading}>Additional Specialization</Text>
              <Entypo name="chevron-thin-down" style={styles.chevron} />
            </View>
            <View style={styles.line} />
            <View style={styles.inputHolder}>
              <View style={styles.dropdown}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TextInput
                  placeholderTextColor={Colors.gray_100}
                  style={styles.inputField}
                  placeholder="Select your additional specialization"
                />
              </View>
              <Entypo name="chevron-thin-down" color={Colors.gray_700} />
            </View>
            <View style={styles.flexEndContainer}>
              <View style={styles.rightFlexRowContainer}>
                <AntDesign style={styles.plusIcon} name="pluscircle" />
                <Text style={styles.text}>Add Experience</Text>
              </View>
            </View>
          </View>
          <View style={styles.saveButtonContainer}>
            <SaveButton />
          </View>
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
  formContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  whiteFormContainer: {
    width: '95%',
    height: 'auto',
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
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
    marginVertical: 3,
  },
  circleIcon: {
    fontSize: 15,
    color: Colors.slate_200,
  },
  inputField: {
    width: '100%',
    color: Colors.gray_700,
  },
  textAreaContainer: {
    borderColor: Colors.slate_300,
    borderWidth: 1,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 5,
    paddingLeft: 12,
    marginTop: 12,
  },
  textAreaInput: {
    textAlignVertical: 'top',
    color: Colors.gray_700,
  },
  textAreaCircle: {
    fontSize: 15,
    paddingTop: 12,
    color: Colors.slate_200,
  },
  dateInput: {
    display: 'flex',
    flexDirection: 'row',
    gap: 14,
    width: '100%',
  },
  dateInputHolder: {
    height: 42,
    width: '48%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.slate_300,
    borderWidth: 1,
    borderRadius: 8,
    color: Colors.gray_700,
    paddingLeft: 15,
  },
  addExperienceContainer: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  flexRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  plusIcon: {
    color: Colors.darkPurple,
    fontSize: 20,
  },
  text: {
    color: Colors.darkPurple,
    fontWeight: '500',
    fontSize: 14,
  },
  spaceBetweenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '96%',
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
    paddingBottom: 4,
  },
  chevron: {
    color: Colors.darkPurple,
    fontSize: 15,
  },
  line: {
    borderColor: Colors.gray_700,
    borderWidth: 0.4,
    width: '100%',
  },
  dropdown: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexEndContainer: {
    width: '100%',
  },
  rightFlexRowContainer: {
    marginTop: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginLeft: 'auto',
    marginRight: '1%',
  },
  saveButtonContainer: {
    width: '96%',
    marginTop: '3%',
    marginBottom: '8%',
  },
});
export default ExperienceDetailsRegistration;
