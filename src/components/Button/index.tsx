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

type ButtonType = "filled" | "outlined";
interface ButtonProps extends RectButtonProps {
  title: string;
  icon?: ImageSourcePropType;
  isLoading?: boolean;
  type?: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  isLoading,
  style,
  type = "filled",
  ...props
}) => {
  return (
    <RectButton
      style={[
        type === "filled" ? styles.filled : styles.outlined,
        { opacity: isLoading ? 0.7 : 1 },
        style,
      ]}
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
