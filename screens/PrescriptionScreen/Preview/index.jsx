import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../../constants/colors';

const languageOptions = [
  {
    id: 1,
    name: 'Later',
  },
  {
    id: 2,
    name: 'Today',
  },
];

const Preview = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [languageOption, setLanguageOption] = useState('English');
  const [download, setDownload] = useState(false);
  return (
    <ScrollView
      style={
        download === true
          ? [styles.container, styles.notActiveBg]
          : [styles.container, styles.activeBg]
      }>
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
            <TouchableOpacity onPressIn={() => setDownload(!download)}>
              <AntDesign
                name="download"
                color={Colors.white}
                style={styles.toggleIcon}
              />
            </TouchableOpacity>
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
      {download && (
        <View style={styles.downloadContainer}>
          <Text style={styles.downloadHeader}>Sharing Prescription</Text>
          <View style={styles.pdfFlex}>
            <Text style={styles.pdfText}>PDF</Text>
            <MaterialIcons
              name="check-circle"
              color={Colors.green_300}
              style={styles.pdfCircleIcon}
            />
          </View>
          <View style={styles.bar}>
            <View style={styles.colorBar} />
          </View>
          <View style={styles.downloadingContainer}>
            <Text style={styles.downloadingText}>
              Downloading Prescription... 40%
            </Text>
          </View>
        </View>
      )}
      <View style={styles.mainContainer}>
        <View style={styles.flexContainer}>
          <Text style={styles.bigText}>Select preferred languages:</Text>
          <View style={styles.flexText}>
            <TouchableOpacity
              style={styles.rightDropDown}
              onPressIn={() => setLanguageDropdown(!languageDropdown)}>
              <Text style={styles.textInput}>
                {'  '}
                {languageOption}
              </Text>
              {languageDropdown ? (
                <Entypo name="chevron-thin-up" color="black" />
              ) : (
                <Entypo name="chevron-thin-down" color="black" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        {languageDropdown ? (
          <View style={styles.dropDownArea}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <FlatList
                data={languageOptions}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      style={styles.dropDownText}
                      onPressIn={() => {
                        setLanguageOption(item.name);
                        setLanguageDropdown(false);
                      }}>
                      <Text style={styles.dropDownTextColor}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </ScrollView>
          </View>
        ) : null}
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
    backgroundColor: Colors.white,
  },
  activeBg: {
    backgroundColor: Colors.white,
  },
  notActiveBg: {
    backgroundColor: Colors.gray_800,
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
  downloadContainer: {
    height: '10%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    // paddingVertical: '15%',
    marginVertical: '15%',
    backgroundColor: Colors.white,
  },
  downloadHeader: {
    margin: '5%',
    fontSize: 18,
    fontWeight: '500',
    color: Colors.black,
  },
  pdfFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pdfText: {
    fontSize: 18,
    marginHorizontal: '5%',
  },
  pdfCircleIcon: {
    fontSize: 18,
  },
  bar: {
    borderWidth: 1,
    borderColor: Colors.gray_100,
    // marginHorizontal: '5%',
    margin: '5%',
    borderRadius: 100,
    backgroundColor: Colors.gray_100,
  },
  colorBar: {
    borderWidth: 5,
    borderColor: Colors.green_300,
    // marginHorizontal: '5%',
    // margin: '5%',
    width: '40%',
    borderRadius: 100,
  },
  downloadingContainer: {
    alignItems: 'center',
  },
  downloadingText: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.black,
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

  rightDropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },
  textInput: {
    fontSize: 15,
    color: Colors.black,
  },
  dropDownArea: {
    flexDirection: 'column',
    width: '40%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    alignSelf: 'flex-end',
    paddingVertical: '1%',
    // marginRight: '2%',
    // marginTop: '35%',
    // position: 'absolute',
  },
  dropDownText: {
    paddingHorizontal: '5%',
    paddingVertical: 10.6,
    width: 350,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_100,
  },
  dropDownTextColor: {
    color: Colors.slate_500,
    fontSize: 16,
  },
  bigText: {
    fontSize: 17,
    color: Colors.black,
    fontWeight: '500',
  },
  smallText: {
    fontSize: 12,
    color: Colors.gray_700,
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
