import * as React from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontFamily, FontSize, Border, Color} from '../GlobalStyles';
import {TextInput} from 'react-native-gesture-handler';

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signup}>
      <View style={[styles.rectangleParent, styles.groupLayout1]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <TextInput
          style={[styles.name, styles.passwordTypo]}
          placeholder="Name"
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <TextInput
          style={[styles.email, styles.passwordTypo]}
          placeholder="Email"
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout1]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <TextInput
          style={[styles.confirmPassword, styles.passwordTypo]}
          placeholder="Confirm Password"
        />
      </View>
      <View style={[styles.groupView, styles.groupLayout1]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <TextInput
          style={[styles.password, styles.passwordTypo]}
          placeholder="password"
        />
      </View>
      <Text style={[styles.signUp, styles.passwordTypo]}>Sign up</Text>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => navigation.navigate('DonationPage')}>
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <Text style={[styles.signUp1, styles.signTypo]}>Sign up</Text>
      </Pressable>
      <Text style={[styles.or, styles.signTypo]}>or</Text>
      <Text style={[styles.signUpWith, styles.signTypo]}>
        {'sign up with '}
      </Text>
      <View style={styles.signupChild} />
      <View style={[styles.loginWithGoogleParent, styles.loginParentPosition]}>
        <Text style={[styles.loginWithGoogle, styles.passwordTypo]}>
          login with google
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require('../assets/vector6.png')}
        />
      </View>
      <View
        style={[styles.loginWithFacebookParent, styles.loginParentPosition]}>
        <Text style={[styles.loginWithGoogle, styles.passwordTypo]}>
          login with facebook
        </Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require('../assets/vector7.png')}
        />
      </View>
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
    left: 0,
    top: 0,
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
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    fontFamily: FontFamily.kaushanScriptRegular,
    position: 'absolute',
  },
  loginParentPosition: {
    height: 32,
    left: 75,
    position: 'absolute',
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
    top: 0,
    left: 23,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.kaushanScriptRegular,
  },
  rectangleParent: {
    top: 123,
    left: 37,
    width: 280,
  },
  email: {
    top: 1,
    left: 18,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.kaushanScriptRegular,
  },
  rectangleGroup: {
    top: 184,
    left: 37,
    width: 280,
  },
  confirmPassword: {
    top: 6,
    left: 10,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.kaushanScriptRegular,
  },
  rectangleContainer: {
    top: 298,
    left: 37,
    width: 280,
  },
  password: {
    left: 13,
    color: 'rgba(0, 0, 0, 0.99)',
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    top: 0,
  },
  groupView: {
    top: 240,
    left: 37,
    width: 280,
  },
  signUp: {
    top: 42,
    left: 124,
    fontSize: FontSize.size_11xl,
    width: 169,
    height: 28,
    color: Color.colorBlack,
  },
  groupChild1: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.front,
    left: 0,
    top: 0,
  },
  signUp1: {
    top: 3,
    left: 56,
    color: Color.colorWhite,
  },
  groupPressable: {
    top: 381,
    left: 87,
  },
  or: {
    top: 439,
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
  loginWithGoogle: {
    left: 31,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    top: 0,
  },
  vectorIcon: {
    height: '75.63%',
    width: '13.6%',
    top: '12.5%',
    right: '86.4%',
    bottom: '11.88%',
  },
  loginWithGoogleParent: {
    top: 530,
    width: 175,
  },
  vectorIcon1: {
    height: '75.08%',
    width: '11.86%',
    top: '24.92%',
    right: '88.14%',
    bottom: '0%',
  },
  loginWithFacebookParent: {
    top: 573,
    width: 204,
  },
  signup: {
    backgroundColor: Color.signupBack,
    flex: 1,
    width: '100%',
    height: 640,
    overflow: 'hidden',
  },
});

export default Signup;
