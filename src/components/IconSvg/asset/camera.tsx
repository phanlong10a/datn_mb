import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const Camera: React.FC<SvgProps> = ({ color = "#292D32" }) => {
  return (
    <Svg width={26} height={18} viewBox="0 0 26 18" fill="none">
      <Path
        d="M24.34 2.417l-5.793 3.317v-2.97c0-.975-.742-1.764-1.66-1.764H2.66C1.743 1 1 1.79 1 2.763v12.474C1 16.21 1.743 17 2.66 17h14.228c.917 0 1.66-.79 1.66-1.763v-2.971l5.792 3.317c.3.17.66-.058.66-.42V2.837c.003-.361-.36-.592-.66-.419z"
        stroke={color}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { Camera };
