import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import Box from "../Box";
import { ContainerProps } from "./type";

const background = require("../../../assets/dummy/background.png");

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box flex={1}>
      <FastImage source={background} resizeMode="cover" style={styles.image}>
        {children}
      </FastImage>
    </Box>
  );
};

export { Container };

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
