import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../../screen/welcome';
import Main from '@src/screen/main/main';
import {useAuthenStateValue} from '@src/atom/authen';
import MainLayout from '../main-route';
// import { useAuthenStateValue } from '@src/atom/authen';
const RootStack = createStackNavigator();

const RootStackRoute = () => {
  const authen = useAuthenStateValue();
  return (
    <>
      <RootStack.Navigator initialRouteName="Welcome">
        {!authen.token ? (
          <RootStack.Screen
            name={'Welcome'}
            component={Welcome}
            options={{headerShown: false}}
          />
        ) : (
          <RootStack.Screen
            name={'Main'}
            component={MainLayout}
            options={{headerShown: false}}
          />
        )}
      </RootStack.Navigator>
    </>
  );
};

export default RootStackRoute;
