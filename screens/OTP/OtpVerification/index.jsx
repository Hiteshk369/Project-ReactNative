import {React} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import PhoneInput from 'react-native-phone-number-input';

const OtpVerification = () => {
  return (
    <View style={styles.inputFormContainer}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={50}
          behavior={'padding'}
          style={styles.containerAvoidingView}>
          <View style={styles.boxContainer}>
            <View style={styles.box} />
          </View>
          <Text style={styles.textTitle}>{'OTP Verification'}</Text>
          <Text style={styles.textTitle}>
            We will send you the{' '}
            <Text style={{fontWeight: 'bold'}}>One Time Password</Text> on this
            Mobile Number
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
  inputFormContainer: {
    height: 700,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 25,
    marginBottom: 50,
    marginTop: 50,
  },
  container: {
    display: 'flex',
  },
  containerAvoidingView: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  boxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  box: {
    height: 125,
    width: 125,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 15,
    borderRadius: 100,
  },
  textTitle: {
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#000000',
  },
  containerInput: {
    marginTop: 10,
    marginBottom: 15,
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  phoneNumberView: {
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#1e1262',
  },
  textContainer: {
    paddingVertical: 0,
    borderRadius: 10,
  },
  buttonBackground: {
    margin: 5,
    width: '36%',
    paddingVertical: 12,
    backgroundColor: '#1e1262',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
});

export default OtpVerification;
