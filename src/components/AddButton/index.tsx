import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { theme } from "../../styles/theme";

import { styles } from "./styles";

type AddButtonProps = RectButtonProps;

export const AddButton: React.FC<AddButtonProps> = ({ ...props }) => {
  return (
    <RectButton {...props} style={styles.container}>
      <Feather name="plus" color={theme.colors.heading} size={24} />
    </RectButton>
  );
};
