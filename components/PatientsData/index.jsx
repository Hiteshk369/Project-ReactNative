import {View, Text, ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../constants/colors';

const PatientsData = () => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[Colors.darkPurple, Colors.lightPurple]}
        style={styles.gradient}>
        <View style={styles.navBackground}>
          <View style={styles.Flex}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.white}
              style={styles.leftText}
            />
            <Text style={styles.leftText}>Sandeep R Reddy</Text>
            <Text style={styles.leftText}>Save</Text>
          </View>
        </View>
      </LinearGradient>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.horizontalContainer}>
          <View style={styles.columnText}>
            <View style={styles.bigCircle} />
            <Text style={styles.circleText}>Medical{'\n'}History</Text>
          </View>
          <View style={styles.columnText}>
            <View style={styles.bigCircle} />
            <Text style={styles.circleText}> Family {'\n'}History</Text>
          </View>
          <View style={styles.columnText}>
            <View style={styles.bigCircle} />
            <Text style={styles.circleText}>
              {'  '}Ongoing {'\n'}Medication
            </Text>
          </View>
          <View style={styles.columnText}>
            <View style={styles.bigCircle} />
            <Text style={styles.circleText}>Allergies</Text>
          </View>
          <View style={styles.columnText}>
            <View style={styles.bigCircle} />
            <Text style={styles.circleText}>
              {'  '}Habit{'\n'}History
            </Text>
          </View>
          <View style={styles.columnText}>
            <View style={styles.bigCircle} />
            <Text style={styles.circleText}>Surgeries</Text>
          </View>
          <View style={styles.columnText}>
            <View style={styles.bigCircle} />
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
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  bigCircle: {
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
