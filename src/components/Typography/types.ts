import {TextProps} from 'react-native';
import {Spacing, TextAlign} from '@src/configs/theme/common';
import {ReactNode} from 'react';

import {TypoKeys} from '@src/configs/theme/typography';
import COLORS from '@src/configs/theme/colors';
export interface TypographyProps extends TextProps {
  type?: TypoKeys;
  color?: keyof typeof COLORS;
  fontSize?: number;

  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: TextAlign;
  margin?: Spacing;
  padding?: Spacing;
  children?: ReactNode;
  underline?: boolean;
}
