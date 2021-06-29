import React from "react";
import { Modal, View, ModalProps, TouchableOpacity } from "react-native";

import { Background } from "../Background";

import { styles } from "./styles";

interface ModalViewProps extends ModalProps {
  onClose?(): void;
}

export const ModalView: React.FC<ModalViewProps> = ({
  children,
  onClose = () => {},
  ...props
}) => {
  return (
    <Modal transparent animationType="slide" {...props}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      />

      <View style={styles.container}>
        <Background>
          <TouchableOpacity
            style={styles.bar}
            onPress={onClose}
            activeOpacity={0.5}
          />

          {children}
        </Background>
      </View>
    </Modal>
  );
};
