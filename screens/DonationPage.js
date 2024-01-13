import * as React from 'react';
import {Image, StyleSheet, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';

const DonationPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.donationPage, styles.iconLayout1]}>
      {/* <View style={[styles.rectangleParent, styles.groupChildLayout]}> */}
      {/* <View style={[styles.groupChild, styles.groupChildLayout]} /> */}
      <View style={styles.container1}>
        <View styles={[styles.header]}>
          <Text style={[styles.donate, styles.moneyTypo]}>Donate</Text>
        </View>
      </View>
      {/* </View> */}
      <View style={styles.footerpos}>
        <Image
          style={[styles.biclockIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/group.png')}
        />

        <Image
          style={[styles.fluenthome20RegularIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/fluenthome20regular.png')}
        />
        <Pressable
          style={[styles.ggprofile, styles.iconLayout]}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require('../assets/ggprofile.png')}
          />
        </Pressable>
      </View>
      {/* Food card */}
      <Pressable
        style={[styles.food1Parent, styles.food1IconLayout]}
        onPress={() => navigation.navigate('Food')}>
        <Image
          style={[styles.food1Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require('../assets/food-1.png')}
        />
        <Text style={[styles.food, styles.foodTypo]}>food</Text>
      </Pressable>
      <Pressable
        style={styles.clothes1Parent}
        onPress={() => navigation.navigate('ConfirmCloth')}>
        <Image
          style={[styles.clothes1Icon, styles.iconPosition1]}
          resizeMode="cover"
          source={require('../assets/clothes-1.png')}
        />
        <Text style={[styles.clothes, styles.moneyPosition]}>clothes</Text>
      </Pressable>
      <Pressable
        style={[styles.grocery1Parent, styles.grocery1IconLayout]}
        onPress={() => navigation.navigate('Grocery')}>
        <Image
          style={[styles.grocery1Icon, styles.grocery1IconLayout]}
          resizeMode="cover"
          source={require('../assets/grocery-1.png')}
        />
        <Text style={[styles.grocery, styles.ngoTypo]}>grocery</Text>
      </Pressable>
      <Pressable
        style={[styles.money1Parent, styles.food1IconLayout]}
        onPress={() => navigation.navigate('Money')}>
        <Image
          style={[styles.food1Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require('../assets/money-1.png')}
        />
        <Text style={[styles.money, styles.moneyTypo]}>money</Text>
      </Pressable>

      <Pressable
        style={[styles.bipeopleFillParent, styles.grocery1IconLayout]}
        onPress={() => navigation.navigate('NgoPage')}>
        <Image
          style={[styles.bipeopleFillIcon, styles.grocery1IconLayout]}
          resizeMode="cover"
          source={require('../assets/bipeoplefill.png')}
        />
        <Text style={[styles.ngo, styles.ngoTypo]}>Ngo</Text>
      </Pressable>
      <Pressable
        style={[styles.medicine1Parent, styles.medicine1IconLayout]}
        onPress={() => navigation.navigate('NgoPage')}>
        <Image
          style={[styles.grocery1Icon, styles.grocery1IconLayout]}
          resizeMode="cover"
          source={require('../assets/money-1.png')}
        />
        <Text style={[styles.medicine, styles.ngoTypo]}>Medicines</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footerpos: {
    top: 100,
  },

  iconLayout1: {
    width: '100%',
    overflow: 'hidden',
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: 'absolute',
  },
  food1IconLayout: {
    width: 145,
    position: 'absolute',
  },
  iconPosition: {
    height: 95,
    left: 0,
    top: 0,
    overflow: 'hidden',
  },
  foodTypo: {
    height: 22,
    textAlign: 'left',
    color: Color.front,
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  iconPosition1: {
    left: 0,
    top: 0,
  },
  moneyPosition: {
    left: 45,
    fontSize: FontSize.size_xl,
  },
  grocery1IconLayout: {
    width: 140,
    position: 'absolute',
  },
  ngoTypo: {
    textAlign: 'left',
    color: Color.front,
    fontFamily: FontFamily.kaushanScriptRegular,
    fontSize: FontSize.size_xl,
    position: 'absolute',
  },
  moneyTypo: {
    color: Color.colorBlack,
    textAlign: 'left',
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  groupChildLayout: {
    height: 54,
    width: 263,
    position: 'absolute',
  },
  biclockIcon: {
    left: 204,
    top: 601,
    width: 24,
    overflow: 'hidden',
  },
  icon: {
    height: '100%',
    overflow: 'hidden',
  },
  ggprofile: {
    left: 149,
    top: 600,
  },
  food1Icon: {
    width: 145,
    position: 'absolute',
  },
  food: {
    top: 87,
    left: 32,
    width: 53,
    fontSize: FontSize.size_xl,
    height: 22,
  },
  food1Parent: {
    left: 16,
    height: 109,
    top: 133,
  },
  clothes1Icon: {
    height: 110,
    width: 145,
    position: 'absolute',
    overflow: 'hidden',
  },
  clothes: {
    top: 100,
    width: 90,
    height: 22,
    textAlign: 'left',
    color: Color.front,
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  clothes1Parent: {
    left: 188,
    width: 146,
    height: 136,
    top: 133,
    position: 'absolute',
  },
  grocery1Icon: {
    height: 95,
    left: 0,
    top: 0,
    overflow: 'hidden',
  },
  medicine1Icon: {
    height: 95,
    left: 0,
    top: 0,
    overflow: 'hidden',
  },

  grocery: {
    top: 96,
    left: 37,
    width: 68,
  },
  grocery1Parent: {
    left: 10,
    height: 125,
    top: 284,
  },
  medicine1Parent: {
    left: 10,
    height: 125,
    top: 440,
  },
  money: {
    top: 95,
    left: 56,
    fontSize: FontSize.size_xl,
  },
  money1Parent: {
    left: 183,
    height: 124,
    top: 284,
  },
  groupChild: {
    borderRadius: Border.br_36xl,
    backgroundColor: Color.colorGainsboro,
    left: 0,
    top: 0,
  },
  donate: {
    top: 2,
    left: 72,
    fontSize: 36,
  },
  rectangleParent: {
    top: 37,
    left: 40,
  },
  fluenthome20RegularIcon: {
    left: 93,
    top: 601,
    width: 24,
    overflow: 'hidden',
  },
  bipeopleFillIcon: {
    height: 120,
    left: 88,
    top: 0,
    overflow: 'hidden',
  },
  ngo: {
    top: 115,
    left: 150,
    width: 46,
  },
  medicine: {
    top: 100,
    left: 30,
    width: 92,
  },
  bipeopleFillParent: {
    top: 424,
    left: 95,
    height: 144,
  },
  donationPage: {
    backgroundColor: Color.signupBack,
    flex: 1,
    height: 640,
    left: 25,
    overflow: 'hidden',
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: 136,
    backgroundColor: Color.headercolor,
  },
});

export default DonationPage;
