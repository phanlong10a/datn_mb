import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';
type Props = {
  children: any;
};

const WrapperDrawer = (props: Props) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <Icon name="menu" size={30} color="#900" />
      <Text>alo123123</Text>
      {props.children}
    </View>
  );
};

export default WrapperDrawer;
