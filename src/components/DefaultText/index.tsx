import Box from "@src/components/Box";
import Icon from "@src/components/Icon";
import { IconType } from "@src/components/Icon/type";
import Typography from "@src/components/Typography";
import COLORS from "@src/configs/theme/colors";
import { TypoKeys } from "@src/configs/theme/typography";
import React from "react";
import { IconSvg } from "../IconSvg";
import { IconSvgType } from "../IconSvg/type";

interface Props {
  icon?: IconSvgType;
  label?: string;
  color?: COLORS;
  type?: TypoKeys;
}
const DefaultText: React.FC<Props> = ({
  icon = "apple",
  label,
  color = COLORS.GREEN_600,
}) => {
  return (
    <Box
      flex={1}
      align="center"
      flexDirection="row"
      margin={[0, 10, 22, 10]}
      padding={[0, 10, 0, 5]}
    >
      <IconSvg
        name={icon}
        size={icon === "privacy_tip" ? 25 : 15}
        color={color}
      />

      <Typography
        margin={[0, 20, 0, 12]}
        type={"Body3 - Regular"}
        color={"NEUTRAL_500"}
      >
        {label}
      </Typography>
    </Box>
  );
};
export default DefaultText;
