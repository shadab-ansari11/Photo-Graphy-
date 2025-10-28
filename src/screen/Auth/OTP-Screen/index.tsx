/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OTPInputs from '../../../components/OTP-TextField';
import { defaultOtpValues, useOtpForm } from './hooks/useOtpForm';
import { useNavigation } from '@react-navigation/native';

function OtpScreen() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

   const handleOTP = () => {
    navigation.navigate('DrawerNav' as never);
  }
  const onSubmit = async (values: any) => {
    setLoading(true);
    console.log('OTP Entered:', values);
    setLoading(false);
  };

  const formik = useOtpForm(onSubmit, defaultOtpValues);
  const { values, handleSubmit, setFieldValue } = formik;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F9FE' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.main}>
          <View style={styles.card}>
            <Text style={styles.title}>Verify OTP</Text>
            <Text style={styles.subtitle}>
              Enter the 4 digit code sent to your number
            </Text>

            <View style={{ marginTop: 30 }}>
              <OTPInputs
                onOtpFilled={(otp: string) => {
                  setFieldValue('otp', otp);
                }}
              />
            </View>

            <Pressable
              style={styles.button}
              onPress={() => handleOTP()}
              disabled={loading}
            >
              <Text style={styles.btnText}>
                {loading ? 'Verifying...' : 'Verify'}
              </Text>
            </Pressable>

            <Pressable>
              <Text style={styles.resend}>Resend OTP</Text>
            </Pressable>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 28,
    borderRadius: 18,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2C3E50',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#7A7A7A',
    marginTop: 6,
  },
  button: {
    marginTop: 25,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#0066FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  resend: {
    marginTop: 18,
    textAlign: 'center',
    color: '#0066FF',
    fontWeight: '600',
  },
});

export default OtpScreen;
