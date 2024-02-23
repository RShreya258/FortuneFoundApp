import * as React from 'react';
import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, FontFamily, FontSize} from '../GlobalStyles';

const Payment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.payment}>
      <View style={styles.iconoircreditCardsParent}>
        <Image
          style={[styles.iconoircreditCards, styles.mdibinLayout]}
          resizeMode="cover"
          source={require('../assets/iconoircreditcards.png')}
        />
        <Text style={[styles.cards, styles.upiTypo]}>Cards</Text>
        <Image
          style={styles.eparrowRightIcon}
          resizeMode="cover"
          source={require('../assets/eparrowright.png')}
        />
      </View>
      <View style={styles.materialSymbolsplayArrowOuParent}>
        <Image
          style={[styles.materialSymbolsplayArrowOuIcon, styles.upiPosition]}
          resizeMode="cover"
          source={require('../assets/materialsymbolsplayarrowoutline.png')}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require('../assets/vector2.png')}
        />
        <Text style={[styles.upi, styles.upiPosition]}>UPI</Text>
        <Image
          style={styles.eparrowRightIcon1}
          resizeMode="cover"
          source={require('../assets/eparrowright1.png')}
        />
      </View>
      <View style={[styles.lucidewalletParent, styles.parentPosition]}>
        <Image
          style={[styles.iconoircreditCards, styles.mdibinLayout]}
          resizeMode="cover"
          source={require('../assets/lucidewallet.png')}
        />
        <Text style={[styles.wallet, styles.upiTypo]}>wallet</Text>
        <Image
          style={[styles.eparrowRightIcon2, styles.eparrowIconPosition]}
          resizeMode="cover"
          source={require('../assets/eparrowright.png')}
        />
      </View>
      <View style={[styles.eparrowRightParent, styles.parentPosition]}>
        <Image
          style={[styles.eparrowRightIcon3, styles.eparrowIconPosition]}
          resizeMode="cover"
          source={require('../assets/eparrowright.png')}
        />
        <Image
          style={[styles.fluentbuildingBank48FilledIcon, styles.cardsPosition]}
          resizeMode="cover"
          source={require('../assets/fluentbuildingbank48filled.png')}
        />
        <Text style={[styles.banks, styles.upiTypo]}>banks</Text>
      </View>
      <Pressable
        style={[styles.mdibin, styles.mdibinLayout]}
        onPress={() => navigation.navigate('Money')}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require('../assets/mdibin.png')}
        />
      </Pressable>
      <Image
        style={[styles.groupIcon, styles.groupPosition]}
        resizeMode="cover"
        source={require('../assets/group.png')}
      />
      <Pressable
        style={[styles.group, styles.groupPosition]}
        onPress={() => navigation.navigate('Profile')}>
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/group1.png')}
        />
      </Pressable>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate('DonationPage')}>
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/vector.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mdibinLayout: {
    height: 24,
    width: 24,
  },
  upiTypo: {
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    fontSize: FontSize.size_xl,
  },
  upiPosition: {
    top: 1,
    position: 'absolute',
  },
  iconLayout1: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
  parentPosition: {
    width: 256,
    left: 48,
    position: 'absolute',
  },
  eparrowIconPosition: {
    left: 231,
    height: 25,
    width: 25,
    position: 'absolute',
    overflow: 'hidden',
  },
  cardsPosition: {
    top: 0,
    position: 'absolute',
  },
  groupPosition: {
    top: '93.91%',
    position: 'absolute',
  },
  iconLayout: {
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  iconoircreditCards: {
    left: 0,
    height: 24,
    overflow: 'hidden',
    top: 2,
    position: 'absolute',
  },
  cards: {
    left: 61,
    top: 0,
    position: 'absolute',
  },
  eparrowRightIcon: {
    left: 233,
    height: 25,
    width: 25,
    top: 7,
    position: 'absolute',
    overflow: 'hidden',
  },
  iconoircreditCardsParent: {
    top: 203,
    width: 258,
    height: 32,
    left: 48,
    position: 'absolute',
  },
  materialSymbolsplayArrowOuIcon: {
    height: 26,
    width: 24,
    top: 1,
    left: 0,
    overflow: 'hidden',
  },
  vectorIcon: {
    height: '46.56%',
    width: '4.06%',
    top: '20%',
    right: '90.04%',
    bottom: '33.44%',
    left: '5.9%',
    position: 'absolute',
    overflow: 'hidden',
  },
  upi: {
    left: 69,
    width: 34,
    height: 31,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    fontSize: FontSize.size_xl,
  },
  eparrowRightIcon1: {
    left: 246,
    height: 27,
    width: 25,
    top: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  materialSymbolsplayArrowOuParent: {
    top: 255,
    left: 35,
    width: 271,
    height: 32,
    position: 'absolute',
  },
  wallet: {
    left: 60,
    top: 0,
    position: 'absolute',
  },
  eparrowRightIcon2: {
    top: 7,
    left: 231,
  },
  lucidewalletParent: {
    top: 306,
    height: 32,
  },
  eparrowRightIcon3: {
    top: 2,
  },
  fluentbuildingBank48FilledIcon: {
    height: 24,
    width: 24,
    left: 0,
    overflow: 'hidden',
  },
  banks: {
    left: 59,
    top: 0,
    position: 'absolute',
  },
  eparrowRightParent: {
    top: 361,
    height: 29,
  },
  mdibin: {
    left: 279,
    top: 131,
    position: 'absolute',
  },
  groupIcon: {
    height: '3.75%',
    width: '6.67%',
    right: '36.67%',
    bottom: '2.34%',
    left: '56.67%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  icon1: {
    maxHeight: '100%',
    maxWidth: '100%',
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
    top: '94.28%',
    right: '68.5%',
    bottom: '2.91%',
    width: '4.67%',
    height: '2.81%',
    position: 'absolute',
  },
  payment: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: 'hidden',
    width: '100%',
  },
});

export default Payment;
