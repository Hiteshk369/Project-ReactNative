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
import MainProfileScreen from './screens/Profile/MainProfileScreen';
import AddClinic from './screens/Clinic/AddClinic';
import ClinicAppointmentDetails from './screens/Clinic/ClinicAppointmentDetails';
import OnlineConsultDetails from './screens/Clinic/OnlineConsultDetails';
import CreateYourFeed from './screens/Clinic/CreateYourFeed';
import DashBoardAmount from './screens/DashBoard/DashBoardAmount';
import FeedScreen from './screens/Clinic/FeedScreen';
import Timeline from './screens/Profile/Timeline';
import E_PrescriptionOptions from './components/E_PrescriptionOptions';
import HandwrittenOptions from './components/HandwrittenOptions';
import ChiefComplaints from './screens/PrescriptionScreen/E-prescription/ChiefComplaints';
import {StepsIndicator} from './components';

//import TodaysAppointments from './screens/Appointements/TodaysAppointments';

//const App = () => {
  //return (
    //<SafeAreaView>
      //<TodaysAppointments />
   // </SafeAreaView>
    // <HomeStack />
  //);

import {
  Advice,
  CheifComplaints,
  Diagnosis,
  DoctorNotes,
  EmergencyInstructions,
  Examination,
  Findings,
  Investigation,
  Medication,
  Procedure,
  Prognosis,
  ReferBy,
  ReferTo,
} from './screens/PrescriptionScreen/E-prescription';
import {
  EMR_Fields,
  FollowUp,
} from './screens/PrescriptionScreen/BottomThreeButtons';
import {
  PatientsList,
  PatientsMain,
  Preview,
  Selectpatient,
} from './screens/PrescriptionScreen';
import {ConsultationCompleted, ConsultationMain} from './screens/Consultation';

const App = () => {
  return <ConsultationCompleted />;

};

export default App;
