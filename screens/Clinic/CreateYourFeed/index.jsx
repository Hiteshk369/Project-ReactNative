import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {Colors} from '../../../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const CreateYourFeed = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Card}>
        <View style={styles.bgWhite}>
          <View style={styles.cardAlignment}>
            <View style={styles.box} />
            <Text style={styles.addText}>Add Pictures</Text>
            <Text style={styles.addDownText}>
              {' '}
              Please add minimum 5 or maximum 10 {'\n'}picture to be displayed
              on your public profile.
            </Text>
            <TouchableOpacity style={styles.buttonBackground}>
              <Text style={styles.buttonText}>
                Getting Started
                <Entypo
                  name="chevron-thin-right"
                  color={Colors.lightPurple}
                  style={styles.rightIcon}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.Card}>
        <View style={styles.bgWhite}>
          <View style={styles.cardAlignment}>
            <View style={styles.box} />
            <Text style={styles.addText}>Add Short Videos</Text>
            <Text style={styles.addDownText}>
              You can add upto 10 short videos,each video{'\n'} of maximum one
              minute length.
            </Text>
            <TouchableOpacity style={styles.buttonBackground}>
              <Text style={styles.buttonText}>
                Getting Started
                <Entypo
                  name="chevron-thin-right"
                  color={Colors.lightPurple}
                  style={styles.rightIcon}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{paddingBottom: '20%'}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: '10%',
    backgroundColor: Colors.darkPurple,
  },
  Card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgWhite: {
    marginTop: '2%',
    marginBottom: '5%',
    height: 320,
    width: '95%',
    borderRadius: 25,
    backgroundColor: Colors.white,
  },
  box: {
    height: 110,
    width: 110,
    borderColor: Colors.black,
    borderWidth: 1,
    marginTop: '10%',
    // marginBottom: 15,
  },
  cardAlignment: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBackground: {
    margin: 5,
    width: '98%',
    paddingVertical: 15,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: '3%',
    color: Colors.black,
  },
  addDownText: {
    fontSize: 15,
    marginVertical: '2%',
    fontWeight: '500',
    color: Colors.lightGrayText,
  },
  buttonText: {
    fontSize: 21,
    fontWeight: '600',
    color: Colors.lightPurple,
  },
  rightIcon: {
    fontSize: 18,
    fontWeight: '900',
  },
});

export default CreateYourFeed;
