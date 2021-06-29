import React, { useCallback, useState } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { Avatar } from "../../components/Avatar";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";

import { theme } from "../../styles/theme";

import { styles } from "./styles";

export const AppointmentCreate: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectCategory = useCallback((categoryId: string) => {
    setSelectedCategory((prevState) => {
      if (prevState === categoryId) return "";

      return categoryId;
    });
  }, []);

  return (
    <Background>
      <Header title="Agendar partida" />

      <Text
        style={[
          styles.label,
          { marginLeft: 24, marginTop: 40, marginBottom: 18 },
        ]}
      >
        Categoria
      </Text>

      <CategorySelect
        hasCheckbox
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {
              // <View style={styles.image} />
              <Avatar size={68} />
            }

            <View style={styles.selectBody}>
              <Text style={styles.label}>Selecione um servidor</Text>
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

        <TextArea />
      </View>
    </Background>
  );
};
