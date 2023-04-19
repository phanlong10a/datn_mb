import {useIsFocused} from '@react-navigation/native';
import Button from '@src/components/Button';
import COLORS from '@src/configs/theme/colors';
import {deviceWidth} from '@src/configs/theme/common';
import {useRequest} from 'ahooks';
import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {FlatList, RefreshControl} from 'react-native-gesture-handler';
import MonthPicker from 'react-native-month-year-picker';
import UserItem from './component/user-item';
import {getList} from './services';

const ListRevenue = ({navigation, route}: any) => {
  const isFocused = useIsFocused();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [listUser, setListUser] = React.useState<any>([]);

  const getDataRequest = useRequest(getList, {
    manual: true,
    onSuccess(res, params) {
      console.log('🚀 ~ file: index.tsx:25 ~ onSuccess ~ res:', res);
      if (Array.isArray(res?.data?.data)) setListUser(res?.data?.data);
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
      {open && (
        <MonthPicker
          onChange={onValueChange}
          value={date}
          minimumDate={new Date()}
          maximumDate={new Date(2025, 5)}
          locale="vi"
        />
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
