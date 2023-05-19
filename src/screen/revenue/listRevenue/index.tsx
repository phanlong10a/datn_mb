import {useIsFocused} from '@react-navigation/native';
import Button from '@src/components/Button';
import COLORS from '@src/configs/theme/colors';
import {deviceWidth} from '@src/configs/theme/common';
import {useRequest} from 'ahooks';
import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FlatList, RefreshControl} from 'react-native-gesture-handler';
import MonthPicker from 'react-native-month-year-picker';
import UserItem from './component/user-item';
import {getList} from './services';

const ListRevenue = ({navigation, route}: any) => {
  const isFocused = useIsFocused();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(null);
  const [medicineFee, setMedicineFee] = useState('');
  const [measureFee, setMeasureFee] = useState('');
  const [listUser, setListUser] = React.useState<any>([]);

  const getDataRequest = useRequest(getList, {
    manual: true,
    onSuccess(res, params) {
      if (Array.isArray(res?.data?.data)) {
        setListUser(res?.data?.data);
        setMonth(res?.data?.month);
        setMedicineFee(res?.data?.monthlyMedicine);
        setMeasureFee(res?.data?.monthlyFee);
      }
    },
  });

  const showPicker = useCallback(value => setOpen(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;
      getDataRequest.run(selectedDate);
      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker],
  );

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        style={{
          backgroundColor: COLORS.PRIMARY_200,
          width: deviceWidth - 40,
          height: 40,
          borderRadius: 20,
          marginTop: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        label="Chọn tháng xem doanh thu"
        onPress={() => setOpen(true)}
      />
      {month && measureFee && (
        <View
          style={{
            width: '100%',
          }}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 8,
            }}>
            <Text
              style={{
                fontSize: 24,
                color: '#000000',
              }}>
              Doanh thu của tháng :{month}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginBottom: 8,
              marginLeft: 16,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000000',
              }}>
              Tổng doanh thu bán thuốc :{medicineFee}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginBottom: 8,
              marginLeft: 16,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000000',
              }}>
              Tổng doanh thu phí khám chữa bệnh :{measureFee}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginBottom: 8,
              marginLeft: 16,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000000',
              }}>
              Doanh thu chi tiết từng giao dịch:
            </Text>
          </View>
        </View>
      )}
      {open && (
        <MonthPicker onChange={onValueChange} value={date} locale="vi" />
      )}
      <FlatList
        data={listUser}
        refreshing={getDataRequest.loading}
        renderItem={userItem => (
          <UserItem {...userItem} navigation={navigation} />
        )}
        style={{
          height: '100%',
        }}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
export default ListRevenue;
