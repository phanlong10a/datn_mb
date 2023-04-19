import {useAuthenState} from '@src/atom/authen';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import TForm from '@src/components/TForm';
import Input from '@src/components/TForm/Input';
import Select from '@src/components/TForm/Select';
import Typography from '@src/components/Typography';
import {
  MEASURE_UNIT_SELECT,
  MEDICINE_TYPE_SELECT,
  NGUYEN_LIEU_SELECT,
  SIDE_THUOC_SELECT,
  TINH_THUOC_SELECT,
  VI_CUA_THUOC_SELECT,
} from '@src/configs/constant';
import COLORS from '@src/configs/theme/colors';
import {deviceWidth} from '@src/configs/theme/common';
import {useRequest} from 'ahooks';
import {Field, useForm} from 'rc-field-form';
import React, {useState} from 'react';
import {Alert, Dimensions, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {showMessage} from 'react-native-flash-message';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import {createApi, deleteApi, updateApi, upload_avatar} from './service';

const data = [
  {label: '1', value: 'camera_plus'},
  {label: '1', value: 'image_upload'},
];

const AddPatient = ({navigation, route}: any) => {
  const params = route.params;
  const [imageError, setImageError] = useState();
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

  const createRequest = useRequest(createApi, {
    manual: true,
    onSuccess(data, params) {
      showMessage({
        message: 'Thành công',
        type: 'success',
      });
      navigation.pop();
    },
  });
  const updateRequest = useRequest(updateApi, {
    manual: true,
    onSuccess(data, params) {
      showMessage({
        message: 'Thành công',
        type: 'success',
      });
      navigation.pop();
    },
  });

  const deleteUserRequest = useRequest(deleteApi, {
    manual: true,
    onSuccess(data, params) {
      showMessage({
        message: 'Thành công',
        type: 'success',
      });
      navigation.pop();
    },
  });

  React.useEffect(() => {
    if (!params?.item) return;
    form.setFieldsValue({
      ...params.item.item,
    });
    setAvtUrl(params.item.item.avatar);
  }, [params]);

  const deleteAlert = () =>
    Alert.alert('Bạn muốn xoá vị thuốc này chứ', 'Bấm có để xác nhận', [
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
    <Box flex={1}>
      <ScrollView
        contentContainerStyle={{
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
            if (!params?.item) {
              createRequest.run(
                {
                  ...value,
                  avatar: avtUrl,
                },
                null,
              );
              return;
            }
            updateRequest.run(
              {
                ...value,
                avatar: avtUrl,
              },
              params?.item?.item?.id,
            );
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
            name="address"
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
                  placeholder={'Địa chỉ'}
                />
              );
            }}
          </Field>
          <Field name="bankNumber">
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
                  placeholder={'Số tài khoản ngân hàng'}
                />
              );
            }}
          </Field>
          <Field name="backAccount">
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
                  placeholder={'Ngân hàng'}
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
            label={
              params?.item?.item?.id ? 'Cập nhật thông tin' : 'Thêm bệnh nhân'
            }></Button>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 24,
          }}></View>
        {params?.item?.item?.id && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('visit', {
                ...params,
              });
            }}>
            <Button
              style={{
                backgroundColor: COLORS.RED_400,
                width: deviceWidth - 160,
                height: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              // @ts-ignore
              label={'Thăm khám'}></Button>
          </TouchableOpacity>
        )}
        <View
          style={{
            marginTop: 24,
          }}></View>
      </ScrollView>
    </Box>
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
export default AddPatient;
