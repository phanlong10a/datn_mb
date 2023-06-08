/* eslint-disable react-native/no-inline-styles */
import {useAuthenState} from '@src/atom/authen';
import Button from '@src/components/Button';
import TForm from '@src/components/TForm';
import Input from '@src/components/TForm/Input';
import {deviceWidth} from '@src/configs/theme/common';
import {storage, StorageKey} from '@src/storage';
import {useRequest} from 'ahooks';
import {Field, useForm} from 'rc-field-form';
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {onLogin} from './service';
import { showMessage } from 'react-native-flash-message';

const Welcome = ({}: any) => {
  const [form] = useForm();
  const [authen, setAuthen] = useAuthenState();

  const requesetLogin = useRequest(onLogin, {
    manual: true,
    onSuccess(data: any) {
      storage.set(StorageKey.Authen, data.data.token);
      setAuthen({
        ...authen,
        token: data.data.token,
        isAdmin: data.data.isAdmin,
      });
    },
    onError(e, params) {
      showMessage({
        message: "Sai tên tài khoản hoặc mật khẩu",
        type: 'danger',
      });
    },
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImageBackground
        source={require('../../../assets/image/medical-wallpaper.jpg')}
        resizeMode="cover"
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 40,
            color: 'black',
            textAlign: 'center',
            marginBottom: 24,
          }}>
          Đăng nhập
        </Text>
        <TForm
          form={form}
          onFinish={value => {
            requesetLogin.run(value);
          }}>
          <Field name="email">
            {({onChange, value}, meta) => {
              return (
                <Input
                  onChange={onChange}
                  meta={meta}
                  value={value}
                  style={{
                    backgroundColor: '#fff',
                    width: deviceWidth - 60,
                  }}
                  inputStyle={{
                    color: '#000',
                  }}
                  placeholder={'Tên đăng nhập'}
                />
              );
            }}
          </Field>
          <Field name="password">
            {({onChange, value}, meta) => {
              return (
                <Input
                  onChange={onChange}
                  meta={meta}
                  type={'password'}
                  value={value}
                  style={{
                    backgroundColor: '#fff',
                    width: deviceWidth - 60,
                  }}
                  inputStyle={{
                    color: '#000',
                  }}
                  placeholder={'Mật khẩu'}
                />
              );
            }}
          </Field>
        </TForm>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            form.submit();
          }}>
          <Button
            style={{
              backgroundColor: '#fff',
              width: deviceWidth - 160,
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            // @ts-ignore
            textColor={'#000'}
            label={'Đăng nhập'}></Button>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export default Welcome;
