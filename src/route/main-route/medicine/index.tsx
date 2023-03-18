import {createStackNavigator} from '@react-navigation/stack';
import Main from '@src/screen/main/main';
import AddMedicine from '@src/screen/medicine/addMedicine';
import ListMedicine from '@src/screen/medicine/listMedicine';
import AddStaff from '@src/screen/staff/addStaff';
import ListStaff from '@src/screen/staff/listStaff';
import {Alert, Button} from 'react-native';

const Stack = createStackNavigator();

const MedicineNavigation = (props: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="listMedicine"
        component={ListMedicine}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="addMedicine"
        component={AddMedicine}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default MedicineNavigation;
