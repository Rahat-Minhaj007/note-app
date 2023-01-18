import { Text as RNText, StyleSheet } from "react-native";
import React from "react";
import { presets } from "./text.preset";

export default function Text({ children, customStyle, preset = "default" }) {
  const textStyle = StyleSheet.compose(presets[preset], customStyle);
  return <RNText style={textStyle}>{children}</RNText>;
}
