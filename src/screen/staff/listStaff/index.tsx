import {useAuthenState} from '@src/atom/authen';
import {useRequest} from 'ahooks';
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ActionButton from 'react-native-action-button';
import {FlatList, RefreshControl} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserItem from './component/user-item';
import {useIsFocused} from '@react-navigation/native';
import {getListUsers} from './services';
import Input from '@src/components/TForm/Input';
import {deviceWidth} from '@src/configs/theme/common';

const ListStaff = ({navigation, route}: any) => {
  const isFocused = useIsFocused();

  const [authen, setAuthen] = useAuthenState();
  const [listUser, setListUser] = React.useState<any>([]);
  const [searchText, setSearchText] = React.useState<string>('');
  const [showSearch, setShowSearch] = React.useState<boolean>(false);

  const getDataRequest = useRequest(getListUsers, {
    manual: true,
    onSuccess(res, params) {
      if (Array.isArray(res?.data?.data)) setListUser(res?.data?.data);
    },
  });

  React.useEffect(() => {
    getDataRequest.run(10000, 0, searchText);
  }, [isFocused, searchText]);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      refreshControl={
        <RefreshControl
          refreshing={getDataRequest.loading}
          onRefresh={() => {
            getDataRequest.run(10000, 0, searchText);
          }}
        />
      }>
      {showSearch && (
        <Input
          onChange={e => {
            setSearchText(e);
          }}
          style={{
            backgroundColor: '#fff',
            width: deviceWidth - 40,
            height: 40,
            marginTop: 16,
          }}
          inputStyle={{
            color: '#000',
          }}
          placeholder={'Tìm kiếm theo tên'}
        />
      )}
      <FlatList
        data={listUser}
        onRefresh={() => {
          getDataRequest.run(10000, 0, searchText);
        }}
        refreshing={getDataRequest.loading}
        renderItem={userItem => (
          <UserItem {...userItem} navigation={navigation} />
        )}
        style={{
          height: '100%',
        }}
      />
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Tìm kiếm"
          onPress={() => setShowSearch(true)}>
          <Icon name="find-in-page" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        {authen.isAdmin && (
          <ActionButton.Item
            buttonColor="#1abc9c"
            title="Thêm mới"
            onPress={() => {
              navigation.navigate('addUser');
            }}>
            <Icon name="add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        )}
      </ActionButton>
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
export default ListStaff;
