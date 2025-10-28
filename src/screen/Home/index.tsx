/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, } from 'react-native';
import CustomHeader from '../../components/Header';

function Home() {
  return (
    <View>
      <CustomHeader title="Home" />
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Home</Text>
    </View>
  );
}

export default Home;
