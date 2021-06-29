import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../styles/theme";

import { styles } from "./styles";

interface HeaderProps {
  title: string;
  action?: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, action }) => {
  const navigation = useNavigation();

  const { secondary100, secondary40, heading } = theme.colors;

  function handleGoBack(): void {
    navigation.goBack();
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {action && <View>{action}</View>}
    </LinearGradient>
  );
};
