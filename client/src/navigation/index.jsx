/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ContactDetails from '../screens/ContactDetails';
import Login from '../screens/Login';
import { NAV_TYPES } from '../utils/constants/navTypes';
import { COLOR_PALETTES } from '../utils/constants/colors';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { useSelector } from 'react-redux';
import { SLICES, SLICES_STATUS } from '../utils/constants/slices.constants';
import Spinner from 'react-native-loading-spinner-overlay';

const Stack = createNativeStackNavigator();

function AppNavigator() {  
  return (
    <AlertNotificationRoot>
      <Stack.Navigator initialRouteName={NAV_TYPES.LOGIN_SCREEN} screenOptions={{
        headerStyle: {
          backgroundColor: COLOR_PALETTES.PRIMARY_COLOR,
        },
        headerTintColor: COLOR_PALETTES.WHITE_COLOR,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name={NAV_TYPES.LOGIN_SCREEN} component={Login} options={{headerShown: false}}/>
        <Stack.Screen name={NAV_TYPES.HOME_SCREEN} component={Home} />
        <Stack.Screen
          name={NAV_TYPES.CONTACT_DETAILS_SCREEN}
          component={ContactDetails}
          options={({ route }) => ({ title: route.params.name })}
          />
      </Stack.Navigator>
    </AlertNotificationRoot>
  );
}

export default AppNavigator;
