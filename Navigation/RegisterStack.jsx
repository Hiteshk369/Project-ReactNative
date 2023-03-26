import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainRegistration from '../screens/Registration/MainRegistration';
import PersonalDetailsRegistration from '../screens/Registration/PersonalDetailsRegistration';
import VerificationRegistration from '../screens/Registration/VerificationRegistration';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Stack = createNativeStackNavigator();

const RegisterStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VerificationRegistration">
        <Stack.Screen
          name="Registration"
          component={MainRegistration}
          options={{
            headerStyle: {
              backgroundColor: '#1e1262',
            },
            headerTintColor: '#a9edfe',
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
              backgroundColor: '#1e1262',
            },
            headerTintColor: '#fff',
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
              backgroundColor: '#1e1262',
            },
            headerTintColor: '#fff',
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
    color: '#fff',
    fontSize: 24,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  helpIcon: {
    color: '#fff',
    fontSize: 18,
  },
  helpText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default RegisterStack;
