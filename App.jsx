import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MainRegistration from './screens/Registration/MainRegistration';
import PersonalDetailsRegistration from './screens/Registration/PersonalDetailsRegistration';
import Verification from './screens/Registration/OTP/Verification';
import Otpkey from './screens/Registration/OTP/Otpkey';

const App = () => {
  return (
    <SafeAreaView>
      <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}>
        {/* <PersonalDetailsRegistration /> */}
        {/* <MainRegistration /> */}
        {/* <Verification/> */}
        <Otpkey/>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: '100%',
    width: '100%',
    padding: 10,
    position: 'relative',
  },
});

export default App;
