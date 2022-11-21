import TextConfigs, {TypoKeys} from '@src/configs/theme/typography';
import {StyleSheet, TextStyle} from 'react-native';

type TypoStyle = {
  [key in TypoKeys]: TextStyle;
};

const styles: any = StyleSheet.create<TypoStyle>(TextConfigs);

export default styles;
