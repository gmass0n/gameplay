import React from "react";
import { View, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { theme } from "../../styles/theme";

import { styles } from "./styles";

interface CategoryProps extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckbox?: boolean;
}

export const Category: React.FC<CategoryProps> = ({
  title,
  icon: Icon,
  checked = false,
  hasCheckbox = true,
  ...props
}) => {
  const {
    secondary40,
    secondary50,
    secondary70,
    secondary75,
    primary,
    secondary100,
  } = theme.colors;

  return (
    <RectButton {...props}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
          colors={[checked ? secondary75 : secondary50, secondary40]}
        >
          {hasCheckbox && (
            <View
              style={[
                styles.checkbox,
                { backgroundColor: checked ? primary : secondary100 },
              ]}
            />
          )}

          <Icon width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
};
