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

const AddMedicine = ({navigation, route}: any) => {
  const params = route.params;
  const [authen, setAuthen] = useAuthenState();
  const [imageError, setImageError] = useState();
  const [avtUrl, setAvtUrl] = React.useState(null);
  const [form] = useForm();
  const screenHeight = Dimensions.get('window').height;

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
      price_per_unit: '' + params.item.item.price_per_unit,
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
                  image: avtUrl,
                  price_per_unit: +value.price_per_unit,
                },
                null,
              );
              return;
            }
            updateRequest.run(
              {
                ...value,
                image: avtUrl,
                price_per_unit: +value.price_per_unit,
              },
              params?.item?.item?.id,
            );
          }}
          style={{
            overflow: 'scroll',
          }}>
          <Field
            name="name"
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
                  type="text"
                  value={value}
                  style={{
                    backgroundColor: '#fff',
                    width: deviceWidth - 60,
                  }}
                  inputStyle={{
                    color: '#000',
                  }}
                  placeholder={'Tên'}
                />
              );
            }}
          </Field>
          <Field
            name="price_per_unit"
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
                  keyboardType="number-pad"
                  style={{
                    backgroundColor: '#fff',
                    width: deviceWidth - 60,
                  }}
                  inputStyle={{
                    color: '#000',
                  }}
                  placeholder={'Giá trên mỗi đơn vị đo'}
                />
              );
            }}
          </Field>
          <Field
            name="description"
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
                  placeholder={'Mô tả'}
                  numberOfLines={4}
                />
              );
            }}
          </Field>
          <Field name="measure_unit">
            {({onChange, value}, meta) => {
              return (
                <>
                  <Select
                    placeholder={'Đơn vị tính'}
                    style={{
                      backgroundColor: '#fff',
                      width: deviceWidth - 60,
                    }}
                    options={MEASURE_UNIT_SELECT}
                    onChange={onChange}
                    // imageApi={uploadImage}
                    value={value}
                    meta={meta}
                    preicon={false}
                  />
                </>
              );
            }}
          </Field>
          <Field name="type">
            {({onChange, value}, meta) => {
              return (
                <>
                  <Select
                    placeholder={'Loại thuốc'}
                    style={{
                      backgroundColor: '#fff',
                      width: deviceWidth - 60,
                    }}
                    options={MEDICINE_TYPE_SELECT}
                    onChange={onChange}
                    // imageApi={uploadImage}
                    value={value}
                    meta={meta}
                    preicon={false}
                  />
                </>
              );
            }}
          </Field>
          <Field name="tinh_thuoc">
            {({onChange, value}, meta) => {
              return (
                <>
                  <Select
                    placeholder={'Tính thuốc'}
                    style={{
                      backgroundColor: '#fff',
                      width: deviceWidth - 60,
                    }}
                    options={TINH_THUOC_SELECT}
                    onChange={onChange}
                    // imageApi={uploadImage}
                    value={value}
                    meta={meta}
                    preicon={false}
                  />
                </>
              );
            }}
          </Field>
          <Field name="vi_cua_thuoc">
            {({onChange, value}, meta) => {
              return (
                <>
                  <Select
                    placeholder={'Vị của thuốc'}
                    style={{
                      backgroundColor: '#fff',
                      width: deviceWidth - 60,
                    }}
                    options={VI_CUA_THUOC_SELECT}
                    onChange={onChange}
                    // imageApi={uploadImage}
                    value={value}
                    meta={meta}
                    preicon={false}
                  />
                </>
              );
            }}
          </Field>
          <Field name="nguyen_lieu">
            {({onChange, value}, meta) => {
              return (
                <>
                  <Select
                    placeholder={'Nguyên liệu từ'}
                    style={{
                      backgroundColor: '#fff',
                      width: deviceWidth - 60,
                    }}
                    options={NGUYEN_LIEU_SELECT}
                    onChange={onChange}
                    // imageApi={uploadImage}
                    value={value}
                    meta={meta}
                    preicon={false}
                  />
                </>
              );
            }}
          </Field>
          <Field name="side_thuoc">
            {({onChange, value}, meta) => {
              return (
                <>
                  <Select
                    placeholder={'Thuốc cổ truyền'}
                    style={{
                      backgroundColor: '#fff',
                      width: deviceWidth - 60,
                    }}
                    options={SIDE_THUOC_SELECT}
                    onChange={onChange}
                    value={value}
                    meta={meta}
                    preicon={false}
                  />
                </>
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
              params?.item?.item?.id ? 'Cập nhật vị thuốc' : 'Thêm vị thuốc'
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
              deleteAlert();
            }}>
            <Button
              style={{
                backgroundColor: COLORS.RED_100,
                width: deviceWidth - 160,
                height: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              // @ts-ignore
              label={'Xoá vị thuốc'}></Button>
          </TouchableOpacity>
        )}
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
export default AddMedicine;
