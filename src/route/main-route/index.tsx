import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Welcome from '@src/screen/welcome';
import UserNavigation from './user';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, Text, View} from 'react-native';
import MedicineNavigation from './medicine';
import PatientNavigation from './patient';
import ReceiptNavigation from './receipt';
import Button from '@src/components/Button';
import { storage, StorageKey } from '@src/storage';
import { useAuthenState } from '@src/atom/authen';
const Drawer = createDrawerNavigator();

const MainLayout = (props: any) => {
  const [authen, setAuthen] = useAuthenState();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <View
              style={{
                justifyContent: 'space-between',
              }}>
              <DrawerItemList {...props} />
              <DrawerItem
                onPress={() => {
                  storage.set(StorageKey.Authen, '');
                  setAuthen({
                    ...authen,
                    token: null,
                  });
                }}
                style={{
                  marginTop: 'auto',
                  flexGrow: 1,
                }}
                label={() => (
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      name="power-settings-new"
                      style={styles.actionButtonIcon}
                      color="red"
                    />
                    <Text
                      style={{
                        marginLeft: 30,
                        color: 'red',
                      }}>
                      Logout
                    </Text>
                  </View>
                )}
              />
            </View>
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen
        name="user"
        component={UserNavigation}
        options={{
          title: 'Nhân viên',
          drawerIcon: () => (
            <Icon name="person" style={styles.actionButtonIcon} />
          ),
        }}
      />
      <Drawer.Screen
        name="patient"
        component={PatientNavigation}
        options={{
          title: 'Bệnh nhân',
          drawerIcon: () => (
            <Icon name="local-hotel" style={styles.actionButtonIcon} />
          ),
        }}
      />
      <Drawer.Screen
        name="medicine"
        component={MedicineNavigation}
        options={{
          title: 'Vị thuốc',
          drawerIcon: () => (
            <Icon name="vertical-split" style={styles.actionButtonIcon} />
          ),
        }}
      />
      <Drawer.Screen
        name="receipt"
        component={ReceiptNavigation}
        options={{
          title: 'Hoá đơn',
          drawerIcon: () => (
            <Icon name="receipt-long" style={styles.actionButtonIcon} />
          ),
        }}
      />
      <Drawer.Screen
        name="payment-history"
        component={Welcome}
        options={{
          title: 'Lịch sử giao dịch',
          drawerIcon: () => (
            <Icon name="receipt" style={styles.actionButtonIcon} />
          ),
        }}
      />
      <Drawer.Screen
        name="my-profile"
        component={Welcome}
        options={{
          title: 'Thông tin cá nhân',
          drawerIcon: () => (
            <Icon name="person-outline" style={styles.actionButtonIcon} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default MainLayout;
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    width: 20,
    color: 'black',
    marginRight: -20,
  },
});
