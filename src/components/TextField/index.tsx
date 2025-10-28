import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

interface ITextFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onBlur?: any;
  error?: string;
  keyboardType?: any;
  editable?: boolean;
  leftIcon?: React.ReactNode;
}

const TextField = ({
  label,
  value,
  placeholder,
  onChangeText,
  onBlur,
  error,
  keyboardType = 'default',
  editable = true,
  leftIcon,
}: ITextFieldProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[
        styles.inputWrapper,
        { borderColor: error ? '#E63946' : '#C7C7C7' }
      ]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

        <TextInput
          style={[styles.input, leftIcon ? { marginLeft: 10 } : null]}
          placeholder={placeholder}
          placeholderTextColor="#8E8E8E"
          value={value}
          keyboardType={keyboardType}
          onBlur={onBlur}
          onChangeText={onChangeText}
          editable={editable}
        />
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default React.memo(TextField);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1.3,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  leftIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  error: {
    fontSize: 12,
    marginTop: 6,
    color: '#E63946',
  },
});
