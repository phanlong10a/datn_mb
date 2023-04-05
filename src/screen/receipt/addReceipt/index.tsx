import Box from '@src/components/Box';
import Button from '@src/components/Button';
import COLORS from '@src/configs/theme/colors';
import { deviceWidth } from '@src/configs/theme/common';
import { useRequest } from 'ahooks';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Row, Rows, Table } from 'react-native-table-component';
import { paid } from './service';
const tableHead = ['Tên hàng', 'Số lượng', 'Đơn giá', 'Tổng tiền'];
const tableData = [
  ['1', '2', '3', '4'],
  ['a', 'b', 'c', 'd'],
  ['1', '2', '3', '456789'],
  ['a', 'b', 'c', 'd'],
];

const data = [
  {label: '1', value: 'camera_plus'},
  {label: '1', value: 'image_upload'},
];

const AddReceipt = ({navigation, route}: any) => {
  const params = route.params;

  const [data, setData] = React.useState([]);
  const paidRequest = useRequest(paid, {
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
    if (params?.item?.item?.prescription_transation) {
      const {prescription_transation} = params?.item?.item;
      const {total_count} = prescription_transation;
      const list_medicine_data =
        prescription_transation.prescription_medicine.map(item => {
          const total_amount = total_count * item.amount_dosage;
          const totalFee = total_amount * item.medicine?.price_per_unit;
          return [
            item.medicine?.name,
            total_amount + item.medicine?.measure_unit,
            item.medicine?.price_per_unit,
            totalFee,
          ];
        });
      list_medicine_data.push([
        'Phí khám bệnh',
        '1',
        params?.item?.item?.measure_fee,
        params?.item?.item?.measure_fee,
      ]);
      setData(list_medicine_data);
    }
  }, [params]);

  const paidAlert = () =>
    Alert.alert('Bạn muốn xác nhận thanh toán này chứ', 'Bấm có để xác nhận', [
      {
        text: 'Không',
        style: 'cancel',
      },
      {
        text: 'Có',
        onPress: () => paidRequest.run(params?.item?.item?.id),
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
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 36,
          }}>
          <Text
            style={{
              fontSize: 30,
              color: '#000000',
            }}>
            Thông tin hoá đơn
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-start',
            flexDirection: 'row',
            marginBottom: 8,
          }}>
          <Text style={styles.text1}>Tạo bởi: </Text>
          <Text style={{...styles.text1, fontWeight: 'bold'}}>
            {params?.item?.item?.created_by.fullName}
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-start',
            flexDirection: 'row',
            marginBottom: 8,
          }}>
          <Text style={styles.text1}>Trạng thái: </Text>
          {params?.item?.item?.paidStatus ? (
            <Text style={{color: 'green'}}>Đã thanh toán</Text>
          ) : (
            <Text style={{color: 'red'}}>Chưa thanh toán</Text>
          )}
        </View>

        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows
            data={data}
            textStyle={styles.text}
            style={{backgroundColor: '#ffffff'}}
          />
        </Table>
        <View
          style={{
            width: '100%',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginBottom: 8,
            paddingLeft: 16,
          }}>
          <Text
            style={{
              marginLeft: 8,
              fontSize: 15,
            }}>
            Tổng tiền cần thanh toán:
          </Text>
          <Text
            style={{
              marginLeft: 8,
              fontSize: 15,
              color: '#000000',
              fontWeight: 'bold',
            }}>
            {params?.item?.item?.totalFee}
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          marginTop: 24,
        }}></View>
      {!params?.item?.item?.paidStatus && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            paidAlert();
          }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
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
            label="Thanh toán"></Button>
        </TouchableOpacity>
      )}

      <View
        style={{
          marginTop: 24,
        }}></View>
    </Box>
  );
};

const styles = StyleSheet.create({
  head: {height: 40, backgroundColor: '#f1f8ff', width: '100%'},
  text: {margin: 6, width: '100%', color: '#000000'},
  text1: {color: '#000000'},
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
export default AddReceipt;
