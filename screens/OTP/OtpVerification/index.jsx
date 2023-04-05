import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {Colors} from '../../../constants/colors';

import PhoneInput from 'react-native-phone-number-input';

const OtpVerification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputFormContainer}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={50}
          behavior={'padding'}
          style={styles.containerAvoidingView}>
          <View style={styles.boxContainer}>
            <View style={styles.box} />
          </View>
          <Text style={styles.textTitle}>OTP Verification</Text>
          <Text style={styles.textSmallTitle}>
            We will send you the{' '}
            <Text style={{fontWeight: 'bold'}}>One Time Password</Text>
            {'\n'}
            {'                   '}on this Mobile Number
          </Text>
          <View style={styles.containerInput}>
            <PhoneInput
              containerStyle={styles.phoneNumberView}
              textContainerStyle={styles.textContainer}
            />
          </View>
          <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.buttonText}>Get Otp</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  inputFormContainer: {
    height: '100%',
    width: '94%',
    backgroundColor: Colors.white,
    marginHorizontal: '3%',
    borderRadius: 25,
    marginVertical: '20%',
  },
  containerAvoidingView: {
    alignItems: 'center',
    paddingVertical: '20%',
  },
  boxContainer: {
    alignItems: 'center',
  },
  box: {
    height: 200,
    width: 200,
    borderColor: Colors.black,
    borderWidth: 1,
    marginVertical: '5%',
  },
  textTitle: {
    marginVertical: '2%',
    paddingHorizontal: '5%',
    fontSize: 18,
    fontWeight: '500',
    color: Colors.black,
  },
  textSmallTitle: {
    marginVertical: '5%',
    paddingHorizontal: '11%',
    fontSize: 15,
    fontWeight: '400',
    color: Colors.black,
  },
  containerInput: {
    marginVertical: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneNumberView: {
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.darkPurple,
  },
  textContainer: {
    paddingVertical: '0%',
    borderRadius: 10,
  },
  buttonBackground: {
    margin: '5%',
    width: '50%',
    paddingVertical: '3%',
    backgroundColor: Colors.darkPurple,
    borderRadius: 10,
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

export default OtpVerification;
