import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface SaleLogoProps {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

export function SaleLogo({ style, color }: SaleLogoProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
    <path stroke="${
      color ? color : "#000"
    }" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M2.6 4.167h14.668M2.6 15.5h14.668"/>
    <path fill="${
      color ? color : "#000"
    }" d="M5.532 10.87c0 .42-.151.75-.453.992-.303.242-.723.363-1.262.363-.497 0-.936-.094-1.318-.28v-.917c.43.191.924.382 1.394.382.368 0 .672-.122.672-.494 0-.203-.133-.336-.301-.448-.389-.26-.871-.379-1.243-.7-.668-.58-.574-1.53-.049-1.973.474-.4 1.267-.42 1.849-.267.219.057.449.138.688.242l-.318.767a4.726 4.726 0 0 0-.616-.214c-.276-.068-.694-.116-.908.07-.199.174-.239.52.104.756.088.06.296.17.625.326.435.208.733.417.894.626.161.208.242.465.242.768ZM9.632 12.162l-.337-1.107H7.599l-.337 1.107H6.199L7.84 7.491h1.206l1.649 4.671H9.632Zm-.572-1.935c-.08-.26-.555-1.76-.611-2.014-.07.271-.271.943-.602 2.014H9.06ZM11.363 12.161V7.508h.986v3.838h1.887v.815h-2.873ZM17.581 12.161h-2.68V7.508h2.68v.808h-1.693v1.022h1.575v.808h-1.575v1.2h1.693v.815Z"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="24px" height="24px" />
  );

  return <SvgImage />;
}
