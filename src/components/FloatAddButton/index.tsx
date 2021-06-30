import React, { forwardRef, useImperativeHandle } from "react";
import { Animated } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { theme } from "../../styles/theme";

import { styles } from "./styles";

type FloatAddButtonProps = RectButtonProps;

export interface FloatAddButtonHandles {
  show(): void;
  hide(): void;
}

const translateX = new Animated.Value(100);

const FloatAddButtonComponent: React.ForwardRefRenderFunction<
  FloatAddButtonHandles,
  FloatAddButtonProps
> = ({ ...props }, ref) => {
  function show(): void {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  function hide(): void {
    Animated.timing(translateX, {
      toValue: 100,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  useImperativeHandle(
    ref,
    () => ({
      show,
      hide,
    }),
    []
  );

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
      <RectButton {...props} style={styles.button}>
        <Feather name="plus" color={theme.colors.heading} size={24} />
      </RectButton>
    </Animated.View>
  );
};

export const FloatAddButton = forwardRef(FloatAddButtonComponent);
