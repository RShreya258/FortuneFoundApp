import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Color, Border, FontSize, FontFamily} from '../GlobalStyles';
import {TextInput, Button} from '@react-native-material/core';
import RadioForm from 'react-native-simple-radio-button';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from 'react-native-elements/dist/helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfirmFoodDetails = () => {
  const navigation = useNavigation();

  const value = AsyncStorage.getItem('email');

  const [time, settime] = useState('');
  const [location, setaddr] = useState('');
  const [contact, setcontact] = useState('');
  const [date, setdate] = useState('');

  const [chosenOption, setChosenOption] = useState(''); //will store our current user options

  const options = [
    {label: 'pick', value: 'Pick'},
    {label: 'selfdrop', value: 'Selfdrop'},
  ];

  const sendCred = async () => {
    if (chosenOption === 'Pick') {
      try {
        if (!time || !location || !contact || !date) {
          Alert.alert('Please fill all fields1');
          return;
        }
        let y = Number(contact);
        const data = await axios.post('http://10.0.2.2:3000/pickup', {
          location,
          contact: y,
          date,
          time,
          email: value._j,
        });

        console.log('data', {time, location, contact, date, value});
        if (data) {
          navigation.navigate('Pickup');
        }
      } catch (error) {
        Alert.alert(error.response.data.message);
        console.log(error);
      }
    } else {
      navigation.navigate('Thanks');
    }
  };

  return (
    <View style={styles.confirmFoodDetails}>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Text style={styles.donate}>Donate</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          <Image
            source={require('../assets/donate1.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/donate2.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/donate3.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/donate4.jpg')}
            style={styles.image}
          />
        </ScrollView>
        {/* <View
          style={[styles.confirmFoodDetailsChild, styles.confirmPosition]}
        />
        <View style={[styles.confirmFoodDetailsItem, styles.confirmPosition]} /> */}

        <Button
          style={[styles.pickUp, styles.pickUpTypo]}
          color={chosenOption === 'Pick' ? '#365486' : '#DCF2F1'}
          onPress={() => setChosenOption('Pick')}
          title="pick up"
        />
        <Button
          style={[styles.selfDrop, styles.pickUpTypo]}
          color={chosenOption === 'Selfdrop' ? '#365486' : '#DCF2F1'}
          onPress={() => setChosenOption('Selfdrop')}
          title="self drop"
        />

        <Pressable
          style={[styles.vectorParent1, styles.groupItemLayout]}
          onPress={() => navigation.navigate('ConfirmFoodDetails')}>
          <Image
            style={[styles.groupItem1, styles.groupItemLayout]}
            resizeMode="cover"
            source={require('../assets/rectangle-11.png')}
          />
          <Text
            style={[styles.post, styles.theTypo]}
            onPress={() => sendCred()}>
            POST
          </Text>
        </Pressable>
        {/* <RadioForm
        style={
          chosenOption === 'Pick'
            ? [styles.yrs, styles.yrsTypo]
            : [styles.yrs1, styles.yrsTypo]
        }
        radio_props={options}
        initial={0} //initial value of this group
        onPress={value => {
          setChosenOption(value);
        }} //if the user changes options, set the new value
      /> */}

        {/* <View style={[styles.vectorParent, styles.vectorParentLayout]}>
        <Image
          style={styles.groupInnerPosition}
          resizeMode="cover"
          source={require('../assets/rectangle-16.png')}
        />
        <Text style={[styles.contact, styles.dateTypo]}>{'contact '}</Text>
      </View> */}
        <View>
          <TextInput
            style={[styles.location, styles.dateTypo]}
            placeholder="location"
            variant="outlined"
            color="#365486"
            onChangeText={text => {
              setaddr(text);
            }}
          />
          <TextInput
            style={[styles.contact, styles.dateTypo]}
            placeholder="contact"
            variant="outlined"
            color="#365486"
            theme={{colors: {primary: 'red'}}}
            onChangeText={text => {
              setcontact(text);
            }}
          />
          <TextInput
            style={[styles.date, styles.dateTypo]}
            placeholder="Date"
            variant="outlined"
            color="#365486"
            theme={{colors: {primary: 'red'}}}
            onChangeText={text => {
              setdate(text);
            }}
          />
          <TextInput
            style={[styles.time, styles.dateTypo]}
            placeholder="Time(HH:mm)"
            variant="outlined"
            color="#365486"
            theme={{colors: {primary: 'red'}}}
            onChangeText={text => {
              settime(text);
            }}
          />
        </View>
      </KeyboardAvoidingView>
      <Pressable
        style={styles.ionchevronBack}
        onPress={() => navigation.goBack()}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require('../assets/ionchevronback.png')}
        />
      </Pressable>
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate('Profile')}>
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/group5.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row', // Horizontal scrolling
    top: 120,
  },
  theTypo: {
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  image: {
    width: 150,
    height: 150,
    marginHorizontal: 10,
  },
  vectorParent1: {
    top: 650,
    left: 110,
  },
  groupItemLayout: {
    height: 52,
    width: 150,
    position: 'absolute',
  },
  groupItem1: {
    borderRadius: Border.br_36xl,
    left: 0,
    top: 0,
  },
  post: {
    top: 12,
    left: 50,
    color: Color.colorWhite,
  },
  confirmPosition: {
    top: 122,
    backgroundColor: Color.colorGainsboro,
    position: 'absolute',
  },
  yrs: {
    flexDirection: 'row',
    flex: 3,
    top: 259,
    left: 20,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  yrs1: {
    flexDirection: 'row',
    flex: 3,
    top: 259,
    left: 100,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  yrsTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  groupPosition: {
    width: 299,
    left: 30,
    position: 'absolute',
  },
  groupLayout: {
    height: 40,
    borderRadius: Border.br_3xs,
    width: 299,
    backgroundColor: Color.colorGainsboro,
    left: 0,
    position: 'absolute',
  },
  dateTypo: {
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  pickUpTypo: {
    top: 290,
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    color: Color.colorBlack,
    tintColor: '#f5f5f5',
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  ellipseIconLayout: {
    height: 13,
    width: 19,
    top: 270,
    position: 'absolute',
  },
  vectorParentLayout: {
    height: 69,
    width: 299,
    position: 'absolute',
  },
  groupInnerPosition: {
    top: 29,
    height: 40,
    borderRadius: Border.br_3xs,
    width: 299,
    left: 0,
    position: 'absolute',
  },
  iconLayout: {
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  groupChild: {
    borderRadius: Border.br_36xl,
    backgroundColor: Color.headingscolor,
    left: 2,
    top: 0,
    height: 60,
    width: 310,
    position: 'absolute',
  },
  donate: {
    top: 10,
    left: 108,
    fontSize: FontSize.size_13xl,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  rectangleParent: {
    left: 21,
    height: 66,
    width: 317,
    top: 35,
    position: 'absolute',
  },
  confirmFoodDetailsChild: {
    width: 173,
    height: 124,
    left: 31,
  },
  confirmFoodDetailsItem: {
    left: 224,
    width: 105,
    height: 123,
  },
  groupItem: {
    top: 35,
    height: 40,
    borderRadius: Border.br_3xs,
  },
  time: {
    left: 30,
    width: 300,
    height: 45,
    top: 420,
  },
  location: {
    left: 30,
    width: 300,
    height: 45,
    top: 210,
  },
  rectangleGroup: {
    top: 312,
    height: 75,
  },
  pickUp: {
    left: 50,
  },
  selfDrop: {
    left: 225,
  },
  confirmFoodDetailsInner: {
    left: 48,
  },
  ellipseIcon: {
    left: 206,
  },
  contact: {
    left: 30,
    width: 300,
    height: 45,
    top: 280,
  },
  vectorParent: {
    top: 394,
    left: 30,
    height: 69,
  },
  rectangleView: {
    backgroundColor: Color.colorGainsboro,
  },
  date: {
    left: 30,
    width: 300,
    height: 45,
    top: 350,
  },
  rectangleContainer: {
    top: 470,
    left: 31,
  },
  groupChild1: {
    top: 26,
  },
  groupView: {
    top: 545,
    height: 66,
  },
  ionchevronBack: {
    left: 1,
    top: 102,
    width: 30,
    height: 20,
    position: 'absolute',
  },
  icon1: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  group: {
    left: 100,
    top: 720,
    width: '36.5%',
    height: '3.75%',
    position: 'absolute',
  },
  confirmFoodDetails: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: 'hidden',
    width: '100%',
  },
});

export default ConfirmFoodDetails;
