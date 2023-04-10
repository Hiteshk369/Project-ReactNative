import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../constants/colors';

const dropDownOptions = [
  {
    id: 1,
    name: 'Consultation',
  },
  {
    id: 2,
    name: 'Procedure',
  },
  {
    id: 3,
    name: 'Miscellaneous',
  },
];

const AddInVoice = () => {
  const [dropdown, setDropdown] = useState(false);
  const [selectOption, setSelectOption] = useState('Consultation');
  const [data, setData] = useState(dropDownOptions);
  return (
    <ScrollView nestedScrollEnabled={true} style={styles.container}>
      <LinearGradient
        colors={[Colors.darkPurple, Colors.lightPurple]}
        style={styles.gradient}>
        <View style={styles.navBackground}>
          <View style={styles.Flex}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.white}
              style={styles.leftText}
            />
            <Text style={styles.leftText}>Add Invoice</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.box}>
        <View style={styles.bigCircle} />
        <View style={styles.boxFlex}>
          <Text style={styles.boldText}>Sandeep R Reddy</Text>
          <Text style={styles.boldText}>Male | 32 Years</Text>
          <Text style={styles.lightText}>+918919797512</Text>
        </View>
      </View>
      <View style={styles.itemsHeader}>
        <Text style={styles.itemsText}>ITEMS (2)</Text>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.leftFlexText}>
          <View style={styles.bigCircle} />
          <View>
            <Text style={styles.boldText}>Consultation</Text>
            <Text style={styles.lightText}>Default Consultation</Text>
          </View>
        </View>
        <View style={styles.rightFlexText}>
          <View style={styles.rightText}>
            <Text style={styles.amountText}>Amount</Text>
            <Text style={styles.amountText}>₹ 0</Text>
          </View>
          <MaterialIcons
            name="navigate-next"
            color={Colors.black}
            style={styles.navigateNextIcon}
          />
        </View>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.leftFlexText}>
          <View style={styles.bigCircle} />
          <View>
            <Text style={styles.boldText}>Procedure</Text>
            <Text style={styles.lightText}>Medication Procedure</Text>
          </View>
        </View>
        <View style={styles.rightFlexText}>
          <View style={styles.rightText}>
            <Text style={styles.amountText}>Amount</Text>
            <Text style={styles.amountText}>₹ 0</Text>
          </View>
          <MaterialIcons
            name="navigate-next"
            color={Colors.black}
            style={styles.navigateNextIcon}
          />
        </View>
      </View>
      <View style={styles.smallflexContainer}>
        <View style={styles.leftFlexText}>
          <View style={styles.smallCircle} />
          <View style={styles.boxBottomFlex}>
            <TouchableOpacity
              style={styles.rightDropDown}
              onPressIn={() => setDropdown(!dropdown)}>
              <Text style={styles.boxText}>{selectOption}</Text>
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
      {dropdown ? (
        <View style={styles.dropDownArea}>
          <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
            <FlatList
              data={data}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.dropDownText}
                    onPressIn={() => {
                      setSelectOption(item.name);
                      setDropdown(false);
                    }}>
                    <Text style={styles.dropDownTextColor}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </ScrollView>
        </View>
      ) : null}
      <View style={styles.smallflexContainer}>
        <View style={styles.leftFlexText}>
          <View style={styles.smallCircle} />
          <View style={styles.boxBottomFlex}>
            <TextInput style={styles.boxLightText} placeholder="Description*" />
          </View>
        </View>
      </View>
      <Text style={styles.buttonsBottomText}>100 characters remaining</Text>
      <View style={styles.smallFlexContainer}>
        <View style={styles.leftFlexText}>
          <View style={styles.smallCircle} />
          <View style={styles.boxBottomFlex}>
            <TextInput
              style={styles.boxLightText}
              placeholder="Enter the Amount"
            />
          </View>
        </View>
      </View>
      <View style={styles.smallflexContainer}>
        <View style={styles.leftFlexText}>
          <View style={styles.smallCircle} />
          <View style={styles.boxBottomFlex}>
            <Text style={styles.boxLightText}>Discount</Text>
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
      <View style={styles.SaveFlex}>
        <MaterialIcons
          name="add"
          color={Colors.darkPurple}
          style={styles.addIcon}
        />
        <Text style={styles.saveText}>Save and Add item</Text>
      </View>
      <View style={styles.totalFlex}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>₹ 0</Text>
      </View>
      <TouchableOpacity style={styles.buttonBackground}>
        <Text style={styles.buttonText}>Add Invoice</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  gradient: {
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
  Flex: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    gap: 10,
    color: Colors.white,
  },
  box: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '8%',
    width: '83%',
    height: 100,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    alignItems: 'center',
  },
  leftText: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    gap: 10,
    color: Colors.white,
  },
  bigCircle: {
    height: 50,
    width: 50,
    marginVertical: '5%',
    marginHorizontal: '8%',
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: Colors.white,
  },
  boldText: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '500',
  },
  lightText: {
    fontSize: 13,
    color: Colors.black,
  },
  itemsHeader: {
    backgroundColor: Colors.purple_100,
    paddingLeft: '5%',
  },
  itemsText: {
    color: Colors.black,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
    marginHorizontal: '2%',
    // marginVertical: '3%',
    marginTop: '3%',
    paddingBottom: '3%',
    borderBottomWidth: 1,
    width: '90%',
    borderBottomColor: Colors.gray_300,
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
  rightFlexText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountText: {
    color: Colors.green_200,
  },
  navigateNextIcon: {
    fontSize: 28,
  },
  smallflexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
    // marginHorizontal: '4%',
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
  boxText: {
    fontSize: 18,
    color: Colors.black,
    paddingHorizontal: '5%',
    paddingRight: '6%',
    paddingVertical: '3%',
  },
  rightDropDown: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputLeftText: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputRightText: {
    alignItems: 'center',
  },
  dropUp: {
    fontSize: 35,
    alignSelf: 'flex-end',
    // marginLeft: '35%',
  },
  dropDown: {
    fontSize: 35,
    // alignSelf: 'flex-end',
    // marginLeft: '35%',
  },
  dropDownArea: {
    flexDirection: 'column',
    width: '70%',
    height: '12%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray_100,
    alignSelf: 'flex-end',
    marginTop: '2%',
    paddingVertical: '1%',
    marginRight: '9%',
  },
  dropDownText: {
    paddingHorizontal: '5%',
    paddingVertical: 10.6,
    width: 273,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_100,
  },

  dropDownTextColor: {
    color: Colors.slate_500,
    fontSize: 16,
  },
  boxLightText: {
    fontSize: 18,
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    color: Colors.gray_100,
  },
  buttonsBottomText: {
    marginLeft: '45%',
    marginVertical: '2%',
    fontSize: 15,
    fontWeight: '400',
    color: Colors.green_200,
  },
  smallFlexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rupee: {
    fontSize: 18,
    marginLeft: '37%',
    marginRight: '5%',
  },
  discountDropDown: {
    fontSize: 35,
  },
  SaveFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: '6%',
  },
  saveText: {
    alignItems: 'center',
    // marginLeft: '50%',
    marginVertical: '5%',
    fontSize: 15,
    fontWeight: '400',
    color: Colors.darkPurple,
  },
  addIcon: {
    fontSize: 20,
  },
  totalFlex: {
    marginHorizontal: '5%',
    marginBottom: '5%',
    paddingVertical: '4%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    color: Colors.darkPurple,
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: '3%',
  },
  buttonBackground: {
    marginHorizontal: '10%',
    margin: '5%',
    width: '80%',
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
});

export default AddInVoice;
