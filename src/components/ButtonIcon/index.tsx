import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  TouchableOpacityProps,
  ImageSourcePropType,
} from "react-native";

import { styles } from "./styles";

interface ButtonIconProps extends TouchableOpacityProps {
  title: string;
  icon: ImageSourcePropType;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  title,
  icon,
  ...props
}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...props}>
      <View style={styles.iconWrapper}>
        <Image source={icon} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
