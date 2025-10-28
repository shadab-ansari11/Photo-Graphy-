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
import TextField from '../../../components/TextField';
import { SVG } from '../../../assets/icons/svg';
import { defaultValues, useLoginForm } from './hooks/useLoginForm';
import { useNavigation } from '@react-navigation/native';

function Login() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('OtpScreen' as never);
  }
  const onSubmit = async (values: any) => {
    setLoading(true);
    console.log(values);
    setLoading(false);
  };

  const formik = useLoginForm(onSubmit, defaultValues);
  const { values, touched, errors, handleBlur, handleSubmit, handleChange } =
    formik;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F9FE' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.main}>
          <View style={styles.card}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>Login to your account</Text>

            <View style={{ marginTop: 25 }}>
              <TextField
                label="Mobile Number"
                placeholder="Enter mobile number"
                keyboardType="phone-pad"
                // value={values.phoneNo}
                // onBlur={handleBlur('phoneNo')}
                // onChangeText={handleChange('phoneNo')}
                // error={touched.phoneNo ? errors.phoneNo : undefined}
                leftIcon={<SVG.Phone width={22} height={22} />}
              />
            </View>

            <Pressable
              style={styles.button}
              onPress={() => handleLogin()}
              disabled={loading}
            >
              <Text style={styles.btnText}>
                {loading ? "Please wait..." : "Continue"}
              </Text>
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
    marginTop: 4,
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
});

export default Login;
