import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface ProgressDeliverBarProps {
  style?: StyleProp<ViewStyle>;
}

export function ProgressDeliverBar({ style }: ProgressDeliverBarProps) {
  const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="277" height="26" fill="none">
    <path stroke="#2ED573" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22.25 12.25h231.5"/>
    <circle cx="144.5" cy="13" r="8" fill="#E3E1E7"/><circle cx="144.5" cy="13" r="3" fill="#fff"/>
    <circle cx="21.5" cy="13" r="10" fill="#2ED573"/>
    <path fill="#fff" fill-rule="evenodd" d="M24.98 10.424a.75.75 0 0 1 .096 1.056l-3.75 4.5a.75.75 0 0 1-1.074.08l-2.25-2a.75.75 0 0 1 .996-1.12l1.671 1.485 3.255-3.905a.75.75 0 0 1 1.056-.096Z" clip-rule="evenodd"/>
    <circle cx="84.5" cy="13" r="10" fill="#2ED573"/><path fill="#fff" fill-rule="evenodd" d="M87.98 10.424a.75.75 0 0 1 .096 1.056l-3.75 4.5a.75.75 0 0 1-1.074.08l-2.25-2a.75.75 0 0 1 .996-1.12l1.671 1.485 3.255-3.905a.75.75 0 0 1 1.056-.096Z" clip-rule="evenodd"/>
    <circle cx="142.5" cy="13" r="10" fill="#2ED573"/><path fill="#fff" fill-rule="evenodd" d="M145.98 10.424a.75.75 0 0 1 .096 1.056l-3.75 4.5a.75.75 0 0 1-1.074.08l-2.25-2a.75.75 0 1 1 .996-1.12l1.672 1.485 3.254-3.905a.75.75 0 0 1 1.056-.096Z" clip-rule="evenodd"/>
    <circle cx="200.5" cy="13" r="10" fill="#2ED573"/><path fill="#fff" fill-rule="evenodd" d="M203.98 10.424a.75.75 0 0 1 .096 1.056l-3.75 4.5a.75.75 0 0 1-1.074.08l-2.25-2a.75.75 0 1 1 .996-1.12l1.672 1.485 3.254-3.905a.75.75 0 0 1 1.056-.096Z" clip-rule="evenodd"/>
    <circle cx="258.5" cy="13" r="10" fill="#2ED573"/><path fill="#fff" fill-rule="evenodd" d="M261.98 10.424a.75.75 0 0 1 .096 1.056l-3.75 4.5a.75.75 0 0 1-1.074.08l-2.25-2a.75.75 0 1 1 .996-1.12l1.672 1.485 3.254-3.905a.75.75 0 0 1 1.056-.096Z" clip-rule="evenodd"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml style={style} xml={svgMarkup} width="276px" height="26px" />
  );

  return <SvgImage />;
}
