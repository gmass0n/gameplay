import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  ActivityIndicator,
} from "react-native";

import { styles } from "./styles";
import { theme } from "../../styles/theme";

interface ButtonProps extends RectButtonProps {
  title: string;
  icon?: ImageSourcePropType;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  isLoading,
  ...props
}) => {
  return (
    <RectButton
      style={[styles.container, { opacity: isLoading ? 0.7 : 1 }]}
      enabled={!isLoading}
      {...props}
    >
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={theme.colors.heading} />
        </View>
      ) : (
        <>
          {icon && (
            <View style={styles.iconWrapper}>
              <Image source={icon} style={styles.icon} />
            </View>
          )}

          <Text style={styles.title}>{title}</Text>
        </>
      )}
    </RectButton>
  );
};
