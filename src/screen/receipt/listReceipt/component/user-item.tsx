import { useAuthenState } from '@src/atom/authen';
import COLORS from '@src/configs/theme/colors';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserItem = (item: any) => {
  const [authen, setAuthen] = useAuthenState();
  return (
    <View
      style={{
        flex: 1,
        height: 100,
        width: Dimensions.get('screen').width - 40,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: COLORS.NEUTRAL_400,
        backgroundColor: COLORS.NEUTRAL_600,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
      <TouchableOpacity
        style={{
          height: '100%',
          width: Dimensions.get('screen').width - 40,
          flex: 1,
          borderRadius: 10,
          padding: 10,
          flexGrow: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        activeOpacity={0.8}
        onPress={() => {
          item?.navigation?.navigate('addReceipt', {
            item,
          });
        }}>
        <View>
          <Text style={style.textHead}>BN:{item?.item?.patient?.fullName}</Text>
          <Text style={style.text}>Tổng chi phí:
            {item?.item?.totalFee + 'đ'}
          </Text>
          <Text style={style.text} numberOfLines={1} ellipsizeMode={'tail'}>
            {item?.item?.paidStatus ? "Đã thanh toán" : "Chưa thanh toán"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    color: COLORS.ACCENT_100,
    width: 250
  },
  textHead: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
});
export default UserItem;
