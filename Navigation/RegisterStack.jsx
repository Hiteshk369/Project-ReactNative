import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Entypo from 'react-native-vector-icons/Entypo';

import {Colors} from '../constants/colors';
import {
  MainRegistration,
  PersonalDetailsRegistration,
  VerificationRegistration,
  BankingDetailsRegistration,
  ExperienceDetailsRegistration,
} from '../screens/Registration';

const Stack = createNativeStackNavigator();

const RegisterStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen
          name="Registration"
          component={MainRegistration}
          options={{
            headerStyle: {
              backgroundColor: Colors.darkPurple,
            },
            headerTintColor: Colors.blue,
            headerTitleStyle: {
              fontWeight: 'normal',
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity>
                <Entypo name="chevron-left" style={styles.backIcon} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity style={styles.iconContainer}>
                <Entypo name="help-with-circle" style={styles.helpIcon} />
                <Text style={styles.helpText}>Help</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="PersonalDetailsRegistration"
          component={PersonalDetailsRegistration}
          options={{
            title: 'Registration',
            headerStyle: {
              backgroundColor: Colors.darkPurple,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: '300',
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity>
                <Entypo name="chevron-left" style={styles.backIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="VerificationRegistration"
          component={VerificationRegistration}
          options={{
            title: 'Registration',
            headerStyle: {
              backgroundColor: Colors.darkPurple,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: '300',
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity>
                <Entypo name="chevron-left" style={styles.backIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="BankingDetailsRegistration"
          component={BankingDetailsRegistration}
          options={{
            title: 'Registration',
            headerStyle: {
              backgroundColor: Colors.darkPurple,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: '300',
            },
            headerTitleAlign: 'center',
            // headerLeft: () => (
            //   <TouchableOpacity>
            //     <Entypo name="chevron-left" style={styles.backIcon} />
            //   </TouchableOpacity>
            // ),
          }}
        />
        <Stack.Screen
          name="ExperienceDetailsRegistration"
          component={ExperienceDetailsRegistration}
          options={{
            title: 'Registration',
            headerStyle: {
              backgroundColor: Colors.darkPurple,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: '300',
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity>
                <Entypo name="chevron-left" style={styles.backIcon} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    color: Colors.white,
    fontSize: 24,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  helpIcon: {
    color: Colors.white,
    fontSize: 18,
  },
  helpText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default RegisterStack;
