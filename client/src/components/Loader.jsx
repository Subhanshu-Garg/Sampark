import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { COLOR_PALETTES } from '../utils/constants/colors';

export default function Loader() {
  return (
    <View style={styles.container}>
        <ActivityIndicator 
          size='large'
          color={COLOR_PALETTES.PRIMARY_COLOR}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: COLOR_PALETTES.WHITE_COLOR,
  }
});