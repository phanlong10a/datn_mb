import {useAuthenState} from '@src/atom/authen';
import COLORS from '@src/configs/theme/colors';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const UserItem = (item: any) => {
  console.log('🚀 ~ file: user-item.tsx:8 ~ UserItem ~ item:', item);
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
          item?.navigation?.navigate('addMedicine', {
            item,
          });
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
              uri: item?.item?.avatar
                ? 'http://' + item.item.avatar
                : 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View>
          <Text style={style.textHead}>{item?.item?.name}</Text>
          <Text style={style.text}>
            {item?.item?.price_per_unit + 'đ/' + item?.item?.measure_unit}
          </Text>
          <Text style={style.text} numberOfLines={1} ellipsizeMode={'tail'}>
            {item?.item?.description}
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
