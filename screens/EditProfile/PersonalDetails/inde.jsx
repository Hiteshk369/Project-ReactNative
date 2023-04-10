import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useState} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {FormNavigation, SaveButton} from '../../../components';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';

const SpecializationOptions = [
  {
    id: 1,
    name: 'Pulmonologist',
  },
];

const LanguagesOptions = [
  {
    id: 1,
    name: 'English',
  },
  {
    id: 2,
    name: 'Hindi',
  },
  {
    id: 3,
    name: 'Telugu',
  },
];

const yourWebsiteOptions = [
  {
    id: 1,
    name: 'Github',
  },
];

const PersonalDetails = () => {
  const [specializationDropdown, setSpecializationDropdown] = useState(false);
  const [specializationOption, setSpecializationOption] =
    useState('Pulmonologist');
  const [languagesDropdown, setLanguagesDropdown] = useState(false);
  const [languagesOption, setLanguagesOption] = useState('Languages Known');
  const [yourWebsiteDropdown, setYourWebsiteDropdown] = useState(false);
  const [yourWebsiteOption, setYourWebsiteOption] = useState('Your Website');
  return (
    <LinearGradient
      colors={[Colors.darkPurple, Colors.lightPurple]}
      style={styles.gradient}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <View style={styles.uploadImage} />
        <TouchableOpacity style={styles.buttonBackground}>
          <MaterialIcons name="mode-edit" color={'white'} />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <View style={styles.wholeContainer}>
          <View style={styles.breadCrumb}>
            <FormNavigation />
          </View>
          <View style={styles.inputDetailsForm}>
            <View style={styles.personalDetailsForm}>
              <View style={styles.nameInput}>
                <View style={styles.nameInputHolder}>
                  <FontAwesome name="circle-thin" style={styles.circleIcon} />
                  <TextInput
                    placeholderTextColor={Colors.gray_100}
                    style={styles.inputField}
                    placeholder="First name"
                  />
                </View>
                <View style={styles.nameInputHolder}>
                  <FontAwesome name="circle-thin" style={styles.circleIcon} />
                  <TextInput
                    placeholderTextColor={Colors.gray_100}
                    style={styles.inputField}
                    placeholder="Last name"
                  />
                </View>
              </View>
              <View style={styles.inputHolder}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TextInput
                  placeholderTextColor={Colors.gray_100}
                  style={styles.inputField}
                  placeholder="Enter your mail address"
                />
              </View>
              <View style={styles.inputHolder}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TextInput
                  placeholderTextColor={Colors.gray_100}
                  style={styles.inputField}
                  placeholder="Enter your gender"
                />
              </View>
              <View style={styles.inputHolder}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TextInput
                  placeholderTextColor={Colors.gray_100}
                  style={styles.inputField}
                  placeholder="Enter your date of birth"
                />
              </View>
              <View style={styles.inputHolder}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TextInput
                  placeholderTextColor={Colors.gray_100}
                  style={styles.inputField}
                  placeholder="Enter your headline"
                />
              </View>
              <View style={styles.inputHolder}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TextInput
                  placeholderTextColor={Colors.gray_100}
                  style={styles.inputField}
                  placeholder="Enter your contact number"
                />
              </View>
              <View style={styles.inputHolder}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TextInput
                  placeholderTextColor={Colors.gray_100}
                  style={styles.inputField}
                  placeholder="Enter contact for patients (optional)"
                />
              </View>
            </View>
            <View style={styles.subForms}>
              <View style={styles.subFormsHeading}>
                <Text style={styles.subFormsHeadingText}>About Us</Text>
                <TouchableOpacity>
                  <Entypo name="chevron-thin-down" color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.textAreaContainer}>
                <FontAwesome name="circle-thin" style={styles.textAreaCircle} />
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  placeholder="Enter your about us details here"
                  placeholderTextColor={Colors.gray_100}
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
                  <FontAwesome name="circle-thin" style={styles.circleIcon} />
                  <TouchableOpacity
                    style={styles.rightDropDown}
                    onPressIn={() =>
                      setSpecializationDropdown(!specializationDropdown)
                    }>
                    <Text style={styles.textAreaInput}>
                      {' '}
                      {specializationOption}
                    </Text>
                    {specializationDropdown ? (
                      <Entypo name="chevron-thin-up" color="black" />
                    ) : (
                      <Entypo name="chevron-thin-down" color="black" />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              {specializationDropdown ? (
                <View style={styles.dropDownArea}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <FlatList
                      data={SpecializationOptions}
                      renderItem={({item, index}) => {
                        return (
                          <TouchableOpacity
                            style={styles.dropDownText}
                            onPressIn={() => {
                              setSpecializationOption(item.name);
                              setSpecializationDropdown(false);
                            }}>
                            <Text style={styles.dropDownTextColor}>
                              {item.name}
                            </Text>
                          </TouchableOpacity>
                        );
                      }}
                    />
                  </ScrollView>
                </View>
              ) : null}
              <View style={styles.textAreaContainer}>
                <FontAwesome name="circle-thin" style={styles.textAreaCircle} />
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  placeholder="Enter your about us details here"
                  placeholderTextColor={Colors.gray_100}
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
                  <FontAwesome name="circle-thin" style={styles.circleIcon} />
                  <TouchableOpacity
                    style={styles.rightDropDown}
                    onPressIn={() => setLanguagesDropdown(!languagesDropdown)}>
                    <Text style={styles.textAreaInput}> {languagesOption}</Text>
                    {languagesDropdown ? (
                      <Entypo name="chevron-thin-up" color="black" />
                    ) : (
                      <Entypo name="chevron-thin-down" color="black" />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              {languagesDropdown ? (
                <View style={styles.dropDownArea}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <FlatList
                      data={LanguagesOptions}
                      renderItem={({item, index}) => {
                        return (
                          <TouchableOpacity
                            style={styles.dropDownText}
                            onPressIn={() => {
                              setLanguagesOption(item.name);
                              setLanguagesDropdown(false);
                            }}>
                            <Text style={styles.dropDownTextColor}>
                              {item.name}
                            </Text>
                          </TouchableOpacity>
                        );
                      }}
                    />
                  </ScrollView>
                </View>
              ) : null}
              <View style={styles.dropDown}>
                <View style={styles.flexRow}>
                  <FontAwesome name="circle-thin" style={styles.circleIcon} />
                  <TouchableOpacity
                    style={styles.rightDropDown}
                    onPressIn={() =>
                      setYourWebsiteDropdown(!yourWebsiteDropdown)
                    }>
                    <Text style={styles.textAreaInput}>
                      {' '}
                      {yourWebsiteOption}
                    </Text>
                    {yourWebsiteDropdown ? (
                      <Entypo name="chevron-thin-up" color="black" />
                    ) : (
                      <Entypo name="chevron-thin-down" color="black" />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              {yourWebsiteDropdown ? (
                <View style={styles.dropDownArea}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <FlatList
                      data={yourWebsiteOptions}
                      renderItem={({item, index}) => {
                        return (
                          <TouchableOpacity
                            style={styles.dropDownText}
                            onPressIn={() => {
                              setYourWebsiteOption(item.name);
                              setYourWebsiteDropdown(false);
                            }}>
                            <Text style={styles.dropDownTextColor}>
                              {item.name}
                            </Text>
                          </TouchableOpacity>
                        );
                      }}
                    />
                  </ScrollView>
                </View>
              ) : null}
            </View>
            {/* <View style={styles.saveButtonContainer}>
              <SaveButton nextScreen="VerificationRegistration" />
            </View> */}
            <TouchableOpacity style={styles.bottomButtonBackground}>
              <Text style={styles.bottomButtonText}>Update</Text>
            </TouchableOpacity>
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
    // position: 'relative',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  wholeContainer: {
    height: 1500,
  },
  uploadImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    backgroundColor: Colors.darkPurple,
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 50,
    top: '11%',
    alignSelf: 'center',
    zIndex: 50,
  },
  buttonBackground: {
    position: 'absolute',
    top: '19%',
    alignSelf: 'center',
    zIndex: 100,
    fontSize: 20,
    color: Colors.white,
    backgroundColor: Colors.darkPurple,
    marginBottom: '4%',
    width: '25%',
    paddingVertical: 2,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.white,
  },
  breadCrumb: {
    height: '9%',
    marginVertical: '3%',
  },
  inputDetailsForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    position: 'relative',
    width: '90%',
    height: '90%',
    marginHorizontal: '5%',
  },
  personalDetailsForm: {
    paddingTop: '30%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: '36%',
    marginTop: '15%',
    padding: '3%',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    paddingBottom: '5%',
  },
  inputField: {
    width: '100%',
    color: Colors.gray_700,
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
    borderColor: Colors.slate_300,
    borderWidth: 1,
    borderRadius: 8,
    color: Colors.gray_700,
    paddingLeft: '5%',
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
    paddingLeft: '5%',
  },
  circleIcon: {
    fontSize: 15,
    color: Colors.slate_200,
  },
  rightDropDown: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subFormsHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.slate_300,
  },
  subForms: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '5%',
  },
  subFormsHeadingText: {
    color: Colors.gray_600,
    fontWeight: '600',
    fontSize: 16,
  },
  textAreaContainer: {
    borderColor: Colors.slate_300,
    borderWidth: 1,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    margin: '5%',
    paddingHorizontal: '2%',
  },
  textAreaInput: {
    textAlignVertical: 'top',
    color: Colors.gray_100,
  },
  textAreaCircle: {
    fontSize: 15,
    paddingTop: '4%',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDown: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: '5%',
    gap: 8,
    borderColor: Colors.slate_300,
    borderWidth: 1,
    paddingHorizontal: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 42,
    marginTop: '5%',
    // marginBottom: 10,
  },
  dropDownArea: {
    flexDirection: 'column',
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    alignSelf: 'center',
    marginTop: '2%',
    paddingVertical: '1%',
  },
  dropDownText: {
    paddingHorizontal: '5%',
    paddingVertical: 10.6,
    width: 320,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_100,
  },
  dropDownTextColor: {
    color: Colors.slate_500,
    fontSize: 16,
  },
  dropDownInput: {
    width: '90%',
    color: Colors.gray_600,
  },
  saveButtonContainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: '15%',
  },
  bottomButtonBackground: {
    marginVertical: '10%',
    width: '98%',
    paddingVertical: 15,
    backgroundColor: Colors.orange,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default PersonalDetails;
