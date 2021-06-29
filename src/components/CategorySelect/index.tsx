import React from "react";
import { ScrollView } from "react-native";

import { Category } from "../Category";

import { categories } from "../../utils/categories";

import { styles } from "./styles";

interface CategorySelectProps {
  selectedCategory: string;
  onSelectCategory(categoryId: string): void;
}

export const CategorySelect: React.FC<CategorySelectProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          icon={category.icon}
          title={category.title}
          checked={category.id === selectedCategory}
          onPress={() => onSelectCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
};
