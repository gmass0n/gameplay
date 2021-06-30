import axios from "axios";

export interface Member {
  id: string;
  avatar_url: string;
  username: string;
  firstName: string;
  status: string;
}

export interface Guild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

export interface WidgetGuild {
  id: string;
  name: string;
  members: Member[];
  instant_invite: string | null;
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

export async function loadGuild(id: string): Promise<WidgetGuild> {
  const response = await api.get<WidgetGuild>(`/guilds/${id}/widget.json`);

  const formattedMembers = response.data.members.map((member) => {
    const firstName = member.username.split(" ")[0];

    return {
      ...member,
      firstName,
    };
  });

  return {
    ...response.data,
    members: formattedMembers,
  };
}
