import * as React from 'react';
import {Text, StyleSheet, View, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Border, FontSize, FontFamily, Color} from '../GlobalStyles';

const Money = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.money}>
      <View style={[styles.moneyDetailsWrapper, styles.moneyLayout]}>
        <Text style={styles.moneyDetails}>Money Details</Text>
      </View>
      <View style={styles.moneyChild} />
      <Text style={[styles.amount, styles.amountTypo]}>Amount</Text>
      <Pressable
        style={[styles.moneyItem, styles.moneyLayout]}
        onPress={() => navigation.navigate('Payment')}
      />
      <Text style={[styles.continue, styles.amountTypo]}>Continue</Text>
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
        onPress={() => navigation.navigate('DonationPage')}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/vector.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moneyLayout: {
    borderRadius: Border.br_36xl,
    position: 'absolute',
  },
  amountTypo: {
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  groupPosition: {
    top: '93.91%',
    position: 'absolute',
  },
  moneyDetails: {
    top: 10,
    left: 50,
    fontSize: FontSize.size_13xl,
    textAlign: 'left',
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorBlack,
    position: 'absolute',
  },
  moneyDetailsWrapper: {
    top: 39,
    backgroundColor: Color.signupType,
    width: 317,
    height: 66,
    left: 25,
    overflow: 'hidden',
  },
  moneyChild: {
    top: 202,
    backgroundColor: Color.colorGainsboro,
    width: 236,
    height: 67,
    left: 25,
    position: 'absolute',
  },
  amount: {
    top: 173,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: 25,
  },
  moneyItem: {
    top: 326,
    left: 67,
    backgroundColor: Color.front,
    width: 218,
    height: 49,
  },
  continue: {
    top: 336,
    left: 126,
    color: Color.colorWhite,
  },
  groupIcon: {
    height: '3.75%',
    width: '6.67%',
    right: '36.67%',
    bottom: '2.34%',
    left: '56.67%',
    top: '93.91%',
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
    top: '94.28%',
    right: '68.5%',
    bottom: '2.91%',
    width: '4.67%',
    height: '2.81%',
    position: 'absolute',
  },
  money: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: 'hidden',
    width: '100%',
  },
});

export default Money;
