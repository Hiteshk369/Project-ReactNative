import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

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
    backgroundColor: Colors.orange,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default SaveButton;
