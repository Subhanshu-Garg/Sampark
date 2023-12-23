import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider, useSelector} from 'react-redux';
import store from './store';
import {SLICES, SLICES_STATUS} from './utils/constants/slices.constants';
import Spinner from 'react-native-loading-spinner-overlay';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
