import {View, Text, ScrollView, StyleSheet, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../constants/colors';
import {TouchableOpacity} from 'react-native';
import {useState} from 'react';

const PatientsData = ({navigation}) => {
  const [save, setSave] = useState(false);
  return (
    <ScrollView
      style={
        save === true
          ? [styles.container, styles.notActiveBg]
          : [styles.container, styles.activeBg]
      }>
      <LinearGradient
        colors={[Colors.darkPurple, Colors.lightPurple]}
        style={styles.gradient}>
        <View style={styles.navBackground}>
          <View style={styles.Flex}>
            <TouchableOpacity
              onPressIn={() => navigation.navigate('Prescribe')}>
              <MaterialIcons
                name="arrow-back-ios"
                color={Colors.white}
                style={styles.leftText}
              />
            </TouchableOpacity>
            <Text style={styles.leftText}>Sandeep R Reddy</Text>
            <TouchableOpacity onPressIn={() => setSave(!save)}>
              <Text style={styles.leftText}>Save</Text>
            </TouchableOpacity>
            <Modal
              animationType="fade"
              transparent={true}
              visible={save}
              onRequestClose={() => {
                setSave(!save);
              }}>
              <TouchableOpacity onPressIn={() => setSave(!save)}>
                <View style={styles.gradientModal}>
                  <View style={styles.modalContainer}>
                    <Text style={styles.successText}>Save Changes ?</Text>
                    <Text style={styles.invoiceText}>
                      Going back without saving will delete all {'\n'}
                      {'                   '} the entered details.
                    </Text>
                    <TouchableOpacity>
                      <Text style={styles.buttonColorText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.buttonTextModal}>Discard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.cancelTextModal}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </Modal>
          </View>
        </View>
      </LinearGradient>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.horizontalContainer}>
          <View style={styles.columnText}>
            <View style={styles.innerCircle} />
            <Text style={styles.circleText}>Medical{'\n'}History</Text>
          </View>
          <View style={styles.columnText}>
            <View style={styles.innerCircle} />
            <Text style={styles.circleText}> Family {'\n'}History</Text>
          </View>
          <View style={styles.columnText}>
            <View style={styles.innerCircle} />
            <Text style={styles.circleText}>
              {'  '}Ongoing {'\n'}Medication
            </Text>
          </View>
          <View style={styles.columnText}>
            <View style={styles.innerCircle} />
            <Text style={styles.circleText}>Allergies</Text>
          </View>
          <View style={styles.columnText}>
            <View style={styles.innerCircle} />
            <Text style={styles.circleText}>
              {'  '}Habit{'\n'}History
            </Text>
          </View>
          <View style={styles.columnText}>
            <View style={styles.innerCircle} />
            <Text style={styles.circleText}>Surgeries</Text>
          </View>
          <View style={styles.columnText}>
            <View style={styles.innerCircle} />
            <Text style={styles.circleText}>Immunization</Text>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white,
  },
  activeBg: {
    backgroundColor: Colors.white,
  },
  notActiveBg: {
    backgroundColor: Colors.gray_800,
  },
  gradient: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  navBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20%',
    margin: '5%',
    justifyContent: 'center',
  },
  Flex: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    gap: 75,
    color: Colors.white,
  },
  box: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '8%',
    width: '83%',
    height: 100,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    alignItems: 'center',
  },
  leftText: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
    gap: 10,
    color: Colors.white,
  },
  menuContainer: {},
  gradientModal: {
    marginTop: '50%',
    alignSelf: 'center',
    borderRadius: 20,
    height: '55%',
    width: '80%',
    backgroundColor: Colors.white,
  },
  modalContainer: {
    alignItems: 'center',
  },
  successText: {
    fontSize: 17,
    fontWeight: '500',
    color: Colors.black,
    marginVertical: '5%',
    marginTop: '15%',
  },
  invoiceText: {
    fontSize: 13,
    marginHorizontal: '10%',
    // fontWeight: '200',
    color: Colors.black,
  },
  buttonColorText: {
    backgroundColor: Colors.darkPurple,
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
    borderRadius: 20,
    padding: '3%',
    paddingHorizontal: '32%',
    marginVertical: '8%',
  },
  buttonTextModal: {
    borderWidth: 1,
    borderColor: Colors.darkPurple,
    color: Colors.darkPurple,
    fontSize: 16,
    fontWeight: '500',
    borderRadius: 20,
    padding: '3%',
    paddingHorizontal: '29%',
    // marginVertical: '%',
  },
  cancelTextModal: {
    color: Colors.darkPurple,
    fontSize: 16,
    fontWeight: '500',
    borderRadius: 20,
    padding: '3%',
    paddingHorizontal: '30%',
    marginVertical: '8%',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  outerCircle: {
    height: 58,
    width: 58,
    borderColor: Colors.black,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    height: 50,
    width: 50,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: Colors.white,
  },
  columnText: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  circleText: {
    fontSize: 14,
    color: Colors.gray_800,
    marginTop: 5,
  },
});

export default PatientsData;
