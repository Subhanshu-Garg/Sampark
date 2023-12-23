import moment from 'moment';
import React, {useState, useEffect, useRef} from 'react';
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
import {COLOR_PALETTES} from '../utils/constants/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputComponent from '../components/InputComponent';
import {Icon} from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { getSuchiMember } from '../redux/SuchiMembers/suchiMemberSlice.js';
import { SLICES, SLICES_STATUS } from '../utils/constants/slices.constants';
import useAsyncThunkStatus from '../utils/useAsyncThunkStatus';
import Loader from '../components/Loader';
import UpdateCard from '../components/UpdateCard';
import { getUpdates } from '../redux/Updates/updatesSlice';
import { ActivityIndicator } from 'react-native';

const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;

export default function ContactDetails({route}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const scrollViewRef = useRef();
  const { token, user } = useSelector(state => state.auth)
  const { status } = useAsyncThunkStatus(SLICES.SUCHI_MEMBER)
  const { status: updatesStatus } = useAsyncThunkStatus(SLICES.UPDATES)
  const { suchiMember = {} } = useSelector(state => state[SLICES.SUCHI_MEMBER]);
  const { updates = [] } = useSelector(state => state[SLICES.UPDATES])

  useEffect(() => {
    dispatch(getSuchiMember({
      headers: {
        "Authorization": token
      },
      params: {
        "id": route.params.id
      }
    }))
  }, [token])

  useEffect(() => {
    if(status === SLICES_STATUS.SUCCEEDED) {
      dispatch(getUpdates({
        headers: {
          "Authorization": token
        },
        query: {
          createdFor: suchiMember._id
        }
      }))
    }
  }, [token, suchiMember])

  
  
  const {
    _id: suchiMemberId,
    name = '',
    mobileNumber = '',
    suchiType = '',
    currentStatus = '',
    samparkSutra: {
      name: samparkSutra = '',
      mobileNumber: samparkSutraContactDetails = '',
    } = [],
    assignedTo: {
      name: assignedTo
    } = {},
    shreni = ''
  } = suchiMember;

  if(status === SLICES_STATUS.LOADING || updatesStatus === SLICES_STATUS.LOADING) {
    return (
      <Loader />
    )
  }
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
        {isExpanded && (
          <TouchableWithoutFeedback onPressOut={() => null}>
            {isExpanded && (
              <View style={style.contactCardContainer}>
                <ContactCardDetails
                  name={name}
                  contactNumber={mobileNumber}
                  shreni={shreni}
                  samparkSutra={samparkSutra}
                  samparkSutraContactDetails={samparkSutraContactDetails}
                  suchi={suchiType}
                  currentStatus={currentStatus}
                  hasWhatsApp={true}
                  assignedTo={assignedTo}
                  onEditing={setIsEditing}
                />
              </View>
            )}
          </TouchableWithoutFeedback>
        )}
        <ScrollView 
          style={style.updateBG}
          contentContainerStyle={style.contentContainer}
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: false })}
        >
          {updates?.map(({updateMessage = '', createdBy = {}, nextContactOn = '', createdAt = '' } = {}, index) => (
            <UpdateCard
              key={index}
              updateMessage = {updateMessage}
              createdByName = {createdBy.name}
              createdByMobileNumber = {createdBy.mobileNumber}
              nextContactOn = {nextContactOn}
              createdAt = {moment(createdAt).calendar()}
            />
          ))}
        </ScrollView>
        
        {!isEditing && (
          <View style={style.inputComponent}>
            <InputComponent
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
              suchiMemberId={suchiMemberId}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  updateBG: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 40,
    marginBottom: 80
  },
  contentContainer: {
    flexGrow: 1
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
    zIndex: 2,
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
    zIndex: 1
  },
});
