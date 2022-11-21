import Box from "@src/components/Box";
import Icon from "@src/components/Icon";
import { IconType } from "@src/components/Icon/type";
import Typography from "@src/components/Typography";
import COLORS from "@src/configs/theme/colors";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { IconSvg } from "../IconSvg";

interface CardProps {
  imageName?: string;
  belowIcon?: IconType;
  color?: COLORS;
  label?: string;
}
const cardWith = 77;
const Card: React.FC<CardProps> = ({
  imageName,
  belowIcon = "check_full_circle",
  label,
  color = COLORS.GREEN_500,
}) => {
  return (
    <Box width={cardWith} align="center">
      <Box style={imageName !== "Second" ? styles.boxStyle : styles.boxStyle2}>
        {/* {imageName === "First" && (
          <Image
            source={require("../../../assets/ID_card.png")}
            style={styles.image}
          />
        )}
        {imageName === "Second" && (
          <Image
            source={require("../../../assets/ID_card1.png")}
            style={styles.image2}
          />
        )}
        {imageName === "Third" && (
          <Image
            source={require("../../../assets/ID_card2.png")}
            style={styles.image}
          />
        )}

        {imageName === "Fourth" && (
          <Image
            source={require("../../../assets/ID_card3.png")}
            style={styles.image}
          />
        )} */}

        <Box style={styles.iconStyle}>
          <IconSvg
            name={imageName === "First" ? "green_check" : "fail"}
            size={20}
          />
        </Box>
      </Box>

      <Typography
        margin={[12, 0, 0, 0]}
        type="Caption - Regular"
        textAlign="center"
        color="NEUTRAL_500"
      >
        {label}
      </Typography>
    </Box>
  );
};
export default Card;

const styles = StyleSheet.create({
  boxStyle: {
    height: 56,
    width: cardWith,
    backgroundColor: COLORS.GRAY,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  boxStyle2: {
    height: 56,
    width: cardWith,
    backgroundColor: COLORS.GRAY,
    borderRadius: 12,
  },
  iconStyle: {
    position: "absolute",
    bottom: -8,
    left: (cardWith - 20) / 2,
    zIndex: 100,
  },
  image: {
    height: 33,
    width: cardWith,
    resizeMode: "contain",
  },
  image2: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 33,
    width: 57,
  },
});
