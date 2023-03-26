import {View, Text, StyleSheet} from 'react-native';

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
    <View style={styles.navFlowContainer}>
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
  navFlowContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
  },
  navCircle: {
    height: 50,
    width: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  navLine: {
    height: 10,
    width: 20,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    fontSize: 8,
    width: 60,
    height: 30,
    color: '#ff6f00',
  },
  notActive: {
    fontSize: 8,
    width: 60,
    height: 30,
  },
});

export default FormNavigation;