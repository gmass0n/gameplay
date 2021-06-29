import React from "react";
import { View, Text } from "react-native";

import { Avatar } from "../Avatar";

import { styles } from "./styles";

export const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Avatar url="https://github.com/gmass0n.png" size={50} />

      <View>
        <View style={styles.user}>
          <Text style={styles.gretting}>Olá</Text>

          <Text style={styles.userName}>Gabriel</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
};
