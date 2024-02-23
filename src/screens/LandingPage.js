import * as React from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontSize, FontFamily, Color} from '../GlobalStyles';

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.landingPage}
      onPress={() => navigation.navigate('Login')}>
      <Text style={styles.fortuneFound}>{'Fortune Found '}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  fortuneFound: {
    position: 'absolute',
    top: 261,
    left: 66,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorWhite,
    textAlign: 'left',
  },
  landingPage: {
    backgroundColor: Color.front,
    flex: 1,
    width: '100%',
    height: 640,
    overflow: 'hidden',
  },
});

export default LandingPage;
