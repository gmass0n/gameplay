import React, { useState } from "react";
import { useCallback } from "react";
import { View, FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getBottomSpace, isIphoneX } from "react-native-iphone-x-helper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AddButton } from "../../components/AddButton";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Profile } from "../../components/Profile";

import { STORAGE_APPOINTMENTS_KEY } from "../../configs/storage";

import { styles } from "./styles";
import { ListLoading } from "../../components/ListLoading";

export const Home: React.FC = () => {
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadAppointments(): Promise<void> {
    setIsLoading(true);

    const storagedAppointments = await AsyncStorage.getItem(
      STORAGE_APPOINTMENTS_KEY
    );
    const parsedAppointments: AppointmentProps[] = storagedAppointments
      ? JSON.parse(storagedAppointments)
      : [];

    setAppointments(() => {
      if (selectedCategory) {
        const filteredAppointments = parsedAppointments.filter(
          (appointment) => appointment.category === selectedCategory
        );
        return filteredAppointments;
      }

      return parsedAppointments;
    });

    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        await loadAppointments();
      })();
    }, [selectedCategory])
  );

  const handleSelectCategory = useCallback((categoryId: string) => {
    setSelectedCategory((prevState) => {
      if (prevState === categoryId) return "";

      return categoryId;
    });
  }, []);

  function handleNavigateToDetails(): void {
    navigation.navigate("AppointmentDetails");
  }

  function handleNavigateToAppointmentCreate(): void {
    navigation.navigate("AppointmentCreate");
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />

          <AddButton onPress={handleNavigateToAppointmentCreate} />
        </View>

        <CategorySelect
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {isLoading ? (
          <ListLoading />
        ) : (
          <View style={styles.content}>
            <ListHeader
              title="Partidas agendadas"
              subtitle={`${appointments.length} ${
                appointments.length === 1 ? "partida" : "partidas"
              }`}
            />

            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.matches}
              contentContainerStyle={{
                paddingBottom: isIphoneX() ? getBottomSpace() : 24,
              }}
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
        )}
      </View>
    </Background>
  );
};
