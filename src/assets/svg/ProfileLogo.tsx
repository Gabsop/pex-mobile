import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface ProfileLogoProps {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

export function ProfileLogo({ color, style }: ProfileLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">
    <path stroke="${
      color ? color : "#000"
    }" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.84 20.342c0-2.23 1.76-5.007 6.83-5.007s6.83 2.757 6.83 4.988M12.67 12.147a4.363 4.363 0 1 0 0-8.726 4.363 4.363 0 0 0 0 8.726Z"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
