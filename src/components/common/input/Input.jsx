import { TextInput, StyleSheet } from "react-native";
import React from "react";
import { spacing } from "./../../../theme/spacing";
import { colors } from "./../../../theme/colors";
import { typography } from "./../../../theme/typography";

export default function Input({ placeholder, secureTextEntry, customStyle }) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={[styles.input, customStyle]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: colors.orange,
    borderBottomWidth: 0.5,
    padding: spacing[2],
    fontFamily: typography.primary,
    fontWeight: "600",
    color: colors.darkGray,
  },
});
