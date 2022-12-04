import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface BookmarkLogo2Props {
  style?: StyleProp<ViewStyle>;
}

export function BookmarkLogo2({ style }: BookmarkLogo2Props) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M11.35 9.143h4.004M8.438 9.143h.273M11.35 14.057h4.004M8.438 14.057h.273M17.447 19.608l-.728-.364a1.775 1.775 0 0 0-1.365 0l-2.184.819c-.82.364-1.73.364-2.64 0l-2.092-.819c-.455-.182-1.001-.182-1.365 0l-.728.364c-.728.364-1.638-.182-1.638-1.092V6.686c0-2.366 1.274-3.822 3.64-3.822h7.007c2.366 0 3.64 1.456 3.64 3.822v11.83c.09.819-.82 1.456-1.547 1.092Z"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
