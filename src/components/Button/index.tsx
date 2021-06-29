import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text, Image, ImageSourcePropType } from "react-native";

import { styles } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  icon?: ImageSourcePropType;
}

export const Button: React.FC<ButtonProps> = ({ title, icon, ...props }) => {
  return (
    <RectButton style={styles.container} {...props}>
      {icon && (
        <View style={styles.iconWrapper}>
          <Image source={icon} style={styles.icon} />
        </View>
      )}

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};
