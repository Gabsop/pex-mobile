import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface PadLockLogoProps {
  style?: StyleProp<ViewStyle>;
}

export function PadlockLogo({ style }: PadLockLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path stroke="#B8B5C3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.423 9.448V7.3a4.552 4.552 0 0 0-4.55-4.551 4.55 4.55 0 0 0-4.57 4.53v2.168"/>
    <path stroke="#B8B5C3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.683 21.25h-7.64a3.792 3.792 0 0 1-3.793-3.792v-4.29a3.792 3.792 0 0 1 3.792-3.791h7.641a3.792 3.792 0 0 1 3.792 3.792v4.289a3.792 3.792 0 0 1-3.792 3.792Z" clip-rule="evenodd"/>
    <path stroke="#B8B5C3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.863 14.203v2.22"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
