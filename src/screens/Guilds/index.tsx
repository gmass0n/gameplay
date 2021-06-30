import React from "react";
import { View, FlatList } from "react-native";
import { getBottomSpace, isIphoneX } from "react-native-iphone-x-helper";

import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

const guilds = [
  {
    id: "1",
    name: "Lendários",
    icon: null,
    owner: true,
  },
  {
    id: "2",
    name: "Galera do Game",
    icon: null,
    owner: false,
  },
];

interface GuildsProps {
  onSelecteGuild(guild: GuildProps): void;
}

export const Guilds: React.FC<GuildsProps> = ({ onSelecteGuild }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(guild) => guild.id}
        ItemSeparatorComponent={() => <ListDivider />}
        renderItem={({ item: guild }) => (
          <Guild data={guild} onPress={() => onSelecteGuild(guild)} />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        contentContainerStyle={{
          paddingBottom: isIphoneX() ? getBottomSpace() : 24,
        }}
      />
    </View>
  );
};
