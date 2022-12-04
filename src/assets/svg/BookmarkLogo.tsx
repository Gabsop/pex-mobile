import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface BookmarkLogoProps {
  style?: StyleProp<ViewStyle>;
}

export function BookmarkLogo({ style }: BookmarkLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.239 6.154c0-2.751-1.88-3.854-4.589-3.854H9.291C6.667 2.3 4.7 3.328 4.7 5.97v14.724a.95.95 0 0 0 1.414.828l6.381-3.58 6.327 3.574a.95.95 0 0 0 1.417-.827V6.154Z" clip-rule="evenodd"/>
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.771 9.028h7.319"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
