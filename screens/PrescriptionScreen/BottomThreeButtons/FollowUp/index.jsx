import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../../../constants/colors';

import CheckBox from '@react-native-community/checkbox';

const FollowUp = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[Colors.darkPurple, Colors.lightPurple]}
        style={styles.gradient}>
        <View style={styles.navBackground}>
          <View style={styles.leftText}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.white}
              style={styles.leftText}
            />
            <Text style={styles.leftText}>Add Followup</Text>
          </View>
          <View style={styles.rightText}>
            <FontAwesome
              name="video-camera"
              color={Colors.white}
              style={styles.videoIcon}
            />
            <Text style={styles.rightText}>Video Consult</Text>
            <MaterialIcons
              name="toggle-off"
              color={Colors.white}
              style={styles.toggleIcon}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.headerContainer}>
        <View style={styles.nameHeader}>
          <View style={styles.circle} />
          <View>
            <Text style={styles.headerBigText}>Sandeep R Reddy</Text>
            <Text style={styles.headerSmallText}>
              M {'  '}|{'  '} 32 Years {'  '}|{'  '} +918919797512
            </Text>
          </View>
          <MaterialIcons
            name="edit"
            color={Colors.darkPurple}
            style={styles.editIcon}
          />
        </View>
        <View style={styles.nameHeader}>
          <Text style={styles.bigText}> {'   '}Follow up date</Text>
          <Text style={styles.smallText}>04 Mar 23 . Saturday</Text>
        </View>
        <View style={styles.buttonsRowContainer}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>tomorrow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>After 1 week</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.activeButton}>
              <Text style={styles.activeButtonText}>After 3 days</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>After 2 week</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>After 5 days</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moreButton}>
              <View style={styles.flexButton}>
                <Text style={styles.moreButtonText}>More</Text>
                <FontAwesome
                  name="angle-down"
                  color={Colors.darkPurple}
                  style={styles.dropDown}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.slotFlexContainer}>
        <View style={styles.slotLeftContainer}>
          <Text style={styles.slotLeftText}>Time</Text>
          <Text style={styles.slotLeftLightText}>(optional)</Text>
        </View>
        <View style={styles.slotRightContainer}>
          <Text style={styles.slotRightText}>Select slot</Text>
        </View>
      </View>
      <View style={styles.card}>
        <TextInput
          placeholderTextColor={Colors.black}
          style={styles.inputField}
          placeholder="Dry cough,Loss of appetite"
        />
      </View>
      <View style={styles.notifyContainer}>
        <Text style={styles.notifyHeadText}>Notify Patient via</Text>
        <View style={styles.notifyFlexText}>
          <CheckBox
            tintColors={{true: Colors.lightPurple, false: Colors.slate_300}}
            onChange={() => setToggleCheckBox(!toggleCheckBox)}
            value={toggleCheckBox}
          />
          <Text style={styles.textColor}>WhatsApp</Text>
          <CheckBox
            tintColors={{true: Colors.lightPurple, false: Colors.slate_300}}
            onChange={() => setToggleCheckBox(!toggleCheckBox)}
            value={toggleCheckBox}
          />
          <Text style={styles.textColor}>SMS</Text>
        </View>
      </View>
      <View style={styles.buttonsFlex}>
        <TouchableOpacity style={styles.bottomButtonsBackground}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeBottomButtonsBackground}>
          <Text style={styles.activeButtonText}>Add Followup</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.gray_300,
  },
  gradient: {
    height: 140,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  navBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20%',
    margin: '5%',
    justifyContent: 'space-between',
  },
  leftText: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    gap: 10,
    color: Colors.white,
  },
  rightText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginLeft: '5%',
    fontSize: 16,
    gap: 10,
    color: Colors.white,
  },
  toggleIcon: {
    alignItems: 'center',
    fontSize: 35,
  },
  videoIcon: {
    alignItems: 'center',
    fontSize: 20,
  },
  nameHeader: {
    flexDirection: 'row',
    marginVertical: '5%',
    gap: 20,
    alignItems: 'center',
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_100,
    marginHorizontal: '5%',
  },
  circle: {
    height: 50,
    width: 50,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: Colors.gray_300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBigText: {
    fontSize: 18,
    color: Colors.black,
  },
  headerSmallText: {
    fontSize: 13,
    marginTop: '2%',
    color: Colors.darkPurple,
  },
  editIcon: {
    fontSize: 20,
    marginLeft: '8%',
  },
  bigText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.black,
  },
  smallText: {
    fontSize: 12,
    color: Colors.gray_400,
  },
  buttonsRowContainer: {
    flexDirection: 'row',
    width: '75%',
    paddingVertical: '1%',
    marginHorizontal: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  buttonsContainer: {
    paddingVertical: '1%',
  },
  Button: {
    // marginTop: '15%',
    marginBottom: '15%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0.1,
    borderColor: Colors.gray_200,
    elevation: 1,
  },
  ButtonText: {
    color: Colors.black,
    fontWeight: '500',
  },
  activeButton: {
    // marginTop: '5%',
    marginBottom: '15%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Colors.darkPurple,
  },
  activeButtonText: {
    color: Colors.white,
    fontWeight: '500',
  },
  flexButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dropDown: {
    fontSize: 20,
  },
  moreButton: {
    marginBottom: '15%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButtonText: {
    color: Colors.darkPurple,
    fontWeight: '500',
    fontSize: 15,
  },
  slotFlexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '5%',
    marginVertical: '10%',
  },
  slotLeftContainer: {
    flexDirection: 'row',
    gap: 5,
    marginHorizontal: '3%',
  },
  slotLeftText: {
    fontSize: 16,
    color: Colors.black,
  },
  slotLeftLightText: {
    fontSize: 16,
    color: Colors.gray_400,
  },
  slotRightContainer: {
    flexDirection: 'row',
    gap: 5,
    marginHorizontal: '5%',
  },
  slotRightText: {
    fontSize: 16,
    color: Colors.darkPurple,
  },
  card: {
    backgroundColor: Colors.purple_100,
    width: '90%',
    height: 170,
    marginTop: '0%',
    borderRadius: 20,
    margin: '5%',
  },
  inputField: {
    marginHorizontal: '5%',
    fontSize: 16,
    fontWeight: '500',
  },
  notifyContainer: {
    padding: '3%',
  },
  notifyHeadText: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: '5%',
  },
  notifyFlexText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2%',
  },
  textColor: {
    color: Colors.black,
    marginRight: '2%',
  },
  buttonsFlex: {
    borderTopWidth: 1,
    borderTopColor: Colors.gray_100,
    flexDirection: 'row',
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  bottomButtonsBackground: {
    width: '40%',
    marginVertical: '5%',
    paddingVertical: '4%',
    backgroundColor: Colors.gray_300,
    borderWidth: 1,
    borderColor: Colors.darkPurple,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: Colors.darkPurple,
    alignItems: 'center',
  },
  activeBottomButtonsBackground: {
    width: '40%',
    marginVertical: '5%',
    paddingVertical: '4%',
    backgroundColor: Colors.darkPurple,
    borderWidth: 1,
    borderColor: Colors.darkPurple,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButtonText: {
    fontSize: 15,
    color: Colors.white,
    alignItems: 'center',
  },
});

export default FollowUp;
