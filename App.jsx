import {SafeAreaView} from 'react-native';

import OtpKey from './screens/OTP/OtpKey';
import OtpVerification from './screens/OTP/OtpVerification';


import Dashboard from './screens/DashBoard/Home';
import Summary from './screens/DashBoard/Summary';
import SummaryAppointment from './screens/DashBoard/SummaryAppointment';
import RegisterStack from './Navigation/RegisterStack';
import HomeStack from './Navigation/HomeStack';

import MainAppointment from './screens/Appointements/MainAppointment';
import AddAppointment from './screens/Appointements/AddAppointment';
import SellPackage from './screens/Package/SellPackage';
import CreateNewPackage from './screens/Package/CreateNewPackage';
import Connect from './screens/Appointements/Connect';
import MainProfilescreen from './screens/Profile/MainProfileScreen';
import AddClinic from './screens/Clinic/AddClinic';
import ClinicAppointmentDetails from './screens/Clinic/ClinicAppointmentDetails';
import OnlineConsultDetails from './screens/Clinic/OnlineConsultDetails';
import CreateYourFeed from './screens/Clinic/CreateYourFeed';
import DashBoardAmount from './screens/DashBoard/DashBoardAmount';
import FeedScreen from './screens/Clinic/FeedScreen';
import Timeline from './screens/Profile/Timeline';



const App = () => {

  return <Timeline/>

  // <RegisterStack/>
  ;

};


export default App;
