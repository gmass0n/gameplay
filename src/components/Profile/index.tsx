import React from "react";
import { View, Text } from "react-native";

import { useAuth } from "../../hooks/auth";

import { Avatar } from "../Avatar";

import { styles } from "./styles";

export const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Avatar url={user!.avatar} size={50} />

      <View>
        <View style={styles.user}>
          <Text style={styles.gretting}>Olá</Text>

          <Text style={styles.userName}>{user!.firstName}</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
};
