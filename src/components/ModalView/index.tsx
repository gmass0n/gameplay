import React from "react";
import {
  Modal,
  View,
  ModalProps,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Background } from "../Background";

import { styles } from "./styles";

interface ModalViewProps extends ModalProps {
  onClose?(): void;
  contentHeight?: number | string;
}

export const ModalView: React.FC<ModalViewProps> = ({
  children,
  onClose = () => {},
  contentHeight = Dimensions.get("screen").height - 100,
  ...props
}) => {
  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...props}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      />

      <View style={[styles.container, { height: contentHeight }]}>
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
