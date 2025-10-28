/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OTPInputs from '../../../components/OTP-TextField'; // your OTP component
import { defaultOtpValues, useOtpForm } from './hooks/useOtpForm';
import { useNavigation } from '@react-navigation/native';

const OtpScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleOtp = () => {
    navigation.navigate('DrawerNav' as never);
  };
  const formik = useOtpForm(async values => {
    setLoading(true);
    // verify OTP API here
    // setTimeout(() => {
    //   setLoading(false);
    //   navigation.navigate('DrawerNav'); // or your home
    // }, 700);
  }, defaultOtpValues);

  const { setFieldValue, handleSubmit, touched, errors } = formik;

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
      >
        <ScrollView contentContainerStyle={styles.page}>
          <View style={styles.card}>
            <View style={{ marginTop: 22 }}>
              <OTPInputs
                onOtpFilled={(code: string) => setFieldValue('otp', code)}
              />
            </View>

            {/* {touched.otp && errors.otp ? (
              <Text style={styles.error}>{errors.otp}</Text>
            ) : null} */}

            <TouchableOpacity
              style={[styles.verifyBtn, loading && styles.btnDisabled]}
              onPress={handleOtp}
              disabled={loading}
            >
              <Text style={styles.verifyText}>
                {loading ? 'Verifying...' : 'Verify Code'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resend}>
              <Text style={styles.resendText}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#DAEDEE' },
  flex: { flex: 1 },
  page: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
  },

  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
  },

  title: { fontSize: 18, fontWeight: '700', color: '#222' },
  sub: { fontSize: 13, color: '#6b6b6b', marginTop: 0, textAlign: 'center' },

  verifyBtn: {
    marginTop: 22,
    backgroundColor: '#00AEEF',
    height: 48,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDisabled: { opacity: 0.6 },
  verifyText: { color: '#fff', fontWeight: '700' },

  resend: { marginTop: 12 },
  resendText: { color: '#00AEEF', fontWeight: '600' },

  error: { color: '#E53935', marginTop: 8 },
});
