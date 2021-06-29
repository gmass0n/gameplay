import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../styles/theme";

import { Avatar } from "../Avatar";

import { styles } from "./styles";

export interface MemberProps {
  id: string;
  avatarUrl: string;
  username: string;
  status: "online" | "offline";
}

interface Props {
  data: MemberProps;
}

export const Member: React.FC<Props> = ({ data }) => {
  const { avatarUrl, username } = data;
  const { on, primary } = theme.colors;

  const isOnline = data.status === "online";

  return (
    <View style={styles.container}>
      <Avatar url={avatarUrl} size={54} />

      <View>
        <Text style={styles.title}>{username}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.statusBullet,
              { backgroundColor: isOnline ? on : primary },
            ]}
          />

          <Text style={styles.statusText}>
            {isOnline ? "Disponível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
};
