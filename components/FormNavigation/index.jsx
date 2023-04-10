import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const FormNavigation = () => {
  const navItems = [
    {
      id: 1,
      name: 'Personal Details',
      active: true,
    },
    {
      id: 2,
      name: 'Verification',
      active: false,
    },
    {
      id: 3,
      name: 'Banking Details',
      active: false,
    },
    {
      id: 4,
      name: 'Experience & Education',
      active: false,
    },
    {
      id: 5,
      name: 'Clinic Details',
      active: false,
    },
  ];

  return (
    <View style={styles.mainNavFlowContainer}>
      {navItems.map(item => (
        <View style={styles.navFlowContainer} key={item.id}>
          {item.id <= 4 ? (
            <View>
              <View style={styles.navFlowContainer}>
                <View style={styles.navCircle} />
                <View style={styles.navLine} />
              </View>
              <Text style={item.active ? styles.active : styles.notActive}>
                {item.name}
              </Text>
            </View>
          ) : (
            <View>
              <View style={styles.navFlowContainer}>
                <View style={styles.navCircle} />
              </View>
              <Text style={item.active ? styles.active : styles.notActive}>
                {item.name}
              </Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainNavFlowContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navFlowContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '80%',
    alignItems: 'center',
  },
  navCircle: {
    height: 55,
    width: 55,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    borderRadius: 50,
  },
  navLine: {
    height: 8,
    width: 21,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    fontSize: 8,
    width: 60,
    height: 30,
    fontWeight: '500',
    color: Colors.orange,
  },
  notActive: {
    fontSize: 8,
    width: 60,
    height: 30,
    color: Colors.slate_200,
    fontWeight: '500',
  },
});

export default FormNavigation;
