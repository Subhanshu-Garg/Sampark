import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import ContactCardDetails from '../components/ContactCardDetails';
import {COLOR_PALETTES} from '../utils/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputComponent from '../components/InputComponent';
import {Icon} from '@rneui/themed';

const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;

export default function ContactDetails({route}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const handleClose = newState => {
    setIsExpanded(newState);
    setIsEditing(newState);
  };

  return (
    <TouchableWithoutFeedback
      onPressOut={() => {
        setIsExpanded(false);
        setIsEditing(false);
      }}>
      <View style={style.container}>
        {!isEditing && (
          <TouchableOpacity
            onPress={() => setIsExpanded(!isExpanded)}
            style={style.iconContainer}>
            {isExpanded ? (
              <Icon
                name="cross"
                type="entypo"
                color={COLOR_PALETTES.PRIMARY_COLOR}
                size={30}
              />
            ) : (
              <Icon
                name="card-account-details"
                type="material-community"
                style={style.icon}
                color={COLOR_PALETTES.WHITE_COLOR}
                size={30}
              />
            )}
          </TouchableOpacity>
        )}

        <View style={style.container}>
          {isExpanded && (
            <TouchableWithoutFeedback onPressOut={() => null}>
              {isExpanded && (
                <View style={style.contactCardContainer}>
                  <ContactCardDetails
                    name={route.params.name}
                    contactNumber="+91-8800001010"
                    shreni="Engineer"
                    samparkSutra="Rahul Chaurasia"
                    samparkSutraContactDetails="+91-700000100"
                    suchi="International"
                    currentStatus="active"
                    hasWhatsApp={true}
                    assignedTo="Ramesh Srivastav"
                    onEditing={setIsEditing}
                  />
                </View>
              )}
            </TouchableWithoutFeedback>
          )}
        </View>

        {!isEditing && (
          <View style={style.inputComponent}>
            <InputComponent
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  updateBG: {
    backgroundColor: COLOR_PALETTES.UPDATES_SCREEN_COLOR,
  },
  container: {
    flex: 1,
    backgroundColor: COLOR_PALETTES.UPDATES_SCREEN_COLOR,
  },
  iconContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  icon: {
    backgroundColor: COLOR_PALETTES.PRIMARY_COLOR,
    borderRadius: 50,
    height: 0.06 * h,
    width: 0.06 * h,
    justifyContent: 'center',
  },
  inputComponent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  contactCardContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
});
