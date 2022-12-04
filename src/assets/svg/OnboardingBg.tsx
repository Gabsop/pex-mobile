import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface onBoardingBgProps {
  style?: StyleProp<ViewStyle>;
}

export function OnboardingBg({ style }: onBoardingBgProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="283" height="426" fill="none">
    <path stroke="#fff" stroke-width="5" d="m159.366 398.825-.007.01-.006.01c-10.825 16.472-26.176 24.655-46.349 24.655H4.87l161.846-225.598 1.052-1.466-1.06-1.46L14.599-14.5h108.116c14.193 0 25.561 5.997 34.258 18.242l109.738 165.855c9.434 15.112 13.789 25.305 13.789 35.232 0 9.925-4.351 20.055-13.664 35.044l-30.103 44.105-.169-.262-2.118 3.159-75.08 111.95Z"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="283px" height="443px" />
  );

  return <SvgImage />;
}
