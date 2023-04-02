import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../../../constants/colors';

const EMR_Fields = () => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[Colors.darkPurple, Colors.lightPurple]}
        style={styles.gradient}>
        <View style={styles.navHeader}>
          <MaterialIcons
            name="arrow-back-ios"
            color={Colors.white}
            style={styles.backIcon}
          />
          <Text style={styles.navText}>Customize Fields</Text>
        </View>
      </LinearGradient>
      <View style={styles.bodyConatiner}>
        <View style={styles.bodyHeader}>
          <View style={styles.bodyHeaderLeft}>
            <Text style={styles.leftBig}>EMR Fields</Text>
            <View style={styles.leftSmallFlex}>
              <Text style={styles.leftSmall}>Tap</Text>
              <MaterialIcons
                name="drag-indicator"
                color={Colors.gray_200}
                style={styles.dragIconSmall}
              />
              <Text style={styles.leftSmall}>and drag fields to reorder</Text>
            </View>
          </View>
          <View style={styles.bodyHeaderRight}>
            <TouchableOpacity style={styles.buttonBackground}>
              <MaterialIcons
                name="remove-red-eye"
                color={Colors.darkPurple}
                style={styles.eyeIcon}
              />
              <Text style={styles.buttonText}>Hide fields</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bodyFlex}>
          <MaterialIcons
            name="drag-indicator"
            color={Colors.gray_200}
            style={styles.dragIcon}
          />
          <View style={styles.boxFlex}>
            <View style={styles.boxLeft}>
              <FontAwesome
                name="circle-thin"
                color={Colors.black}
                style={styles.circleIcon}
              />
              <Text style={styles.boxText}>Cheif Complaints</Text>
            </View>
            <View style={styles.boxRight}>
              <MaterialIcons
                name="check-circle-outline"
                color={Colors.darkPurple}
                style={styles.circlecheckIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyFlex}>
          <MaterialIcons
            name="drag-indicator"
            color={Colors.gray_200}
            style={styles.dragIcon}
          />
          <View style={styles.boxFlex}>
            <View style={styles.boxLeft}>
              <FontAwesome
                name="circle-thin"
                color={Colors.black}
                style={styles.circleIcon}
              />
              <Text style={styles.boxText}>Examinations</Text>
            </View>
            <View style={styles.boxRight}>
              <MaterialIcons
                name="check-circle-outline"
                color={Colors.darkPurple}
                style={styles.circlecheckIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyFlex}>
          <MaterialIcons
            name="drag-indicator"
            color={Colors.gray_200}
            style={styles.dragIcon}
          />
          <View style={styles.boxFlex}>
            <View style={styles.boxLeft}>
              <FontAwesome
                name="circle-thin"
                color={Colors.black}
                style={styles.circleIcon}
              />
              <Text style={styles.boxText}>Diagnosis</Text>
            </View>
            <View style={styles.boxRight}>
              <MaterialIcons
                name="check-circle-outline"
                color={Colors.darkPurple}
                style={styles.circlecheckIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyFlex}>
          <MaterialIcons
            name="drag-indicator"
            color={Colors.gray_200}
            style={styles.dragIcon}
          />
          <View style={styles.boxFlex}>
            <View style={styles.boxLeft}>
              <FontAwesome
                name="circle-thin"
                color={Colors.black}
                style={styles.circleIcon}
              />
              <Text style={styles.boxText}>Medication</Text>
            </View>
            <View style={styles.boxRight}>
              <MaterialIcons
                name="check-circle-outline"
                color={Colors.darkPurple}
                style={styles.circlecheckIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyFlex}>
          <MaterialIcons
            name="drag-indicator"
            color={Colors.gray_200}
            style={styles.dragIcon}
          />
          <View style={styles.boxFlex}>
            <View style={styles.boxLeft}>
              <FontAwesome
                name="circle-thin"
                color={Colors.black}
                style={styles.circleIcon}
              />
              <Text style={styles.boxText}>Procedure</Text>
            </View>
            <View style={styles.boxRight}>
              <MaterialIcons
                name="check-circle-outline"
                color={Colors.darkPurple}
                style={styles.circlecheckIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyFlex}>
          <MaterialIcons
            name="drag-indicator"
            color={Colors.gray_200}
            style={styles.dragIcon}
          />
          <View style={styles.boxFlex}>
            <View style={styles.boxLeft}>
              <FontAwesome
                name="circle-thin"
                color={Colors.black}
                style={styles.circleIcon}
              />
              <Text style={styles.boxText}>Investigation</Text>
            </View>
            <View style={styles.boxRight}>
              <MaterialIcons
                name="check-circle-outline"
                color={Colors.darkPurple}
                style={styles.circlecheckIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyFlex}>
          <MaterialIcons
            name="drag-indicator"
            color={Colors.gray_200}
            style={styles.dragIcon}
          />
          <View style={styles.boxFlex}>
            <View style={styles.boxLeft}>
              <FontAwesome
                name="circle-thin"
                color={Colors.black}
                style={styles.circleIcon}
              />
              <Text style={styles.boxText}>Advice</Text>
            </View>
            <View style={styles.boxRight}>
              <MaterialIcons
                name="check-circle-outline"
                color={Colors.darkPurple}
                style={styles.circlecheckIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyFlex}>
          <MaterialIcons
            name="drag-indicator"
            color={Colors.gray_200}
            style={styles.dragIcon}
          />
          <View style={styles.boxFlex}>
            <View style={styles.boxLeft}>
              <FontAwesome
                name="circle-thin"
                color={Colors.black}
                style={styles.circleIcon}
              />
              <Text style={styles.boxText}>Findings</Text>
            </View>
            <View style={styles.boxRight}>
              <MaterialIcons
                name="check-circle-outline"
                color={Colors.darkPurple}
                style={styles.circlecheckIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyFlex}>
          <MaterialIcons
            name="drag-indicator"
            color={Colors.gray_200}
            style={styles.dragIcon}
          />
          <View style={styles.boxFlex}>
            <View style={styles.boxLeft}>
              <FontAwesome
                name="circle-thin"
                color={Colors.black}
                style={styles.circleIcon}
              />
              <Text style={styles.boxText}>Emergency Instructions</Text>
            </View>
            <View style={styles.boxRight}>
              <MaterialIcons
                name="check-circle-outline"
                color={Colors.darkPurple}
                style={styles.circlecheckIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyFlex}>
          <MaterialIcons
            name="drag-indicator"
            color={Colors.gray_200}
            style={styles.dragIcon}
          />
          <View style={styles.boxFlex}>
            <View style={styles.boxLeft}>
              <FontAwesome
                name="circle-thin"
                color={Colors.black}
                style={styles.circleIcon}
              />
              <Text style={styles.boxText}>Prognosis</Text>
            </View>
            <View style={styles.boxRight}>
              <MaterialIcons
                name="check-circle-outline"
                color={Colors.darkPurple}
                style={styles.circlecheckIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyFlex}>
          <MaterialIcons
            name="drag-indicator"
            color={Colors.gray_200}
            style={styles.dragIcon}
          />
          <View style={styles.boxFlex}>
            <View style={styles.boxLeft}>
              <FontAwesome
                name="circle-thin"
                color={Colors.black}
                style={styles.circleIcon}
              />
              <Text style={styles.boxText}>Refer To</Text>
            </View>
            <View style={styles.boxRight}>
              <MaterialIcons
                name="check-circle-outline"
                color={Colors.darkPurple}
                style={styles.circlecheckIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyFlex}>
          <MaterialIcons
            name="drag-indicator"
            color={Colors.gray_200}
            style={styles.dragIcon}
          />
          <View style={styles.boxFlex}>
            <View style={styles.boxLeft}>
              <FontAwesome
                name="circle-thin"
                color={Colors.black}
                style={styles.circleIcon}
              />
              <Text style={styles.boxText}>Referred By</Text>
            </View>
            <View style={styles.boxRight}>
              <MaterialIcons
                name="check-circle-outline"
                color={Colors.darkPurple}
                style={styles.circlecheckIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyFlex}>
          <MaterialIcons
            name="drag-indicator"
            color={Colors.gray_200}
            style={styles.dragIcon}
          />
          <View style={styles.boxFlex}>
            <View style={styles.boxLeft}>
              <FontAwesome
                name="circle-thin"
                color={Colors.black}
                style={styles.circleIcon}
              />
              <Text style={styles.boxText}>Doctor Notes</Text>
            </View>
            <View style={styles.boxRight}>
              <MaterialIcons
                name="check-circle-outline"
                color={Colors.darkPurple}
                style={styles.circlecheckIcon}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.leftSmallFlex}>
        <TouchableOpacity style={styles.bottomButtonsBackground}>
          <Text style={styles.buttonText}>Set default</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeBottomButtonsBackground}>
          <Text style={styles.activeButtonText}>Save changes</Text>
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
  navHeader: {
    flexDirection: 'row',
    margin: '7%',
    marginTop: '20%',
    alignItems: 'center',
    gap: 10,
  },
  backIcon: {
    fontSize: 25,
  },
  navText: {
    color: Colors.white,
    fontSize: 20,
    alignItems: 'center',
    marginLeft: '18%',
  },
  bodyConatiner: {
    height: 920,
    width: '100%',
  },
  bodyHeader: {
    flexDirection: 'row',
    margin: '7%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bodyHeaderLeft: {},
  leftBig: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: '500',
  },
  leftSmall: {
    marginVertical: '3%',
    fontSize: 12,
    color: Colors.gray_200,
    alignItems: 'center',
  },
  leftSmallFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyHeaderRight: {
    width: '43%',
    marginLeft: '7%',
  },
  buttonBackground: {
    // width: '62%',
    paddingVertical: '4%',
    backgroundColor: Colors.gray_300,
    borderWidth: 1,
    borderColor: Colors.darkPurple,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.darkPurple,
    alignItems: 'center',
  },
  eyeIcon: {
    fontSize: 20,
  },
  dragIconSmall: {
    fontSize: 20,
  },
  dragIcon: {
    fontSize: 35,
  },
  bodyFlex: {
    alignItems: 'center',
    marginHorizontal: '5%',
    marginBottom: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  boxFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    borderWidth: 1,
    borderColor: Colors.darkPurple,
    width: '85%',
    borderRadius: 10,
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
  boxLeft: {
    flexDirection: 'row',
    gap: 10,
  },
  circleIcon: {
    fontSize: 20,
  },
  boxText: {
    fontSize: 16,
    color: Colors.black,
  },
  CheckCircle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  circlecheckIcon: {
    fontSize: 25,
    justifyContent: 'flex-end',
  },
  bottomButtonsBackground: {
    width: '40%',
    marginBottom: '5%',
    marginHorizontal: '5%',
    paddingVertical: '4%',
    backgroundColor: Colors.gray_300,
    borderWidth: 1,
    borderColor: Colors.darkPurple,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeBottomButtonsBackground: {
    width: '40%',
    marginBottom: '5%',
    marginHorizontal: '5%',
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

export default EMR_Fields;
