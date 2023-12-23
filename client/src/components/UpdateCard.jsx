import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '@rneui/themed';
import { COLOR_PALETTES } from '../utils/constants/colors';

const UpdateCard = ({ updateMessage, createdByName, createdByMobileNumber, nextContactOn, createdAt }) => {
  return (
    <Card containerStyle={styles.container}>
      <View style={styles.createdBy}>
        <Text style={styles.createdByName}>{'~' + createdByName}</Text>
        <Text style={styles.createdByMobileNumber}>{createdByMobileNumber}</Text>
      </View> 
      <Card.Divider />
      <Text style={{ fontSize: 16, color: '#000' }}>{updateMessage}</Text>
      <Text>Next meet: {nextContactOn ? nextContactOn : 'Unknown'}</Text>
      <Text style={styles.createdAt}>{createdAt}</Text>
    </Card>
  ); 
};

const styles = StyleSheet.create({
  container: { 
    maxWidth: '90%', 
    alignSelf: 'flex-start', 
    backgroundColor: COLOR_PALETTES.SECONDARY_COLOR, 
    borderRadius: 10, 
    marginBottom: 10, 
    marginLeft: 10, 
    padding: 5,
    minWidth: '50%'
  },
  createdBy: {
    // backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
  },  
  createdByName: { 
    color: COLOR_PALETTES.PRIMARY_COLOR
  },
  createdAt: {
    paddingTop: 10,
    alignSelf: 'flex-end'
  }
})
export default UpdateCard;
