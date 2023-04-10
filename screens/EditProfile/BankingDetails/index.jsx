import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';
import {FormNavigation, SaveButton} from '../../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const accountTypeOptions = [
  {
    id: 1,
    name: 'Savings',
  },
  {
    id: 2,
    name: 'Current',
  },
];

const BankingDetails = () => {
  const [accountTypeDropdown, setAccountTypeDropdown] = useState(false);
  const [accountTypeOption, setAccountTypeOption] = useState(
    'Select Account Type',
  );
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
                <TouchableOpacity
                  style={styles.rightDropDown}
                  onPressIn={() =>
                    setAccountTypeDropdown(!accountTypeDropdown)
                  }>
                  <Text style={styles.textAreaInput}>
                    {'  '}
                    {accountTypeOption}
                  </Text>
                  {accountTypeDropdown ? (
                    <Entypo name="chevron-thin-up" color="black" />
                  ) : (
                    <Entypo name="chevron-thin-down" color="black" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            {accountTypeDropdown ? (
              <View style={styles.dropDownArea}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <FlatList
                    data={accountTypeOptions}
                    renderItem={({item, index}) => {
                      return (
                        <TouchableOpacity
                          style={styles.dropDownText}
                          onPressIn={() => {
                            setAccountTypeOption(item.name);
                            setAccountTypeDropdown(false);
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
        {/* <View style={styles.saveButton}>
          <SaveButton nextScreen="ExperienceDetailsRegistration" />
        </View> */}
        <TouchableOpacity style={styles.bottomButtonBackground}>
          <Text style={styles.bottomButtonText}>Update</Text>
        </TouchableOpacity>
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
  inputFormContainer: {
    alignItems: 'center',
  },
  inputForm: {
    width: '90%',
    height: 'auto',
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '7%',
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
  },
  circleIcon: {
    fontSize: 15,
    color: Colors.slate_200,
  },
  inputField: {
    width: '100%',
    color: Colors.gray_700,
  },
  rightDropDown: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textAreaInput: {
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
    paddingVertical: '4%',
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
  //   saveButton: {
  //     width: '90%',
  //     alignSelf: 'center',
  //     marginBottom: '15%',
  //   },
  bottomButtonBackground: {
    marginVertical: '10%',
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

export default BankingDetails;
