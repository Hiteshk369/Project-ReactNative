import RegisterStack from './Navigation/RegisterStack';
import HomeStack from './Navigation/HomeStack';

import E_PrescriptionOptions from './components/E_PrescriptionOptions';
import HandwrittenOptions from './components/HandwrittenOptions';

// import ChiefComplaints from './screens/PrescriptionScreen/E-prescription/ChiefComplaints';
import {MedicationOptions, PatientsData, StepsIndicator} from './components';
import {
  Advice,
  ChiefComplaints,
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
import AddInVoice from './screens/AddInVoice';
import {
  Allergies,
  FamilyHistory,
  HabitHistory,
  Immunization,
  MedicalHistory,
  OngoingMedication,
  Surgeries,
} from './screens/PatientsHistory';
import {MainProfileScreen, Timeline} from './screens/Profile';
import {CreateNewPackage, SellPackage} from './screens/Package';
import {OtpKey, OtpVerification} from './screens/OTP';
import {
  DashBoardAmount,
  Home,
  Summary,
  SummaryAppointment,
} from './screens/DashBoard';
import {
  AddClinic,
  ClinicAppointmentDetails,
  CreateYourFeed,
  FeedScreen,
  OnlineConsultDetails,
} from './screens/Clinic';
import {
  AddAppointment,
  Connect,
  MainAppointment,
  TodaysAppointments,
} from './screens/Appointements';
import {SafeAreaView} from 'react-native';
import {
  BankingDetails,
  ExperienceEducation,
  PersonalDetails,
  PictureVideo,
  Verification,
} from './screens/EditProfile';

// const App = () => {
//   return <MainAppointment />;
// };

const App = () => {
  return <Preview />;
};

export default App;
