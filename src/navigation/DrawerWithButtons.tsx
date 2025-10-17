import {View, Text} from 'react-native';
import React from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/auth/authSlice';

export default function DrawerWithButtons(props: DrawerContentComponentProps) {
  const {navigation} = props;
  console.log("navigation", navigation)
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logout());
  };
  return (
    <View>
      <Text onPress={handelLogout}>Drawer Buttons heres</Text>
    </View>
  );
}
