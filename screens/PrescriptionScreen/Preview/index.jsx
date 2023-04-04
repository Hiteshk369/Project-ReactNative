import {View, Text, ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../../constants/colors';

const Preview = () => {
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
            <Text style={styles.leftText}>Preview</Text>
          </View>
          <View style={styles.rightText}>
            <MaterialIcons
              name="print"
              color={Colors.white}
              style={styles.toggleIcon}
            />
            <AntDesign
              name="download"
              color={Colors.white}
              style={styles.toggleIcon}
            />
            <MaterialIcons
              name="share"
              color={Colors.white}
              style={styles.toggleIcon}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.mainContainer}>
        <View style={styles.flexContainer}>
          <Text style={styles.bigText}>Select preferred languages:</Text>
          <View style={styles.flexText}>
            <Text style={styles.colorText}>English</Text>
            <FontAwesome
              name="angle-down"
              color={Colors.darkPurple}
              style={styles.dropDown}
            />
          </View>
        </View>
        <Text style={styles.smallText}>
          Only Medication instructions will be changed to select language
        </Text>
      </View>
      <View style={styles.whiteBox} />
      <View style={styles.whiteBox} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
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
    gap: 20,
    color: Colors.white,
  },
  toggleIcon: {
    alignItems: 'center',
    fontSize: 28,
  },
  mainContainer: {
    backgroundColor: Colors.purple_100,
    padding: '5%',
    borderBottomWidth: 6,
    borderBottomColor: Colors.gray_300,
  },
  flexContainer: {
    flexDirection: 'row',
    marginBottom: '1%',
    justifyContent: 'space-between',
  },
  flexText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  bigText: {
    fontSize: 17,
    color: Colors.black,
    fontWeight: '500',
  },
  smallText: {
    fontSize: 12,
  },
  colorText: {
    fontSize: 17,
    fontWeight: '500',
    color: Colors.darkPurple,
  },
  dropDown: {
    fontSize: 25,
  },
  whiteBox: {
    backgroundColor: Colors.white,
    height: 600,
    borderBottomWidth: 6,
    borderBottomColor: Colors.gray_300,
  },
});

export default Preview;
