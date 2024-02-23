// const Stack = createNativeStackNavigator();
import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import HomePage from './screens/HomeScreen/home';

import LandingPage from './src/screens/LandingPage';
import Food from './src/screens/Food';
import ConfirmCloth from './src/screens/ConfirmCloth';
import Grocery from './src/screens/Grocery';
import Payment from './src/screens/Payment';
import Money from './src/screens/Money';
import ngopage from './src/screens/ngopage';
import SelectCategory from './src/screens/SelectCategory';
import ConfirmFoodDetails from './src/screens/ConfirmFoodDetails';
import DonationPage from './src/screens/DonationPage';
import Profile from './src/screens/Profile';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Thanks from './src/screens/Thank';
import Pickup from './src/screens/Pickup';

import History from './src/screens/History';

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
            {/* <Stack.Screen
              name="Homepage"
              component={HomePage}
              options={{headerShown: false}}
            /> */}
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
              name="ngopage"
              component={ngopage}
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
              name="History"
              component={History}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Pickup"
              component={Pickup}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Thanks"
              component={Thanks}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
