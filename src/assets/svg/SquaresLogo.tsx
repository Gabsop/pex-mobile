import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface SquaresLogoProps {
  style?: StyleProp<ViewStyle>;
}

export function SquaresLogo({ style }: SquaresLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 6.5C3.5 3.875 3.528 3 7 3s3.5.875 3.5 3.5S10.511 10 7 10s-3.5-.875-3.5-3.5ZM14.5 6.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5 3.5-3.5-.875-3.5-3.5ZM3.5 17.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5S10.511 21 7 21s-3.5-.875-3.5-3.5ZM14.5 17.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5 3.5-3.5-.875-3.5-3.5Z" clip-rule="evenodd"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
