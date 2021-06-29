import React from "react";
import { View } from "react-native";

import { AddButton } from "../../components/AddButton";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />

        <AddButton />
      </View>
    </View>
  );
};
