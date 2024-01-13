import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, Border, FontSize, FontFamily} from '../GlobalStyles';

const ConfirmFoodDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirmFoodDetails}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={styles.donate}>Donate</Text>
      </View>
      <View style={[styles.confirmFoodDetailsChild, styles.confirmPosition]} />
      <View style={[styles.confirmFoodDetailsItem, styles.confirmPosition]} />
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.location, styles.dateTypo]}>location</Text>
      </View>
      <Text style={[styles.pickUp, styles.pickUpTypo]}>{'pick up '}</Text>
      <Text style={[styles.selfDrop, styles.pickUpTypo]}>self drop</Text>
      <Image
        style={[styles.confirmFoodDetailsInner, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require('../assets/ellipse-4.png')}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require('../assets/ellipse-4.png')}
      />
      <View style={[styles.vectorParent, styles.vectorParentLayout]}>
        <Image
          style={styles.groupInnerPosition}
          resizeMode="cover"
          source={require('../assets/rectangle-16.png')}
        />
        <Text style={[styles.contact, styles.dateTypo]}>{'contact '}</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.vectorParentLayout]}>
        <View style={[styles.rectangleView, styles.groupInnerPosition]} />
        <Text style={[styles.date, styles.dateTypo]}>{'Date '}</Text>
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <Text style={[styles.location, styles.dateTypo]}>Time</Text>
      </View>
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
  confirmPosition: {
    top: 122,
    backgroundColor: Color.colorGainsboro,
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
    top: 0,
    position: 'absolute',
  },
  pickUpTypo: {
    top: 262,
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    color: Color.colorBlack,
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
    backgroundColor: Color.colorGainsboro,
    left: 0,
    top: 0,
    height: 66,
    width: 317,
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
  location: {
    left: 12,
  },
  rectangleGroup: {
    top: 312,
    height: 75,
  },
  pickUp: {
    left: 80,
  },
  selfDrop: {
    left: 243,
  },
  confirmFoodDetailsInner: {
    left: 48,
  },
  ellipseIcon: {
    left: 206,
  },
  contact: {
    left: 11,
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
    left: 10,
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
    left: '26.83%',
    top: '93.91%',
    right: '36.67%',
    bottom: '2.34%',
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
