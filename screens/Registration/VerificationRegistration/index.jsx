import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {FormNavigation, SaveButton} from '../../../components';

import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const VerificationRegistration = () => {
  return (
    <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.breadCrumb}>
          <FormNavigation />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.verificationHeadingContainer}>
            <Text style={styles.verificationHeading}>Verification</Text>
          </View>
          <View style={styles.mrnContainer}>
            <Text style={styles.mrnHeading}>
              Medical Registration Number<Text style={styles.redColor}>*</Text>
            </Text>
            <TextInput
              style={styles.mrnInput}
              placeholder="Enter Your MRN"
              placeholderTextColor={'#d8d8d8'}
            />
          </View>
          <View style={styles.verificationDocumentsContainer}>
            <Text style={styles.verificationHeading}>
              Verification Documents
            </Text>
            <View style={styles.bulletPointContainer}>
              <Text style={styles.bulletPoint}>{'\u2022'}</Text>
              <Text style={styles.bulletPointText}>
                Kindly make sure all the images are clear and readable
              </Text>
            </View>
            <View style={styles.bulletPointContainer}>
              <Text style={styles.bulletPoint}>{'\u2022'}</Text>
              <Text style={styles.bulletPointText}>
                For identity proof only upload Passport Voter ID or Driving
                License
              </Text>
            </View>
          </View>
          <View style={styles.uploadContainer}>
            <View style={styles.flexDocumentContainer}>
              <View style={styles.documentContainer}>
                <Text style={styles.documentName}>
                  MRN Certificate<Text style={styles.redColor}>*</Text>
                </Text>
                <TouchableOpacity style={styles.imageContainer}>
                  <AntDesign
                    name="pluscircle"
                    color={'#141261'}
                    style={styles.plusIcon}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.documentContainer}>
                <Text style={styles.documentName}>
                  ID Proof<Text style={styles.bracketText}>(Front Side)</Text>{' '}
                  <Text style={styles.redColor}>*</Text>
                </Text>
                <TouchableOpacity style={styles.imageContainer}>
                  <AntDesign
                    name="pluscircle"
                    color={'#141261'}
                    style={styles.plusIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.flexDocumentContainer}>
              <View style={styles.documentContainer}>
                <Text style={styles.documentName}>
                  ID Proof<Text style={styles.bracketText}>(Back Side)</Text>
                  <Text style={styles.redColor}>*</Text>
                </Text>
                <TouchableOpacity style={styles.imageContainer}>
                  <AntDesign
                    name="pluscircle"
                    color={'#141261'}
                    style={styles.plusIcon}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.documentContainer}>
                <Text style={styles.documentName}>
                  Educational<Text style={styles.bracketText}>(Highest)</Text>{' '}
                  <Text style={styles.redColor}>*</Text>
                </Text>
                <TouchableOpacity style={styles.imageContainer}>
                  <AntDesign
                    name="pluscircle"
                    color={'#141261'}
                    style={styles.plusIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.flexDocumentContainer}>
              <View style={styles.documentContainer}>
                <Text style={styles.documentName}>
                  Other
                  <Text style={styles.bracketText}>(Clinic Registration)</Text>
                  <Text style={styles.redColor}>*</Text>
                </Text>
                <TouchableOpacity style={styles.imageContainer}>
                  <AntDesign
                    name="pluscircle"
                    color={'#141261'}
                    style={styles.plusIcon}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.documentContainer}>
                <Text style={styles.documentName}>
                  MBBS Certificate
                  <Text style={styles.redColor}>*</Text>
                </Text>
                <TouchableOpacity style={styles.imageContainer}>
                  <AntDesign
                    name="pluscircle"
                    color={'#141261'}
                    style={styles.plusIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <SaveButton />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  breadCrumb: {
    height: 120,
    marginTop: 10,
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 6,
    marginVertical: 10,
    borderRadius: 20,
    padding: 18,
    display: 'flex',
    gap: 6,
    paddingBottom: 40,
  },
  verificationHeadingContainer: {
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
  },
  verificationHeading: {
    color: '#000',
    paddingBottom: 6,
    fontSize: 16,
    fontWeight: '500',
  },
  mrnContainer: {
    marginVertical: 10,
    display: 'flex',
    gap: 12,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
  },
  mrnHeading: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
  },
  redColor: {
    color: '#d95858',
  },
  mrnInput: {
    borderColor: '#d8d8d8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginBottom: 18,
  },
  verificationDocumentsContainer: {
    marginBottom: 10,
  },
  bulletPointContainer: {
    flexDirection: 'row',
    width: '80%',
    gap: 10,
    alignItems: 'center',
  },
  bulletPoint: {
    color: '#8a8a8a',
    fontSize: 36,
  },
  bulletPointText: {
    color: '#8a8a8a',
    fontSize: 14,
  },
  uploadContainer: {
    gap: 12,
  },
  flexDocumentContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  documentContainer: {
    width: '50%',
  },
  documentName: {
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 10,
  },
  bracketText: {
    color: '#c9c9c9',
  },
  imageContainer: {
    height: 150,
    width: '95%',
    borderStyle: 'dashed',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f6fe',
  },
  plusIcon: {
    fontSize: 25,
  },
  buttonContainer: {
    marginTop: 15,
    marginBottom: 50,
  },
});

export default VerificationRegistration;
