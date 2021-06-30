import React from "react";

import { useAuth } from "../hooks/auth";

import { SignIn } from "../screens/SignIn";

import { AppRoutes } from "./AppRoutes";

export const Routes: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <SignIn />;
  }

  return <AppRoutes />;
};
