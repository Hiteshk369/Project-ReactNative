import {SafeAreaView} from 'react-native';
import MainRegistration from './screens/Registration/MainRegistration';
import PersonalDetailsRegistration from './screens/Registration/PersonalDetailsRegistration';
import OtpKey from './screens/OTP/OtpKey';
import OtpVerification from './screens/OTP/OtpVerification';
import VerificationRegistration from './screens/Registration/VerificationRegistration';
import Dashboard from './screens/DashBoard/Dashboard';
import Summary from './screens/DashBoard/Summary';
import SummaryAppointment from './screens/DashBoard/SummaryAppointment';
import RegisterStack from './Navigation/RegisterStack';

const App = () => {
  return <RegisterStack />;
};

export default App;
