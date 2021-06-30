import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { Avatar } from "../Avatar";

import { theme } from "../../styles/theme";

import { styles } from "./styles";
import { Guild as GuildProps } from "../../services/api";

interface Props extends RectButtonProps {
  data: GuildProps;
}

export const Guild: React.FC<Props> = ({ data, ...props }) => {
  const { name, owner, icon } = data;

  return (
    <RectButton style={styles.container} {...props}>
      <Avatar size={54} url={icon} />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{name}</Text>

          <Text style={styles.type}>
            {owner ? "Administrator" : "Convidado"}
          </Text>
        </View>
      </View>

      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </RectButton>
  );
};
