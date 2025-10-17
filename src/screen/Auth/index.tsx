/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React from 'react';

interface ISplashScreen {
  navigation: any;
}

function Login({ navigation }: ISplashScreen) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Login</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
}

export default Login;
