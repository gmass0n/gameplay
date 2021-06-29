import React, { useState } from "react";
import { useCallback } from "react";
import { View } from "react-native";

import { AddButton } from "../../components/AddButton";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectCategory = useCallback((categoryId: string) => {
    setSelectedCategory((prevState) => {
      if (prevState === categoryId) return "";

      return categoryId;
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />

        <AddButton />
      </View>

      <View>
        <CategorySelect
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
      </View>
    </View>
  );
};
