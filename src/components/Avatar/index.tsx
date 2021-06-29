import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import discordImg from "../../assets/images/discord.png";

import { theme } from "../../styles/theme";

import { styles } from "./styles";

interface AvatarProps {
  url?: string | null;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ url, size = 60 }) => {
  const { secondary50, secondary70 } = theme.colors;

  const imageSize = url ? size - 4 : size / 2.8;

  return (
    <LinearGradient
      style={[styles.container, { width: size, height: size }]}
      colors={[secondary50, secondary70]}
    >
      <Image
        style={[styles.image, { width: imageSize, height: imageSize }]}
        source={url ? { uri: url } : discordImg}
        resizeMode={url ? "cover" : "contain"}
      />
    </LinearGradient>
  );
};
