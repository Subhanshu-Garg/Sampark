import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {NAV_TYPES} from '../utils/constants/navTypes';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/Users/authSlice';
import ErrorToast from '../components/ErrorToast';
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
import {COLOR_PALETTES} from '../utils/constants/colors';
import useAsyncThunkStatus from '../utils/useAsyncThunkStatus';
import {SLICES, SLICES_STATUS} from '../utils/constants/slices.constants';
import { getSuchiMembers } from '../redux/SuchiMembers/suchiMembersSlice';
import Spinner from 'react-native-loading-spinner-overlay';
import { color } from '@rneui/base';
import Loader from '../components/Loader';

function Login({navigation}) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const {
    status: authStatus,
    error: authError
  } = useAsyncThunkStatus(SLICES.AUTH, navigation);

  useEffect(() => {
    if (authStatus === SLICES_STATUS.SUCCEEDED) {
      navigation.replace(NAV_TYPES.HOME_SCREEN);
    }
    if(authError === SLICES_STATUS.FAILED) {
      navigation.replace(NAV_TYPES.LOGIN_SCREEN)
    }
  }, [authStatus]);

  function handleLogin() {
    dispatch(
      login({
        requestData: {mobileNumber, password},
      }),
    );
  }
  if (authStatus === SLICES_STATUS.LOADING) {
    return (
      <Loader />
    );
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
        secureTextEntry={true}
        style={[styles.input]}
        placeholder="Password"
        keyboardType="numeric"
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title={true ? 'Login' : 'Send OTP'}
        color="#FF9933"
        disabled={mobileNumber.length !== 10 || password.length !== 4}
        onPress={handleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: COLOR_PALETTES.WHITE_COLOR,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLOR_PALETTES.PRIMARY_COLOR,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: COLOR_PALETTES.PRIMARY_COLOR,
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default Login;
