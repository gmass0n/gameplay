import React, { useState, useCallback, useRef } from "react";
import {
  View,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getBottomSpace, isIphoneX } from "react-native-iphone-x-helper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { Appointment, AppointmentProps } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Profile } from "../../components/Profile";
import { ListLoading } from "../../components/ListLoading";
import {
  ConfirmSignOutModal,
  ConfirmSignOutModalHandles,
} from "../../components/ConfirmSignOutModal";
import {
  FloatAddButton,
  FloatAddButtonHandles,
} from "../../components/FloatAddButton";

import { STORAGE_APPOINTMENTS_KEY } from "../../configs/storage";

import { theme } from "../../styles/theme";

import { styles } from "./styles";

export const Home: React.FC = () => {
  const navigation = useNavigation();

  const confirmSignOutModalRef = useRef<ConfirmSignOutModalHandles>(null);
  const floatAddButtonRef = useRef<FloatAddButtonHandles>(null);
  const flatListRef = useRef<FlatList>(null);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentFlatlistOffset, setCurrentFlatlistOffset] = useState(0);

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

  useFocusEffect(
    useCallback(() => {
      floatAddButtonRef.current?.show();
    }, [])
  );

  const handleSelectCategory = useCallback((categoryId: string) => {
    setSelectedCategory((prevState) => {
      if (prevState === categoryId) return "";

      return categoryId;
    });
  }, []);

  function handleNavigateToDetails(appointment: AppointmentProps): void {
    navigation.navigate("AppointmentDetails", {
      appointment,
    });
  }

  function handleOpenConfirmSignOutModal(): void {
    confirmSignOutModalRef.current?.open();
  }

  function handleNavigateToAppointmentCreate(): void {
    floatAddButtonRef.current?.hide();
    navigation.navigate("AppointmentCreate");
  }

  function handleChangeCurrentFlatlistOffset(
    event: NativeSyntheticEvent<NativeScrollEvent>
  ): void {
    setCurrentFlatlistOffset(event.nativeEvent.contentOffset.y);
  }

  function handleShowHideFloatAddButton(
    event: NativeSyntheticEvent<NativeScrollEvent>
  ): void {
    const direction =
      currentFlatlistOffset < event.nativeEvent.contentOffset.y ? "up" : "down";

    if (direction === "up") {
      floatAddButtonRef.current?.hide();
      return;
    }

    floatAddButtonRef.current?.show();
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />

          <BorderlessButton onPress={handleOpenConfirmSignOutModal}>
            <Feather name="power" color={theme.colors.primary} size={24} />
          </BorderlessButton>
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
              ref={flatListRef}
              showsVerticalScrollIndicator={false}
              style={styles.matches}
              contentContainerStyle={{
                paddingBottom: isIphoneX() ? getBottomSpace() : 24,
              }}
              data={appointments}
              onScrollBeginDrag={handleChangeCurrentFlatlistOffset}
              onScrollEndDrag={handleShowHideFloatAddButton}
              keyExtractor={(appointment) => appointment.id}
              ItemSeparatorComponent={() => <ListDivider />}
              renderItem={({ item: appointment }) => (
                <Appointment
                  data={appointment}
                  onPress={() => handleNavigateToDetails(appointment)}
                />
              )}
            />
          </View>
        )}
      </View>

      <ConfirmSignOutModal ref={confirmSignOutModalRef} />

      <FloatAddButton
        ref={floatAddButtonRef}
        onPress={handleNavigateToAppointmentCreate}
      />
    </Background>
  );
};
