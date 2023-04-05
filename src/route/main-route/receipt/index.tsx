import { createStackNavigator } from '@react-navigation/stack';
import AddReceipt from '@src/screen/receipt/addReceipt';
import ListReceipt from '@src/screen/receipt/listReceipt';

const Stack = createStackNavigator();

const ReceiptNavigation = (props: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="listReceipt"
        component={ListReceipt}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="addReceipt"
        component={AddReceipt}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default ReceiptNavigation;
