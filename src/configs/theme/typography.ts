import { TextStyle } from "react-native";
import COLORS from "./colors";
interface ITextConfigs {
  "Display - Bold": TextStyle;
  "Display - Regular": TextStyle;
  "Headline1 - Bold": TextStyle;
  "Headline1 - Regular": TextStyle;
  "Headline2 - Bold": TextStyle;
  "Headline2 - Regular": TextStyle;
  "Title - Semibold": TextStyle;
  "Title - Regular": TextStyle;
  "Body1 - Medium": TextStyle;
  "Body1 - Regular": TextStyle;
  "Body2 - Medium": TextStyle;
  "Body2 - Regular": TextStyle;
  "Body3 - Medium": TextStyle;
  "Body3 - Regular": TextStyle;
  "Caption - Semibold": TextStyle;
  "Caption - Regular": TextStyle;
}

export enum FontFamilyNames {
  MONTSERRAT_BOLD = "Montserrat-Bold",
  MONTSERRAT_REGULAR = "Montserrat-Regular",
  MONTSERRAT_SEMI_BOLD = "Montserrat-SemiBold",
  MONTSERRAT_MEDIUM = "Montserrat-Medium",
}

export type TypoKeys = keyof typeof TextConfigs;

const TextConfigs: ITextConfigs = {
  "Display - Bold": {
    fontSize: 26,
    lineHeight: 36,

    fontFamily: FontFamilyNames.MONTSERRAT_BOLD,
    color: COLORS.BG_700,
  },
  "Display - Regular": {
    fontSize: 26,
    lineHeight: 36,

    fontFamily: FontFamilyNames.MONTSERRAT_REGULAR,
    color: COLORS.BG_700,
  },
  "Headline1 - Bold": {
    fontSize: 22,
    lineHeight: 28,

    fontFamily: FontFamilyNames.MONTSERRAT_SEMI_BOLD,
    color: COLORS.BG_700,
  },
  "Headline1 - Regular": {
    fontSize: 22,
    lineHeight: 30,

    fontFamily: FontFamilyNames.MONTSERRAT_REGULAR,
    color: COLORS.BG_700,
  },
  "Headline2 - Bold": {
    fontSize: 20,
    lineHeight: 28,

    fontFamily: FontFamilyNames.MONTSERRAT_SEMI_BOLD,
    color: COLORS.BG_700,
  },
  "Headline2 - Regular": {
    fontSize: 20,
    lineHeight: 28,

    fontFamily: FontFamilyNames.MONTSERRAT_REGULAR,
    color: COLORS.BG_700,
  },
  "Title - Semibold": {
    fontSize: 18,
    lineHeight: 22,

    fontFamily: FontFamilyNames.MONTSERRAT_SEMI_BOLD,
    color: COLORS.BG_700,
  },
  "Title - Regular": {
    fontSize: 18,
    lineHeight: 22,

    fontFamily: FontFamilyNames.MONTSERRAT_REGULAR,
    color: COLORS.BG_700,
  },
  "Body1 - Regular": {
    fontSize: 16,
    lineHeight: 20,

    fontFamily: FontFamilyNames.MONTSERRAT_REGULAR,
    color: COLORS.BG_700,
  },
  "Body1 - Medium": {
    fontSize: 16,
    lineHeight: 20,

    fontFamily: FontFamilyNames.MONTSERRAT_MEDIUM,
    color: COLORS.BG_700,
  },
  "Body2 - Regular": {
    fontSize: 14,
    lineHeight: 18,

    fontFamily: FontFamilyNames.MONTSERRAT_REGULAR,
    color: COLORS.BG_700,
  },
  "Body2 - Medium": {
    fontSize: 14,
    lineHeight: 18,

    fontFamily: FontFamilyNames.MONTSERRAT_MEDIUM,
    color: COLORS.BG_700,
  },
  "Body3 - Regular": {
    fontSize: 12,
    lineHeight: 15,

    fontFamily: FontFamilyNames.MONTSERRAT_REGULAR,
    color: COLORS.BG_700,
  },
  "Body3 - Medium": {
    fontSize: 12,
    lineHeight: 15,

    fontFamily: FontFamilyNames.MONTSERRAT_MEDIUM,
    color: COLORS.BG_700,
  },
  "Caption - Semibold": {
    fontSize: 10,
    lineHeight: 16,

    fontFamily: FontFamilyNames.MONTSERRAT_SEMI_BOLD,
    color: COLORS.BG_700,
  },
  "Caption - Regular": {
    fontSize: 10,
    lineHeight: 16,

    fontFamily: FontFamilyNames.MONTSERRAT_REGULAR,
    color: COLORS.BG_700,
  },
};

export default TextConfigs;
