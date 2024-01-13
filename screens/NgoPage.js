import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, FontFamily, Border, FontSize} from '../GlobalStyles';

const NgoPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.ngoPage, styles.iconLayout]}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.ngo, styles.ngoTypo]}>NGO</Text>
      </View>
      <Text style={[styles.selectTheNgo, styles.ngoTypo]}>
        {'Select the ngo '}
      </Text>
      <Image
        style={styles.ngoPageChild}
        resizeMode="cover"
        source={require('../assets/rectangle-28.png')}
      />
      <View style={[styles.ngoPageItem, styles.ngoLayout]} />
      <View style={[styles.ngoPageInner, styles.ngoLayout]} />
      <View style={styles.rectangleView} />
      <View style={styles.ngoPageChild1} />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require('../assets/rectangle-31.png')}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require('../assets/rectangle-31.png')}
      />
      <Image
        style={[styles.ngoPageChild3, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require('../assets/rectangle-31.png')}
      />
      <Image
        style={[styles.ngoPageChild4, styles.ngoChildLayout]}
        resizeMode="cover"
        source={require('../assets/rectangle-31.png')}
      />
      <View style={[styles.ngoPageChild5, styles.ngoChildLayout]} />
      <Image
        style={styles.ngoPageChild6}
        resizeMode="cover"
        source={require('../assets/rectangle-36.png')}
      />
      <Text style={[styles.iwwb, styles.iwwbTypo]}>{`iwwb
`}</Text>
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate('Profile')}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/group4.png')}
        />
      </Pressable>
      <Text style={[styles.humana, styles.iwwbTypo]}>Humana</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: 'hidden',
    width: '100%',
  },
  groupChildLayout: {
    height: 54,
    width: 263,
    position: 'absolute',
  },
  ngoTypo: {
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  ngoLayout: {
    height: 33,
    borderBottomLeftRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
    width: 111,
    backgroundColor: Color.colorGainsboro,
    position: 'absolute',
  },
  rectangleIconLayout: {
    height: 119,
    width: 109,
    left: 41,
    borderRadius: Border.br_5xs,
    position: 'absolute',
  },
  ngoChildLayout: {
    left: 202,
    height: 119,
    width: 109,
    borderRadius: Border.br_5xs,
    position: 'absolute',
  },
  iwwbTypo: {
    fontSize: FontSize.size_lg,
    top: 253,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_36xl,
    backgroundColor: Color.colorGainsboro,
  },
  ngo: {
    top: 7,
    left: 93,
    fontSize: 28,
  },
  rectangleParent: {
    top: 37,
    left: 48,
  },
  selectTheNgo: {
    top: 105,
    left: 26,
    fontSize: FontSize.size_xl,
  },
  ngoPageChild: {
    left: 42,
    height: 112,
    width: 108,
    borderRadius: Border.br_5xs,
    top: 152,
    position: 'absolute',
  },
  ngoPageItem: {
    top: 248,
    left: 41,
    height: 33,
    borderBottomLeftRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
  },
  ngoPageInner: {
    top: 395,
    left: 40,
  },
  rectangleView: {
    left: 194,
    height: 94,
    width: 111,
    borderRadius: Border.br_5xs,
    top: 152,
    position: 'absolute',
  },
  ngoPageChild1: {
    top: 246,
    width: 109,
    left: 211,
    height: 33,
    borderBottomLeftRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro,
    position: 'absolute',
  },
  rectangleIcon: {
    top: 309,
  },
  ngoPageChild3: {
    top: 456,
  },
  ngoPageChild4: {
    top: 456,
  },
  ngoPageChild5: {
    top: 309,
    backgroundColor: Color.colorGainsboro,
  },
  ngoPageChild6: {
    top: 163,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    height: 90,
    left: 211,
    width: 108,
    position: 'absolute',
  },
  iwwb: {
    left: 248,
  },
  icon: {
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  group: {
    left: '28.89%',
    top: '93.13%',
    right: '34.61%',
    bottom: '3.13%',
    width: '36.5%',
    height: '3.75%',
    position: 'absolute',
  },
  humana: {
    left: 60,
    width: 72,
    height: 23,
  },
  ngoPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
  },
});

export default NgoPage;
