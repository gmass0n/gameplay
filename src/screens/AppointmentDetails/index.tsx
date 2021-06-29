import React from "react";
import { View, Text, ImageBackground, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { IconButton } from "../../components/IconButton";
import { Member, MemberProps } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";

import bannerImg from "../../assets/images/banner.png";
import discordImg from "../../assets/images/discord.png";

import { theme } from "../../styles/theme";

import { styles } from "./styles";

const members = [
  {
    id: "1",
    username: "Rodrigo",
    avatarUrl: "https://github.com/rodrigorgtic.png",
    status: "online",
  },
  {
    id: "2",
    username: "Gabriel",
    avatarUrl: "https://github.com/gmass0n.png",
    status: "offline",
  },
] as MemberProps[];

export const AppointmentDetails: React.FC = () => {
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
          <Text style={styles.title}>Lendários</Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(member) => member.id}
        ItemSeparatorComponent={() => <ListDivider />}
        renderItem={({ item: member }) => <Member data={member} />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <IconButton title="Entrar na partida" icon={discordImg} />
      </View>
    </Background>
  );
};
