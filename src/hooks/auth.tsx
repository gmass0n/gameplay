import React, { createContext, useContext, useState, useCallback } from "react";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { api } from "../services/api";

import { STORAGE_USER_KEY } from "../configs/storage";
import { useEffect } from "react";

interface User {
  id: string;
  username: string;
  firstName: string;
  avatar?: string;
  email: string;
  token: string;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  };
};

interface IAuthContextData {
  user: User | null;
  signIn(): Promise<void>;
  isLoading: boolean;
}

const { CDN_IMAGE } = process.env;
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;
const { SCOPE } = process.env;

const AuthContext = createContext({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const storagedUser = await AsyncStorage.getItem(STORAGE_USER_KEY);

      if (storagedUser) {
        const parsedUser = JSON.parse(storagedUser) as User;

        api.defaults.headers.authorization = `Bearer ${parsedUser.token}`;
        setUser(parsedUser);
      }

      setIsLoading(false);
    })();
  }, []);

  const signIn = useCallback(async () => {
    try {
      setIsLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success" && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const { data: discordUser } = await api.get("/users/@me");

        const firstName = discordUser.username.split(" ")[0];
        const avatar =
          discordUser.avatar &&
          `${CDN_IMAGE}/avatars/${discordUser.id}/${discordUser.avatar}.png`;

        const data = {
          ...discordUser,
          firstName,
          avatar,
        };

        await AsyncStorage.setItem(STORAGE_USER_KEY, JSON.stringify(data));

        setUser(data);
      }
    } catch (error) {
      throw new Error("Não foi possível autenticar!");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextData => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
