import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Switch,
} from 'react-native';
import {Colors} from '../../../constants/colors';
import {useState} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const daysOptions = [
  {
    id: 1,
    name: '1',
  },
  {
    id: 2,
    name: '2',
  },
];
const timeOptions = [
  {
    id: 1,
    name: '10 Min',
  },
  {
    id: 2,
    name: '30 Min',
  },
  {
    id: 3,
    name: '1 Hr',
  },
];

const CreateNewPackage = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const toggleSwitch = () => setToggleIcon(previousState => !previousState);
  const [toggleIcon2, setToggleIcon2] = useState(false);
  const toggleSwitch2 = () => setToggleIcon2(previousState => !previousState);
  const [daysDropdown, setDaysDropdown] = useState(false);
  const [daysOption, setDaysOption] = useState('Days');
  const [timeDropdown, setTimeDropdown] = useState(false);
  const [timeOption, setTimeOption] = useState('10');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.onlineFlexText}>
          <Text style={styles.onlineText}>Patient will pay Online</Text>
          <Switch
            trackColor={{false: Colors.gray_200, true: Colors.blue_500}}
            thumbColor={toggleIcon ? Colors.white : Colors.white}
            onValueChange={toggleSwitch}
            value={toggleIcon}
          />
        </View>
        <View style={styles.nameInputHolder}>
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.inputField}
            placeholder="Package Name"
          />
        </View>
        <View style={styles.nameInputHolder}>
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.inputField}
            placeholder="Package Description"
          />
        </View>
        <Text style={styles.descriptionText}>
          You should provide package description in detail
        </Text>
        <Text style={styles.validityHeader}>Validity</Text>
        <View style={styles.validityInput}>
          <TouchableOpacity
            style={styles.rightDropDown}
            onPressIn={() => setDaysDropdown(!daysDropdown)}>
            <Text style={styles.textInput}>
              {'  '}
              {daysOption}
            </Text>
            {daysDropdown ? (
              <Entypo name="chevron-thin-up" color="black" />
            ) : (
              <Entypo name="chevron-thin-down" color="black" />
            )}
          </TouchableOpacity>
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.numberInputField}
            placeholder="Enter Number"
          />
        </View>
        {daysDropdown ? (
          <View style={styles.dropDownArea}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <FlatList
                data={daysOptions}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      style={styles.dropDownText}
                      onPressIn={() => {
                        setDaysOption(item.name);
                        setDaysDropdown(false);
                      }}>
                      <Text style={styles.dropDownTextColor}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </ScrollView>
          </View>
        ) : null}
        <Text style={styles.descriptionText}>
          You should provide validity in days,weeks or months for this package
          Do not forget to provide number of days,weeks or months
        </Text>
        <Text style={styles.validityHeader}>Number Of Consultations</Text>
        <View style={styles.consultationInput}>
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.consultationInputField}
            placeholder="Text"
          />
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.consultationInputField}
            placeholder="Audio"
          />
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.consultationInputField}
            placeholder="Video"
          />
        </View>
        <Text style={styles.audioHeader}>
          Audio/Video call duration (In Mins)
        </Text>
        <View style={styles.nameInputHolder}>
          <TouchableOpacity
            style={styles.bigDropDown}
            onPressIn={() => setTimeDropdown(!timeDropdown)}>
            <Text style={styles.textInput}>
              {'  '}
              {timeOption}
            </Text>
            {timeDropdown ? (
              <Entypo name="chevron-thin-up" color="black" />
            ) : (
              <Entypo name="chevron-thin-down" color="black" />
            )}
          </TouchableOpacity>
        </View>
        {timeDropdown ? (
          <View style={styles.dropDownArea}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <FlatList
                data={timeOptions}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      style={styles.dropDownText}
                      onPressIn={() => {
                        setTimeOption(item.name);
                        setTimeDropdown(false);
                      }}>
                      <Text style={styles.dropDownTextColor}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </ScrollView>
          </View>
        ) : null}
        <Text style={styles.descriptionText}>
          Not applicable is the default value for this package you can change
          the call duration as per your convenience
        </Text>
        <View style={styles.onlineFlexText}>
          <Text style={styles.onlineText}>Medicines Included ?</Text>
          <Switch
            trackColor={{false: Colors.gray_200, true: Colors.blue_500}}
            thumbColor={toggleIcon ? Colors.white : Colors.white}
            onValueChange={toggleSwitch2}
            value={toggleIcon2}
          />
        </View>
        <View style={styles.nameInputHolder}>
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.inputField}
            placeholder="MRP (Rs)"
          />
        </View>
        <View style={styles.nameInputHolder}>
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.inputField}
            placeholder="Online Price (Rs)"
          />
        </View>
        <View style={styles.marginBottom} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  mainContainer: {
    marginHorizontal: '5%',
  },
  gradient: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  navBackground: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '25%',
    marginBottom: '5%',
  },
  leftText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: '12%',
    fontSize: 20,
    color: Colors.white,
  },
  backIcon: {
    alignItems: 'center',
    flexDirection: 'row',
    // marginLeft: '8%',
    fontSize: 25,
    fontWeight: '600',
  },
  onlineText: {
    // paddingTop: '5%',
    // marginLeft: '4%',
    fontSize: 19,
    color: Colors.black,
    fontWeight: '500',
  },
  toggleTopIcon: {
    fontSize: 45,
  },
  onlineFlexText: {
    paddingTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleIcon: {
    fontSize: 45,
    // marginLeft: '15%',
    fontWeight: '600',
  },
  inputField: {
    width: '100%',
    fontSize: 16,
    color: Colors.gray_700,
  },
  nameInputHolder: {
    height: 42,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.gray_200,
    borderBottomWidth: 1.5,
    color: Colors.gray_700,
    paddingLeft: '1%',
    marginTop: '4%',
    marginBottom: '0%',
  },
  descriptionText: {
    paddingTop: '1%',
    paddingBottom: '0%',
    fontSize: 11,
    color: Colors.gray_200,
  },
  validityHeader: {
    paddingTop: '5%',
    // marginLeft: '4%',
    fontSize: 19,
    color: Colors.black,
    fontWeight: '500',
  },
  validityDayDown: {
    fontSize: 25,
  },
  validityDayInput: {
    fontSize: 18,
    fontWeight: '500',
    borderColor: Colors.gray_200,
    borderBottomWidth: 1.5,
    width: '30%',
  },
  validityInput: {
    height: 42,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    color: Colors.gray_700,
    paddingLeft: '1%',
    // margin: '4%',
    marginVertical: '3%',
    // marginBottom: '0%',
  },
  rightDropDown: {
    width: '30%',
    paddingBottom: '3%',
    marginVertical: '2%',
    marginBottom: '0%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_200,
  },
  bigDropDown: {
    width: '100%',
    paddingBottom: '3%',
    marginVertical: '2%',
    marginBottom: '0%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 15,
    color: Colors.black,
  },
  numberInputField: {
    fontSize: 16,
    borderColor: Colors.gray_200,
    borderBottomWidth: 1,
    width: '65%',
  },
  dropDownArea: {
    flexDirection: 'column',
    width: '30%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    // alignSelf: 'center',
    paddingVertical: '1%',
    // marginLeft: '4%',
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
  consultationInput: {
    height: 42,
    width: '31%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    color: Colors.gray_700,
    paddingLeft: '1%',
    // margin: '4%',
    marginVertical: '3%',
    marginBottom: '0%',
  },
  consultationInputField: {
    width: '100%',
    fontSize: 16,
    color: Colors.gray_700,
    borderColor: Colors.gray_200,
    borderBottomWidth: 1,
  },
  audioHeader: {
    paddingTop: '5%',
    // marginLeft: '4%',
    fontSize: 15,
    color: Colors.black,
    fontWeight: '500',
  },
  audioDayDown: {
    fontSize: 25,
    gap: 0,
    padding: 0,
  },
  audioInputField: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 16,
    color: Colors.gray_700,
  },
  marginBottom: {
    marginBottom: '40%',
  },
});

export default CreateNewPackage;

//togle onof
