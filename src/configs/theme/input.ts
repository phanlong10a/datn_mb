import { COLORS } from "@src/configs/theme/colors";
import { ViewStyle } from "react-native";
interface IInputConfig {
  default: ViewStyle;
}

export type inputKeys = keyof typeof inputConfigs;

const inputConfigs: IInputConfig = {
  default: {
    height: 48,
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 15,
    alignItems: "center",
    flexDirection: "row",
    borderColor: COLORS.NEUTRAL_300,
  },
};

export default inputConfigs;
