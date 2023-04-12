import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Colors} from '../../constants/colors';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import CheckBox from '@react-native-community/checkbox';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';

const E_PrescriptionOptions = ({navigation, screen}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const chiefComplaintsItems = useSelector(
    state => state.prescriptionReducer.chiefComplaints,
  );
  const examinationItems = useSelector(
    state => state.prescriptionReducer.examinations,
  );
  const diagnosisItems = useSelector(
    state => state.prescriptionReducer.diagnosis,
  );
  const medicationItems = useSelector(
    state => state.prescriptionReducer.medication,
  );
  const procedureItems = useSelector(
    state => state.prescriptionReducer.procedure,
  );
  const investigationItems = useSelector(
    state => state.prescriptionReducer.investigation,
  );
  const adviceItems = useSelector(state => state.prescriptionReducer.advice);
  const findingsItems = useSelector(
    state => state.prescriptionReducer.findings,
  );
  const emergencyInstructionsItems = useSelector(
    state => state.prescriptionReducer.emergencyInstructions,
  );
  const prognosisItems = useSelector(
    state => state.prescriptionReducer.prognosis,
  );
  const referToItems = useSelector(state => state.prescriptionReducer.referTo);
  const referByItems = useSelector(state => state.prescriptionReducer.referBy);
  const doctorNotesItems = useSelector(
    state => state.prescriptionReducer.doctorNotes,
  );

  const PrescribeOptions = [
    {
      id: 1,
      name: 'Chief Complaints',
      data: chiefComplaintsItems,
      navigator: 'ChiefComplaints',
    },
    {
      id: 2,
      name: 'Examinations',
      data: examinationItems,
      navigator: 'Examination',
    },
    {
      id: 3,
      name: 'Diagnosis',
      data: diagnosisItems,
      navigator: 'Diagnosis',
    },
    {
      id: 4,
      name: 'Medication',
      data: medicationItems,
      navigator: 'Medication',
    },
    {
      id: 5,
      name: 'Procedure',
      data: procedureItems,
      navigator: 'Procedure',
    },
    {
      id: 6,
      name: 'Investigation',
      data: investigationItems,
      navigator: 'Investigation',
    },
    {
      id: 7,
      name: 'Advice',
      data: adviceItems,
      navigator: 'Advice',
    },
    {
      id: 8,
      name: 'Findings',
      data: findingsItems,
      navigator: 'Findings',
    },
    {
      id: 9,
      name: 'Emergency Instructions',
      data: emergencyInstructionsItems,
      navigator: 'EmergencyInstructions',
    },
    {
      id: 10,
      name: 'Prognosis',
      data: prognosisItems,
      navigator: 'Prognosis',
    },
    {
      id: 11,
      name: 'Refer To',
      data: referToItems,
      navigator: 'ReferTo',
    },
    {
      id: 12,
      name: 'Referred By',
      data: referByItems,
      navigator: 'ReferBy',
    },
    {
      id: 13,
      name: 'Doctor Notes',
      data: doctorNotesItems,
      navigator: 'DoctorNotes',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        {PrescribeOptions.map(option => (
          <View key={option.id} style={styles.columnContainer}>
            <View style={styles.rowContainer}>
              <View style={styles.rowIcon}>
                <FontAwesome
                  name="circle-thin"
                  color={Colors.lightGrayBg}
                  style={styles.circleColorIcon}
                />
                <Pressable
                  onPressIn={() => navigation.navigate(option.navigator)}>
                  <Text style={styles.rowText}>{option.name}</Text>
                </Pressable>
              </View>
              <View>
                {option.data.length > 0 ? (
                  <View style={styles.iconFlex}>
                    <Pressable
                      onPressIn={() => navigation.navigate('ChiefComplaints')}
                      style={styles.editIcon}>
                      <MaterialIcons
                        name="edit"
                        color={Colors.lightGrayBg}
                        style={Colors.editIconColor}
                      />
                    </Pressable>
                    <View style={styles.closeIcon}>
                      <Text style={styles.closeIconColor}>X</Text>
                    </View>
                  </View>
                ) : (
                  <MaterialIcons
                    name="add"
                    color={Colors.lightGrayBg}
                    style={styles.addIcon}
                  />
                )}
              </View>
            </View>
            {option.data.length > 0 &&
              (option.name === 'Chief Complaints' ||
                option.name === 'Diagnosis' ||
                option.name === 'Procedure' ||
                option.name === 'Investigation' ||
                option.name === 'Advice' ||
                option.name === 'Emergency Instructions' ||
                option.name === 'Prognosis') && (
                <View style={styles.optionsContainer}>
                  {option.data.map((data, index) => (
                    <View key={index} style={styles.optionsTextContainer}>
                      <View style={styles.bulletFlex}>
                        <Text style={styles.bulletsIcon}>{'\u2B24'}</Text>
                        <Text style={styles.optionsText}>{data}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              )}
            {option.data.length > 0 && option.name === 'Examinations' && (
              <View style={styles.optionsContainer}>
                <Text>On examination notes</Text>
                <View style={styles.optionsTextContainer}>
                  <View style={styles.bulletFlex}>
                    <Text style={styles.bulletsIcon}>{'\u2B24'}</Text>
                    <Text style={styles.optionsText}>{option.data}</Text>
                  </View>
                </View>
              </View>
            )}
            {option.data.length > 0 &&
              (option.name === 'Findings' ||
                option.name === 'Doctor Notes') && (
                <View style={styles.optionsContainer}>
                  <View style={styles.optionsTextContainer}>
                    <View style={styles.bulletFlex}>
                      <Text style={styles.bulletsIcon}>{'\u2B24'}</Text>
                      <Text style={styles.optionsText}>{option.data}</Text>
                    </View>
                  </View>
                </View>
              )}
            {option.data.length > 0 &&
              (option.name === 'Refer To' || option.name === 'Referred By') && (
                <View style={styles.optionsContainer}>
                  <View style={styles.optionsTextContainer}>
                    <View style={styles.bulletFlex}>
                      <Text style={styles.bulletsIcon}>{'\u2B24'}</Text>
                      <Text style={styles.optionsText}>{option.data[0]}</Text>
                    </View>
                  </View>
                  <Text style={styles.detailsText}>{option.data[1]}</Text>
                </View>
              )}
          </View>
        ))}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPressIn={() => navigation.navigate('EditEMR')}
            style={styles.bottomText}>
            <FontAwesome
              name="circle-thin"
              color={Colors.lightGrayBg}
              style={styles.circleColorIcon}
            />
            <Text style={styles.bottomTextColor}> Edit EMR</Text>
          </TouchableOpacity>
          <View style={styles.bottomText}>
            <FontAwesome
              name="circle-thin"
              color={Colors.lightGrayBg}
              style={styles.circleColorIcon}
            />
            <Text style={styles.bottomTextColor}> Attachments</Text>
          </View>
          <TouchableOpacity
            onPressIn={() => navigation.navigate('FollowUp')}
            style={styles.bottomText}>
            <FontAwesome
              name="circle-thin"
              color={Colors.lightGrayBg}
              style={styles.circleColorIcon}
            />
            <Text style={styles.bottomTextColor}> Followup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkBox}>
          <CheckBox
            tintColors={{true: Colors.lightPurple, false: Colors.slate_300}}
            onChange={() => setToggleCheckBox(!toggleCheckBox)}
            value={toggleCheckBox}
          />
          <Text style={styles.checkBoxText}>
            Share Prescription with patient
          </Text>
        </View>
        <View style={styles.buttonsFlex}>
          <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.buttonText}>Preview Rx</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.activeButtonBackground}>
            <Text style={styles.activeButtonText}>End Consultation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  mainContainer: {
    marginHorizontal: '5%',
  },
  columnContainer: {
    flexDirection: 'column',
    borderBottomColor: Colors.gray_400,
    borderBottomWidth: 1,
    paddingVertical: '3%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
  },
  rowIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  rowText: {
    color: Colors.black,
    fontWeight: '500',
    fontSize: 16,
  },
  iconFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  editIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
    backgroundColor: Colors.purple_100,
    borderRadius: 50,
  },
  editIconColor: {
    color: Colors.darkPurple,
    fontSize: 13,
  },
  closeIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
    backgroundColor: Colors.red_100,
    borderRadius: 50,
  },
  closeIconColor: {
    color: Colors.lightRed,
    fontSize: 12,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'column',
    paddingHorizontal: '12%',
    marginTop: '1%',
    marginBottom: '3%',
  },
  optionsTextContainer: {
    marginTop: 3,
    marginLeft: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bulletFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bulletsIcon: {
    fontSize: 10,
  },
  optionsText: {
    color: Colors.gray_800,
    fontWeight: '500',
  },
  detailsText: {
    marginLeft: '6%',
  },
  bodyText: {
    marginTop: '5%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyLeftText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '4%',
  },
  bodyRightText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '4%',
  },
  circleIcon: {
    fontSize: 20,
    color: Colors.black,
    marginBottom: '5%',
  },
  bodyTextFlex: {
    marginBottom: '5%',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: '5%',
    color: Colors.black,
  },
  addIcon: {
    marginBottom: '0%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontSize: 25,
    color: Colors.black,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_100,
  },
  bottomText: {
    flexDirection: 'row',
    marginBottom: '5%',
    backgroundColor: Colors.purple_100,
    padding: '3%',
    borderRadius: 10,
  },
  circleColorIcon: {
    fontSize: 20,
    color: Colors.darkPurple,
    fontWeight: '500',
  },
  bottomTextColor: {
    color: Colors.darkPurple,
    fontWeight: '700',
  },
  checkBox: {
    flexDirection: 'row',
    marginTop: '10%',
    marginHorizontal: '19%',
    marginBottom: '2%',
    alignItems: 'center',
  },
  checkBoxText: {
    color: Colors.gray_200,
    fontWeight: '500',
  },
  buttonsFlex: {
    flexDirection: 'row',
  },
  buttonBackground: {
    marginHorizontal: '5%',
    marginBottom: '10%',
    width: '40%',
    paddingVertical: 15,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.gray_500,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.gray_500,
  },
  activeButtonBackground: {
    marginHorizontal: '5%',
    marginBottom: '10%',
    width: '40%',
    paddingVertical: 15,
    backgroundColor: Colors.darkPurple,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.gray_400,
  },
});
export default E_PrescriptionOptions;
