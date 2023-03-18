import {createStackNavigator} from '@react-navigation/stack';
import AddPatient from '@src/screen/patient/addPatient';
import ListPatient from '@src/screen/patient/listPatient';
import Visit from '@src/screen/patient/visit';

const Stack = createStackNavigator();

const PatientNavigation = (props: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="listPatient"
        component={ListPatient}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="addPatient"
        component={AddPatient}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="visit"
        component={Visit}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default PatientNavigation;
