/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons';
import {Color} from '../GlobalStyles';
// import {View} from 'react-native';
import DonationPage from '../screens/DonationPage.js';
import NgoPage from '../screens/ngopage.js';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Ngo"
        component={NgoPage}
        // options={{
        //   tabBarIcon: ({color}) => (
        //     <Icon name="home-filled" color={color} size={28} />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="user-filled" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Clock"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="TimeAt" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
