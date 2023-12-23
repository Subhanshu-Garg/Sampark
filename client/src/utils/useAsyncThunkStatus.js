import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SLICES_STATUS } from './constants/slices.constants';
import { COLOR_PALETTES } from './constants/colors';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
import { NAV_TYPES } from './constants/navTypes';

const useAsyncThunkStatus = (slice, navigation) => {
  const status = useSelector(state => state[slice]?.status);
  const error = useSelector(state => state[slice]?.error);
  useEffect(() => {
    if(status === SLICES_STATUS.FAILED) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        textBody: error,
      });
      // if(error === 'Unauthorized') {
      //   navigation.navigate(NAV_TYPES.LOGIN_SCREEN)
      // }
    }
  }, [status])
  
  return { status, error };
};

export default useAsyncThunkStatus;
