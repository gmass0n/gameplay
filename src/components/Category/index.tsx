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
}

export const Category: React.FC<CategoryProps> = ({
  title,
  icon: Icon,
  checked = false,
  ...props
}) => {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <RectButton {...props}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check} />

          <Icon width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
};
