import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput, TextInputProps } from "react-native";

import { theme } from "../../styles/theme";

import { styles } from "./styles";

type TextAreaProps = TextInputProps;

export const TextArea: React.FC<TextAreaProps> = ({ ...props }) => {
  const { secondary50, secondary70, secondary75 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <LinearGradient
        style={styles.content}
        colors={[secondary75, secondary70]}
      >
        <TextInput style={styles.textarea} {...props} />
      </LinearGradient>
    </LinearGradient>
  );
};
