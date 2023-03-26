import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const MainRegistration = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Get Started</Text>
            <Text style={styles.description}>
              Register yourself to get access
            </Text>
            <Text style={styles.descriptionTwo}>to our features</Text>
          </View>
          <View style={styles.inputFormContainer}>
            <View style={styles.boxContainer}>
              <View style={styles.box} />
            </View>
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>Hello Doctors !</Text>
              <Text style={styles.greetingDescription}>
                You are one step closer towards making your practice better
              </Text>
            </View>
            <View style={styles.boxContainer}>
              <View style={styles.InputFieldContainer}>
                <View style={styles.InputFieldHolder}>
                  <FontAwesome
                    name="circle-thin"
                    color="#c8c8c8"
                    style={styles.circleIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholderTextColor={'#d3d3d3'}
                    placeholder="Dr. Umar"
                  />
                </View>
                <View style={styles.InputFieldHolder}>
                  <FontAwesome
                    name="circle-thin"
                    color="#c8c8c8"
                    style={styles.circleIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholderTextColor={'#d3d3d3'}
                    placeholder="Pulmonologist"
                  />
                </View>
              </View>
            </View>
            <View styles={styles.clinicDetailsContainer}>
              <Text style={styles.clinicHeading}>Clinic Details</Text>
              <Text style={styles.clinicName}>Clinic Name*</Text>
              <TextInput style={styles.clinicInput} />
              <Text style={styles.clinicName}>Pin code*</Text>
              <TextInput style={styles.clinicInput} />
              <View style={styles.referralTextContainer}>
                <Text style={styles.referralName}>Referral code</Text>
                <Text style={styles.referralOptional}>(optional)</Text>
              </View>
              <TextInput style={styles.clinicInput} />
            </View>
            <View style={styles.privacyPolicyContainer}>
              <CheckBox
                tintColors={{true: '#4d0d7e', false: '#afafaf'}}
                onChange={() => setToggleCheckBox(!toggleCheckBox)}
                value={toggleCheckBox}
              />
              <Text style={styles.privacyPolicy}>
                I agree to the{' '}
                <Text style={styles.privacyTerms}>Terms & service</Text> and
                <Text style={styles.privacyTerms}> Privacy Policy</Text>
              </Text>
            </View>
            <View style={styles.nextButtonContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('PersonalDetailsRegistration')
                }
                style={styles.nextButton}>
                <Text style={styles.nextText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
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
    paddingTop: 20,
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: '600',
  },
  description: {
    marginTop: 10,
    width: '52%',
    fontSize: 13,
    fontWeight: '300',
  },
  descriptionTwo: {
    width: '25%',
    fontSize: 13,
    fontWeight: '300',
  },
  inputFormContainer: {
    height: 'auto',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 25,
    marginBottom: 80,
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
  greetingContainer: {
    marginBottom: 15,
    display: 'flex',
    alignItems: 'center',
  },
  greeting: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
  greetingDescription: {
    color: '#000',
    fontSize: 11,
    fontWeight: '400',
  },
  InputFieldContainer: {
    width: '90%',
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  InputFieldHolder: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#afafaf',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 6,
    gap: 8,
    marginBottom: 20,
  },
  circleIcon: {
    fontSize: 15,
  },
  input: {
    color: '#606060',
  },
  clinicDetailsContainer: {
    width: '90%',
  },
  clinicHeading: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    marginHorizontal: 15,
  },
  clinicName: {
    color: '#000',
    fontSize: 13,
    fontWeight: '400',
    marginHorizontal: 15,
  },
  clinicInput: {
    marginHorizontal: 15,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#afafaf',
    borderWidth: 1.25,
    color: '#606060',
    paddingBottom: 1,
    marginBottom: 8,
  },
  referralTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
  },
  referralName: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16,
  },
  referralOptional: {
    color: '#000',
    fontWeight: '400',
    fontSize: 14,
  },
  privacyPolicyContainer: {
    marginTop: 4,
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    color: '#000',
    alignItems: 'center',
    gap: 2,
  },
  privacyPolicy: {
    color: '#000',
    fontSize: 10.5,
  },
  privacyTerms: {
    color: '#d95858',
  },
  nextButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 6,
  },
  nextButton: {
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: '#4d0d7e',
    borderRadius: 20,
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default MainRegistration;
