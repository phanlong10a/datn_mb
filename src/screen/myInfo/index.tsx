import {useAuthenState} from '@src/atom/authen';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import TForm from '@src/components/TForm';
import Input from '@src/components/TForm/Input';
import Typography from '@src/components/Typography';
import COLORS from '@src/configs/theme/colors';
import {deviceWidth} from '@src/configs/theme/common';
import {useRequest} from 'ahooks';
import {Field, useForm} from 'rc-field-form';
import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {showMessage} from 'react-native-flash-message';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import {createUser, deleteUser, updateUser, upload_avatar} from './service';
const MyInfo = ({navigation, route}: any) => {
  const params = route.params;
  const [imageError, setImageError] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [avtUrl, setAvtUrl] = React.useState(null);
  const [form] = useForm();

  const changeAvatar = useRequest(
    (params, onSuccess, onError, onRefresh) => {
      return upload_avatar(params, onSuccess, onError, onRefresh);
    },
    {
      manual: true,
      debounceTrailing: true,
      debounceWait: 250,
    },
  );

  const _openLibrary = async () => {
    try {
      const {assets} = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
        maxWidth: 1024,
        maxHeight: 1024,
      });

      changeAvatar.run(
        assets && assets[0],
        e => {
          setAvtUrl(e?.path);
        },
        setImageError,
        () => {},
      );
    } catch (e) {}
  };

  const createUserRequest = useRequest(createUser, {
    manual: true,
    onSuccess(data, params) {
      setCurrentUser(data.data?.data);
      form.setFieldsValue({...data.data?.data});
      setAvtUrl(data.data?.data.avatar);
    },
  });
  const updateUserRequest = useRequest(updateUser, {
    manual: true,
    onSuccess(data, params) {
      showMessage({
        message: data.data,
        type: 'success',
      });
      navigation.navigate('listUser');
    },
  });

  const deleteUserRequest = useRequest(deleteUser, {
    manual: true,
    onSuccess(data, params) {
      showMessage({
        message: data.data,
        type: 'success',
      });
      navigation.navigate('listUser');
    },
  });

  React.useEffect(() => {
    createUserRequest.run();
  }, [params]);

  const deleteAlert = () =>
    Alert.alert('Bạn muốn xoá nhân viên này chứ', 'Bấm có để xác nhận', [
      {
        text: 'Không',
        style: 'cancel',
      },
      {
        text: 'Có',
        onPress: () => deleteUserRequest.run(params?.item?.item?.id),
      },
    ]);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 24,
      }}>
      <Box
        circle={90}
        alignSelf="center"
        activePress
        onPress={_openLibrary}
        style={{
          marginBottom: 24,
        }}>
        {avtUrl ? (
          <Box alignSelf="center" circle={90} style={styles.avatar}>
            <FastImage
              source={{
                uri: 'http://' + avtUrl,
              }}
              style={styles.imageStyle}
              resizeMode="stretch"
            />
          </Box>
        ) : (
          <Box
            circle={90}
            alignSelf="center"
            background="GRAY"
            align="center"
            justify="center"
            style={styles.avatar}>
            <Typography type="Body3 - Medium" color="WHITE">
              NO IMG
            </Typography>
          </Box>
        )}

        {/* <Box
        circle={30}
        align="center"
        justify="center"
        background="NEUTRAL_700"
        style={styles.edit}>
        <IconSvg name="edit" size={20} />
      </Box> */}
      </Box>
      <TForm
        form={form}
        onFinish={value => {
          updateUserRequest.run({
            ...value,
            avatar: avtUrl,
          });
        }}>
        <Field
          name="email"
          rules={[
            {
              required: true,
              message: 'Không được để trống',
            },
            {
              type: 'email',
              message: 'Nhập Email hợp lệ',
            },
          ]}>
          {({onChange, value}, meta) => {
            return (
              <Input
                onChange={onChange}
                meta={meta}
                type="email"
                value={value}
                style={{
                  backgroundColor: '#fff',
                  width: deviceWidth - 60,
                }}
                inputStyle={{
                  color: '#000',
                }}
                placeholder={'Email'}
              />
            );
          }}
        </Field>
        <Field
          name="phone"
          rules={[
            {
              required: true,
              message: 'Không được để trống',
            },
            {
              pattern: /[0-9]/,
              message: 'Chỉ nhập số',
            },
          ]}>
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
                placeholder={'Số điện thoại'}
              />
            );
          }}
        </Field>
        <Field
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Không được để trống',
            },
          ]}>
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
                placeholder={'Họ và tên'}
              />
            );
          }}
        </Field>
        <Field
          name="dateOfBirth"
          rules={[
            {
              required: true,
              message: 'Không được để trống',
            },
            {
              pattern:
                /^((19|2[0-9])[0-9]{2})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
              message: 'Nhập ngày hợp lệ dạng YYYY-MM-DD',
            },
          ]}>
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
                placeholder={'Ngày sinh'}
              />
            );
          }}
        </Field>
        <Field
          name="cccd"
          rules={[
            {
              required: true,
              message: 'Không được để trống',
            },
            {
              pattern: /[0-9]/,
              message: 'Chỉ nhập số',
            },
          ]}>
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
                placeholder={'Căn cước công dân'}
              />
            );
          }}
        </Field>
      </TForm>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          form.submit();
        }}>
        <Button
          style={{
            backgroundColor: COLORS.PRIMARY_200,
            width: deviceWidth - 160,
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          // @ts-ignore
          label={'Cập nhật thông tin'}></Button>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
  edit: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  scrollView: {
    paddingVertical: 20,
    paddingHorizontal: 22,
  },
  valueInput: {
    borderColor: 'white',
    marginBottom: 20,
  },
  defaultInput: {
    height: 48,
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 15,
    marginBottom: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: COLORS.NEUTRAL_400,
  },
  button: {
    width: (deviceWidth - 70) / 2,
    height: 48,
    borderRadius: 52,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button2: {
    width: (deviceWidth - 70) / 2,
    height: 48,
    borderRadius: 52,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_300,
  },
  container: {
    height: 54,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 16,
    borderColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  avatar: {
    borderWidth: 2,
    borderColor: 'white',
    // borderRadius: 45,
  },
});
export default MyInfo;
