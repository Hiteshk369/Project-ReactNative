import RegisterStack from './Navigation/RegisterStack';
import HomeStack from './Navigation/HomeStack';

import {OtpKey, OtpVerification} from './screens/OTP';

import {Provider} from 'react-redux';
import store from './redux/store';
import MainNavigation from './Navigation/MainNavigation';

store.subscribe(() => store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
