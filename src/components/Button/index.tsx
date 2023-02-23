import theme from "@src/configs/theme";
import React, { useMemo } from "react";
import { ActivityIndicator, StyleSheet, ViewStyle } from "react-native";
import Box from "../Box";
import Typography from "../Typography";
import { ButtonProps } from "./types";
import styles from "./styles";
import COLORS from "@src/configs/theme/colors";
import LinearGradient from "react-native-linear-gradient";

const Button: React.FC<ButtonProps> = ({
  gradient,
  colors,
  type,
  flexDirection,
  justify,
  align,
  alignSelf,
  flex,
  background,
  label,
  borderRadius,
  height,
  width,
  margin,
  textType,
  textColor,
  padding,
  prefix,
  suffix,

  ...props
}) => {
  let defaultType = useMemo(() => {
    if (type) {
      return type;
    }
    return "primary";
  }, [type]);

  const combinedStyle: ViewStyle[] = useMemo(() => {
    const styleObject: any = {
      type: defaultType,
      flexDirection,
      justify,
      align,
      alignSelf,
      flex,
      background,
      borderRadius,
      height,
      width,
      margin,
      padding,
    };
    const style: ViewStyle[] = Object.keys(styleObject)
      .map((key: any) => {
        if (key === "type") {
          return styles[defaultType];
        }
        if (styleObject[key]) {
          if (["margin", "padding", "borderRadius"].includes(key)) {
            const normalizeOptions = theme.utils.styles.normalizeOptions(
              styleObject[key]
            );
            return theme.utils.styles[key](normalizeOptions);
          }

          return theme.utils.styles[key](styleObject[key]);
        }
      })
      .filter((e) => e);
    return style;
  }, [
    defaultType,
    align,
    alignSelf,
    background,
    flex,
    flexDirection,
    height,
    justify,
    borderRadius,
    margin,
    padding,
    width,
  ]);

  const text = useMemo(() => {
    if (defaultType === "primary" || defaultType === "ghost") {
      return "Body1 - Medium";
    }
    return "Body1 - Medium";
  }, [defaultType]);

  if (gradient) {
    return (
      <Box activePress={props.loading ? false : true} {...props}>
        <LinearGradient
          colors={colors}
          style={StyleSheet.flatten([combinedStyle, props.style])}
        >
          <Box flexDirection="row" align="center">
            {prefix}
            <Box flex={suffix ? 1 : 0}>
              {props.loading && (
                <ActivityIndicator size="small" color={COLORS.WHITE} />
              )}

              {!props.loading && (
                <Typography
                  type={textType ? textType : text}
                  color={textColor ? textColor : "WHITE"}
                  numberOfLines={1}
                  lineHeight={20}
                  fontSize={16}
                  style={{ fontWeight: "500" }}
                >
                  {label}
                </Typography>
              )}
            </Box>
            {suffix}
          </Box>
        </LinearGradient>
      </Box>
    );
  }

  return (
    <Box
      flexDirection="row"
      style={StyleSheet.flatten([combinedStyle, props.style])}
      activePress={props.loading ? false : true}
      {...props}
    >
      {prefix}
      <Box margin={[0, 10, 0, 10]}>
        {props.loading && (
          <ActivityIndicator size="small" color={COLORS.WHITE} />
        )}

        {!props.loading && (
          <Typography
            type={textType ? textType : text}
            color={textColor ? textColor : "WHITE"}
            numberOfLines={1}
            fontSize={16}
            style={{ fontWeight: "500" }}
          >
            {label}
          </Typography>
        )}
      </Box>
      {suffix}
    </Box>
  );
};

export default Button;
