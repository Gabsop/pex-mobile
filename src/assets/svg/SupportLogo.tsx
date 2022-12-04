import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface SupportLogoProps {
  style?: StyleProp<ViewStyle>;
}

export function SupportLogo({ style }: SupportLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.56 12.322c-1.2.64-1.841 2.08-1.44 3.601.32 1.12 1.28 2 2.4 2.24.16 0 .32.08.48.08.8 0 1.44-.8 1.28-1.6l-.8-3.52c-.24-.88-1.2-1.281-1.92-.8ZM18.443 12.322c1.2.64 1.84 2.08 1.44 3.601-.32 1.12-1.28 2-2.4 2.24-.16 0-.32.08-.48.08-.8 0-1.44-.8-1.28-1.6l.8-3.52c.24-.88 1.2-1.281 1.92-.8Z"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.763 12.562v-1.76A6.796 6.796 0 0 0 11.961 4a6.796 6.796 0 0 0-6.802 6.802v1.68"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M11.561 20.644c2.16 0 3.681.48 5.201-2.4"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
