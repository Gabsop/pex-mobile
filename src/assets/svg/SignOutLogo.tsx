import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface SignOutLogoProps {
  style?: StyleProp<ViewStyle>;
}

export function SignOutLogo({ style }: SignOutLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path stroke="#EA5B5B" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.203 7.848v-.777A3.071 3.071 0 0 0 12.133 4H8.07A3.07 3.07 0 0 0 5 7.07v9.276a3.07 3.07 0 0 0 3.07 3.07h4.07c1.692 0 3.063-1.37 3.063-3.061v-.786M20.864 11.708H10.83M18.424 9.28l2.44 2.429-2.44 2.43"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
