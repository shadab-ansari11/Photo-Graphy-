import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import About from '../screen/about';

export type BottomTabParamList = {
  Home: undefined;
  About: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
        //   height: 100,
          backgroundColor: '#fff',
          borderTopColor: 'transparent',
          elevation: 8,
        //   padding: 10,
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#b0bec5',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        //   marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{ tabBarLabel: 'About' }}
      />
    </Tab.Navigator>
  );
}
