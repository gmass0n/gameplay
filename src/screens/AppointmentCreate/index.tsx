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
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { Avatar } from "../../components/Avatar";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { GuildProps } from "../../components/Guild";

import { theme } from "../../styles/theme";

import { Guilds } from "../Guilds";

import { styles } from "./styles";

export const AppointmentCreate: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGuild, setSelectedGuild] = useState({} as GuildProps);
  const [isGuildsVisible, setIsGuildsVisible] = useState(false);

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

  const handleSelectGuild = useCallback((guild: GuildProps) => {
    setSelectedGuild(guild);
    handleCloseGuilds();
  }, []);

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
                      <SmallInput maxLength={2} />

                      <Text style={styles.divider}>/</Text>

                      <SmallInput maxLength={2} />
                    </View>
                  </View>

                  <View>
                    <Text style={styles.label}>Horário</Text>

                    <View style={styles.column}>
                      <SmallInput maxLength={2} />

                      <Text style={styles.divider}>:</Text>

                      <SmallInput maxLength={2} />
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
                />
              </View>

              <View style={styles.footer}>
                <Button title="Agendar" />
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
