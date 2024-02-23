/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, FontFamily, Border, FontSize} from '../GlobalStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import {Box, VStack} from '@react-native-material/core';
import {useState,useEffect,useCallback,useReducer} from 'react';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios  from 'axios';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'CHANGE_MESSAGE':
//       return { ...state, message: action.payload };
//     default:
//       return state;
//   }
// };


const NgoPage = () => {
  const navigation = useNavigation();

  const [ngo, setngo] = useState('Humana');
  // // useEffect(() => {
  // //   setngo(ngo);
  // // }, [ngo]);

  const handlengo = (option)=>
  {
      setngo(option);
      navigation.navigate('DonationPage',{ngo});
  };

  // const [ngo, dispatch] = useReducer(reducer, {
  //   message: 'Humana',
  // });

  // Event handler function
  // const handlengo = (newMessage) => {
  //   // Dispatch action to update message
  //   dispatch({ type: 'CHANGE_MESSAGE', payload: newMessage });
  // };
  // const handlingpost = async()=>
  // {
  //   const email = AsyncStorage.getItem('email')._j;

  //   try {
  //     if (!type || !email || !ngo) {
  //       Alert.alert('Please fill all fields');
  //       return;
  //     }

  //     const {data} = await axios.post('http://10.0.2.2:3000/history', {
  //       type,
  //       email,
  //       ngo,
  //     });
  //     console.log('data', {type, email, ngo});
  //     if (data) {
  //       // AsyncStorage.setItem('email',email);
  //     }
  //   } catch (error) {
  //     Alert.alert(error.response.data.message);
  //     console.log(error);
  //   }


  // };
  return (
        <View style={[styles.ngoPage, styles.iconLayout]}>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Text style={[styles.ngo, styles.ngoTypo]}>NGO</Text>
          </View>
          <Text style={[styles.selectTheNgo, styles.ngoTypo]}>
            {'Select the ngo '}
          </Text>

          {/* NGOS */}
      <View style={{width:400,height:300}}>
          <TouchableOpacity >
          <Image
            onPress={()=>handlengo('Humana')}
            style={styles.ngoPageChild}
            resizeMode="cover"
            source={require('../assets/rectangle-28.png')}
          />
          </TouchableOpacity>
          <Text style={[styles.humana, styles.iwwbTypo]}>Humana</Text>


        <TouchableOpacity onPress={()=>handlengo('Unite')}>
          <Image
            style={[styles.rectangleIcon1, styles.rectangleIconLayout1]}
            resizeMode="cover"
            source={require('../assets/ngo3.jpg')}
          />
          </TouchableOpacity>
          <Text style={{fontSize:FontSize.size_xl,left:230,top:445}}>{'Unite'}</Text>


          <TouchableOpacity onPress={()=>handlengo('Shah')}
>
          <Image
            style={[styles.rectangleIcon, styles.rectangleIconLayout]}
            resizeMode="cover"
            source={require('../assets/ngo4.jpeg')}
          />
          </TouchableOpacity>
          <Text style={{fontSize:FontSize.size_xl,left:70,top:415}}>{'Shah'}</Text>


    {/* <View style={[styles.ngoPageChild3, styles.ngoChildLayout]} /> */}
    <TouchableOpacity onPress={()=>handlengo('LEPRA')}
>
      <Image
        style={[styles.ngoPageChild3, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require('../assets/ngo5.jpeg')}
      />
     </TouchableOpacity>
     <Text style={{fontSize:FontSize.size_xl,left:68,top:560}}>{'LEPRA'}</Text>



    {/* <View style={[styles.ngoPageChild4, styles.ngoChildLayout]} /> */}
    <TouchableOpacity onPress={()=>handlengo('Ceate')}
>
    <Image
      style={[styles.ngoPageChild4, styles.ngoChildLayout]}
      resizeMode="cover"
      source={require('../assets/ngo6.jpeg')}
    />
  </TouchableOpacity>
  <Text style={{fontSize:FontSize.size_xl,left:230,top:533}}>{'Ceate'}</Text>

    <TouchableOpacity onPress={() => handlengo('iwwb')}
 >
    <Image
      style={styles.ngoPageChild6}
      resizeMode="cover"
      source={require('../assets/rectangle-36.png')}
    />
     </TouchableOpacity>
    <Text style={{fontSize:FontSize.size_xl,left:230,top:150}}>{'iwwb'}</Text>
</View>
    {/* <View> */}
    {/* <Pressable
            style={[styles.vectorParent, styles.groupItemLayout]}
            onPress={() => handlingpost()}>
            <Image
              style={[styles.groupItem, styles.groupItemLayout]}
              resizeMode="cover"
              source={require('../assets/rectangle-11.png')}
            />
            <Text style={[styles.post, styles.theTypo]}>POST</Text>
      </Pressable> */}
      {/* </View> */}

          <Pressable
            style={styles.group}
            onPress={() => navigation.navigate('Profile')}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/group4.png')}
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
  rectangles: {
    width: 100,
    height: 100,
    color: Color.headingscolor,
    borderWidth: 5,
    borderColor: Color.colorBlack,
  },
  vectorParent: {
    top: 640,
    left: 110,
  },
  groupItemLayout: {
    height: 52,
    width: 150,
    position: 'absolute',
  },
  groupItem: {
    borderRadius: Border.br_36xl,
    left: 0,
    top: 0,
  },
  images: {
    position: 'relative',
    maxHeight: 60,
    maxWidth: 60,
    margin: 5,
  },
  button: {Color: Color.signupBack},
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  format: {
    borderRadius: 5,
    width: 300,
    backgroundColor: Color.headingscolor,
    borderColor: Color.colorBlack,
    position: 'relative',
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
  text: {
    top: 250,
    left: 70,
  },
  textChange: {
    top: 250,
    left: 70,
    borderRadius: 50,
    padding: 30,
    backgroundColor: Color.headingscolor,
  },
  ionchevronBack: {
    left: 1,
    top: 50,
    width: 30,
    height: 20,
    position: 'absolute',
  },
  scrollview: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
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
  rectangleIconLayout1: {
    height: 109,
    width: 109,
    left: 200,
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
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_36xl,
    backgroundColor: Color.headingscolor,
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
    left: 95,
    fontSize: FontSize.size_5xl,
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
  // ngoPageChild1: {
  //   top: 246,
  //   width: 109,
  //   left: 211,
  //   height: 33,
  //   borderBottomLeftRadius: Border.br_8xs,
  //   borderBottomRightRadius: Border.br_8xs,
  //   backgroundColor: Color.colorGainsboro,
  //   position: 'absolute',
  // },
  rectangleIcon: {
    top: 278,
    left:100,
  },
  rectangleIcon1: {
    top: 320,
    left:202,
  },
  ngoPageChild1: {
    top: 309,
  },
  ngoPageChild2: {
    top: 300,
  },
  ngoPageChild3: {
    top: 430,
  },
  ngoPageChild4: {
    top: 416,
  },
  ngoPageChild5: {
    top: 309,
    backgroundColor: Color.colorGainsboro,
  },
  ngoPageChild6: {
    top: 65,
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
