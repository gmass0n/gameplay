import axios from "axios";

export interface Guild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

const { CDN_IMAGE } = process.env;

export const api = axios.create({
  baseURL: "https://discord.com/api",
});

export async function loadGuilds(): Promise<Guild[]> {
  const response = await api.get<Guild[]>("/users/@me/guilds");

  const formattedGuilds = response.data.map((guild) => {
    const icon =
      guild.icon && `${CDN_IMAGE}/icons/${guild.id}/${guild.icon}.png`;

    return {
      ...guild,
      icon,
    };
  });

  return formattedGuilds;
}
