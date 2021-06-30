import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import PlayerSVG from "../../assets/images/player.svg";
import CalendarSVG from "../../assets/images/calendar.svg";

import { categories } from "../../utils/categories";

import { theme } from "../../styles/theme";

import { Avatar } from "../Avatar";

import { styles } from "./styles";

export interface GuildProps {
  id: string;
  name: string;
  owner: boolean;
  icon: null;
}

export interface AppointmentProps {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

interface Props extends RectButtonProps {
  data: AppointmentProps;
}

export const Appointment: React.FC<Props> = ({ data, ...props }) => {
  const { guild, category, date } = data;
  const { primary, on } = theme.colors;

  const findCategory = categories.find((item) => item.id === category);

  return (
    <RectButton {...props}>
      <View style={styles.container}>
        <Avatar url={guild.icon} />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{guild.name}</Text>

            <Text style={styles.title}>{findCategory?.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSVG />

              <Text style={styles.date}>{date}</Text>
            </View>

            <View style={styles.playerInfo}>
              <PlayerSVG fill={guild.owner ? primary : on} />

              <Text
                style={[styles.player, { color: guild.owner ? primary : on }]}
              >
                {guild.owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
};
