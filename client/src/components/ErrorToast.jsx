import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';

import {View} from 'react-native';
import React from 'react';

export default function ErrorToast({error}) {
  return (
    <AlertNotificationRoot>
        {Toast.show({
          type: ALERT_TYPE.WARNING,
          title: 'Error',
          textBody: {error},
        })}
    </AlertNotificationRoot>
  );
}
