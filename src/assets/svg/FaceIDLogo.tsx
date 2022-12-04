import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface FaceIDLogoProps {
  style?: StyleProp<ViewStyle>;
}

export function FaceIDLogo({ style }: FaceIDLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.008 8.994V7.482a3.733 3.733 0 0 0-3.732-3.732H16.07M3.75 8.994V7.482A3.733 3.733 0 0 1 7.483 3.75h1.236M3.75 15.765v1.512a3.733 3.733 0 0 0 3.733 3.733h1.206M21.01 15.765v1.512a3.731 3.731 0 0 1-3.732 3.733h-1.236M9.083 15.498c2.219 1.824 4.418 1.86 6.595 0M15.677 8.875v.587M9.083 8.875v.587M12.828 10.136v2.627l-.877.535"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
