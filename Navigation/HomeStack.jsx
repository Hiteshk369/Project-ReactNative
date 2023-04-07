import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../constants/colors';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import IonIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Patients from '../FakeData/Patients';

import {Home, Summary, DashBoardAmount} from '../screens/DashBoard';
import {
  PatientsList,
  PatientsMain,
  Prescribe,
} from '../screens/PrescriptionScreen';
import {MainProfileScreen, Timeline} from '../screens/Profile';
import {
  AddAppointment,
  MainAppointment,
  TodaysAppointments,
} from '../screens/Appointements';
import {
  AddClinic,
  ClinicAppointmentDetails,
  OnlineConsultDetails,
  CreateYourFeed,
  FeedScreen,
} from '../screens/Clinic';
import {CreateNewPackage, SellPackage} from '../screens/Package';
import {
  ChiefComplaints,
  Examination,
  Diagnosis,
  Medication,
  Procedure,
  Investigation,
  Advice,
  Findings,
  EmergencyInstructions,
  Prognosis,
  ReferTo,
  ReferBy,
  DoctorNotes,
} from '../screens/PrescriptionScreen/E-prescription';
import {
  CustomAddAppointmentHeader,
  CustomCreatePackageHeader,
  CustomRectangleHeader,
  CustomDashBoardHeader,
  CustomHealthFeedHeader,
  CustomSellPackageHeader,
} from '../utils/HeaderButtons';

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
        name="Summary"
        component={Summary}
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
            <CustomRectangleHeader
              {...props}
              navigation={navigation}
              name="Create Your Feed"
              navTo="HealthFeed"
            />
          ),
        }}
      />
      <Stack.Screen
        name="AddClinic"
        component={AddClinic}
        options={{
          header: props => (
            <CustomRectangleHeader
              {...props}
              navigation={navigation}
              name="Add Clinic"
              navTo="Profile"
            />
          ),
        }}
      />
      <Stack.Screen
        name="ClinicAppointmentDetails"
        component={ClinicAppointmentDetails}
        options={{
          header: props => (
            <CustomRectangleHeader
              {...props}
              navigation={navigation}
              name="In-Clinic Appointment Details"
              navTo="AddClinic"
            />
          ),
        }}
      />
      <Stack.Screen
        name="OnlineConsultDetails"
        component={OnlineConsultDetails}
        options={{
          header: props => (
            <CustomRectangleHeader
              {...props}
              navigation={navigation}
              name="Online Consult Details"
              navTo="ClinicAppointmentDetails"
            />
          ),
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
      <Stack.Screen
        name="Timeline"
        component={Timeline}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PatientsList"
        component={PatientsList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PatientsMain"
        component={PatientsMain}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChiefComplaints"
        component={ChiefComplaints}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Examination"
        component={Examination}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Diagnosis"
        component={Diagnosis}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Medication"
        component={Medication}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Procedure"
        component={Procedure}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Investigation"
        component={Investigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Advice"
        component={Advice}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Findings"
        component={Findings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EmergencyInstructions"
        component={EmergencyInstructions}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Prognosis"
        component={Prognosis}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReferTo"
        component={ReferTo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReferBy"
        component={ReferBy}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DoctorNotes"
        component={DoctorNotes}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const CustomTabButton = ({children, onPress}) => (
  <Pressable
    style={{
      top: -15,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
    }}
    onPressIn={onPress}>
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
  </Pressable>
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
          options={({route}) => ({
            headerShown: false,
            tabBarStyle: {display: getTabBarVisibility(route)},
            tabBarIcon: ({focused}) => (
              <View style={styles.iconView}>
                <IonIcons name="home" style={styles.icon} />
                <Text style={styles.iconText}>Home</Text>
              </View>
            ),
          })}
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
          component={Prescribe}
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

const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'BookAppointment':
      return 'none';
    case 'SellPackage':
      return 'none';
    case 'CreatePackage':
      return 'none';
    case 'AddClinic':
      return 'none';
    case 'ClinicAppointmentDetails':
      return 'none';
    case 'OnlineConsultDetails':
      return 'none';
    case 'CreateYourFeed':
      return 'none';
    case 'PatientsList':
      return 'none';
    case 'ChiefComplaints':
      return 'none';
    case 'Examination':
      return 'none';
    case 'Diagnosis':
      return 'none';
    case 'Medication':
      return 'none';
    case 'Procedure':
      return 'none';
    case 'Investigation':
      return 'none';
    case 'Advice':
      return 'none';
    case 'Findings':
      return 'none';
    case 'EmergencyInstructions':
      return 'none';
    case 'Prognosis':
      return 'none';
    case 'ReferTo':
      return 'none';
    case 'ReferBy':
      return 'none';
    case 'DoctorNotes':
      return 'none';
    default:
      return 'flex';
  }
};

export default HomeStack;
