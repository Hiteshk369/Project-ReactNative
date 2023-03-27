import {SafeAreaView} from 'react-native';

import OtpKey from './screens/OTP/OtpKey';
import OtpVerification from './screens/OTP/OtpVerification';

import Dashboard from './screens/DashBoard/Home';
import Summary from './screens/DashBoard/Summary';
import SummaryAppointment from './screens/DashBoard/SummaryAppointment';
import RegisterStack from './Navigation/RegisterStack';
import HomeStack from './Navigation/HomeStack';

const App = () => {
  return (
    <SafeAreaView>
      <SummaryAppointment />
    </SafeAreaView>
  );
};

export default App;
