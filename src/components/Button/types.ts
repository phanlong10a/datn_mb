import {TextStyle} from 'react-native';
import {COLORS} from '@src/configs/theme/colors';
import {BoxProps} from './../Box/types';

type ButtonType = 'primary' | 'ghost' | 'gradient';

import {ReactNode} from 'react';
import {TypoKeys} from '@src/configs/theme/typography';

export interface ButtonProps extends BoxProps {
  type?: ButtonType;
  textType?: TypoKeys;
  textColor?: keyof typeof COLORS;
  textStyle?: TextStyle;
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  loading?: boolean;
  gradient?: boolean;
  colors?: Array<string>;
}
