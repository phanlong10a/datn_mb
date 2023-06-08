import {useFocusEffect} from '@react-navigation/native';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import TForm from '@src/components/TForm';
import Input from '@src/components/TForm/Input';
import Typography from '@src/components/Typography';
import COLORS from '@src/configs/theme/colors';
import {deviceWidth} from '@src/configs/theme/common';
import {getListMedicine} from '@src/screen/medicine/listMedicine/services';
import {useRequest} from 'ahooks';
import {useIsFocused} from '@react-navigation/native';
import {Field, useForm} from 'rc-field-form';
import React, {useState} from 'react';
import {Alert, Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {createApi, deleteApi, updateApi} from './service';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Select from '@src/components/TForm/Select';
const Visit = ({navigation, route}: any) => {
  const params = route.params;
  const isFocused = useIsFocused();
  const [inputFields, setAddMedicine] = useState([
    {medicine: '', amount_dosage: '', key: 1},
  ]);

  const [listMedicine, setListMedicine] = useState([]);

  const [avtUrl, setAvtUrl] = React.useState(null);
  const [form] = useForm();

  const getMedicine = useRequest(getListMedicine, {
    manual: true,
    onSuccess(res, params) {
      if (Array.isArray(res?.data?.data))
        setListMedicine(
          res?.data?.data?.map(item => {
            return {
              value: item.id,
              label: item.name,
            };
          }),
        );
    },
  });
  React.useEffect(() => {
    getMedicine.run(100000, 0, '');
  }, [isFocused]);

  const createRequest = useRequest(createApi, {
    manual: true,
    onSuccess(_data, _params) {
      showMessage({
        message: 'Thành công',
        type: 'success',
      });
      navigation.pop();
    },
  });
  const updateRequest = useRequest(updateApi, {
    manual: true,
    onSuccess(_data, _params) {
      showMessage({
        message: 'Thành công',
        type: 'success',
      });
      navigation.pop();
    },
  });

  const deleteUserRequest = useRequest(deleteApi, {
    manual: true,
    onSuccess(_data, _params) {
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

  const removeItemFromList = index => {
    const inputFieldsClone = [...inputFields];
    inputFieldsClone.splice(index, 1);
    setAddMedicine(inputFieldsClone);
  };

  const onChangeMedicine = (value, index) => {
    const inputFieldsClone = [...inputFields];
    inputFieldsClone[index] = {
      ...inputFieldsClone[index],
      medicine: value,
    };
    setAddMedicine(inputFieldsClone);
  };

  const onChangeValueMedicine = (value, index) => {
    const inputFieldsClone = [...inputFields];
    inputFieldsClone[index] = {
      ...inputFieldsClone[index],
      amount_dosage: value,
    };
    setAddMedicine(inputFieldsClone);
  };

  const onSubmitValue = value => {
    const patientId = params?.item?.item?.id;
    const valueSubmit = {
      ...value,
      patientId,
      medicine: inputFields.map(item => {
        return {
          ...item,
          amount_dosage: +item.amount_dosage,
        };
      }),
    };
    createRequest.run(valueSubmit);
  };

  return (
    <Box flex={1}>
      <ScrollView
        contentContainerStyle={{
          // justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 24,
        }}>
        <View
          style={{
            flex: 1,
            height: 100,
            width: Dimensions.get('screen').width - 40,
            borderRadius: 10,
            marginHorizontal: 20,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <View
            style={{
              height: '100%',
              width: Dimensions.get('screen').width - 40,
              flex: 1,
              borderRadius: 10,
              padding: 10,
              flexGrow: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <Image
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 70,
                  marginRight: 10,
                }}
                source={{
                  uri: params?.item?.item?.avatar
                    ? 'http://' + params?.item.item.avatar
                    : 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </View>
            <View>
              <Text style={styles.textHead}>
                {params?.item?.item?.fullName}
              </Text>
              <Text
                style={styles.text}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                {params?.item?.item?.phone}
              </Text>
            </View>
          </View>
        </View>
        <TForm
          form={form}
          onFinish={value => {
            onSubmitValue(value);
          }}>
          <Typography
            fontSize={15}
            margin={[0, 0, 5, 0]}
            type="Caption - Regular"
            color="BLACK">
            Thông tin khám bệnh
          </Typography>
          <Field
            name="measure_fee"
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
                  type="email"
                  value={value}
                  style={{
                    backgroundColor: '#fff',
                    width: deviceWidth - 60,
                  }}
                  inputStyle={{
                    color: '#000',
                  }}
                  placeholder={'Phí khám bệnh'}
                />
              );
            }}
          </Field>
          <Field
            name="diagnose"
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
                  type="email"
                  value={value}
                  style={{
                    backgroundColor: '#fff',
                    width: deviceWidth - 60,
                  }}
                  inputStyle={{
                    color: '#000',
                  }}
                  placeholder={'Chẩn đoán'}
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
                  type="email"
                  value={value}
                  style={{
                    backgroundColor: '#fff',
                    width: deviceWidth - 60,
                  }}
                  inputStyle={{
                    color: '#000',
                  }}
                  placeholder={'Mô tả'}
                />
              );
            }}
          </Field>
          <Typography
            fontSize={15}
            margin={[0, 0, 5, 0]}
            type="Caption - Regular"
            color="BLACK">
            Thang thuốc kê đơn
          </Typography>
          <Field
            name="total_count"
            rules={[
              {
                required: inputFields.length > 0 ? true : false,
                message: 'Không được để trống',
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
                  placeholder={'Số lượng thang thuốc'}
                />
              );
            }}
          </Field>
          <Field>
            {({onChange, value}, _meta) => {
              return inputFields.map((_item, _index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: _index + 1 === inputFields.length ? 8 : 16,
                      alignItems: 'center',
                    }}>
                    <Select
                      placeholder={'Chọn thuốc'}
                      style={{
                        backgroundColor: '#fff',
                        width: deviceWidth - 60 - deviceWidth / 2,
                        marginRight: 30,
                        borderRadius: 16,
                        height: 50,
                      }}
                      options={listMedicine}
                      onChange={value => {
                        onChangeMedicine(value, _index);
                      }}
                      // imageApi={uploadImage}
                      value={_item.medicine}
                      preicon={false}
                    />
                    <Input
                      onChange={value => {
                        onChangeValueMedicine(value, _index);
                      }}
                      style={{
                        backgroundColor: '#fff',
                        width: deviceWidth - 70 - deviceWidth / 2,
                      }}
                      inputStyle={{
                        color: '#000',
                      }}
                      value={_item.amount_dosage}
                      placeholder={'Số lượng'}
                    />
                    <TouchableOpacity
                      style={{
                        marginLeft: 16,
                      }}
                      activeOpacity={0.8}
                      onPress={() => {
                        removeItemFromList(_index);
                      }}>
                      <Icon
                        name="delete-outline"
                        style={styles.actionButtonIcon}
                      />
                    </TouchableOpacity>
                  </View>
                );
              });
            }}
          </Field>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              const addMedicine = [...inputFields];
              addMedicine.push({
                medicine: '',
                amount_dosage: '',
                key: addMedicine.length + 1,
              });
              setAddMedicine(addMedicine);
            }}
            style={{
              flexDirection: 'row',
              backgroundColor: COLORS.ACCENT_500,
              padding: 16,
              marginBottom: 16,
              borderRadius: 16,
            }}>
            <Icon name="add" style={styles.actionButtonIcon} />
            <Text>Thêm thuốc</Text>
          </TouchableOpacity>
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
            label={'Tạo hoá đơn'}></Button>
        </TouchableOpacity>
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
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'black',
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
  text: {
    fontSize: 20,
    color: COLORS.ACCENT_100,
    width: 250,
  },
  textHead: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
});
export default Visit;
