import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card, Icon, ButtonGroup, Text} from '@rneui/themed';
import {COLOR_PALETTES} from '../utils/colors';
const ContactCardDetails = ({
  name,
  contactNumber,
  shreni,
  samparkSutra,
  samparkSutraContactDetails,
  suchi,
  currentStatus,
  hasWhatsApp,
  assignedTo,

  onEditing,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newContactNumber, setNewContactNumber] = useState(contactNumber);
  const [newShreni, setNewShreni] = useState(shreni);
  const [newSamparkSutra, setNewSamparkSutra] = useState(samparkSutra);
  const [newCurrentStatus, setNewCurrentStatus] = useState(currentStatus);
  const [newSamparkSutraContactDetails, setNewSamparkSutraContactDetails] =
    useState(samparkSutraContactDetails);

  useEffect(() => {
    onEditing(isEditing);
  }, [isEditing, onEditing]);

  return (
    <ScrollView>
      <Card containerStyle={style.card}>
        <View style={style.header}>
          <Card.Title>{name}</Card.Title>
          {!isEditing && (
            <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
              <Icon
                style={style.edit}
                name="edit"
                color={COLOR_PALETTES.PRIMARY_COLOR}
              />
            </TouchableOpacity>
          )}
        </View>
        <Card.Divider width={2} color={COLOR_PALETTES.PRIMARY_COLOR} />
        <View style={style.table}>
          <View style={style.row}>
            <Text style={style.cell1}>Call:</Text>
            <View style={style.cell2}>
              {isEditing ? (
                <TextInput
                  style={style.input}
                  value={newContactNumber}
                  onChangeText={setNewContactNumber}
                  inputContainerStyle={{
                    height: 'auto',
                    padding: 0,
                  }}
                />
              ) : (
                <Text>{contactNumber}</Text>
              )}
            </View>
            <View style={style.cell3}>
              <Icon name="call-outline" type="ionicon" />
              <Icon name="whatsapp" type="font-awesome" />
            </View>
          </View>
          <View style={style.row}>
            <Text style={style.cell1}>Shreni:</Text>
            <View style={style.cell2}>
              {isEditing ? (
                <TextInput
                  style={style.input}
                  value={newShreni}
                  onChangeText={setNewShreni}
                />
              ) : (
                <Text>{shreni}</Text>
              )}
            </View>
            <Text style={style.cell3} />
          </View>
          <View style={style.row}>
            <Text style={style.cell1}>Sampark Sutra:</Text>
            <View style={style.cell2}>
              {isEditing ? (
                <TextInput
                  style={style.input}
                  value={newSamparkSutraContactDetails}
                  onChangeText={setNewSamparkSutraContactDetails}
                />
              ) : (
                <Text>{samparkSutra + '\n' + samparkSutraContactDetails}</Text>
              )}
            </View>
            <View style={style.cell3}>
              <Icon name="call-outline" type="ionicon" />
              <Icon name="whatsapp" type="font-awesome" />
            </View>
          </View>
          <View style={style.row}>
            <Text style={style.cell1}>Current Status:</Text>
            <View style={style.cell2}>
              {isEditing ? (
                <TextInput
                  style={style.input}
                  value={newCurrentStatus}
                  onChangeText={setNewCurrentStatus}
                />
              ) : (
                <Text>{currentStatus}</Text>
              )}
            </View>
            <Text style={style.cell3} />
          </View>
          <View style={style.row}>
            <Text style={style.cell1}>Suchi:</Text>
            <View style={style.cell2}>
              <Text>{suchi}</Text>
            </View>
            <Text style={style.cell3} />
          </View>
          <View style={style.row}>
            <Text style={style.cell1}>Assigned To:</Text>
            <Text style={style.cell2}>{assignedTo}</Text>
            <Text style={style.cell3} />
          </View>
        </View>
        {isEditing && (
          <ButtonGroup
            Component={TouchableOpacity}
            buttonStyle={{width: 100}}
            buttons={['Save', 'Cancel']}
            selectedIndex={0}
            containerStyle={{
              paddingHorizontal: 50,
              borderRadius: 20,
              borderWidth: 0,
            }}
            innerBorderStyle={{width: 0}}
            selectedButtonStyle={{
              borderRadius: 20,
              backgroundColor: COLOR_PALETTES.PRIMARY_COLOR,
            }}
            onPress={selectedIndex => {
              if (selectedIndex === 0) {
              }

              setIsEditing(false);
            }}
          />
        )}
      </Card>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  card: {
    margin: 4,
    borderRadius: 10,
    padding: 8,
    backgroundColor: COLOR_PALETTES.WHITE_COLOR,
    overflow: 'scroll',
  },
  table: {
    flex: 1,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cell1: {
    flex: 2,
    padding: 8,
    color: COLOR_PALETTES.PRIMARY_COLOR,
  },
  cell2: {
    flex: 3,
    padding: 8,
    alignItems: 'flex-start',
  },
  cell3: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: COLOR_PALETTES.PRIMARY_COLOR,
    borderBottomWidth: 1,
    padding: 0,
    margin: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 38,
    paddingTop: 8,
  },
  title: {
    fontSize: 50,
  },
  edit: {
    marginTop: -4,
  },
});

export default ContactCardDetails;
