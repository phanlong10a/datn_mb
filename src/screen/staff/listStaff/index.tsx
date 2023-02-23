import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from '@src/screen/main/main';
import Welcome from '@src/screen/welcome';
import {Text, View} from 'react-native';

const Drawer = createDrawerNavigator();

const MainLayout = (props: any) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Nhân viên" component={Main} />
      <Drawer.Screen name="Bệnh nhân" component={Welcome} />
      <Drawer.Screen name="Danh mục thuốc" component={Welcome} />
      <Drawer.Screen name="Thuốc" component={Welcome} />
      <Drawer.Screen name="Hoá đơn" component={Welcome} />
      <Drawer.Screen name="Lịch sử hoá đơn" component={Welcome} />
    </Drawer.Navigator>
  );
};
export default MainLayout;
