import Box from '@src/components/Box';
import Icon from 'react-native-vector-icons/Octicons';
import ImageIcon from '@src/components/ImageIcon';
import Typography from '@src/components/Typography';
import theme from '@src/configs/theme';
import COLORS from '@src/configs/theme/colors';
import {FontFamilyNames} from '@src/configs/theme/typography';
import React, {useMemo, useRef} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

import {InputProps} from './types';

const Input: React.FC<InputProps> = ({
  label,
  meta,
  required,
  onChange,
  // required,
  disabled,
  onFocus,
  allowClear,
  containerOnLayout,
  prefix,
  suffix,
  margin,
  padding,
  type,
  dontShowErrorMessage = false,
  loading,
  inputStyle,
  ...props
}) =>
  // ref,
  {
    // const inputRef = React.useRef();
    // useImperativeHandle(ref, () => inputRef.current);
    const [componentHeight, setComponentHeight] = React.useState(48);
    const combinedStyle: ViewStyle[] = useMemo(() => {
      const styleObject: any = {
        margin,
        padding,
      };
      const style: ViewStyle[] = Object.keys(styleObject)
        .map((key: any) => {
          if (styleObject[key]) {
            if (['margin', 'padding'].includes(key)) {
              const normalizeOptions = theme.utils.styles.normalizeOptions(
                styleObject[key],
              );
              return theme.utils.styles[key](normalizeOptions);
            }

            return theme.utils.styles[key](styleObject[key]);
          }
        })
        .filter(e => e);
      return style;
    }, [margin, padding]);

    const onClear = () => {
      onChange && onChange('');
    };
    const [secure, setSecure] = React.useState(
      type === 'password' ? true : false,
    );
    const toggle = () => {
      setSecure(!secure);
    };
    const textInputReference = useRef<TextInput | null>(null);
    const [isSelect, setIsSelect] = React.useState(false);
    const onFoc = () => {
      onFocus && onFocus();
      setIsSelect(true);
    };
    const onBlur = () => {
      setIsSelect(false);
    };
    console.log(
      StyleSheet.flatten([
        styles.stylesText,
        inputStyle && inputStyle,
        {height: componentHeight},
      ]),
    );
    return (
      <>
        <View
          style={StyleSheet.flatten([combinedStyle])}
          onLayout={containerOnLayout}>
          {label && (
            <Typography
              margin={[0, 0, 5, 0]}
              type="Body3 - Regular"
              color="NEUTRAL_400">
              {label}{' '}
              {required ? (
                <Typography type="Caption - Regular" color="RED_500">
                  *
                </Typography>
              ) : null}
            </Typography>
          )}
          <Box
            style={StyleSheet.flatten([
              styles.defaultInput,
              {
                borderColor: isSelect ? COLORS.NEUTRAL_700 : COLORS.NEUTRAL_400,
              },
              props.style && props.style,
              meta &&
                meta.errors &&
                meta.errors[0] && {borderColor: COLORS.RED_300},
            ])}>
            {prefix}
            <Box flex={1}>
              {loading ? (
                <ActivityIndicator size="small" color={COLORS.BLACK} />
              ) : (
                <TextInput
                  ref={textInputReference}
                  allowFontScaling={false}
                  underlineColorAndroid="transparent"
                  placeholderTextColor={COLORS.NEUTRAL_400}
                  onFocus={onFoc}
                  onBlur={onBlur}
                  autoCapitalize={'none'}
                  selectionColor={'#888888'}
                  autoCorrect={false}
                  multiline={true}
                  onContentSizeChange={e => {
                    setComponentHeight(e.nativeEvent.contentSize.height + 8);
                  }}
                  clearTextOnFocus={false}
                  secureTextEntry={secure}
                  onChangeText={text => onChange && onChange(text)}
                  value={props.value}
                  editable={!disabled}
                  {...props}
                  style={StyleSheet.flatten([
                    styles.stylesText,
                    inputStyle && inputStyle,
                    {height: componentHeight},
                  ])}
                />
              )}
            </Box>
            {type === 'password' && (
              <Box margin={[0, 15, 0, 0]} activePress onPress={toggle}>
                <Icon
                  name={secure ? 'eye' : 'eye-closed'}
                  size={24}
                  color={COLORS.BLUE_GREY_700}
                />
              </Box>
            )}
            {suffix}

            {allowClear && (
              <Box activePress onPress={onClear}>
                <ImageIcon name="x" size={24} color={COLORS.BLUE_GREY_700} />
              </Box>
            )}
          </Box>

          {meta?.errors && !dontShowErrorMessage && (
            <Box margin={[5, 0, 0, 0]}>
              <Typography
                margin={[0, 0, 5, 0]}
                type="Caption - Regular"
                fontSize={14}
                color="RED_100">
                {meta?.errors}
              </Typography>
            </Box>
          )}
        </View>
      </>
    );
  };

export default Input;

const styles = StyleSheet.create({
  defaultInput: {
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: COLORS.NEUTRAL_400,
  },
  stylesText: {
    flexWrap: 'wrap',
    fontSize: 16,
    color: COLORS.NEUTRAL_700,
    fontFamily: FontFamilyNames.MONTSERRAT_REGULAR,
    lineHeight: 20,
  },
});
