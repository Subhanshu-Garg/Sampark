import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
