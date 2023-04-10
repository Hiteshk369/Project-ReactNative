import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Colors} from '../../../constants/colors';
import {useState} from 'react';

import PhoneInput from 'react-native-phone-number-input';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const priceOptions = [
  {
    id: 1,
    name: 'B.tech',
  },
  {
    id: 2,
    name: 'M.tech',
  },
];

const SellPackage = ({navigation}) => {
  const [priceDropdown, setPriceDropdown] = useState(false);
  const [priceOption, setPriceOption] = useState('₹ (INR)');
  return (
    <ScrollView>
      <View style={styles.containerInput}>
        <PhoneInput
          containerStyle={styles.phoneNumberView}
          textContainerStyle={styles.textContainer}
        />
      </View>
      <View style={styles.nameInputHolder}>
        <TextInput
          placeholderTextColor={Colors.gray_200}
          style={styles.inputField}
          placeholder="Name"
        />
      </View>
      <View style={styles.nameInputHolder}>
        <TextInput
          placeholderTextColor={Colors.gray_200}
          style={styles.inputField}
          placeholder="E-mail"
        />
      </View>
      <Text style={styles.consultationHeader}>Consultations</Text>
      <View style={styles.consultationInput}>
        <TextInput
          placeholderTextColor={Colors.gray_200}
          style={styles.consultationinputField}
          placeholder="Text"
        />
        <TextInput
          placeholderTextColor={Colors.gray_200}
          style={styles.consultationinputField}
          placeholder="Audio"
        />
        <TextInput
          placeholderTextColor={Colors.gray_200}
          style={styles.consultationinputField}
          placeholder="Video"
        />
      </View>
      <Text style={styles.consultationBottomText}>
        Please provide the number of consultaions offered
      </Text>
      <Text style={styles.consultationHeader}>Validity (in days)</Text>
      <View style={styles.nameInputHolder}>
        <TextInput
          placeholderTextColor={Colors.gray_200}
          style={styles.inputField}
          placeholder="30"
        />
      </View>
      <Text style={styles.consultationBottomText}>
        You can set the days within which patient has to start consultations
        after making a payment
      </Text>
      <Text style={styles.consultationHeader}>Price</Text>
      <View style={styles.priceInput}>
        <TouchableOpacity
          style={styles.rightDropDown}
          onPressIn={() => setPriceDropdown(!priceDropdown)}>
          <Text style={styles.textInput}>
            {'  '}
            {priceOption}
          </Text>
          {priceDropdown ? (
            <Entypo name="chevron-thin-up" color="black" />
          ) : (
            <Entypo name="chevron-thin-down" color="black" />
          )}
        </TouchableOpacity>
        <TextInput
          placeholderTextColor={Colors.gray_200}
          style={styles.amountInputField}
          placeholder="Amount"
        />
      </View>
      {priceDropdown ? (
        <View style={styles.dropDownArea}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <FlatList
              data={priceOptions}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.dropDownText}
                    onPressIn={() => {
                      setPriceOption(item.name);
                      setPriceDropdown(false);
                    }}>
                    <Text style={styles.dropDownTextColor}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </ScrollView>
        </View>
      ) : null}
      <Text style={styles.consultationBottomText}>
        Patients will receive instructions to make payment by SMS and email
      </Text>
      <View style={styles.marginBottom} />
      <TouchableOpacity
        onPressIn={() => navigation.navigate('CreatePackage')}
        style={styles.buttonBackground}>
        <MaterialIcons
          name="add-circle"
          color={Colors.white}
          style={styles.addButtonIcon}
        />
        <Text style={styles.buttonText}>Create New Package</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    marginTop: 40,
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
    position: 'relative',
  },
  phoneNumberView: {
    width: '99%',
    height: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 1.5,
    borderColor: Colors.gray_200,
  },
  textContainer: {
    paddingVertical: 0,
    borderRadius: 10,
  },
  inputField: {
    width: '100%',
    fontSize: 16,
    color: Colors.gray_700,
  },
  nameInputHolder: {
    height: 42,
    width: '93%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.gray_200,
    borderBottomWidth: 1.5,
    color: Colors.gray_700,
    paddingLeft: '1%',
    margin: '4%',
    marginTop: '2%',
    marginLeft: '3%',
    marginBottom: '0%',
  },
  consultationHeader: {
    paddingTop: '5%',
    marginLeft: '4%',
    fontSize: 19,
    color: Colors.black,
    fontWeight: '500',
  },
  consultationInput: {
    height: 42,
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    color: Colors.gray_700,
    paddingLeft: '1%',
    margin: '4%',
    marginLeft: '3%',
    marginBottom: '0%',
  },
  consultationinputField: {
    width: '100%',
    fontSize: 16,
    color: Colors.gray_700,
    borderColor: Colors.gray_200,
    borderBottomWidth: 1.5,
  },
  consultationBottomText: {
    padding: '5%',
    paddingTop: '1%',
    paddingBottom: '0%',
    fontSize: 11,
    color: Colors.gray_200,
  },
  priceDropDown: {
    fontSize: 25,
    gap: 0,
    padding: 0,
  },
  priceInputField: {
    fontSize: 20,
    borderColor: Colors.gray_200,
    borderBottomWidth: 1.5,
    width: '30%',
  },
  priceInput: {
    height: 42,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    color: Colors.gray_700,
    paddingLeft: '1%',
    margin: '4%',
    marginLeft: '3%',
    marginBottom: '0%',
  },
  rightDropDown: {
    width: '20%',
    paddingBottom: '3%',
    marginVertical: '2%',
    marginBottom: '0%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_200,
  },
  textInput: {
    fontSize: 15,
    color: Colors.black,
  },
  amountInputField: {
    fontSize: 16,
    borderColor: Colors.gray_200,
    borderBottomWidth: 1.5,
    width: '70%',
  },
  dropDownArea: {
    flexDirection: 'column',
    width: '22%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    // alignSelf: 'center',
    paddingVertical: '1%',
    marginLeft: '4%',
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
  marginBottom: {
    marginBottom: '40%',
  },
  buttonBackground: {
    width: '50%',
    paddingVertical: 10,
    backgroundColor: Colors.darkPurple,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.white,
  },
  addButtonIcon: {
    marginLeft: '0%',
    fontSize: 25,
  },
});

export default SellPackage;
