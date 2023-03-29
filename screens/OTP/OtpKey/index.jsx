import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../../constants/colors';

import OTPTextView from 'react-native-otp-textinput';

const OtpKey = () => {
  return (
    <View style={styles.inputFormContainer}>
      <View>
        <Text style={styles.headerContainer}>You're Almost there!</Text>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box} />
        <Text style={styles.keyText}>Key in OTP Code</Text>
        <Text style={styles.otpText}>
          You'll receive an OTP code in SMS.Please fill in the OTP to verify
          your identity.
        </Text>
        <OTPTextView
          containerStyle={styles.InputContainer}
          textInputStyle={styles.roundedTextInput}
          inputCount={5}
          tintColor={Colors.darkPurple}
        />
        <TouchableOpacity style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputFormContainer: {
    height: 700,
    backgroundColor: Colors.white,
    marginHorizontal: 10,
    borderRadius: 25,
    marginBottom: 50,
    marginTop: 50,
  },
  headerContainer: {
    marginTop: 50,
    marginLeft: 95,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  boxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  box: {
    height: 125,
    width: 125,
    borderColor: Colors.black,
    borderWidth: 1,
    marginTop: 60,
    marginBottom: 15,
    borderRadius: 100,
  },
  keyText: {
    marginTop: 20,
    color: Colors.black,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpText: {
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50,
    color: Colors.black,
  },
  InputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: Colors.lightGrayBg,
  },
  buttonBackground: {
    margin: 5,
    width: '36%',
    paddingVertical: 12,
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

export default OtpKey;
