import {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {FormNavigation, SaveButton} from '../../../components';
import {Colors} from '../../../constants/colors';

import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const instituteOptions = [
  {
    id: 1,
    name: 'MALLA REDDY INSTUTE OF TECHNOLOGY',
  },
  {
    id: 2,
    name: 'GITAM',
  },
];
const degreeOptions = [
  {
    id: 1,
    name: 'Graduate',
  },
  {
    id: 2,
    name: 'Post-Graduate',
  },
];
const specializationOptions = [
  {
    id: 1,
    name: 'B.tech',
  },
  {
    id: 2,
    name: 'M.tech',
  },
];

const ExperienceEducation = () => {
  const [instituteDropdown, setInstituteDropdown] = useState(false);
  const [instituteOption, setInstituteOption] = useState(
    'Select Your Institute',
  );
  const [degreeDropdown, setDegreeDropdown] = useState(false);
  const [degreeOption, setDegreeOption] = useState('Select Your Degree');
  const [specializationDropdown, setSpecializationDropdown] = useState(false);
  const [specializationOption, setSpecializationOption] = useState(
    'Select additional specialization',
  );
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
                <TouchableOpacity
                  style={styles.rightDropDown}
                  onPressIn={() => setInstituteDropdown(!instituteDropdown)}>
                  <Text style={styles.textInput}>
                    {'  '}
                    {instituteOption}
                  </Text>
                  {instituteDropdown ? (
                    <Entypo name="chevron-thin-up" color="black" />
                  ) : (
                    <Entypo name="chevron-thin-down" color="black" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            {instituteDropdown ? (
              <View style={styles.dropDownArea}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <FlatList
                    data={instituteOptions}
                    renderItem={({item, index}) => {
                      return (
                        <TouchableOpacity
                          style={styles.dropDownText}
                          onPressIn={() => {
                            setInstituteOption(item.name);
                            setInstituteDropdown(false);
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
            <View style={styles.inputHolder}>
              <View style={styles.dropdown}>
                <FontAwesome name="circle-thin" style={styles.circleIcon} />
                <TouchableOpacity
                  style={styles.rightDropDown}
                  onPressIn={() => setDegreeDropdown(!degreeDropdown)}>
                  <Text style={styles.textInput}>
                    {'  '}
                    {degreeOption}
                  </Text>
                  {degreeDropdown ? (
                    <Entypo name="chevron-thin-up" color="black" />
                  ) : (
                    <Entypo name="chevron-thin-down" color="black" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            {degreeDropdown ? (
              <View style={styles.dropDownArea}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <FlatList
                    data={degreeOptions}
                    renderItem={({item, index}) => {
                      return (
                        <TouchableOpacity
                          style={styles.dropDownText}
                          onPressIn={() => {
                            setDegreeOption(item.name);
                            setDegreeDropdown(false);
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
                <TouchableOpacity
                  style={styles.rightDropDown}
                  onPressIn={() =>
                    setSpecializationDropdown(!specializationDropdown)
                  }>
                  <Text style={styles.textInput}>
                    {'  '}
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
                    data={specializationOptions}
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
            <View style={styles.flexEndContainer}>
              <View style={styles.rightFlexRowContainer}>
                <AntDesign style={styles.plusIcon} name="pluscircle" />
                <Text style={styles.text}>Add Experience</Text>
              </View>
            </View>
          </View>
          {/* <View style={styles.saveButtonContainer}>
            <SaveButton nextScreen="Home" />
          </View> */}
          <TouchableOpacity style={styles.bottomButtonBackground}>
            <Text style={styles.bottomButtonText}>Save & Proceed</Text>
          </TouchableOpacity>
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
    height: '12%',
    marginVertical: '6%',
  },
  formContainer: {
    alignItems: 'center',
    gap: 20,
  },
  whiteFormContainer: {
    width: '90%',
    height: 'auto',
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
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
    paddingLeft: '5%',
    marginVertical: '1%',
    position: 'relative',
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
    paddingLeft: '5%',
    marginTop: '5%',
  },
  textAreaInput: {
    textAlignVertical: 'top',
    color: Colors.gray_700,
  },
  textAreaCircle: {
    fontSize: 15,
    paddingTop: '4%',
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
    paddingLeft: '5%',
  },
  addExperienceContainer: {
    marginTop: '2%',
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
    paddingBottom: '2%',
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
  rightDropDown: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    color: Colors.gray_100,
  },
  dropDownArea: {
    flexDirection: 'column',
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    alignSelf: 'center',
    paddingVertical: '1%',
    // marginTop: '35%',
    // position: 'absolute',
  },
  dropDownText: {
    paddingHorizontal: '5%',
    paddingVertical: 10.6,
    width: 350,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_100,
  },
  dropDownTextColor: {
    color: Colors.slate_500,
    fontSize: 16,
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
  //   saveButtonContainer: {
  //     width: '90%',
  //     alignSelf: 'center',
  //     marginBottom: '15%',
  //   },
  bottomButtonBackground: {
    marginVertical: '10%',
    marginBottom: '20%',
    width: '90%',
    paddingVertical: 15,
    backgroundColor: Colors.orange,
    borderRadius: 50,
    alignSelf: 'center',
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
export default ExperienceEducation;
