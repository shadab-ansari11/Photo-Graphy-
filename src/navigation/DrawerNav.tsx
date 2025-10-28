/* eslint-disable react/no-unstable-nested-components */
/**
 * @format
 */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
  DrawerScreenProps,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RootStackParamList } from '.';
import About from '../screen/about';
import DrawerWithButtons from './DrawerWithButtons';
import BottomTabNav from './BottomTabNav';

export type DrawerParamList = {
  Home: undefined;
  BottomTabNav: undefined;
  About: undefined;
};

export type DrawerNavProps<T extends keyof DrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<DrawerParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootStackNavigationProps<Screen extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, Screen>;

export type AppNavigationType<T extends keyof DrawerParamList> =
  CompositeNavigationProp<
    DrawerNavigationProp<DrawerParamList, T>,
    NativeStackNavigationProp<RootStackParamList>
  >;
export type DrawerNavigationType = DrawerNavigationProp<DrawerParamList, any>;

const Drawer = createDrawerNavigator<DrawerParamList>();
function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props: DrawerContentComponentProps) => (
        <DrawerWithButtons {...props} />
      )}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 300,
        },
      }}
    >
       <Drawer.Screen name="Home" component={BottomTabNav} />
      <Drawer.Screen component={About} name="About" />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
