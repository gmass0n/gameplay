import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home } from "../screens/Home";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";

import { theme } from "../styles/theme";

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: { backgroundColor: theme.colors.secondary80 },
        }}
      >
        <Screen name="Home" component={Home} />

        <Screen name="AppointmentDetails" component={AppointmentDetails} />

        <Screen name="AppointmentCreate" component={AppointmentCreate} />
      </Navigator>
    </NavigationContainer>
  );
};
