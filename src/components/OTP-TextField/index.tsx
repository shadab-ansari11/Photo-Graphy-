import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

interface OTPInputProps {
  digits?: number;
  onOtpFilled: (code: string) => void;
  title?: string;
  subtitle?: string;
}

const OtpInputField: React.FC<OTPInputProps> = ({
  digits = 4,
  onOtpFilled,
  title = "OTP Verification",
  subtitle = "Enter the OTP sent to your number",
}) => {
  return (
    <View style={styles.container}>
      
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

      <View style={{ marginTop: 25 }}>
        <OtpInput
          numberOfDigits={digits}
          onFilled={onOtpFilled}
          type="numeric"
          secureTextEntry={false}
          theme={{
            containerStyle: styles.otpWrapper,
            pinCodeContainerStyle: styles.otpBox,
            focusedPinCodeContainerStyle: styles.otpBoxFocused,
            pinCodeTextStyle: styles.otpText,
          }}
        />
      </View>
    </View>
  );
};

export default React.memo(OtpInputField);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#6C6C6C',
  },
  otpWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  otpBox: {
    width: 52,
    height: 52,
    borderWidth: 1.5,
    borderColor: '#A0A4AA',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpBoxFocused: {
    borderWidth: 2,
    borderColor: '#0066FF',
    backgroundColor: '#EEF4FF',
  },
  otpText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1A1A1A',
  },
});
