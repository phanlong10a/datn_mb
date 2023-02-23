import React from 'react';
import 'react-native-gesture-handler';
import { RecoilRoot } from 'recoil';
import Routes from './src/route/index';
const App = () => {
  return <RecoilRoot>
    <Routes />
    </RecoilRoot>;
};

export default App;
