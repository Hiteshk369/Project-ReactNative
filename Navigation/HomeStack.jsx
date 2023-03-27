import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/DashBoard/Home';
import {Colors} from '../constants/colors';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
            }
            return <IonIcons name={iconName} color={color} size={size} />;
          },
          tabBarStyle: {
            height: 75,
            justifyContent: 'space-between',
          },
          tabBarActiveTintColor: Colors.darkPurple,
          tabBarInactiveTintColor: Colors.darkPurple,
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
