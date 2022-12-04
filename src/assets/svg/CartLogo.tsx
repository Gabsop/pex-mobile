import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface CartLogoProps {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

export function CartLogo({ style, color }: CartLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path fill="${
      color ? color : "#000"
    }" fill-rule="evenodd" d="M7.543 19.952a1.296 1.296 0 0 1 0 2.589 1.296 1.296 0 0 1 0-2.59Zm11.28 0c.716 0 1.297.58 1.297 1.294a1.296 1.296 0 1 1-1.296-1.294ZM3.269 3.009l2.08.36c.335.06.59.337.619.677l.235 2.801h.874l.423.001h1.604l.38.001h1.77l.33.001h1.242l.291.001h1.092l.255.001h.952l.222.001h.625l.196.001h.725l.167.001h.611l.14.001h.389l.12.001h.433l.097.001h.267l.08.001h.286l.063.001h.168l.05.001h.169l.036.001h.092l.026.001h.067l.018.001h.046l.012.001h.028l.008.001h.02l.004.001.013.001a2.083 2.083 0 0 1 1.38.82c.335.447.475.998.395 1.55l-.95 6.558a2.562 2.562 0 0 1-2.522 2.19H7.975a2.562 2.562 0 0 1-2.54-2.344L4.52 4.748l-1.507-.26A.752.752 0 0 1 2.4 3.62a.76.76 0 0 1 .867-.61Zm3.607 5.339h-.547l.603 7.171c.044.552.495.966 1.046.966h10.917c.52 0 .966-.388 1.04-.903l.95-6.559a.587.587 0 0 0-.112-.438.58.58 0 0 0-.388-.23h-.16l-.075.001h-.567l-.149.001H17.874l-1.52-.001H15.218l-.296-.001-.912-.001h-.937l-.317-.001-.958-.001h-.96l-.32-.001h-.635l-.316-.001h-.93l-.304-.001-1.176-.001h-.282Zm10.413 2.196a.75.75 0 0 1 0 1.5h-2.772a.75.75 0 1 1 0-1.5h2.772Z" clip-rule="evenodd"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
