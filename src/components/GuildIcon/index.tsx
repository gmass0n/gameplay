import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import discordImg from "../../assets/images/discord.png";

import { theme } from "../../styles/theme";

import { styles } from "./styles";

interface GuildIconProps {
  uri?: string;
}

export const GuildIcon: React.FC<GuildIconProps> = ({ uri }) => {
  const { secondary50, secondary70 } = theme.colors;

  const size = uri ? 56 : 23;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image
        style={[styles.image, { width: size, height: size }]}
        source={uri ? { uri } : discordImg}
        resizeMode={uri ? "cover" : "contain"}
      />
    </LinearGradient>
  );
};
