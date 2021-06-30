import React from "react";
import { View, ActivityIndicator } from "react-native";

import { theme } from "../../styles/theme";

import { styles } from "./styles";

export const ListLoading: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};
