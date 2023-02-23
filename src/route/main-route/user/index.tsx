import {createStackNavigator} from '@react-navigation/stack';
import Main from '@src/screen/main/main';
import {Alert, Button} from 'react-native';

const Stack = createStackNavigator();

const UserNavigation = (props: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Nhân viên"
        component={Main}
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
    </Stack.Navigator>
  );
};
export default UserNavigation;
