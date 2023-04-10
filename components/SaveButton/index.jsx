import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const SaveButton = ({nextScreen}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPressIn={() => navigation.navigate(nextScreen)}
      style={styles.buttonBackground}>
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
