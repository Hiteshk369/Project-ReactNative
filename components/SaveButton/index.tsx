import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const SaveButton = () => {
  return (
    <TouchableOpacity style={styles.buttonBackground}>
      <Text style={styles.buttonText}>Save & Proceed</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBackground: {
    margin: 5,
    width: '98%',
    paddingVertical: 15,
    backgroundColor: '#ff6f00',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
  },
});

export default SaveButton;
