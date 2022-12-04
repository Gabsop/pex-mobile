import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface PhoneLogoProps {
  style?: StyleProp<ViewStyle>;
}

export function PhoneLogo({ style }: PhoneLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path stroke="#B8B5C3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.556 12.447c3.78 3.779 4.637-.592 7.043 1.812 2.32 2.32 3.653 2.784.714 5.722-.368.296-2.707 3.856-10.928-4.362C.165 7.399 3.722 5.059 4.017 4.69c2.947-2.946 3.403-1.605 5.723.714 2.406 2.405-1.963 3.265 1.816 7.043Z" clip-rule="evenodd"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
