import React from "react";
import { View, Image, Text } from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";

import discordImg from "../../assets/images/discord.png";
import illustrationImg from "../../assets/images/illustration.png";

import { Button } from "../../components/Button";
import { Background } from "../../components/Background";

import { styles } from "./styles";

export const SignIn: React.FC = () => {
  const navigation = useNavigation();

  function handleSignIn(): void {
    navigation.dispatch(StackActions.replace("Home"));
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image source={illustrationImg} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title}>
            Organize{"\n"}
            suas jogatinas{"\n"}
            facilmente
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>

          <Button
            icon={discordImg}
            title="Entrar com Discord"
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
};
