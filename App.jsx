import RegisterStack from './Navigation/RegisterStack';
import HomeStack from './Navigation/HomeStack';

import {OtpKey, OtpVerification} from './screens/OTP';

import {Provider} from 'react-redux';
import store from './redux/store';

store.subscribe(() => store.getState());

const App = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <HomeStack />
    </Provider>
    // <ConsultationCompleted />
  );
};

export default App;
