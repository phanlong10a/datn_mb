import { useNavigation } from "@react-navigation/native";
import COLORS from "@src/configs/theme/colors";
import React from "react";
import Box from "../Box";
import Icon from "../Icon";
import { IconSvg } from "../IconSvg";

interface defaultPriceProps {
  marginBottom?: number;
  color?: COLORS;
  onPress?: () => any;
}

const HeaderLeftBack: React.FC<defaultPriceProps> = ({
  marginBottom = 0,
  color,
  onPress,
}) => {
  const navigation = useNavigation();

  return (
    <Box
      padding={[0, 0, marginBottom, 30]}
      activePress
      onPress={onPress ? onPress : navigation.goBack}
    >
      <IconSvg size={30} name="left_arrow" color={COLORS.WHITE} />
    </Box>
  );
};

export default HeaderLeftBack;
