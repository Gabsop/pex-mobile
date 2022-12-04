import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface BellLogoProps {
  style?: StyleProp<ViewStyle>;
}

export function BellLogo({ style }: BellLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.083 17.78c5.253 0 7.682-.674 7.917-3.379 0-2.702-1.694-2.528-1.694-5.844 0-2.59-2.455-5.537-6.223-5.537-3.767 0-6.222 2.947-6.222 5.537 0 3.316-1.694 3.142-1.694 5.844.235 2.715 2.665 3.379 7.916 3.379Z" clip-rule="evenodd"/>
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.308 20.583c-1.27 1.41-3.252 1.427-4.535 0"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
