import React from 'react';
import { View, Text, Button } from 'react-native';

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Home</Text>
      <Button
        title="Open Drawer"
      />
    </View>
  );
}

export default Home;
