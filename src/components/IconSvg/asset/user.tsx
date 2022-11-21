import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const User: React.FC<SvgProps> = ({ color = "#292D32" }) => {
  return (
    <Svg width={20} height={22} viewBox="0 0 20 22" fill="none">
      <Path
        d="M13.646 11.71a6 6 0 10-7.42 0 10 10 0 00-6.22 8.18 1.006 1.006 0 002 .22 8 8 0 0115.9 0 1 1 0 001 .89h.11a1 1 0 00.88-1.1 10 10 0 00-6.25-8.19zM9.936 11a4 4 0 110-8 4 4 0 010 8z"
        fill={color}
      />
    </Svg>
  );
};

export { User };
