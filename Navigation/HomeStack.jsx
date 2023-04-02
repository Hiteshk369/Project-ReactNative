import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Home from '../screens/DashBoard/Home';
import {Colors} from '../constants/colors';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';
import MainProfileScreen from '../screens/Profile/MainProfileScreen';
import {StyleSheet} from 'react-native';
import Patients from '../FakeData/Patients';
import FeedScreen from '../screens/Clinic/FeedScreen';
import SelectPatient from '../FakeData/SelectPatient';

const Tab = createBottomTabNavigator();

const CustomTabButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -15,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: Colors.darkPurple,
      }}>
      {children}
    </View>
    <Text style={styles.iconText}>Prescribe</Text>
  </TouchableOpacity>
);

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: Colors.white,
            height: 60,
            borderTopColor: Colors.slate_100,
            borderTopWidth: 1,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={styles.iconView}>
                <IonIcons name="home" style={styles.icon} />
                <Text style={styles.iconText}>Home</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Patients"
          component={Patients}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={styles.iconView}>
                <Feather name="users" style={styles.icon} />
                <Text style={styles.iconText}>Patients</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Prescribe"
          component={SelectPatient}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={styles.iconView}>
                <Text style={{color: Colors.white}}>Px</Text>
              </View>
            ),
            tabBarButton: props => <CustomTabButton {...props} />,
          }}
        />
        <Tab.Screen
          name="HealthTube"
          component={FeedScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={styles.iconView}>
                <Feather name="calendar" style={styles.icon} />
                <Text style={styles.iconText}>Health Tube</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={MainProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={styles.iconView}>
                <FontAwesome name="user-circle-o" style={styles.icon} />
                <Text style={styles.iconText}>Profile</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: Colors.darkPurple,
    fontSize: 20,
  },
  iconText: {
    color: Colors.darkPurple,
    fontSize: 10,
  },
});

export default HomeStack;
