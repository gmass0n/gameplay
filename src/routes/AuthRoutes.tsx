import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";

import { theme } from "../styles/theme";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.secondary80 },
      }}
    >
      <Screen name="SignIn" component={SignIn} />

      <Screen name="Home" component={Home} />

      <Screen name="AppointmentDetails" component={AppointmentDetails} />

      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  );
};
