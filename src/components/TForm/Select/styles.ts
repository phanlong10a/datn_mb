import { COLORS } from './../../../configs/theme/colors';
import { deviceWidth } from '@src/configs/theme/common';
import { StyleSheet } from 'react-native';

export const defaultContainer: any = StyleSheet.create<any>({
  backgroundColor: 'rgba(0,0,0,0.5)',
  flex: 1,
  justifyContent: 'flex-end',
});

export const smallerContainer: any = StyleSheet.create<any>({
  backgroundColor: '#fff',
});
export const listContainer: any = StyleSheet.create<any>({
  paddingBottom: 16,
  marginHorizontal: 16,
});

export const defaultInput: any = StyleSheet.create<any>({
  height: 54,
  justifyContent: 'center',
  borderWidth: 1,
  borderRadius: 8,
  paddingLeft: 16,
  borderColor: COLORS.NEUTRAL_400,
  alignItems: 'flex-start',
  textAlign: 'center',
  // flexDirection: 'row',
});

export const bottomSheetHeader: any = StyleSheet.create<any>({
  alignItems: 'center',
  marginBottom: 12,
});

export const bottomSheet: any = StyleSheet.create<any>({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  width: deviceWidth,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  padding: 16,
  backgroundColor: 'white',
  zIndex: 10,
});
export const imageStyle: any = StyleSheet.create<any>({
  width: '100%',
  height: '100%',
  borderRadius: 18,
  position: 'absolute',
});

export const borderInput: any = StyleSheet.create<any>({
  borderColor: COLORS.NEUTRAL_400,
  borderBottomWidth: 1,
});

export const borderError: any = StyleSheet.create<any>({
  borderColor: '#FF0900',
});
