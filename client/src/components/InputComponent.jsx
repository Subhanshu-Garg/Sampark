import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLOR_PALETTES} from '../utils/colors';
import {Icon} from '@rneui/themed';

const InputComponent = () => {
  const [inputText, setInputText] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Write an update..."
          value={inputText}
          textAlignVertical="bottom"
          onChangeText={() => setInputText()}
        />
      </View>
      <TouchableOpacity style={styles.sendButton}>
        <Icon name="send" type="ionicons" color={COLOR_PALETTES.WHITE_COLOR} />
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
  input: {
    marginHorizontal: 15,
    maxHeight: 120,
  },
  inputContainer: {
    backgroundColor: COLOR_PALETTES.WHITE_COLOR,
    flex: 1,
    borderRadius: 25,
  },
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
});

export default InputComponent;
