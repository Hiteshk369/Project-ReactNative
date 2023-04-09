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

import {Provider} from 'react-redux';
import store from './redux/store';

store.subscribe(() => store.getState());

const App = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <HomeStack />
    </Provider>
  );
};

export default App;
