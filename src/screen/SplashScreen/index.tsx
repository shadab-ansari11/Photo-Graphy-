import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
// import { Logo } from '../../assets/Spimage.png';

interface ISplashScreen {
  navigation: any;
}

const SplashScreen = ({ navigation }: ISplashScreen) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // Navigate to Login after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.logoContainer, opacity: fadeAnim }}>
        <Image
          source={require('../../assets/Spimage.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>MyApp</Text>
      </Animated.View>
      <Animated.Text style={{ ...styles.tagline, opacity: fadeAnim }}>
        Your journey starts here ✨
      </Animated.Text>
      <Text style={styles.footer}>© 2025 MyApp. All rights reserved</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  appName: {
    color: '#f5a623', 
    fontSize: 32,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  tagline: {
    color: '#1abc9c', 
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    color: '#bdc3c7',
    fontSize: 12,
  },
});
