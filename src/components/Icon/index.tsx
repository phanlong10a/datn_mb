import COLORS from '@src/configs/theme/colors';
import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import {IconProps} from 'react-native-vector-icons/Icon';
import config from './icon.json';
import {IconType} from './type';
const Icomoon = createIconSetFromIcoMoon(config, 'icomoon', 'icomoon.ttf');

interface IcomoonProps extends Omit<IconProps, 'name'> {
  name: IconType;
}

const Icon: React.FC<IcomoonProps> = props => {
  return <Icomoon color={COLORS.BLACK} {...props} />;
};

export default Icon;
