import React, { useState, useCallback } from "react";
import { View, Text, ImageBackground, FlatList, Alert } from "react-native";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { AppointmentProps } from "../../components/Appointment";
import { ListHeader } from "../../components/ListHeader";
import { Button } from "../../components/Button";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";

import bannerImg from "../../assets/images/banner.png";
import discordImg from "../../assets/images/discord.png";

import { loadGuild, WidgetGuild } from "../../services/api";

import { theme } from "../../styles/theme";

import { styles } from "./styles";
import { ListLoading } from "../../components/ListLoading";

interface RouteParams {
  appointment: AppointmentProps;
}

export const AppointmentDetails: React.FC = () => {
  const { appointment } = useRoute().params as RouteParams;

  const [guild, setGuild] = useState<WidgetGuild>();
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          setIsLoading(true);

          const response = await loadGuild(appointment.guild.id);

          setGuild(response);
        } catch (error) {
          Alert.alert(
            "Ops, nào foi possível buscar os membros do servidor! Será que o Widget está habilitado?"
          );
        } finally {
          setIsLoading(false);
        }
      })();
    }, [appointment.guild.id])
  );

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Feather name="share-2" size={22} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={bannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{appointment.guild.name}</Text>

          <Text style={styles.subtitle}>{appointment.description}</Text>
        </View>
      </ImageBackground>

      {isLoading ? (
        <ListLoading />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`${guild?.members.length} ${
              guild?.members.length === 1 ? "jogador" : "jogadores"
            }`}
          />

          <FlatList
            data={guild?.members}
            keyExtractor={(member) => member.id}
            ItemSeparatorComponent={() => <ListDivider />}
            renderItem={({ item: member }) => <Member data={member} />}
            style={styles.members}
          />
        </>
      )}

      <View style={styles.footer}>
        <Button title="Entrar na partida" icon={discordImg} />
      </View>
    </Background>
  );
};
