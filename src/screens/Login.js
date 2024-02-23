/* eslint-disable prettier/prettier */
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SocialIcon} from 'react-native-elements';

import {
  StyleSheet,
  View,
  Text,
  Alert,
  Pressable,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput, Button} from '@react-native-material/core';
import {FontFamily, FontSize, Border, Color} from '../GlobalStyles';
import {useState,useEffect} from 'react';

import {TouchableOpacity} from 'react-native-gesture-handler';
// import {TextInput} from 'react-native-gesture-handler';
import axios from 'axios';

const Signup = props => {
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  // const setUserInfo = useStore((state) => state.setUserInfo);

  // const setOrderHistory = useStore((state) => state.setOrderHistory);
  // const [loading, setLoading] = useState(false);

  const sendCred = async () => {
    try {
      if (!name || !email || !password) {
        Alert.alert('Please fill all fields');
        return;
      }

      const {data} = await axios.post('http://10.0.2.2:3000/signin', {
        name,
        email,
        password,
      });
      // .then(async data => {
      //   try {
      //     await AsyncStorage.setItem('token', data.token);
      //   } catch (e) {
      //     console.log('error', e);
      //   }
      // });
      // Alert.alert(data && data.message);
      console.log('data', {name, email, password});
      if (data) {
        // AsyncStorage.setItem('email',email);
        AsyncStorage.setItem('email',JSON.stringify(email));
        AsyncStorage.setItem('loggedin','true')

        .then(() => {
          console.log('Data stored successfully');
        })
        .catch((error) => {
          console.error('Error storing data: ', error);
        });
        navigation.navigate('ngopage');


      }
    } catch (error) {
      Alert.alert(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <View styles={styles.signup}>
      <Text style={[styles.signUp, styles.passwordTypo]}>Login</Text>
      {/* <View style={[styles.groupChild, styles.groupChildPosition]} /> */}
      <KeyboardAvoidingView behavior="position">
        <View
          styles={{margintop: 200, position: 'relative', marginBottom: 100}}>
          <TextInput
            style={[styles.email, styles.passwordTypo]}
            placeholder="email"
            variant="outlined"
            theme={{colors: {primary: 'red'}}}
            onChangeText={text => {
              setemail(text);
            }}
          />
          <TextInput
            style={[styles.name, styles.passwordTypo]}
            placeholder="Name"
            variant="outlined"
            theme={{colors: {primary: 'red'}}}
            onChangeText={text => {
              setname(text);
            }}
          />

          <TextInput
            style={[styles.password, styles.passwordTypo]}
            placeholder="password"
            variant="outlined"
            secureTextEntry={true}
            theme={{colors: {primary: 'red'}}}
            onChangeText={text => {
              setpassword(text);
            }}
          />
          <Button
            style={[styles.groupPressable, styles.groupLayout]}
            onPress={() =>sendCred()}

            title="Login"
          />
        </View>
        <TouchableOpacity style={styles.Toggle}>
          <Text
            onPress={() => {
              props.navigation.navigate('Signup');
            }}>
            doesnot have an account ?
          </Text>
        </TouchableOpacity>
        <View style={styles.signupChild} />

        <View
          style={[styles.loginWithFacebookParent, styles.loginParentPosition]}>
          <SocialIcon
            title="Sign In with Facebook"
            type="facebook"
            button="True"
          />
        </View>

        <View
          style={[styles.loginWithGoogleParent, styles.loginParentPosition]}>
          <SocialIcon title="Sign In with google" type="google" button="True" />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    height: 38,
    width: 280,
    position: 'absolute',
  },
  groupChildPosition: {
    left: 5,
    top: 100,
  },
  passwordTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  groupLayout: {
    height: 39,
    width: 176,
    position: 'absolute',
  },
  signTypo: {
    fontSize: FontSize.size_13xl,
    textAlign: 'left',
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  loginParentPosition: {
    height: 60,
    left: 30,
    position: 'absolute',
  },
  socialIcon: {
    borderRadius: 20,
    height: 50,
    width: 100,
  },
  vectorIconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    left: '0%',
    position: 'absolute',
    overflow: 'hidden',
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.signupType,
    height: 40,
    width: 280,
    position: 'absolute',
  },
  name: {
    marginLeft: 30,
    marginBottom: 10,
    top: 150,
    width: 300,
    color: 'black',
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'relative',
  },
  rectangleParent: {
    top: 123,
    left: 37,
    width: 280,
  },
  email: {
    marginLeft: 30,
    marginBottom: 10,
    top: 225,
    width: 300,
    color: 'black',
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'relative',
  },
  rectangleGroup: {
    top: 184,
    left: 37,
    width: 280,
  },
  confirmPassword: {
    marginLeft: 30,
    marginBottom: 10,
    top: 375,
    width: 300,
    color: 'black',
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.kaushanScriptRegular,
  },
  rectangleContainer: {
    top: 298,
    left: 37,
    width: 280,
  },
  password: {
    marginLeft: 30,
    marginBottom: 10,
    top: 300,
    width: 300,
    color: 'black',
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.kaushanScriptRegular,
  },
  groupView: {
    top: 240,
    left: 37,
    width: 280,
  },
  signUp: {
    top: 40,
    left: 130,
    fontSize: FontSize.size_11xl,
    width: 125,
    color: Color.colorBlack,
    borderBottomColor: Color.headingscolor,
    // borderColor: Colors.headingscolor,
    borderBottomWidth: 3,
  },
  groupChild1: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.front,
    left: 0,
    top: 0,
  },
  signUp1: {
    top: 20,
    left: 135,
    color: 'black',
  },
  groupPressable: {
    top: 470,
    left: 87,
  },
  or: {
    top: 540,
    left: 167,
    color: Color.colorBlack,
  },
  signUpWith: {
    top: 468,
    left: 129,
    color: Color.colorBlack,
  },
  signupChild: {
    top: 448,
    left: 8,
    borderStyle: 'solid',
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 332,
    height: 1,
    position: 'absolute',
  },
  // loginWithGoogle: {
  //   left: 30,
  //   color: Color.colorBlack,
  //   fontSize: FontSize.size_3xl,
  //   fontFamily: FontFamily.kaushanScriptRegular,
  // },
  vectorIcon: {
    height: '75.63%',
    width: '13.6%',
    top: '12.5%',
    right: '86.4%',
    bottom: '11.88%',
  },
  loginWithGoogleParent: {
    top: 560,
    width: 300,
    marginBottom: 20,
  },
  vectorIcon1: {
    height: '75.08%',
    width: '11.86%',
    top: '24.92%',
    right: '88.14%',
    bottom: '0%',
  },
  loginWithFacebookParent: {
    top: 600,
    width: 300,
    marginTop: 20,
  },
  signup: {
    backgroundColor: 'pink',
    flex: 1,
    width: '100%',
    height: 640,
    overflow: 'hidden',
  },
  Toggle: {
    top: 520,
    marginLeft: 30,
  },
});

export default Signup;
