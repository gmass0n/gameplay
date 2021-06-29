import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text, Image, ImageSourcePropType } from "react-native";

import { styles } from "./styles";

interface IconButtonProps extends RectButtonProps {
  title: string;
  icon: ImageSourcePropType;
}

export const IconButton: React.FC<IconButtonProps> = ({
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
