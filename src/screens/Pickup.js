/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Image, StyleSheet, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Pickup = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log(otp);
    return (
        <SafeAreaView>
            <View>
                <Image style={[styles.icon1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require('../assets/pickupimage.png')} />
            </View>
            <Text style={styles.text}>"Thank you for your generous donation. Your contribution helps us make a difference in people’s lives."</Text>
            <Text style={{margin:20,fontSize:FontSize.size_lg}}>Your OTP:</Text>

            <View style={{flexDirection:'row'}}>
            <View style={{flex : 1}}>
            <Text style={{ marginLeft:20,fontSize: 24, fontWeight: 'bold' }}>{otp}</Text>
            </View>
            <View style = {{flex :2}}>
            <Text>Please share the otp when the delivery partner arives</Text>
            </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    icon1:
    {
        alignItems:'center',
        height:300,
        width:300,
        left:50,
        top:70,
    },
    text:
    {
        left:20,
        width:350,
        color:Color.headercolor,
        top:250,
        justifyContent:'center',
        margin:30,
        fontStyle:FontFamily.kaushanScriptRegular,
        fontSize:FontSize.size_lg,
    },
});

export default Pickup;
