/* eslint-disable prettier/prettier */
import { ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import ContactCard from '../components/ContactCard';
import useAsyncThunkStatus from '../utils/useAsyncThunkStatus.js';
import { SLICES, SLICES_STATUS } from '../utils/constants/slices.constants.js';
import { useDispatch, useSelector } from 'react-redux';
import { getSuchiMembers } from '../redux/SuchiMembers/suchiMembersSlice.js';
import { COLOR_PALETTES } from '../utils/constants/colors';
import Loader from '../components/Loader';
import { NAV_TYPES } from '../utils/constants/navTypes';


function Home({ navigation }) {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state[SLICES.AUTH])

  useEffect(() => {
    dispatch(getSuchiMembers({
      headers: {
        "Authorization": token
      }
    }))
  }, [])
  
  
  const { status = 'idle', error = null } = useAsyncThunkStatus(SLICES.SUCHI_MEMBERS)
  const { suchiMembers = [] } = useSelector(state => state[SLICES.SUCHI_MEMBERS])

  if(status === SLICES_STATUS.LOADING) {
    return (
      <Loader />
    )
  }

  function handleCardPress (contact) {
    navigation.navigate(NAV_TYPES.CONTACT_DETAILS_SCREEN, { name: contact.name, id: contact._id })
  }
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {suchiMembers.map((contact) => (
        <TouchableOpacity key={contact._id} onPress={() => handleCardPress(contact)}>
          <ContactCard {...contact} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
  },
});

export default Home;
