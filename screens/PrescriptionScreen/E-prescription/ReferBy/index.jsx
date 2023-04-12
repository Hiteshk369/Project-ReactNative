import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StepsIndicator} from '../../../../components';
import {Colors} from '../../../../constants/colors';
import {Pressable} from 'react-native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const ReferBy = ({navigation}) => {
  const [doctorName, setDoctorName] = useState('');
  const [details, setDetails] = useState('');
  const referByItems = useSelector(state => state.prescriptionReducer.referBy);

  const dispatch = useDispatch();

  useEffect(() => {
    if (doctorName !== '' && details !== '') {
      dispatch({
        type: 'SET_REFER_BY',
        referBy: [doctorName, details],
      });
    }
  }, [doctorName, details, dispatch]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.sideBar}>
            <View style={styles.leftFull}>
              <StepsIndicator active="eleven" />
            </View>
          </View>
          <View style={styles.mainLayout}>
            <View style={styles.rightFull}>
              <Pressable onPressIn={() => navigation.navigate('ReferTo')}>
                <MaterialIcons
                  name="arrow-back-ios"
                  color={Colors.black}
                  style={styles.backIcon}
                />
              </Pressable>
              <Text style={styles.headerText}>Refer By</Text>
              <Text style={styles.inputHeader}>Doctor Name</Text>
              <TextInput
                value={referByItems[0]}
                onChangeText={text => setDoctorName(text)}
                placeholderTextColor={Colors.gray_200}
                style={styles.inputField}
                placeholder="Dr. Name"
              />
              <Text style={[styles.inputHeader, styles.mt]}>Details</Text>
              <TextInput
                value={referByItems[1]}
                onChangeText={text => setDetails(text)}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor={Colors.gray_200}
                style={styles.inputField}
                placeholder=" "
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonsFlex}>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('Prescribe')}
          style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Preview</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('DoctorNotes')}
          style={styles.nextButtonBackground}>
          <View style={styles.nextButtonFlex}>
            <Text style={styles.nextButtonText}>Doctor Notes</Text>
            <MaterialIcons
              name="navigate-next"
              color={Colors.black}
              style={styles.nextIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  sideBar: {
    width: '20%',
    height: '100%',
    flexDirection: 'column',
  },
  leftFull: {
    height: '100%',
  },
  rightFull: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  mainLayout: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
    flex: 1,
  },
  backIcon: {
    marginHorizontal: '5%',
    marginVertical: '3%',
    fontSize: 25,
    color: Colors.black,
  },
  headerText: {
    marginHorizontal: '5%',
    fontSize: 18,
    color: Colors.black,
    marginTop: '1%',
  },
  inputHeader: {
    fontSize: 15,
    marginHorizontal: '5%',
    marginBottom: '3%',
    marginTop: '5%',
    color: Colors.gray_500,
  },
  inputField: {
    fontSize: 18,
    paddingLeft: '3%',
    marginHorizontal: '5%',
    borderWidth: 1,
    borderColor: Colors.gray_100,
    borderRadius: 10,
    // color: Colors.black,
    textAlignVertical: 'top',
    color: Colors.gray_700,
  },
  mt: {
    marginTop: '10%',
  },
  buttonsFlex: {
    flexDirection: 'row',
  },
  buttonBackground: {
    width: '50%',
    paddingVertical: 15,
    backgroundColor: Colors.purple_200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.darkPurple,
  },
  nextButtonBackground: {
    width: '50%',
    paddingVertical: 15,
    backgroundColor: Colors.darkPurple,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.white,
  },
  nextIcon: {
    fontSize: 22,
    color: Colors.white,
  },
  nextButtonFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
export default ReferBy;
