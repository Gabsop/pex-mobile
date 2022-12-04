import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface UploadLogoProps {
  style?: StyleProp<ViewStyle>;
}

export function UploadLogo({ style }: UploadLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.618 8.756h-.933A3.685 3.685 0 0 0 3 12.441v4.875A3.685 3.685 0 0 0 6.685 21h11.13a3.685 3.685 0 0 0 3.685-3.684v-4.885a3.675 3.675 0 0 0-3.674-3.675h-.943M12.25 1.963v12.04M9.335 4.89l2.915-2.927 2.916 2.928"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
