import {createDrawerNavigator} from '@react-navigation/drawer';
import Welcome from '@src/screen/welcome';
import UserNavigation from './user';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';
import MedicineNavigation from './medicine';
import PatientNavigation from './patient';
const Drawer = createDrawerNavigator();

const MainLayout = (props: any) => {
  return (
    <Drawer.Navigator>
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
        name="prescription"
        component={Welcome}
        options={{
          title: 'Danh mục thuốc',
          drawerIcon: () => (
            <Icon name="medical-services" style={styles.actionButtonIcon} />
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
        component={Welcome}
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
    </Drawer.Navigator>
  );
};
export default MainLayout;
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'black',
    marginRight: -20,
  },
});
