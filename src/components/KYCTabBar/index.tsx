import COLORS from "@src/configs/theme/colors";
import { deviceWidth } from "@src/configs/theme/common";
import React from "react";
import { StyleSheet } from "react-native";
import Box from "../Box";
import Button from "../Button";
import Typography from "../Typography";

const KYCTabBar: React.FC<any> = (props) => {
  const state = props.state;
  const descriptors = props.descriptors;
  const navigation = props.navigation;
  return (
    <Box
      padding={[24, 0, 0, 0]}
      flexDirection="row"
      background="NEUTRAL_100"
      justify="center"
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <>
            {isFocused ? (
              <Button
                key={`key-${index}`}
                gradient
                label={label}
                onPress={onPress}
                colors={["#79D3F2", "#1291D2"]}
                style={[
                  styles.button,
                  index === 0 ? styles.border1 : styles.border2,
                ]}
              ></Button>
            ) : (
              <Box
                key={`key-${index}`}
                activePress
                align="center"
                onPress={onPress}
                width={deviceWidth / 2.2}
                background="NEUTRAL_300"
                justify="center"
                style={index === 0 ? styles.border1 : styles.border2}
              >
                <Typography
                  type="Body1 - Medium"
                  color={isFocused ? "BRAND" : "BG_600"}
                >
                  {label}
                </Typography>
              </Box>
            )}
          </>
        );
      })}
    </Box>
  );
};

export default KYCTabBar;

const styles = StyleSheet.create({
  button: {
    height: 29,

    width: deviceWidth / 2.2,
    alignItems: "center",
    flexDirection: "row",

    borderColor: COLORS.NEUTRAL_300,
  },
  border1: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 28,
    borderBottomLeftRadius: 28,
  },
  border2: {
    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
