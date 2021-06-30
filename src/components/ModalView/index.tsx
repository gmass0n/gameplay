import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  ModalProps,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";

import { Background } from "../Background";

import { styles } from "./styles";

interface ModalViewProps extends ModalProps {
  onClose?(): void;
  contentHeight?: number | string;
}

const overlayOpacity = new Animated.Value(0);

export const ModalView: React.FC<ModalViewProps> = ({
  children,
  onClose = () => {},
  contentHeight = Dimensions.get("screen").height - 100,
  visible,
  ...props
}) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      setIsOverlayVisible(true);
    }

    Animated.timing(overlayOpacity, {
      toValue: visible ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      if (!visible) {
        setIsOverlayVisible(false);
      }
    });
  }, [visible]);

  return (
    <>
      {isOverlayVisible && (
        <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]} />
      )}

      <Modal
        transparent
        animationType="slide"
        visible={visible}
        statusBarTranslucent
        {...props}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
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
    </>
  );
};
