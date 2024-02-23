/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import Toggle from './Toggle';
import {StyleSheet, View, Alert, Text, Image, Pressable} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Border, FontFamily, FontSize, Color} from '../GlobalStyles';
import {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import {Button} from 'react-native-elements';
import {RadioButton} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavigator from '../components/BottomNav.js';
import axios from 'axios';

const Food = () => {
  const navigation = useNavigation();
  const [scale1value, setscale1value] = useState(0);
  const [scale2value, setscale2value] = useState(0);
  const [pressed, setpressed] = useState(false);
  const route = useRoute();
  const {ngo} = route.params;

  const value = AsyncStorage.getItem('email');
  // const value = JSON.stringify(email);

  const [selectedOption, setSelectedOption] = useState('veg');
  const selectoptions = ['veg', 'non-veg'];

  // useEffect(() => {
  //   if (pressed) {
  //     navigation.navigate('ConfirmFoodDetails');
  //   }
  // });
  const handlescale = op => {
    setscale1value(op);
  };
  const handlescale2 = op => {
    setscale2value(op);
  };
  // const handlenav = () => {
  //   navigation.navigate('ConfirmCloth');
  // };
  const handlingpost = async () => {
    if (!selectedOption || !scale1value || !scale2value) {
      Alert.alert('Please select all the fields');
      return;
    }

    try {
      const x = Number(Math.floor(scale1value));
      const y = Number(Math.floor(scale2value));
      const msg = await axios.post('http://10.0.2.2:3000/fooddetail', {
        types: selectedOption,
        quantity: x,
        hours: y,
        email: value._j,
        ngoname: ngo,
      });
      if (msg) {
        navigation.navigate('ConfirmFoodDetails');
      }
    } catch (error) {
      Alert.alert(error.response.data.message);
      console.log(error);
    }
  };

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
      <Text style={[styles.quantity, styles.quantityPosition]}>Quantity</Text>
      <View style={[styles.slidebar]}>
        <Text style={{width: 50, textAlign: 'center'}}>
          {Math.floor(scale1value)}
        </Text>

        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#FFFFFF"
          step={1}
          maximumTrackTintColor="#000000"
          Value={scale1value}
          onValueChange={Value => handlescale(Value)}
        />
      </View>
      <View style={[styles.slidebar2]}>
        <Text style={{width: 50, textAlign: 'center'}}>
          {Math.floor(scale2value)}
        </Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={5}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          Value={scale2value}
          onValueChange={Value => handlescale2(Value)}
        />
      </View>
      <View style={styles.vegParent}>
        <Toggle
          value={selectedOption}
          options={selectoptions}
          onChange={option => {
            setSelectedOption(option);
          }}
        />
      </View>
      <Pressable
        style={[styles.vectorParent, styles.groupItemLayout]}
        onPress={() => handlingpost()}>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require('../assets/rectangle-11.png')}
        />
        <Text style={[styles.post, styles.theTypo]}>POST</Text>
      </Pressable>

      <View style={styles.footerpos}>
        <Image
          style={[styles.biclockIcon, styles.iconLayout2]}
          resizeMode="cover"
          source={require('../assets/group.png')}
        />
        <Pressable onPress={() => navigation.navigate('ngopage')}>
          <Image
            style={[styles.fluenthome20RegularIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require('../assets/fluenthome20regular.png')}
          />
        </Pressable>
        <Pressable
          style={[styles.ggprofile, styles.iconLayout2]}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require('../assets/ggprofile.png')}
          />
        </Pressable>
      </View>

      <Text style={[styles.selectTheCategory, styles.theTypo]}>
        Select the Category
      </Text>
      <View style={[styles.foodChild, styles.foodChildLayout]} />
      <View
        style={[styles.emojioneMonotonepotOfFoodParent, styles.emojioneLayout]}>
        <Image
          style={[styles.emojioneMonotonepotOfFoodIcon, styles.emojioneLayout]}
          resizeMode="cover"
          source={require('../assets/emojionemonotonepotoffood.png')}
        />
        <Image
          style={[styles.fluentfoodCarrot24RegularIcon]}
          resizeMode="cover"
          source={require('../assets/fluentfoodcarrot24regular.png')}
        />
        <View style={[styles.rectangleView, styles.foodChildLayout]} />
        <TouchableOpacity>
          <Text
            style={[
              styles.cookedFood,
              styles.foodTypo,
              selectedOption === 'Cookedfood' && styles.selectedOption,
            ]}>
            cookedFood
          </Text>
        </TouchableOpacity>
        <View style={[styles.rawFood, styles.foodChildLayout]} />
        <TouchableOpacity>
          <Text
            style={[
              styles.rawFood,
              styles.foodTypo,
              selectedOption === 'Rawfood' && styles.selectedOption,
            ]}>
            Raw food
          </Text>
        </TouchableOpacity>
      </View>
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
      <Pressable
        style={styles.ionchevronBack}
        onPress={() => navigation.goBack()}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require('../assets/ionchevronback.png')}
        />
      </Pressable>
      {/* <BottomNavigator /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 10,
  },

  groupChildLayout: {
    height: 66,
    width: 317,
    position: 'absolute',
  },
  slidebar: {
    top: 400,
    left: 50,
  },
  slidebar2: {
    top: 475,
    left: 50,
  },
  groupPosition1: {
    borderRadius: Border.br_36xl,
    left: 0,
    top: 0,
  },
  footerpos: {
    top: 10,
    left: 20,
  },
  fluenthome20RegularIcon: {
    left: 93,
    top: 601,
    width: 24,
    overflow: 'hidden',
  },
  ggprofile: {
    left: 149,
    top: 600,
  },
  icon: {
    height: '100%',
    overflow: 'hidden',
  },
  iconLayout1: {
    width: '100%',
    overflow: 'hidden',
  },
  iconLayout2: {
    height: 24,
    width: 24,
    position: 'absolute',
  },
  biclockIcon: {
    left: 204,
    top: 601,
    width: 24,
    overflow: 'hidden',
  },

  ionchevronBack: {
    left: 1,
    top: 50,
    width: 30,
    height: 20,
    position: 'absolute',
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
    backgroundColor: Color.headingscolor,
    height: 66,
    width: 310,
    position: 'absolute',
  },
  foodDetails: {
    top: 10,
    left: 70,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
  },
  rectangleParent: {
    top: 26,
    left: 35,
    backgroundColor: Color.signupBack,
    padding: {bottom: 10},
  },
  whenWasThe: {
    top: 450,
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
    left: 50,
    color: Color.colorWhite,
  },
  vectorParent: {
    top: 600,
    left: 110,
  },
  veg: {
    position: 'absolute',
  },
  groupInner: {
    top: 9,
    height: 13,
  },
  vegParent: {
    left: 40,
    top: 170,
    position: 'absolute',
    margin: 10,
  },
  nonVeg: {
    width: 70,
    left: 28,
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.kaushanScriptRegular,
    borderRadius: 40,
    margin: 10,
  },
  ellipseIcon: {
    top: 11,
    height: 16,
  },
  nonVegParent: {
    left: 230,
    width: 90,
    top: 62,
  },
  groupIcon: {
    height: '3.75%',
    width: '6.27%',
    right: '36.67%',
    bottom: '2.34%',
    left: '56.67%',
    top: '93.91%',
    position: 'absolute',
  },
  // icon: {
  //   height: '100%',
  //   width: '100%',
  // },
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
    top: 103,
    left: 55,
    // padding: {bottom: 30},
    color: Color.colorBlack,
  },
  fluentfoodCarrot24RegularIcon: {
    top: 22,
    left: 200,
    width: 24,
    height: 24,
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 2,
  },
  foodChild: {
    top: 150,
    left: 230,
    width: 135,
    backgroundColor: '#F3D7CA',
    borderRadius: Border.br_3xs,
  },
  emojioneMonotonepotOfFoodIcon: {
    left: 8,
    width: 31,
    top: 15,
    height: 32,
    overflow: 'hidden',
    zIndex: 2,
  },
  rectangleView: {
    top: 20,
    backgroundColor: Color.colorWhite,
    width: 150,
    height: 31,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  cookedFood: {
    top: 20,
    width: 121,
    height: 26,
    left: 45,
  },
  emojioneMonotonepotOfFoodParent: {
    top: 131,
    width: 166,
    left: 40,
  },
  rawFood: {
    top: 20,
    left: 232,
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
// export default DynamicContentPage;

export default Food;
