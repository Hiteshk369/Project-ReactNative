import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/colors';
import {StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ConsultationCard = ({
  appointmentStartTime,
  appointmentEndTime,
  name,
  age,
  gender,
  whatsappNumber,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{appointmentStartTime}</Text>
          <Entypo name="flow-line" style={styles.flowLine} />
          <Text style={styles.time}>{appointmentEndTime}</Text>
        </View>
        <View style={styles.bar} />
        <View style={styles.detailsContainer}>
          <View style={styles.personNameContainer}>
            <Text style={styles.personName}>{name}</Text>
          </View>
          <View styles={styles.personDetailsContainer}>
            <Text style={styles.personDetails}>
              {age} Years | {gender}
            </Text>
            <View style={styles.flexRow}>
              <View style={styles.whatsappDetails}>
                <FontAwesome style={styles.whatsappIcon} name="whatsapp" />
                <Text style={styles.whatsappNumber}>{whatsappNumber}</Text>
              </View>
              <View style={styles.whatsappDetails}>
                <FontAwesome
                  style={styles.whatsappNumber}
                  name="plus-square-o"
                />
                <Text style={styles.whatsappNumber}>Green health</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.clinicContainer}>
          <FontAwesome name="plus-square-o" style={styles.clinicIcon} />
          <Text style={styles.clinicText}>In Clinic</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    window: '100%',
    height: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'column',
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    width: '68%',
    paddingLeft: 10,
    gap: 3,
  },
  clinicContainer: {
    width: '10%',
    alignItems: 'center',
  },
  time: {
    color: Colors.darkPurple,
    fontWeight: '500',
  },
  flowLine: {
    fontSize: 40,
    color: Colors.darkPurple,
  },
  bar: {
    borderColor: Colors.darkPurple,
    borderWidth: 2,
    height: '90%',
    borderRadius: 10,
    backgroundColor: Colors.darkPurple,
  },
  personNameContainer: {
    height: '35%',
  },
  personName: {
    color: Colors.darkPurple,
    fontWeight: '600',
    fontSize: 20,
  },
  personDetailsContainer: {
    height: '100%',
  },
  personDetails: {
    color: Colors.gray_600,
    fontSize: 14,
    marginBottom: 2,
  },
  whatsappDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  whatsappIcon: {
    fontSize: 14,
    color: Colors.green,
  },
  whatsappNumber: {
    fontSize: 14,
    color: Colors.gray_600,
  },
  flexRow: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  clinicIcon: {
    fontSize: 20,
    color: Colors.darkPurple,
  },
  clinicText: {
    color: Colors.darkPurple,
    fontSize: 10,
  },
});

export default ConsultationCard;
