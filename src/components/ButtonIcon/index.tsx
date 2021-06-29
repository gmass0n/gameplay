import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text, Image, ImageSourcePropType } from "react-native";

import { styles } from "./styles";

interface ButtonIconProps extends RectButtonProps {
  title: string;
  icon: ImageSourcePropType;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  title,
  icon,
  ...props
}) => {
  return (
    <RectButton style={styles.container} {...props}>
      <View style={styles.iconWrapper}>
        <Image source={icon} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};
