import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./AuthRoutes";

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};