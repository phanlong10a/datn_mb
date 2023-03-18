import React from 'react';
import 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';
import Routes from './src/route/index';
import FlashMessage from 'react-native-flash-message';
const App = () => {
  return (
    <RecoilRoot>
      <Routes />
      <FlashMessage position="top" />
    </RecoilRoot>
  );
};

export default App;
