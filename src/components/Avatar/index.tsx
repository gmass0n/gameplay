import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../styles/theme";

import { styles } from "./styles";

interface AvatarProps {
  url: string;
}

export const Avatar: React.FC<AvatarProps> = ({ url }) => {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image source={{ uri: url }} style={styles.avatar} />
    </LinearGradient>
  );
};
