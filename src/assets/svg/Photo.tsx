import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface PhotoProps {
  style?: StyleProp<ViewStyle>;
}

export function Photo({ style }: PhotoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="126" height="122" fill="none">
    <rect width="120" height="120" fill="#F9F9F9" rx="60"/>
      <path stroke="#CCC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M48.9 73.903c0-3.717 2.933-8.345 11.383-8.345 8.451 0 11.384 4.595 11.384 8.313M60.283 60.245a7.271 7.271 0 1 0 0-14.543 7.271 7.271 0 0 0 0 14.543Z"/>
      <path fill="#F09200" stroke="#fff" stroke-width="4" d="M103 120c11.598 0 21-9.402 21-21s-9.402-21-21-21-21 9.402-21 21 9.402 21 21 21Z"/>
      <path fill="#fff" fill-rule="evenodd" d="M107.832 93.877a.203.203 0 0 0 .178.106 3.882 3.882 0 0 1 3.876 3.872v5.274A3.882 3.882 0 0 1 108.01 107H97.984a3.877 3.877 0 0 1-3.876-3.871v-5.274a3.877 3.877 0 0 1 3.876-3.872c.07 0 .142-.035.169-.106l.053-.107.094-.198c.227-.479.479-1.009.635-1.32.409-.8 1.102-1.243 1.964-1.252h4.187c.862.009 1.564.453 1.973 1.252.14.28.353.73.559 1.164l.126.266.088.195Zm-.648 3.41c0 .444.356.8.8.8a.804.804 0 0 0 .809-.8.804.804 0 1 0-1.609 0Zm-5.724 1.375a2.15 2.15 0 0 1 1.537-.64c.578 0 1.12.222 1.529.631.409.408.631.95.631 1.527a2.166 2.166 0 0 1-2.16 2.158c-.577 0-1.12-.222-1.528-.631a2.14 2.14 0 0 1-.632-1.527v-.009c-.008-.56.214-1.1.623-1.51Zm4 3.987a3.495 3.495 0 0 1-4.934 0 3.487 3.487 0 0 1-1.022-2.469 3.436 3.436 0 0 1 1.013-2.46 3.487 3.487 0 0 1 2.48-1.029c.934 0 1.814.364 2.471 1.021a3.5 3.5 0 0 1 1.023 2.468 3.521 3.521 0 0 1-1.031 2.469Z" clip-rule="evenodd"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="130px" height="130px" />
  );

  return <SvgImage />;
}
