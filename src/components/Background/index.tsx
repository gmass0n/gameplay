import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../styles/theme";

import { styles } from "./styles";

export const Background: React.FC = ({ children }) => {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
};
