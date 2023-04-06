import RegisterStack from './Navigation/RegisterStack';
import HomeStack from './Navigation/HomeStack';

import {
  EMR_Fields,
  FollowUp,
} from './screens/PrescriptionScreen/BottomThreeButtons';

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

const App = () => {
  return <HomeStack />;
};

export default App;
