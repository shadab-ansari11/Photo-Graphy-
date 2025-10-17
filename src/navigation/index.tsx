import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
//screen
import SplashScreen from '../screen/SplashScreen';
import Login from '../screen/Auth';
import Home from '../screen/Home';
import DrawerNav from './DrawerNav';
// import useInfo from '../hooks/useInfo';

export type RootStackParamList = {
  Login?: undefined;
  SplashScreen?: undefined;
  DrawerNav?: undefined;
  Home?: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavContainer() {
//   const {isLoggedIn} = useInfo();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
            <Stack.Screen component={SplashScreen} name="SplashScreen" />
            <Stack.Screen component={Login} name="Login" />
            <Stack.Screen component={DrawerNav} name="DrawerNav" />
            <Stack.Screen component={Home} name="Home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
