import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const Noti: React.FC<SvgProps> = ({ color = "#292D32" }) => {
  return (
    <Svg width={18} height={22} viewBox="0 0 18 22" fill="none">
      <Path
        d="M9 22a2 2 0 002-2H7a2 2 0 002 2zm-8-4h16a1 1 0 00.707-1.707L16 14.586V9a7.006 7.006 0 00-6-6.92V1a1 1 0 00-2 0v1.08A7.006 7.006 0 002 9v5.586L.293 16.293A1 1 0 001 18zm2.707-2.293A1 1 0 004 15V9a5 5 0 1110 0v6a1 1 0 00.293.707l.293.293H3.414l.293-.293z"
        fill={color}
      />
    </Svg>
  );
};

export { Noti };
