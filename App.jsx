import { SafeAreaView } from 'react-native';

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
import Selectpatient from './screens/PrescriptionScreen/Selectpatient';
import PatientsList from './screens/PrescriptionScreen/PatientsList';
import E_PrescriptionOptions from './components/E_PrescriptionOptions';
import HandwrittenOptions from './components/HandwrittenOptions';
import PatientsMain from './screens/PrescriptionScreen/PatientsMain';
import ChiefComplaints from './screens/PrescriptionScreen/E-prescription/ChiefComplaints';
import { StepsIndicator } from './components';




const App = () => {

  return <ChiefComplaints />


    // <RegisterStack/>
    ;

};


export default App;
