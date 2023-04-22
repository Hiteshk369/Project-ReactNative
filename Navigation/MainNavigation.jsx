import RegisterStack from './RegisterStack';
import HomeStack from './HomeStack';
import {Provider, useSelector} from 'react-redux';

const MainNavigation = () => {
  const user = useSelector(state => state.userReducer.userRegistered);
  return user ? <HomeStack /> : <RegisterStack />;
};

export default MainNavigation;
