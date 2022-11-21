import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackRoute from './stack-route';
import { Text } from 'react-native';

// import {
//   useAuthenStateValue,
//   useRehydrateAuthenState,
// } from '@src/atom/authen';
// import SettingUpLanguage from '@src/components/SettingUpLanguageLoading';

export default function Routes() {
  return (
    <NavigationContainer>
      <RootStackRoute />
    </NavigationContainer>
  );
}
