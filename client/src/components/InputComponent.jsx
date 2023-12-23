import {View, StyleSheet, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {COLOR_PALETTES} from '../utils/constants/colors';
import {Icon} from '@rneui/themed';
import { createUpdate } from '../redux/Updates/updatesSlice';
import { useDispatch, useSelector } from 'react-redux';

const InputComponent = ({suchiMemberId}) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector(state => state.auth)
  const [inputText, setInputText] = useState(null);
  const [date, setDate] = useState(new Date(Date.now()));
  const [time, setTime] = useState(new Date(Date.now()));

  const onChangeDate = (event, selectedDate) => {
    if(event.type === 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);
      showTimepicker();
    }
  };
  const onChangeTime = (event, selectedTime) => {
    if(event.type === 'set')  {
      const currentTime = selectedTime;
      setTime(currentTime);
    }
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: onChangeDate,
      mode: 'date',
      is24Hour: true,
    });
  };

  const showTimepicker = () => {
    DateTimePickerAndroid.open({
      value: time,
      onChange: onChangeTime,
      mode: 'time',
      is24Hour: true,
    });
  };

  const handleSaveUpdate = () => {
    if(!inputText) {
      console.log("Input text is empty.")
      return
    }
    if(!date) {
      console.log("You sure? Not to meet next time.")
    }
    dispatch(createUpdate({
      headers: {
        "Authorization": token
      },
      requestData: {
        updateMessage: inputText,
        createdBy: user._id,
        createdFor: suchiMemberId,
        nextContactOn: null
      }
    }))
  }

  return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
              style={styles.input}
              multiline
              placeholder="Write an update..."
              value={inputText}
              textAlignVertical="center"
              onChangeText={(text) => setInputText(text)}
            />
          <TouchableOpacity style={styles.calenderButton} onPress={showDatepicker}>
            <Icon
              name="calendar"
              type="antdesign"
              color={COLOR_PALETTES.PRIMARY_COLOR}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sendButton} onPress={handleSaveUpdate}>
          <Icon
            name="send"
            type="ionicons"
            color={COLOR_PALETTES.WHITE_COLOR}
          />
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: COLOR_PALETTES.UPDATES_SCREEN_COLOR,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLOR_PALETTES.WHITE_COLOR,
    borderRadius: 25,
    alignItems: 'center'
  },
  input: {
    marginLeft: 15,
    maxHeight: 120,
    flex: 1,
  },
  // inputContainer: {
  //   backgroundColor: COLOR_PALETTES.WHITE_COLOR,
  //   flex: 5,
  //   borderWidth: 1
  // },
  sendButton: {
    backgroundColor: COLOR_PALETTES.PRIMARY_COLOR,
    borderRadius: 25,
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  calenderButton: {
    alignSelf: 'center',
    marginRight: 15
  }
});

export default InputComponent;
