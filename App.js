// const Stack = createNativeStackNavigator();
import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';

import LandingPage from './screens/LandingPage';
import Food from './screens/Food';
import ConfirmCloth from './screens/ConfirmCloth';
import Grocery from './screens/Grocery';
import Payment from './screens/Payment';
import Money from './screens/Money';
import NgoPage from './screens/NgoPage';
import SelectCategory from './screens/SelectCategory';
import ConfirmFoodDetails from './screens/ConfirmFoodDetails';
import DonationPage from './screens/DonationPage';
import Profile from './screens/Profile';
import Signup from './screens/Signup';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
// import {createNativeStackNavigator} from 'react-navigation/n';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="LandingPage"
              component={LandingPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Food"
              component={Food}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ConfirmCloth"
              component={ConfirmCloth}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Grocery"
              component={Grocery}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Money"
              component={Money}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="NgoPage"
              component={NgoPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SelectCategory"
              component={SelectCategory}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ConfirmFoodDetails"
              component={ConfirmFoodDetails}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DonationPage"
              component={DonationPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
