import React, { useState } from "react";
import { useEffect } from "react";
import { View, FlatList, Alert } from "react-native";
import { getBottomSpace, isIphoneX } from "react-native-iphone-x-helper";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { ListLoading } from "../../components/ListLoading";

import { Guild as GuildProps, loadGuilds } from "../../services/api";

import { styles } from "./styles";

interface GuildsProps {
  onSelecteGuild(guild: GuildProps): void;
}

export const Guilds: React.FC<GuildsProps> = ({ onSelecteGuild }) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await loadGuilds();

        if (response) {
          setGuilds(response);
        }
      } catch (error) {
        Alert.alert("Ops, não foi possível carregar os servidores!");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ListLoading />
      ) : (
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
      )}
    </View>
  );
};
