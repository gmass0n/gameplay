import React, { useState } from "react";
import { useCallback } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AddButton } from "../../components/AddButton";
import { Appointment } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

const appointments = [
  {
    id: "1",
    guild: {
      id: "1",
      name: "Lendarários",
      icon: null,
      owner: true,
    },
    category: "1",
    date: "22/06 às 20:40h",
    description: "É hoje que vamos chegar ao challenger...",
  },
  {
    id: "2",
    guild: {
      id: "1",
      name: "Lendarários",
      icon: null,
      owner: true,
    },
    category: "1",
    date: "22/06 às 20:40h",
    description: "É hoje que vamos chegar ao challenger...",
  },
];

export const Home: React.FC = () => {
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectCategory = useCallback((categoryId: string) => {
    setSelectedCategory((prevState) => {
      if (prevState === categoryId) return "";

      return categoryId;
    });
  }, []);

  function handleNavigateToDetails(): void {
    navigation.navigate("AppointmentDetails");
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />

          <AddButton />
        </View>

        <CategorySelect
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="8 partidas" />

          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.matches}
            data={appointments}
            keyExtractor={(appointment) => appointment.id}
            ItemSeparatorComponent={() => <ListDivider />}
            renderItem={({ item: appointment }) => (
              <Appointment
                data={appointment}
                onPress={() => handleNavigateToDetails()}
              />
            )}
          />
        </View>
      </View>
    </Background>
  );
};
