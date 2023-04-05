import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IonIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../screens/DashBoard/Home';

import MainProfileScreen from '../screens/Profile/MainProfileScreen';

import Patients from '../FakeData/Patients';
import FeedScreen from '../screens/Clinic/FeedScreen';
import SelectPatient from '../FakeData/SelectPatient';

import {
  CustomAddAppointmentHeader,
  CustomCreatePackageHeader,
  CustomCreateYourFeedHeader,
  CustomDashBoardHeader,
  CustomHealthFeedHeader,
  CustomSellPackageHeader,
} from '../utils/HeaderButtons';
import DashBoardAmount from '../screens/DashBoard/DashBoardAmount';
import CreateYourFeed from '../screens/Clinic/CreateYourFeed';
import {AddClinic} from '../screens/Clinic';
import {
  AddAppointment,
  MainAppointment,
  TodaysAppointments,
} from '../screens/Appointements';
import {CreateNewPackage, SellPackage} from '../screens/Package';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeNav = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MainAppointment"
        component={MainAppointment}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OnlineConsult"
        component={TodaysAppointments}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClinicVisit"
        component={TodaysAppointments}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BookAppointment"
        component={AddAppointment}
        options={{
          header: props => (
            <CustomAddAppointmentHeader {...props} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="DashBoardAmount"
        component={DashBoardAmount}
        options={{
          header: props => (
            <CustomDashBoardHeader {...props} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="HealthFeed"
        component={FeedScreen}
        options={{
          header: props => (
            <CustomHealthFeedHeader {...props} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="CreateYourFeed"
        component={CreateYourFeed}
        options={{
          header: props => (
            <CustomCreateYourFeedHeader {...props} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="AddClinic"
        component={AddClinic}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SellPackage"
        component={SellPackage}
        options={{
          header: props => (
            <CustomSellPackageHeader {...props} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="CreatePackage"
        component={CreateNewPackage}
        options={{
          header: props => (
            <CustomCreatePackageHeader {...props} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

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
        initialRouteName="HomeNav"
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
          name="HomeNav"
          component={HomeNav}
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
            header: props => <CustomHealthFeedHeader {...props} />,
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
