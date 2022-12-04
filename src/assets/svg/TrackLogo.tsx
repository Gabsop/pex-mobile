import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface TrackLogoProps {
  style?: StyleProp<ViewStyle>;
}

export function TrackLogo({ style }: TrackLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">
    <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.44 10.224c1.752 0 2.523 1.89 1.752 3.08-.701.98-1.753 1.68-1.753 1.68s-1.051-.7-1.752-1.68c-.771-1.19 0-3.08 1.752-3.08ZM5.5 16.594l2.243.49.56-2.24"/>
    <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.743 16.944c-2.383-2.52-2.383-6.58.07-9.03a6.578 6.578 0 0 1 5.748-1.82M19.378 8.334l-2.242-.49-.561 2.24"/>
    <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.136 7.984a6.395 6.395 0 0 1-.07 9.03 6.578 6.578 0 0 1-5.748 1.82"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
