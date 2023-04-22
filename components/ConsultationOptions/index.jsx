import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useState} from 'react';
import {Colors} from '../../constants/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ConsultationOptions = ({navigation}) => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  return (
    <ScrollView style={styles.Container}>
      <View>
        <View style={styles.smallFlexContainer}>
          <View style={styles.leftFlexText}>
            <View style={styles.smallCircle} />
            <View style={styles.boxBottomFlex}>
              <TouchableOpacity
                style={styles.rightDropDown}
                onPressIn={() => setDropdown(!dropdown)}>
                <Text style={styles.boxText}>Consultation</Text>
                {dropdown ? (
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    color={Colors.black}
                    style={styles.dropDown}
                  />
                ) : (
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    color={Colors.black}
                    style={styles.dropDown}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.smallFlexContainer}>
          <View style={styles.leftFlexText}>
            <View style={styles.smallCircle} />
            <View style={styles.boxBottomFlex}>
              <TouchableOpacity
                style={styles.rightDropDown}
                onPressIn={() => setDropdown(!dropdown)}>
                <Text style={styles.boxText}>Default Consultation</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.boxBottomTextRight}>
          <Text style={styles.boxBottomText}>80 Characters remaining</Text>
        </View>
        <View style={styles.smallFlexContainer}>
          <View style={styles.leftFlexText}>
            <View style={styles.smallCircle} />
            <View style={styles.boxBottomFlex}>
              <TouchableOpacity
                style={styles.rightDropDown}
                onPressIn={() => setDropdown2(!dropdown2)}>
                <Text style={styles.boxText}>500</Text>
                {dropdown2 ? (
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    color={Colors.black}
                    style={styles.dropDown}
                  />
                ) : (
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    color={Colors.black}
                    style={styles.dropDown}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.smallFlexContainer}>
          <View style={styles.leftFlexText}>
            <View style={styles.smallCircle} />
            <View style={styles.boxBottomFlex}>
              <Text style={styles.boxText}>20</Text>
              <FontAwesome
                name="rupee"
                color={Colors.gray_100}
                style={styles.rupee}
              />
              <MaterialIcons
                name="keyboard-arrow-down"
                color={Colors.gray_100}
                style={styles.discountDropDown}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonFlex}>
          <TouchableOpacity style={styles.activeButtonBackground}>
            <Text style={styles.activeButtonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBackground}
            onPressIn={() => navigation.navigate('AddInVoice')}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white,
  },
  FlexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallFlexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
    // marginHorizontal: '4%',
  },
  leftFlexText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallCircle: {
    height: 35,
    width: 35,
    marginHorizontal: '5%',
    alignItems: 'center',
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: Colors.white,
  },
  boxBottomFlex: {
    width: '75%',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightDropDown: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxText: {
    fontSize: 18,
    color: Colors.black,
    paddingHorizontal: '5%',
    paddingRight: '6%',
    paddingVertical: '3%',
  },
  dropDown: {
    fontSize: 35,
  },
  boxBottomTextRight: {
    alignSelf: 'flex-end',
    marginHorizontal: '10%',
    marginVertical: '2%',
  },
  boxBottomText: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.green_200,
  },
  boxLightText: {
    fontSize: 18,
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    color: Colors.gray_100,
  },
  rupee: {
    fontSize: 18,
    marginLeft: '55%',
  },
  discountDropDown: {
    fontSize: 35,
    marginRight: '1%',
  },
  buttonFlex: {
    flexDirection: 'row',
  },
  buttonBackground: {
    margin: '5%',
    width: '40%',
    paddingVertical: 15,
    backgroundColor: Colors.darkPurple,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.white,
  },
  activeButtonBackground: {
    margin: '5%',
    width: '40%',
    // paddingVertical: 15,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.darkPurple,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.darkPurple,
  },
});

export default ConsultationOptions;
