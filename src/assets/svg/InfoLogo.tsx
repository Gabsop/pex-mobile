import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface InfoLogoProps {
  style?: StyleProp<ViewStyle>;
}

export function InfoLogo({ style }: InfoLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.584 3H7.915C4.894 3 3 5.139 3 8.166v8.168C3 19.361 4.885 21.5 7.915 21.5h8.668c3.031 0 4.917-2.139 4.917-5.166V8.166C21.5 5.139 19.614 3 16.584 3Z" clip-rule="evenodd"/>
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.245 16.25v-4M12.24 8.454h.01"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
