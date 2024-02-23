/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Image,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontFamily, Color, FontSize, Border} from '../GlobalStyles';
import {useState} from 'react';
import RadioForm from 'react-native-simple-radio-button';
import {SafeAreaView} from 'react-native-safe-area-context';

const ConfirmCloth = () => {
  const navigation = useNavigation();
  const [chosenOption, setChosenOption] = useState('0-10 yrs'); //will store our current user options
  const options = [
    {label: '0-10 yrs', value: '0-10 yrs'},
    {label: '11-20 yrs', value: '11-20 yrs'},
    {label: '20-above', value: '20-above'},
    {label: 'bedsheets', value: 'bedsheets'},
  ];

  return (
      <View style={styles.confirmCloth}>
        <View style={styles.clothesDetailsWrapper}>
          <Text style={[styles.clothesDetails, styles.quantityTypo]}>
            Clothes Details
          </Text>
        </View>
        <Image
          style={[styles.female1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require('../assets/female-1.png')}
        />
        <Image
          style={[styles.male1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require('../assets/male-1.png')}
        />
        <Image
          style={[styles.confirmClothChild, styles.confirmLayout]}
          resizeMode="cover"
          source={require('../assets/ellipse-6.png')}
        />
        <Image
          style={[styles.confirmClothItem, styles.confirmLayout]}
          resizeMode="cover"
          source={require('../assets/ellipse-6.png')}
        />
        <Image
          style={[styles.confirmClothInner, styles.confirmLayout]}
          resizeMode="cover"
          source={require('../assets/ellipse-6.png')}
        />
        <Image
          style={[styles.ellipseIcon, styles.quantityPosition]}
          resizeMode="cover"
          source={require('../assets/ellipse-6.png')}
        />
        <View>
          <RadioForm
            style={[styles.yrs, styles.yrsTypo]}
            radio_props={options}
            initial={0} //initial value of this group
            onPress={value => {
              setChosenOption(value);
            }} //if the user changes options, set the new value
          />
        </View>
        {/*
      <Text style={[styles.yrs, styles.yrsTypo]}>0-10 yrs</Text>
      <Text style={[styles.yrs1, styles.yrsTypo]}>11-20 yrs</Text>
      <Text style={[styles.above, styles.yrsTypo]}>20-above</Text>
      <Text style={styles.bedSheetspillows}>bed sheets/pillows</Text> */}
        <Text
          style={{
            top: 400,
            color: 'black',
            fontSize: FontSize.size_xl,
            margin: 20,
            left: 30,
          }}>
          No.of Clothes
        </Text>
        <TextInput
          label="quantity"
          style={[styles.quantity, styles.quantityPosition]}
          placeholder="0"
        />
        <Pressable
          style={[styles.rectangleParent, styles.groupChildLayout]}
          onPress={() => navigation.navigate('ConfirmFoodDetails')}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.post, styles.yrsTypo]}>POST</Text>
        </Pressable>
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/group.png')}
        />
        <Pressable
          style={[styles.group, styles.groupPosition]}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/group1.png')}
          />
        </Pressable>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate('ngopage')}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/vector.png')}
          />
        </Pressable>
        <Pressable
          style={styles.ionchevronBack}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require('../assets/ionchevronback.png')}
          />
        </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
  quantityTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorBlack,
  },
  iconLayout1: {
    height: 45,
    width: 55,
    top: 146,
    position: 'absolute',
    overflow: 'hidden',
  },
  ionchevronBack: {
    left: 1,
    top: 60,
    width: 30,
    height: 20,
    position: 'absolute',
  },

  groupPosition1: {
    borderRadius: Border.br_36xl,
    left: 0,
    top: 0,
  },
  confirmLayout: {
    height: 17,
    width: 19,
  },
  quantityPosition: {
    left: 39,
    position: 'absolute',
  },
  yrsTypo: {
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  groupChildLayout: {
    height: 52,
    width: 150,
    position: 'absolute',
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  groupPosition: {
    top:730,

    position: 'absolute',
  },
  clothesDetails: {
    top: 10,
    left: 50,
    fontSize: FontSize.size_13xl,
    position: 'absolute',
  },
  clothesDetailsWrapper: {
    top: 39,
    left: 25,
    backgroundColor: Color.headingscolor,
    width: 317,
    height: 66,
    borderRadius: Border.br_36xl,
    position: 'absolute',
    overflow: 'hidden',
  },
  female1Icon: {
    left: 41,
  },
  male1Icon: {
    left: 142,
  },
  confirmClothChild: {
    top: 265,
    left: 41,
    position: 'absolute',
  },
  confirmClothItem: {
    top: 303,
    left: 41,
    position: 'absolute',
  },
  confirmClothInner: {
    top: 341,
    left: 41,
    position: 'absolute',
  },
  ellipseIcon: {
    top: 379,
    height: 17,
    width: 19,
  },
  clothes: {
    top: 400,
    color: 'black',
    fontSize: FontSize.size_xl,
    margin: 20,
    left: 30,
  },
  yrs: {
    top: 259,
    left: 75,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  yrs1: {
    top: 297,
    left: 75,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  above: {
    top: 336,
    left: 77,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  bedSheetspillows: {
    top: 374,
    left: 69,
    height: 28,
    width: 150,
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  quantity: {
    top: 428,
    fontSize: FontSize.size_5xl,
    textAlign: 'left',
    width: 150,
    margin: 20,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorBlack,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor:'#C9D7DD',
    borderColor: Color.signupBack,
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.front,
    borderRadius: Border.br_36xl,
  },
  post: {
    top: 11,
    left: 46,
    color: Color.colorWhite,
  },
  rectangleParent: {
    top: 600,
    left: 107,
  },
  groupIcon: {
    height: '3.75%',
    width: '6.67%',
    right: '36.67%',
    bottom: '2.34%',
    left: '56.67%',
    top: 730,
    position: 'absolute',
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  group: {
    left: '41.67%',
    right: '52.22%',
    bottom: '2.66%',
    width: '6.11%',
    height: '3.44%',
  },
  vector: {
    left: '26.83%',
    top:730,
    right: '68.5%',
    bottom: '2.91%',
    width: '4.67%',
    height: '2.81%',
    position: 'absolute',
  },
  confirmCloth: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: 'hidden',
    width: '100%',
  },
});

export default ConfirmCloth;
