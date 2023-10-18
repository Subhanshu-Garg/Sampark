/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { NAV_TYPES } from '../utils/navTypes';

function Login ({ navigation }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    if (mobileNumber.length !== 10) {
      setOtpSent(false);
      setOtp('');
    }
  }, [mobileNumber]);

  function handleSendOtp() {
    // Add your logic to send OTP here
    setOtpSent(true);
  }

  function handleLogin() {
    navigation.replace(NAV_TYPES.HOME_SCREEN);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="numeric"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <TextInput
        style={[styles.input, !otpSent && styles.disabledInput]}
        placeholder="OTP"
        keyboardType="numeric"
        editable={otpSent}
        value={otp}
        onChangeText={setOtp}
      />
      <Button
        title={otpSent ? 'Login' : 'Send OTP'}
        color="#FF9933"
        disabled={mobileNumber.length !== 10 || (otpSent && otp.length !== 4)}
        onPress={otpSent ? handleLogin : handleSendOtp}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF9933',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: '#FF9933',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  disabledInput: {
    borderColor: '#CCCCCC',
  },
});

export default Login;
