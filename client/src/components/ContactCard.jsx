/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, ListItem } from '@rneui/themed';
import { COLOR_PALETTES } from '../utils/colors';

const ContactCard = ({
  name,
  contactNumber,
  shreni,
  lastContactOn,
  nextContactOn,
}) => {
  return (
    <Card containerStyle={styles.card}>
      <ListItem bottomDivider>
        <ListItem.Content style={styles.content}>
          <View>
            <ListItem.Title style={styles.title}>{name}</ListItem.Title>
            <ListItem.Subtitle style={styles.subtitle}>
              +91-{contactNumber}
            </ListItem.Subtitle>
          </View>
          <View style={styles.rightSide}>
            <ListItem.Subtitle style={styles.subtitle}>
              Shreni: {shreni}
            </ListItem.Subtitle>
          </View>
        </ListItem.Content>
      </ListItem>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{lastContactOn}</Text>
        <TouchableOpacity onPress={() => console.log('Next Contact On clicked')}>
          <Text style={styles.footerText}>{nextContactOn}</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 0,
    backgroundColor: COLOR_PALETTES.SECONDARY_COLOR,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: COLOR_PALETTES.BLACK_COLOR,
    fontSize: 18,
  },
  rightSide: {
    alignItems: 'flex-end',
  },
  subtitle: {
    color: COLOR_PALETTES.DARK_GRAY_COLOR,
    fontSize: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  footerText: {
    color: COLOR_PALETTES.PRIMARY_COLOR,
  },
});

export default ContactCard;
