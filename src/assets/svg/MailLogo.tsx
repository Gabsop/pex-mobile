import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface MailLogoProps {
  style?: StyleProp<ViewStyle>;
}

export function MailLogo({ style }: MailLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path stroke="#B8B5C3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.903 8.851-4.444 3.613c-.84.666-2.02.666-2.86 0L6.12 8.851"/>
    <path stroke="#B8B5C3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.909 21C19.95 21.008 22 18.51 22 15.438V8.57C22 5.499 19.95 3 16.909 3H7.09C4.05 3 2 5.499 2 8.57v6.868C2 18.51 4.05 21.008 7.091 21h9.818Z" clip-rule="evenodd"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
