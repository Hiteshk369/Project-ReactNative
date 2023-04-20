import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StepsIndicator} from '../../../../components';
import {Colors} from '../../../../constants/colors';
import {TextInput} from 'react-native';
import {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Examination = ({navigation}) => {
  const [examinationNotes, setExaminationNotes] = useState('');
  const dispatch = useDispatch();
  const examinationItems = useSelector(
    state => state.prescriptionReducer.examinations,
  );

  useEffect(() => {
    if (examinationNotes !== '') {
      dispatch({
        type: 'SET_EXAMINATIONS',
        examinations: examinationNotes,
      });
    }
  }, [examinationNotes, dispatch]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.sideBar}>
              <View style={styles.leftFull}>
                <StepsIndicator active="two" />
              </View>
            </View>
            <View style={styles.mainLayout}>
              <View style={styles.rightFull}>
                <Pressable
                  onPressIn={() => navigation.navigate('ChiefComplaints')}>
                  <MaterialIcons
                    name="arrow-back-ios"
                    color={Colors.black}
                    style={styles.backIcon}
                  />
                </Pressable>
                <Text style={styles.headerText}>Examination</Text>
                <View style={styles.boxContainer}>
                  <Text style={styles.boxHeader}>On-Examination notes</Text>
                  <TextInput
                    onChangeText={text => setExaminationNotes(text)}
                    value={examinationItems}
                    multiline={true}
                    numberOfLines={4}
                    placeholderTextColor={Colors.gray_200}
                    style={styles.boxText}
                    placeholder="Type Here...."
                  />
                </View>
                <View style={styles.bottomFlex}>
                  <Text style={styles.bottomText}>Add Vitals</Text>
                  <MaterialIcons
                    name="navigate-next"
                    color={Colors.black}
                    style={styles.darkNextIcon}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonsFlex}>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('Prescribe')}
          style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Preview</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('Diagnosis')}
          style={styles.nextButtonBackground}>
          <View style={styles.nextButtonFlex}>
            <Text style={styles.nextButtonText}>Diagnosis</Text>
            <MaterialIcons
              name="navigate-next"
              color={Colors.black}
              style={styles.nextIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
  },
  boxContainer: {
    height: '25%',
    width: '88%',
    marginHorizontal: '5%',
    marginVertical: '5%',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.gray_100,
  },
  boxHeader: {
    backgroundColor: Colors.purple_200,
    // borderTRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: '5%',
    paddingHorizontal: '7%',
  },
  boxText: {
    color: Colors.gray_700,
    margin: '5%',
    textAlignVertical: 'top',
    fontWeight: '500',
    fontSize: 16,
  },
  bottomFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 140,
    width: '88%',
    marginHorizontal: '5%',
    backgroundColor: Colors.purple_200,
  },
  bottomText: {
    marginHorizontal: '7%',
    paddingVertical: '5%',
    fontWeight: '500',
    color: Colors.darkPurple,
  },
  darkNextIcon: {
    color: Colors.darkPurple,
    fontWeight: '500',
    fontSize: 22,
  },
  buttonsFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonBackground: {
    width: '50%',
    paddingVertical: 15,
    backgroundColor: Colors.purple_200,
    alignItems: 'center',
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
    alignItems: 'center',
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

export default Examination;
