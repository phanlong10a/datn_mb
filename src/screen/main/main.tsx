import AsyncStorage from '@react-native-community/async-storage';
import {StackActions} from '@react-navigation/native';
import {useAuthenState} from '@src/atom/authen';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import {DEV_BASE_URL} from '@src/request/request';
import {requestApi, REQUEST_METHOD} from '@src/services/api';
import {storage, StorageKey} from '@src/storage';
import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const Main = ({navigation}: any) => {
  const [authen, setAuthen] = useAuthenState();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImageBackground
        source={require('../../../assets/image/background-theme.png')}
        resizeMode="cover"
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            requestApi(
              REQUEST_METHOD.GET,
              DEV_BASE_URL + '/api/user/profile',
              {},
              {},
              false,
            );
          }}>
          <Button label={'Next page'}></Button>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={async () => {
            storage.set(StorageKey.Authen, '');
            setAuthen({
              ...authen,
              token: null,
            });
          }}>
          <Button label={'Logout'}></Button>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export default Main;
