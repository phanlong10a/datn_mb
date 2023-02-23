import Box from '@src/components/Box';
import Icon from '@src/components/Icon';
import Typography from '@src/components/Typography';
import theme from '@src/configs/theme';
import React, { useMemo } from 'react';
import { Image, Modal, StyleSheet, ViewStyle } from 'react-native';
import SelectItem from './SelectItem';
import {
  borderError,
  borderInput,
  defaultContainer,
  defaultInput,
  imageStyle,
} from './styles';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  ScrollView,
} from 'react-native-gesture-handler';
import { bottomSheet, bottomSheetHeader } from './styles';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { SelectProps } from './types';
import { deviceHeight } from '@src/configs/theme/common';
import COLORS from '@src/configs/theme/colors';
import { IconSvg } from '@src/components/IconSvg';

interface SelectState {
  visible: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  required,
  options,
  margin,
  padding,
  type,
  placeholder,
  preicon,
  suficon,
  meta,
  // imageApi,
  onPress,
  camera,
  ...props
}) => {
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

  const [state, setState] = React.useState<SelectState>({ visible: false });

  const SPRING_CONFIG = {
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
  };
  let limitLowPoint = 0;
  if (options.length >= 3) {
    limitLowPoint = deviceHeight / 1.5;
  }
  if (options.length <= 2) {
    limitLowPoint = deviceHeight / 1.3;
  }
  const top = useSharedValue(limitLowPoint);

  const sheetStyle = useAnimatedStyle(() => ({
    top: withSpring(top.value, SPRING_CONFIG),
  }));

  type AnimatedContext = {
    prevTop: number;
  };

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedContext
  >({
    onStart: (_, context) => {
      context.prevTop = top.value;
    },
    onActive: (event, context) => {
      const topPosition = context.prevTop + event.translationY;
      if (topPosition > limitLowPoint) {
        top.value = limitLowPoint;
      } else if (topPosition <= 0) {
        top.value = 0;
      } else if (topPosition > 0 && topPosition <= limitLowPoint) {
        top.value = topPosition;
      }
    },
    onEnd: () => {},
  });
  return (
    <>
      <Box style={StyleSheet.flatten([combinedStyle])}>
        <Box flexDirection="row">
          {label && (
            <Typography
              margin={[0, 0, 5, 0]}
              type="Caption - Regular"
              color="NEUTRAL_400"
            >
              {label}
            </Typography>
          )}
          {required ? (
            <Typography type="Body2 - Medium" color="RED_500">
              {' '}
              *
            </Typography>
          ) : null}
        </Box>
        <Box
          style={[
            defaultInput,
            props.value && borderInput,
            props.style && props.style,
            meta && meta.errors && meta.errors[0] && borderError,
          ]}
          activePress
          onPress={() => setState({ visible: true })}
        >
          {type === 'nothing' ? null : type !== 'imageSelf' ? (
            <Icon name="image_upload" size={25} color={COLORS.BLUE_GREY_700} />
          ) : (
            <Box align="center">
              <IconSvg size={100} name="selfie" />
              <Box margin={[15, 0, 0, 0]}>
                <Icon name="camera_plus" size={40} color={COLORS.NEUTRAL_500} />
              </Box>
            </Box>
          )}

          {props.value && !camera ? (
            <>
              {type ? (
                <Image source={{ uri: props.value.uri }} style={imageStyle} />
              ) : (
                <Typography type="Body2 - Regular" color="NEUTRAL_400">
                  {props.value.label || props.value}
                </Typography>
              )}
            </>
          ) : (
            <>
              {!type && (
                <Typography type="Body1 - Regular" color={'NEUTRAL_400'}>
                  {placeholder}
                </Typography>
              )}
              {type && camera && (
                <>
                  <Image
                    source={{
                      uri: `file://${camera}`,
                    }}
                    // resizeMode="stretch"
                    style={imageStyle}
                  />
                </>
              )}
              {type !== 'imageSelf' && !camera && (
                <Typography type="Body2 - Medium" color="NEUTRAL_400">
                  {placeholder}
                </Typography>
              )}
            </>
          )}
          {suficon && suficon}
        </Box>

        {meta?.errors && (
          <Box margin={[5, 0, 0, 0]}>
            <Typography
              margin={[0, 0, 5, 0]}
              type="Caption - Regular"
              color="RED_500"
            >
              {meta?.errors}
            </Typography>
          </Box>
        )}

        <Modal visible={state.visible} transparent>
          <Box
            style={defaultContainer}
            activePress
            onPress={() => setState({ visible: false })}
          />
          <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={[bottomSheet, sheetStyle]}>
              <Box style={bottomSheetHeader}>
                <Box
                  height={5}
                  width={80}
                  background={'BG_300'}
                  borderRadius={50}
                />
              </Box>
              <ScrollView showsVerticalScrollIndicator={false}>
                {(options || []).map((i, index) => {
                  return (
                    <Box key={`key_${index}`}>
                      <SelectItem
                        // imageApi={imageApi}
                        onChange={props.onChange}
                        option={i}
                        icon={preicon}
                        type={type}
                        setState={setState}
                        onPress={onPress}
                        value={props.value?.value}
                      />
                      {index + 1 !== options.length && (
                        <Box height={1} background={'BG_300'} />
                      )}
                    </Box>
                  );
                })}
              </ScrollView>
            </Animated.View>
          </PanGestureHandler>
        </Modal>
      </Box>
    </>
  );
};

export default Select;
