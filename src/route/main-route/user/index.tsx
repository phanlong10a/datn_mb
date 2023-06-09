import {createStackNavigator} from '@react-navigation/stack';
import Main from '@src/screen/main/main';
import AddStaff from '@src/screen/staff/addStaff';
import ListStaff from '@src/screen/staff/listStaff';
import {Alert, Button} from 'react-native';

const Stack = createStackNavigator();

const UserNavigation = (props: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="listUser"
        component={ListStaff}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="addUser"
        component={AddStaff}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default UserNavigation;
