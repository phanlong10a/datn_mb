import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from '@src/screen/main/main';
import Welcome from '@src/screen/welcome';
import WrapperDrawer from '@src/screen/WrapperDrawer';
import {Alert, Button, Text, View} from 'react-native';

const Drawer = createDrawerNavigator();

const MainLayout = (props: any) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Nhân viên"
        component={WrapperDrawer}
        options={{
          headerRight: () => (
            <Button
              onPress={() => Alert.alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
      <Drawer.Screen name="Bệnh nhân" component={Welcome} />
      <Drawer.Screen name="Danh mục thuốc" component={Welcome} />
      <Drawer.Screen name="Thuốc" component={Welcome} />
      <Drawer.Screen name="Hoá đơn" component={Welcome} />
      <Drawer.Screen name="Lịch sử hoá đơn" component={Welcome} />
    </Drawer.Navigator>
  );
};
export default MainLayout;
