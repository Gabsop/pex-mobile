import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface FAQLogoProps {
  style?: StyleProp<ViewStyle>;
}

export function FAQLogo({ style }: FAQLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M11.997 19.995a7.997 7.997 0 1 0 0-15.995 7.997 7.997 0 0 0 0 15.995Z"/>
    <path fill="#000" d="M11.996 17.087a.727.727 0 1 0 0-1.454.727.727 0 0 0 0 1.454Z"/>
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10.493 8.51c1-1.512 3.243-1.029 3.88 0 .636 1.03.197 2.228-.894 3.152-1.09.924-1.484 1.425-1.484 2.152"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
