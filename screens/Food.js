import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Border, FontFamily, FontSize, Color} from '../GlobalStyles';

const Food = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.food}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition1]} />
        <Text style={[styles.foodDetails, styles.quantityTypo]}>
          Food Details
        </Text>
      </View>
      <Text style={[styles.whenWasThe, styles.theTypo]}>
        when was the meal prepared (hrs)
      </Text>
      <Text style={[styles.quantity, styles.quantityPosition]}>quantity</Text>
      <Pressable
        style={[styles.vectorParent, styles.groupItemLayout]}
        onPress={() => navigation.navigate('ConfirmFoodDetails')}>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require('../assets/rectangle-11.png')}
        />
        <Text style={[styles.post, styles.theTypo]}>POST</Text>
      </Pressable>
      <View style={styles.vegParent}>
        <Text style={[styles.veg, styles.vegTypo]}>veg</Text>
        <Image
          style={[styles.groupInner, styles.groupInnerPosition]}
          resizeMode="cover"
          source={require('../assets/ellipse-2.png')}
        />
      </View>
      <View style={[styles.nonVegParent, styles.nonLayout]}>
        <Text style={[styles.nonVeg, styles.nonLayout]}>non veg</Text>
        <Image
          style={[styles.ellipseIcon, styles.groupInnerPosition]}
          resizeMode="cover"
          source={require('../assets/ellipse-3.png')}
        />
      </View>
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
      <Text style={[styles.selectTheCategory, styles.theTypo]}>
        Select the Category
      </Text>
      <Image
        style={styles.fluentfoodCarrot24RegularIcon}
        resizeMode="cover"
        source={require('../assets/fluentfoodcarrot24regular.png')}
      />
      <View style={[styles.foodChild, styles.foodChildLayout]} />
      <View
        style={[styles.emojioneMonotonepotOfFoodParent, styles.emojioneLayout]}>
        <Image
          style={[styles.emojioneMonotonepotOfFoodIcon, styles.emojioneLayout]}
          resizeMode="cover"
          source={require('../assets/emojionemonotonepotoffood.png')}
        />
        <View style={[styles.rectangleView, styles.foodChildLayout]} />
        <Text style={[styles.cookedFood, styles.foodTypo]}>cooked food</Text>
      </View>
      <Text style={[styles.rawFood, styles.foodTypo]}>Raw food</Text>
      <Image
        style={[styles.foodItem, styles.foodLayout]}
        resizeMode="cover"
        source={require('../assets/ellipse-10.png')}
      />
      <Image
        style={[styles.foodInner, styles.foodLayout]}
        resizeMode="cover"
        source={require('../assets/ellipse-11.png')}
      />
      <Image
        style={[styles.foodChild1, styles.foodLayout]}
        resizeMode="cover"
        source={require('../assets/ellipse-11.png')}
      />
      <Text style={[styles.breakfast, styles.lunchTypo]}>Breakfast</Text>
      <Text style={[styles.lunch, styles.lunchTypo]}>Lunch</Text>
      <Text style={[styles.dinner, styles.lunchTypo]}>Dinner</Text>
      <Image
        style={[styles.thali1Icon, styles.foodLayout]}
        resizeMode="cover"
        source={require('../assets/thali-1.png')}
      />
      <Image
        style={styles.icon2}
        resizeMode="cover"
        source={require('../assets/2-1470640064-1.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 66,
    width: 317,
    position: 'absolute',
  },
  groupPosition1: {
    borderRadius: Border.br_36xl,
    left: 0,
    top: 0,
  },
  quantityTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  theTypo: {
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  quantityPosition: {
    left: 32,
    color: Color.colorBlack,
  },
  groupItemLayout: {
    height: 52,
    width: 150,
    position: 'absolute',
  },
  vegTypo: {
    left: 28,
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    top: 0,
  },
  groupInnerPosition: {
    width: 19,
    left: 0,
    position: 'absolute',
  },
  nonLayout: {
    height: 35,
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
  foodChildLayout: {
    height: 31,
    borderRadius: Border.br_3xs,
    position: 'absolute',
  },
  emojioneLayout: {
    height: 32,
    position: 'absolute',
  },
  foodTypo: {
    fontSize: FontSize.size_lg,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  foodLayout: {
    height: 60,
    width: 60,
    top: 258,
    position: 'absolute',
  },
  lunchTypo: {
    fontSize: FontSize.size_xs,
    top: 318,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro,
    height: 66,
    width: 317,
    position: 'absolute',
  },
  foodDetails: {
    top: 10,
    left: 68,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
  },
  rectangleParent: {
    top: 26,
    left: 22,
  },
  whenWasThe: {
    top: 402,
    left: 32,
    color: Color.colorBlack,
  },
  quantity: {
    top: 347,
    fontSize: FontSize.size_5xl,
    textAlign: 'left',
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  groupItem: {
    borderRadius: Border.br_36xl,
    left: 0,
    top: 0,
  },
  post: {
    top: 12,
    left: 46,
    color: Color.colorWhite,
  },
  vectorParent: {
    top: 517,
    left: 97,
  },
  veg: {
    position: 'absolute',
  },
  groupInner: {
    top: 9,
    height: 13,
  },
  vegParent: {
    left: 39,
    width: 55,
    height: 29,
    top: 210,
    position: 'absolute',
  },
  nonVeg: {
    width: 62,
    left: 28,
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    top: 0,
  },
  ellipseIcon: {
    top: 11,
    height: 16,
  },
  nonVegParent: {
    left: 235,
    width: 90,
    top: 210,
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
  selectTheCategory: {
    top: 102,
    left: 55,
    color: Color.colorBlack,
  },
  fluentfoodCarrot24RegularIcon: {
    top: 141,
    left: 215,
    width: 24,
    height: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  foodChild: {
    top: 135,
    left: 204,
    width: 135,
    backgroundColor: Color.colorGainsboro,
  },
  emojioneMonotonepotOfFoodIcon: {
    left: 8,
    width: 31,
    top: 0,
    height: 32,
    overflow: 'hidden',
  },
  rectangleView: {
    top: 1,
    backgroundColor: Color.colorWhite,
    width: 150,
    height: 31,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  cookedFood: {
    top: 4,
    width: 121,
    height: 26,
    left: 45,
  },
  emojioneMonotonepotOfFoodParent: {
    top: 131,
    width: 166,
    left: 45,
  },
  rawFood: {
    top: 140,
    left: 239,
    width: 81,
    height: 27,
  },
  foodItem: {
    left: 36,
  },
  foodInner: {
    left: 151,
  },
  foodChild1: {
    left: 260,
  },
  breakfast: {
    left: 43,
  },
  lunch: {
    left: 166,
  },
  dinner: {
    left: 272,
  },
  thali1Icon: {
    left: 155,
    overflow: 'hidden',
  },
  icon2: {
    top: 254,
    left: 265,
    width: 50,
    height: 70,
    position: 'absolute',
    overflow: 'hidden',
  },
  food: {
    backgroundColor: Color.signupBack,
    flex: 1,
    height: 640,
    overflow: 'hidden',
    width: '100%',
  },
});

export default Food;
