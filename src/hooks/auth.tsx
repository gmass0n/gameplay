import React, { createContext, useContext, useState, useCallback } from "react";
import * as AuthSession from "expo-auth-session";

import {
  CDN_IMAGE,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from "../configs/discordAuth";

import { api } from "../services/api";

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
    access_token: string;
  };
};

interface IAuthContextData {
  user: User | null;
  signIn(): Promise<void>;
  isSigning: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isSigning, setIsSigning] = useState(false);

  const signIn = useCallback(async () => {
    try {
      setIsSigning(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type !== "success") {
        throw new Error("Não foi possível autenticar!");
      }

      api.defaults.headers.authorization = `Bearer ${params.access_token}`;

      const { data: discordUser } = await api.get("/users/@me");

      const firstName = discordUser.username.split(" ")[0];
      const avatar =
        discordUser.avatar &&
        `${CDN_IMAGE}/avatars/${discordUser.id}/${discordUser.avatar}.png`;

      setUser({
        ...discordUser,
        firstName,
        avatar,
      });
    } catch (error) {
      throw new Error("Não foi possível autenticar!");
    } finally {
      setIsSigning(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, isSigning }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextData => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
