import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import uuid from "react-native-uuid";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { Avatar } from "../../components/Avatar";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";

import { theme } from "../../styles/theme";

import { Guild } from "../../services/api";

import { Guilds } from "../Guilds";

import { styles } from "./styles";
import { STORAGE_APPOINTMENTS_KEY } from "../../configs/storage";

export const AppointmentCreate: React.FC = () => {
  const navigation = useNavigation();

  const [isGuildsVisible, setIsGuildsVisible] = useState(false);

  const [selectedGuild, setSelectedGuild] = useState({} as Guild);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  const handleSelectCategory = useCallback((categoryId: string) => {
    setSelectedCategory((prevState) => {
      if (prevState === categoryId) return "";

      return categoryId;
    });
  }, []);

  function handleOpenGuilds(): void {
    setIsGuildsVisible(true);
  }

  function handleCloseGuilds(): void {
    setIsGuildsVisible(false);
  }

  const handleSelectGuild = useCallback((guild: Guild) => {
    setSelectedGuild(guild);
    handleCloseGuilds();
  }, []);

  async function handleCreateAppointment(): Promise<void> {
    const appointment = {
      id: uuid.v4(),
      guild: selectedGuild,
      category: selectedCategory,
      date: `${day}/${month} às ${hour}:${minute}`,
      description,
    };

    const storagedAppointments = await AsyncStorage.getItem(
      STORAGE_APPOINTMENTS_KEY
    );

    const appointments = storagedAppointments
      ? JSON.parse(storagedAppointments)
      : [];

    const newAppointments = [...appointments, appointment];

    await AsyncStorage.setItem(
      STORAGE_APPOINTMENTS_KEY,
      JSON.stringify(newAppointments)
    );

    navigation.navigate("Home");
  }

  return (
    <>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.container}
      >
        <Background>
          <Header title="Agendar partida" />

          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <ScrollView>
              <Text style={[styles.label, { marginLeft: 24, marginTop: 30 }]}>
                Categoria
              </Text>

              <CategorySelect
                hasCheckbox
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
              />

              <View style={styles.form}>
                <RectButton onPress={handleOpenGuilds}>
                  <View style={styles.select}>
                    <Avatar size={68} url={selectedGuild.icon} />

                    <View style={styles.selectBody}>
                      <Text style={[styles.label, { marginBottom: 0 }]}>
                        {selectedGuild.name || "Selecione um servidor"}
                      </Text>
                    </View>

                    <Feather
                      name="chevron-right"
                      color={theme.colors.heading}
                      size={18}
                    />
                  </View>
                </RectButton>

                <View style={styles.field}>
                  <View>
                    <Text style={styles.label}>Dia e mês</Text>

                    <View style={styles.column}>
                      <SmallInput
                        maxLength={2}
                        value={day}
                        onChangeText={setDay}
                      />

                      <Text style={styles.divider}>/</Text>

                      <SmallInput
                        maxLength={2}
                        value={month}
                        onChangeText={setMonth}
                      />
                    </View>
                  </View>

                  <View>
                    <Text style={styles.label}>Horário</Text>

                    <View style={styles.column}>
                      <SmallInput
                        maxLength={2}
                        value={hour}
                        onChangeText={setHour}
                      />

                      <Text style={styles.divider}>:</Text>

                      <SmallInput
                        maxLength={2}
                        value={minute}
                        onChangeText={setMinute}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.field}>
                  <Text style={styles.label}>Descrição</Text>

                  <Text style={styles.characterLimit}>Max 100 caracteres</Text>
                </View>

                <TextArea
                  multiline
                  maxLength={100}
                  numberOfLines={5}
                  autoCorrect={false}
                  value={description}
                  onChangeText={setDescription}
                />
              </View>

              <View style={styles.footer}>
                <Button title="Agendar" onPress={handleCreateAppointment} />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </Background>
      </TouchableWithoutFeedback>

      <ModalView visible={isGuildsVisible} onClose={handleCloseGuilds}>
        <Guilds onSelecteGuild={handleSelectGuild} />
      </ModalView>
    </>
  );
};
