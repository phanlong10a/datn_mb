import React from 'react';
import {Text, Touchable, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';
type Props = {
  children: any;
  navigation: any;
};

const WrapperDrawer = (props: Props) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}>
      <TouchableOpacity
        style={{
          position: 'absolute',
        }}
        activeOpacity={0.7}
        onPress={() =>{
            props.navigation.toggleDrawer();
        }}
        >
        <Icon name="menu" size={30} color="#900" />
      </TouchableOpacity>
      <View style={{width: '100%', height: Dimensions.get('window').height - 30}}>
        {props.children}
      </View>
    </View>
  );
};

export default WrapperDrawer;
